'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Edit2, Trash2, Plus, AlertTriangle, Check, AlertCircle, ExternalLink } from 'lucide-react';

interface University {
  id: string;
  name_vi: string;
  name_en: string;
  name_ko: string;
  logo?: string;
  type: string;
  region: string;
  ranking: number;
}

export default function SchoolManagerList({ initialSchools }: { initialSchools: University[] }) {
  const [schools, setSchools] = useState<University[]>(initialSchools);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [regionFilter, setRegionFilter] = useState('all');
  
  // Deletion state
  const [schoolToDelete, setSchoolToDelete] = useState<University | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Toast feedback state
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // Filter schools list
  const filteredSchools = schools.filter((school) => {
    const matchesSearch =
      school.name_vi.toLowerCase().includes(search.toLowerCase()) ||
      school.name_en.toLowerCase().includes(search.toLowerCase()) ||
      school.name_ko.toLowerCase().includes(search.toLowerCase()) ||
      school.id.toLowerCase().includes(search.toLowerCase());

    const matchesType = typeFilter === 'all' || school.type === typeFilter;
    const matchesRegion = regionFilter === 'all' || school.region === regionFilter;

    return matchesSearch && matchesType && matchesRegion;
  });

  // Extract types and regions for filters dropdown
  const types = Array.from(new Set(schools.map(s => s.type)));
  const regions = Array.from(new Set(schools.map(s => s.region))).sort();

  const handleDelete = async () => {
    if (!schoolToDelete) return;
    setIsDeleting(true);

    try {
      const res = await fetch(`/api/universities?id=${schoolToDelete.id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setSchools(schools.filter((s) => s.id !== schoolToDelete.id));
        showToast(`Đã xóa trường "${schoolToDelete.name_vi}" thành công!`, 'success');
      } else {
        showToast('Lỗi máy chủ không thể xóa trường học!', 'error');
      }
    } catch (err) {
      console.error(err);
      showToast('Đã xảy ra lỗi kết nối mạng!', 'error');
    } finally {
      setIsDeleting(false);
      setSchoolToDelete(null);
    }
  };

  return (
    <div className="space-y-6 font-sans">
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed bottom-6 right-6 z-50 p-4 rounded-[16px] shadow-lg flex items-center gap-3 border transition-all ${
          toast.type === 'success' 
            ? 'bg-[#c7f0da] border-[#103c25]/10 text-[#103c25]' 
            : 'bg-[#cc001f]/5 border-[#cc001f]/10 text-[#cc001f]'
        }`}>
          {toast.type === 'success' ? <Check size={18} /> : <AlertCircle size={18} />}
          <span className="text-sm font-bold">{toast.message}</span>
        </div>
      )}

      {/* Control Filters and Action Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-[#91918c]">
            <Search size={16} />
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Tìm kiếm trường học theo tên Tiếng Việt, Tiếng Anh, Tiếng Hàn hoặc ID..."
            className="w-full h-11 pl-11 pr-4 rounded-[16px] border border-[#dadad3] bg-white text-[#000000] text-sm outline-none focus:border-[#000000] transition-all placeholder-[#91918c]"
          />
        </div>

        {/* Dropdowns Filters */}
        <div className="flex gap-3">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="h-11 px-4 rounded-[16px] border border-[#dadad3] bg-white text-sm font-semibold focus:border-black outline-none"
          >
            <option value="all">Mọi loại hình</option>
            <option value="public">Công lập (Public)</option>
            <option value="private">Tư thục (Private)</option>
          </select>

          <select
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
            className="h-11 px-4 rounded-[16px] border border-[#dadad3] bg-white text-sm font-semibold focus:border-black outline-none"
          >
            <option value="all">Mọi khu vực</option>
            {regions.map((reg) => (
              <option key={reg} value={reg}>
                {reg}
              </option>
            ))}
          </select>

          <Link
            href="/admin/truong/new"
            className="h-11 px-4 rounded-[16px] bg-[#e60023] hover:bg-[#cc001f] active:scale-95 text-white text-xs font-bold flex items-center gap-2 shadow-md shadow-[#e60023]/10 transition-all cursor-pointer justify-center shrink-0"
          >
            <Plus size={14} />
            Thêm trường
          </Link>
        </div>
      </div>

      {/* Schools Table */}
      <div className="bg-white rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-[#e5e5e0] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#fbfbf9] border-b border-[#dadad3]">
                <th className="px-6 py-4 text-xs font-bold text-[#000000] uppercase tracking-wider w-[80px]">Thứ hạng</th>
                <th className="px-6 py-4 text-xs font-bold text-[#000000] uppercase tracking-wider">Trường học</th>
                <th className="px-6 py-4 text-xs font-bold text-[#000000] uppercase tracking-wider">Loại hình</th>
                <th className="px-6 py-4 text-xs font-bold text-[#000000] uppercase tracking-wider">Khu vực</th>
                <th className="px-6 py-4 text-xs font-bold text-[#000000] uppercase tracking-wider text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e5e5e0]">
              {filteredSchools.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-[#91918c] text-sm font-medium">
                    Không tìm thấy trường học nào khớp với bộ lọc tìm kiếm.
                  </td>
                </tr>
              ) : (
                filteredSchools.map((school) => (
                  <tr key={school.id} className="hover:bg-[#fbfbf9]/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#f6f6f3] text-black font-extrabold text-xs">
                        #{school.ranking || '—'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full border border-[#dadad3] bg-white flex items-center justify-center font-bold text-[#e60023] shrink-0 text-sm overflow-hidden p-0.5">
                          {school.logo ? (
                            <img src={school.logo} alt="Logo" className="w-full h-full object-contain" />
                          ) : (
                            school.name_vi.charAt(0)
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-black">{school.name_vi}</p>
                          <p className="text-xs text-[#62625b] mt-0.5">{school.name_en}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`inline-flex px-2.5 py-1 rounded-[8px] text-xs font-bold uppercase tracking-wider ${
                        school.type === 'public'
                          ? 'bg-[#c7f0da] text-[#103c25]'
                          : 'bg-neutral-100 text-neutral-800'
                      }`}>
                        {school.type === 'public' ? 'Công lập' : 'Tư thục'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#33332e] font-medium">{school.region}</td>
                    <td className="px-6 py-4 text-sm text-right space-x-2">
                      <Link
                        href={`/universities/${school.id}`}
                        target="_blank"
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-neutral-100 text-neutral-500 transition-colors"
                        title="Xem trang công cộng"
                      >
                        <ExternalLink size={14} />
                      </Link>
                      <Link
                        href={`/admin/truong/${school.id}`}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                        title="Chỉnh sửa thông tin"
                      >
                        <Edit2 size={14} />
                      </Link>
                      <button
                        onClick={() => setSchoolToDelete(school)}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-[#cc001f] hover:bg-red-100 transition-colors cursor-pointer"
                        title="Xóa trường học"
                      >
                        <Trash2 size={14} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {schoolToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 cursor-pointer" onClick={() => setSchoolToDelete(null)} />
          
          <div className="w-full max-w-md bg-white rounded-[32px] p-6 md:p-8 shadow-2xl relative z-10 border border-[#e5e5e0]">
            <div className="text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-red-50 text-[#cc001f] flex items-center justify-center mx-auto">
                <AlertTriangle size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-black">Xác nhận xóa trường học</h3>
                <p className="text-xs text-[#62625b] mt-2 leading-relaxed">
                  Bạn có chắc chắn muốn xóa trường học <strong>"{schoolToDelete.name_vi}"</strong> khỏi hệ thống? 
                  Học phí và toàn bộ liên kết của trường này cũng sẽ biến mất. Hành động này không thể hoàn tác!
                </p>
              </div>
              <div className="pt-4 flex gap-3">
                <button
                  onClick={() => setSchoolToDelete(null)}
                  disabled={isDeleting}
                  className="flex-1 h-11 rounded-[16px] bg-[#e5e5e0] hover:bg-[#c8c8c1] text-black text-xs font-bold transition-all disabled:opacity-50 cursor-pointer"
                >
                  Hủy bỏ
                </button>
                <button
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="flex-1 h-11 rounded-[16px] bg-[#cc001f] hover:bg-red-700 text-white text-xs font-bold transition-all shadow-md shadow-red-600/10 flex items-center justify-center gap-1.5 disabled:opacity-50 cursor-pointer"
                >
                  {isDeleting ? 'Đang xóa...' : 'Xác nhận xóa'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
