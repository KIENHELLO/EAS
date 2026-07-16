import fs from 'fs/promises';
import path from 'path';
import { universities } from '@/data/universities';
import RecentLeadsTable from '@/components/RecentLeadsTable';
import { Building2, UserCheck, AlertCircle, Calendar, Eye, Flame } from 'lucide-react';
import { pool, useDb, initDb } from '@/lib/db';

export const dynamic = 'force-dynamic';

async function getLeads() {
  const leadsFilePath = path.join(process.cwd(), 'src', 'data', 'leads.json');
  try {
    const data = await fs.readFile(leadsFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function getClickStats() {
  if (useDb) {
    await initDb();
  }

  // 1. Try to fetch stats from PostgreSQL if available
  if (useDb && pool) {
    try {
      const queryText = `
        SELECT 
          school_id, 
          school_name, 
          COUNT(*)::integer as views_count, 
          MAX(clicked_at) as last_clicked_at
        FROM school_clicks
        GROUP BY school_id, school_name
        ORDER BY views_count DESC
        LIMIT 5
      `;
      const result = await pool.query(queryText);
      return result.rows;
    } catch (err: any) {
      console.error('Database query for click stats failed, falling back to JSON file:', err);
    }
  }

  // 2. Fallback to Local JSON File
  const clicksFilePath = path.join(process.cwd(), 'src', 'data', 'clicks.json');
  try {
    const data = await fs.readFile(clicksFilePath, 'utf-8');
    const clicks = JSON.parse(data);
    
    if (!Array.isArray(clicks)) return [];

    const statsMap: Record<string, { school_id: string; school_name: string; views_count: number; last_clicked_at: string }> = {};

    clicks.forEach((click: any) => {
      const { school_id, school_name, clicked_at } = click;
      if (!statsMap[school_id]) {
        statsMap[school_id] = {
          school_id,
          school_name,
          views_count: 0,
          last_clicked_at: clicked_at
        };
      }
      statsMap[school_id].views_count += 1;
      if (new Date(clicked_at).getTime() > new Date(statsMap[school_id].last_clicked_at).getTime()) {
        statsMap[school_id].last_clicked_at = clicked_at;
      }
    });

    const statsArray = Object.values(statsMap);
    // Sort descending by views_count
    statsArray.sort((a, b) => b.views_count - a.views_count);

    return statsArray.slice(0, 5);
  } catch (error) {
    return [];
  }
}

function formatRelativeTime(dateString: string) {
  try {
    const d = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - d.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'Vừa xong';
    if (diffMins < 60) return `${diffMins} phút trước`;
    if (diffHours < 24) return `${diffHours} giờ trước`;
    return `${diffDays} ngày trước`;
  } catch (e) {
    return 'Chưa rõ';
  }
}

export default async function AdminDashboardPage() {
  const leads = await getLeads();
  const clickStats = await getClickStats();

  // 1. Calculate Metrics
  const totalSchools = universities.length;

  const now = new Date();
  // Get local date in Vietnam (UTC+7)
  const vnTime = new Date(now.getTime() + (7 * 60 * 60 * 1000));
  const year = vnTime.getUTCFullYear();
  const month = String(vnTime.getUTCMonth() + 1).padStart(2, '0');
  const day = String(vnTime.getUTCDate()).padStart(2, '0');

  const todayStr = `${year}-${month}-${day}`;
  const thisMonthStr = `${year}-${month}`;

  const leadsToday = leads.filter((l: any) => l.created_at.startsWith(todayStr)).length;
  const unhandledLeads = leads.filter((l: any) => l.status === 'new').length;
  const leadsThisMonth = leads.filter((l: any) => l.created_at.startsWith(thisMonthStr)).length;

  // Sort and slice top 10 recent leads
  const recentLeads = [...leads]
    .sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 10);

  // Format today's display date (Vietnamese format)
  const daysOfWeek = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
  const dayName = daysOfWeek[vnTime.getUTCDay()];
  const todayDisplay = `${dayName}, ngày ${day} tháng ${month} năm ${year}`;

  // Calculate highest click count for relative bar charts
  const maxClicks = clickStats.length > 0 ? clickStats[0].views_count : 1;

  return (
    <div className="space-y-8 font-sans">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#000000]">Dashboard</h1>
          <p className="text-sm text-[#62625b] mt-1 flex items-center gap-1.5">
            <Calendar size={14} className="text-[#e60023]" />
            Hôm nay: {todayDisplay}
          </p>
        </div>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Metric Card 1: Total Schools */}
        <div className="bg-white rounded-[24px] p-6 border border-[#e5e5e0] shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-[#62625b] uppercase tracking-wider">Tổng trường học</p>
            <p className="text-3xl font-extrabold text-[#000000] mt-2">{totalSchools}</p>
            <p className="text-xs text-[#91918c] mt-1">Đã cấu hình hệ thống</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-[#f6f6f3] flex items-center justify-center text-[#e60023]">
            <Building2 size={24} />
          </div>
        </div>

        {/* Metric Card 2: Leads Today */}
        <div className="bg-white rounded-[24px] p-6 border border-[#e5e5e0] shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-[#62625b] uppercase tracking-wider">Leads hôm nay</p>
            <p className="text-3xl font-extrabold text-[#000000] mt-2">{leadsToday}</p>
            <p className="text-xs text-[#91918c] mt-1">Từ các kênh tra cứu</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
            <UserCheck size={24} />
          </div>
        </div>

        {/* Metric Card 3: Unhandled Leads */}
        <div className={`bg-white rounded-[24px] p-6 border shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex items-center justify-between transition-all ${
          unhandledLeads > 0 
            ? 'border-[#cc001f]/35 bg-[#cc001f]/[0.02]' 
            : 'border-[#e5e5e0]'
        }`}>
          <div>
            <p className="text-xs font-bold text-[#62625b] uppercase tracking-wider">Leads chưa xử lý</p>
            <p className={`text-3xl font-extrabold mt-2 ${
              unhandledLeads > 0 ? 'text-[#cc001f]' : 'text-[#000000]'
            }`}>{unhandledLeads}</p>
            <p className={`text-xs mt-1 font-medium ${
              unhandledLeads > 0 ? 'text-[#cc001f] animate-pulse' : 'text-[#91918c]'
            }`}>
              {unhandledLeads > 0 ? 'Cần xử lý gấp!' : 'Đã xử lý hoàn tất'}
            </p>
          </div>
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
            unhandledLeads > 0 
              ? 'bg-[#cc001f]/10 text-[#cc001f]' 
              : 'bg-[#f6f6f3] text-[#62625b]'
          }`}>
            <AlertCircle size={24} />
          </div>
        </div>

        {/* Metric Card 4: Total This Month */}
        <div className="bg-white rounded-[24px] p-6 border border-[#e5e5e0] shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-[#62625b] uppercase tracking-wider">Tổng tháng này</p>
            <p className="text-3xl font-extrabold text-[#000000] mt-2">{leadsThisMonth}</p>
            <p className="text-xs text-[#91918c] mt-1">Chu kỳ tháng {month}/{year}</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-[#c7f0da] flex items-center justify-center text-[#103c25]">
            <Calendar size={24} />
          </div>
        </div>
      </div>

      {/* Content Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: 10 Recent Leads (takes 2 columns) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#000000] tracking-tight">10 Đăng ký mới nhất</h2>
          </div>
          <RecentLeadsTable initialLeads={recentLeads} />
        </div>

        {/* Right: School Click Trends Widget (takes 1 column) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#000000] tracking-tight">Xu Hướng Quan Tâm</h2>
          </div>
          
          <div className="bg-white rounded-[24px] p-6 border border-[#e5e5e0] shadow-[0_4px_20px_rgba(0,0,0,0.01)] space-y-5">
            <div className="flex items-center gap-2 border-b border-[#f6f6f3] pb-4">
              <div className="w-9 h-9 rounded-full bg-red-50 text-[#e60023] flex items-center justify-center">
                <Flame size={18} className="fill-[#e60023]" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-[#000000]">Top 5 Trường Xem Nhiều Nhất</h3>
                <p className="text-[11px] text-[#91918c] font-medium">Lượt click tra cứu thời gian thực</p>
              </div>
            </div>

            <div className="space-y-4">
              {clickStats.length === 0 ? (
                <div className="py-8 text-center text-xs text-[#91918c] font-medium space-y-1">
                  <Eye size={24} className="mx-auto text-[#dadad3] mb-1" />
                  <p>Chưa có dữ liệu thống kê lượt xem.</p>
                  <p className="text-[10px]">Lượt click mở chi tiết trường sẽ được ghi nhận tại đây.</p>
                </div>
              ) : (
                clickStats.map((stat: any, index: number) => {
                  const percentage = Math.max(8, Math.round((stat.views_count / maxClicks) * 100));
                  const rankColors = [
                    'bg-[#e60023] text-white', // Rank 1: Pinterest Red
                    'bg-[#211922] text-white', // Rank 2: Slate Dark
                    'bg-[#62625b] text-white', // Rank 3: Medium Grey
                    'bg-[#e5e5e0] text-[#33332e]', // Rank 4
                    'bg-[#f6f6f3] text-[#62625b]', // Rank 5
                  ];

                  return (
                    <div key={stat.school_id} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs gap-3">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 ${rankColors[index] || 'bg-[#f6f6f3] text-[#91918c]'}`}>
                            {index + 1}
                          </span>
                          <span className="font-bold text-[#000000] truncate" title={stat.school_name}>
                            {stat.school_name}
                          </span>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="font-extrabold text-[#e60023]">{stat.views_count}</span>
                          <span className="text-[10px] text-[#91918c] ml-0.5">lượt xem</span>
                        </div>
                      </div>

                      {/* Relative Progress Bar */}
                      <div className="relative">
                        <div className="h-2 w-full bg-[#f6f6f3] rounded-full overflow-hidden border border-[#e5e5e0]/20">
                          <div 
                            style={{ width: `${percentage}%` }}
                            className="h-full bg-gradient-to-r from-[#e60023] to-[#cc001f] rounded-full transition-all duration-500"
                          />
                        </div>
                        <div className="flex justify-between items-center text-[9px] text-[#91918c] font-medium pt-1">
                          <span>Mã: {stat.school_id}</span>
                          <span>Hoạt động: {formatRelativeTime(stat.last_clicked_at)}</span>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
