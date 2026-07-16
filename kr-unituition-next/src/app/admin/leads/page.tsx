import fs from 'fs/promises';
import path from 'path';
import LeadsManagerList from '@/components/LeadsManagerList';

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

export default async function AdminLeadsPage() {
  const leads = await getLeads();

  return (
    <div className="space-y-6 font-sans">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-[#000000]">Quản lý Đăng ký tư vấn (Leads)</h1>
        <p className="text-sm text-[#62625b] mt-1">
          Xem danh sách học sinh đăng ký, liên hệ, quản lý trạng thái xử lý và ghi chú tư vấn.
        </p>
      </div>

      <LeadsManagerList initialLeads={leads} />
    </div>
  );
}
