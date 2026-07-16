'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Save,
  Info,
  Image as ImageIcon,
  Search as SearchIcon,
  Plus,
  X,
  UploadCloud,
  Check,
  AlertCircle,
  Sparkles,
} from 'lucide-react';

interface TuitionRates {
  humanities_social: number | null;
  natural_sciences: number | null;
  engineering: number | null;
  arts_sports: number | null;
  medicine_pharmacy: number | null;
}

interface SeoLanguage {
  title: string;
  desc: string;
}

interface SeoData {
  vi: SeoLanguage;
  ko: SeoLanguage;
  en: SeoLanguage;
}

interface University {
  id: string;
  name_vi: string;
  name_en: string;
  name_ko: string;
  type: string;
  region: string;
  ranking: number;
  campus_address: string;
  website: string;
  tuition: TuitionRates;
  tuition_history?: Record<string, TuitionRates>;
  dorm_fee: number | null;
  living_cost_est: number | null;
  scholarships: string[];
  description: string;
  accept_gdtx: boolean | null;
  visa_metropolitan: boolean;
  master_no_topik: boolean;
  custom_notes: string;
  top_1_percent: boolean;
  logo?: string;
  cover_photo?: string;
  campus_photos?: string[];
  seo?: SeoData;
}

interface SchoolFormEditorProps {
  school?: University;
  isNew?: boolean;
}

export default function SchoolFormEditor({ school, isNew = false }: SchoolFormEditorProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'basic' | 'media' | 'seo'>('basic');
  const [isSaving, setIsSaving] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Form states
  const [id, setId] = useState(school?.id || '');
  const [nameVi, setNameVi] = useState(school?.name_vi || '');
  const [nameEn, setNameEn] = useState(school?.name_en || '');
  const [nameKo, setNameKo] = useState(school?.name_ko || '');
  const [type, setType] = useState(school?.type || 'private');
  const [region, setRegion] = useState(school?.region || 'Seoul');
  const [ranking, setRanking] = useState(school?.ranking || 99);
  const [campusAddress, setCampusAddress] = useState(school?.campus_address || '');
  const [website, setWebsite] = useState(school?.website || '');
  const [dormFee, setDormFee] = useState(school?.dorm_fee !== null && school?.dorm_fee !== undefined ? String(school.dorm_fee) : '');
  const [livingCostEst, setLivingCostEst] = useState(school?.living_cost_est !== null && school?.living_cost_est !== undefined ? String(school.living_cost_est) : '');
  const [description, setDescription] = useState(school?.description || '');
  const [acceptGdtx, setAcceptGdtx] = useState<boolean | null>(school?.accept_gdtx !== undefined ? school.accept_gdtx : null);
  const [visaMetropolitan, setVisaMetropolitan] = useState(school?.visa_metropolitan || false);
  const [masterNoTopik, setMasterNoTopik] = useState(school?.master_no_topik || false);
  const [top1Percent, setTop1Percent] = useState(school?.top_1_percent || false);
  const [customNotes, setCustomNotes] = useState(school?.custom_notes || '');

  // Scholarships state
  const [scholarships, setScholarships] = useState<string[]>(school?.scholarships || []);
  const [newScholarship, setNewScholarship] = useState('');

  // Media states
  const [logo, setLogo] = useState(school?.logo || '');
  const [coverPhoto, setCoverPhoto] = useState(school?.cover_photo || '');
  const [campusPhotos, setCampusPhotos] = useState<string[]>(school?.campus_photos || []);
  const [isUploading, setIsUploading] = useState<'logo' | 'cover' | 'campus' | null>(null);

  // SEO states
  const [seoViTitle, setSeoViTitle] = useState(school?.seo?.vi?.title || '');
  const [seoViDesc, setSeoViDesc] = useState(school?.seo?.vi?.desc || '');
  const [seoKoTitle, setSeoKoTitle] = useState(school?.seo?.ko?.title || '');
  const [seoKoDesc, setSeoKoDesc] = useState(school?.seo?.ko?.desc || '');
  const [seoEnTitle, setSeoEnTitle] = useState(school?.seo?.en?.title || '');
  const [seoEnDesc, setSeoEnDesc] = useState(school?.seo?.en?.desc || '');

  // Active SEO Preview Language
  const [seoPreviewLang, setSeoPreviewLang] = useState<'vi' | 'ko' | 'en'>('vi');

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleNameViChange = (val: string) => {
    setNameVi(val);
    if (isNew) {
      // Auto-generate slug/ID
      const generatedId = val
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[đĐ]/g, 'd')
        .replace(/[^a-z0-9 ]/g, '')
        .replace(/\s+/g, '-');
      setId(generatedId);
    }
  };

  const handleAddScholarship = () => {
    if (newScholarship.trim() === '') return;
    setScholarships([...scholarships, newScholarship.trim()]);
    setNewScholarship('');
  };

  const handleRemoveScholarship = (index: number) => {
    setScholarships(scholarships.filter((_, i) => i !== index));
  };

  // Image Upload helper
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'logo' | 'cover' | 'campus') => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(type);

    try {
      const file = files[0];
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        if (type === 'logo') {
          setLogo(data.url);
          showToast('Đã tải lên logo thành công!', 'success');
        } else if (type === 'cover') {
          setCoverPhoto(data.url);
          showToast('Đã tải lên ảnh bìa thành công!', 'success');
        } else if (type === 'campus') {
          setCampusPhotos([...campusPhotos, data.url]);
          showToast('Đã tải lên ảnh campus thành công!', 'success');
        }
      } else {
        showToast('Tải lên ảnh thất bại!', 'error');
      }
    } catch (err) {
      console.error(err);
      showToast('Đã xảy ra lỗi kết nối upload!', 'error');
    } finally {
      setIsUploading(null);
    }
  };

  const handleRemoveCampusPhoto = (index: number) => {
    setCampusPhotos(campusPhotos.filter((_, i) => i !== index));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameVi || !id) {
      showToast('Họ tên trường học và ID bắt buộc không được để trống!', 'error');
      return;
    }

    setIsSaving(true);

    const payload = {
      id,
      name_vi: nameVi,
      name_en: nameEn || nameVi,
      name_ko: nameKo,
      type,
      region,
      ranking: Number(ranking) || 99,
      campus_address: campusAddress,
      website,
      dorm_fee: dormFee === '' ? null : Number(dormFee),
      living_cost_est: livingCostEst === '' ? null : Number(livingCostEst),
      scholarships,
      description,
      accept_gdtx: acceptGdtx,
      visa_metropolitan: visaMetropolitan,
      master_no_topik: masterNoTopik,
      top_1_percent: top1Percent,
      custom_notes: customNotes,
      logo,
      cover_photo: coverPhoto,
      campus_photos: campusPhotos,
      seo: {
        vi: { title: seoViTitle || nameVi, desc: seoViDesc || description.substring(0, 150) },
        ko: { title: seoKoTitle, desc: seoKoDesc },
        en: { title: seoEnTitle, desc: seoEnDesc },
      },
    };

    try {
      const res = await fetch('/api/universities', {
        method: isNew ? 'POST' : 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        showToast(isNew ? 'Thêm trường học thành công!' : 'Cập nhật trường học thành công!', 'success');
        router.push('/admin/truong');
        router.refresh();
      } else {
        const errorData = await res.json();
        showToast(errorData.error || 'Lỗi lưu thông tin trường học!', 'error');
      }
    } catch (err) {
      console.error(err);
      showToast('Đã xảy ra lỗi kết nối mạng!', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  // Google Snippet Real-time calculations
  const getGoogleSnippet = () => {
    let title = '';
    let desc = '';
    
    if (seoPreviewLang === 'vi') {
      title = seoViTitle || nameVi || 'Tiêu đề trang Web';
      desc = seoViDesc || description || 'Mô tả tóm tắt nội dung sẽ xuất hiện trên kết quả tìm kiếm của Google giúp nâng cao tỷ lệ click chuột...';
    } else if (seoPreviewLang === 'ko') {
      title = seoKoTitle || nameKo || '웹사이트 제목';
      desc = seoKoDesc || 'Google 검색 결과에 표시되는 요약 설명 글입니다...';
    } else {
      title = seoEnTitle || nameEn || 'Website Title';
      desc = seoEnDesc || 'Summary meta description that will display on Google search results...';
    }

    return { title, desc };
  };

  const previewSnippet = getGoogleSnippet();

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

      {/* Back to listings */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => router.push('/admin/truong')}
          className="flex items-center gap-2 text-sm font-bold text-[#62625b] hover:text-[#000000] cursor-pointer"
        >
          <ArrowLeft size={16} /> Quay lại danh sách
        </button>
      </div>

      {/* Editor Title */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-black">
          {isNew ? 'Thêm trường học mới' : `Chỉnh sửa thông tin: ${nameVi}`}
        </h1>
        <p className="text-sm text-[#62625b] mt-1">
          Cập nhật hồ sơ, tải lên hình ảnh giảng đường và tối ưu hóa nội dung hiển thị SEO.
        </p>
      </div>

      {/* Tab Switchers Bar */}
      <div className="flex border-b border-[#dadad3] gap-6">
        <button
          onClick={() => setActiveTab('basic')}
          className={`pb-3 text-sm font-bold transition-all relative cursor-pointer ${
            activeTab === 'basic' ? 'text-[#e60023]' : 'text-[#62625b] hover:text-black'
          }`}
        >
          <span className="flex items-center gap-2">
            <Info size={16} />
            Thông tin cơ bản
          </span>
          {activeTab === 'basic' && <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#e60023]" />}
        </button>

        <button
          onClick={() => setActiveTab('media')}
          className={`pb-3 text-sm font-bold transition-all relative cursor-pointer ${
            activeTab === 'media' ? 'text-[#e60023]' : 'text-[#62625b] hover:text-black'
          }`}
        >
          <span className="flex items-center gap-2">
            <ImageIcon size={16} />
            Hình ảnh & Media
          </span>
          {activeTab === 'media' && <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#e60023]" />}
        </button>

        <button
          onClick={() => setActiveTab('seo')}
          className={`pb-3 text-sm font-bold transition-all relative cursor-pointer ${
            activeTab === 'seo' ? 'text-[#e60023]' : 'text-[#62625b] hover:text-black'
          }`}
        >
          <span className="flex items-center gap-2">
            <SearchIcon size={16} />
            SEO & Google Snippet
          </span>
          {activeTab === 'seo' && <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#e60023]" />}
        </button>
      </div>

      {/* Main Form container */}
      <form onSubmit={handleSave} className="bg-white rounded-[32px] p-6 md:p-8 border border-[#e5e5e0] shadow-[0_4px_30px_rgba(0,0,0,0.01)] space-y-6">
        
        {/* TAB 1: BASIC INFO */}
        {activeTab === 'basic' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">
                  Tên Tiếng Việt <span className="text-[#e60023]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={nameVi}
                  onChange={(e) => handleNameViChange(e.target.value)}
                  placeholder="Đại học Quốc gia Seoul"
                  className="w-full h-11 px-4 rounded-[16px] border border-[#dadad3] bg-white text-[#000000] text-sm outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">Tên Tiếng Anh</label>
                <input
                  type="text"
                  value={nameEn}
                  onChange={(e) => setNameEn(e.target.value)}
                  placeholder="Seoul National University"
                  className="w-full h-11 px-4 rounded-[16px] border border-[#dadad3] bg-white text-[#000000] text-sm outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">Tên Tiếng Hàn</label>
                <input
                  type="text"
                  value={nameKo}
                  onChange={(e) => setNameKo(e.target.value)}
                  placeholder="서울대학교"
                  className="w-full h-11 px-4 rounded-[16px] border border-[#dadad3] bg-white text-[#000000] text-sm outline-none focus:border-black"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">Đường dẫn tĩnh (ID)</label>
                  <input
                    type="text"
                    required
                    disabled={!isNew}
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="snu"
                    className="w-full h-11 px-4 rounded-[16px] border border-[#dadad3] bg-[#f6f6f3] disabled:opacity-75 disabled:cursor-not-allowed text-sm font-semibold outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">Thứ hạng (Ranking)</label>
                  <input
                    type="number"
                    value={ranking}
                    onChange={(e) => setRanking(Number(e.target.value))}
                    placeholder="1"
                    className="w-full h-11 px-4 rounded-[16px] border border-[#dadad3] bg-white text-[#000000] text-sm outline-none focus:border-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">Loại hình</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full h-11 px-3 rounded-[16px] border border-[#dadad3] bg-white text-sm font-semibold focus:border-black outline-none"
                  >
                    <option value="public">Công lập (Public)</option>
                    <option value="private">Tư thục (Private)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">Khu vực (Region)</label>
                  <input
                    type="text"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    placeholder="Seoul, Busan, Gyeonggi..."
                    className="w-full h-11 px-4 rounded-[16px] border border-[#dadad3] bg-white text-[#000000] text-sm outline-none focus:border-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">Ký túc xá một kỳ (₩)</label>
                  <input
                    type="number"
                    value={dormFee}
                    onChange={(e) => setDormFee(e.target.value)}
                    placeholder="1200000"
                    className="w-full h-11 px-4 rounded-[16px] border border-[#dadad3] bg-white text-[#000000] text-sm outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">Sinh hoạt phí/tháng (₩)</label>
                  <input
                    type="number"
                    value={livingCostEst}
                    onChange={(e) => setLivingCostEst(e.target.value)}
                    placeholder="800000"
                    className="w-full h-11 px-4 rounded-[16px] border border-[#dadad3] bg-white text-[#000000] text-sm outline-none focus:border-black"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">Địa chỉ Campus</label>
                <input
                  type="text"
                  value={campusAddress}
                  onChange={(e) => setCampusAddress(e.target.value)}
                  placeholder="1 Gwanak-ro, Gwanak-gu, Seoul"
                  className="w-full h-11 px-4 rounded-[16px] border border-[#dadad3] bg-white text-[#000000] text-sm outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">Website chính thức</label>
                <input
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="https://www.snu.ac.kr"
                  className="w-full h-11 px-4 rounded-[16px] border border-[#dadad3] bg-white text-[#000000] text-sm outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">Giới thiệu ngắn</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Mô tả tóm tắt thế mạnh, chương trình đào tạo..."
                  className="w-full p-4 min-h-[110px] rounded-[16px] border border-[#dadad3] bg-white text-sm outline-none focus:border-black placeholder-[#91918c]"
                />
              </div>

              {/* Group of System Configurations */}
              <div>
                <label className="block text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">Cấu hình điều kiện</label>
                <div className="grid grid-cols-2 gap-3 bg-[#f6f6f3] p-4 rounded-[20px] border border-[#e5e5e0]">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="visaMetropolitan"
                      checked={visaMetropolitan}
                      onChange={(e) => setVisaMetropolitan(e.target.checked)}
                      className="accent-[#e60023]"
                    />
                    <label htmlFor="visaMetropolitan" className="text-xs font-bold text-black cursor-pointer">
                      Visa Đô thị hạn chế
                    </label>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="masterNoTopik"
                      checked={masterNoTopik}
                      onChange={(e) => setMasterNoTopik(e.target.checked)}
                      className="accent-[#e60023]"
                    />
                    <label htmlFor="masterNoTopik" className="text-xs font-bold text-black cursor-pointer">
                      Thạc sĩ Nợ TOPIK
                    </label>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="top1Percent"
                      checked={top1Percent}
                      onChange={(e) => setTop1Percent(e.target.checked)}
                      className="accent-[#e60023]"
                    />
                    <label htmlFor="top1Percent" className="text-xs font-bold text-black cursor-pointer">
                      Trường Top 1%
                    </label>
                  </div>

                  <div className="flex items-center gap-2">
                    <select
                      id="acceptGdtx"
                      value={acceptGdtx === null ? 'null' : String(acceptGdtx)}
                      onChange={(e) => {
                        const val = e.target.value;
                        setAcceptGdtx(val === 'null' ? null : val === 'true');
                      }}
                      className="text-xs font-bold bg-white border border-[#dadad3] p-1 rounded max-w-[120px] outline-none"
                    >
                      <option value="null">GDTX: Xét sau</option>
                      <option value="true">GDTX: Có nhận</option>
                      <option value="false">GDTX: Không nhận</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Internal notes */}
              <div>
                <label className="block text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">Ghi chú nội bộ</label>
                <input
                  type="text"
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="Ghi chú tuyển sinh nội bộ..."
                  className="w-full h-11 px-4 rounded-[16px] border border-[#dadad3] bg-white text-[#000000] text-sm outline-none focus:border-black"
                />
              </div>
            </div>

            {/* Scholarships section */}
            <div className="col-span-1 md:col-span-2 space-y-4 pt-4 border-t border-[#e5e5e0]">
              <h3 className="text-sm font-bold text-black uppercase tracking-wider">Danh sách học bổng tiêu biểu</h3>
              
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newScholarship}
                  onChange={(e) => setNewScholarship(e.target.value)}
                  placeholder="Nhập tên học bổng (VD: Học bổng Chính phủ Hàn Quốc - GKS)..."
                  className="flex-1 h-11 px-4 rounded-[16px] border border-[#dadad3] bg-white text-sm outline-none focus:border-black"
                />
                <button
                  type="button"
                  onClick={handleAddScholarship}
                  className="h-11 px-5 rounded-[16px] bg-black hover:bg-neutral-800 text-white font-bold text-xs flex items-center gap-1 cursor-pointer transition-all"
                >
                  <Plus size={14} /> Thêm
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {scholarships.length === 0 ? (
                  <p className="text-xs text-[#91918c] italic">Chưa nhập thông tin học bổng.</p>
                ) : (
                  scholarships.map((s, index) => (
                    <div
                      key={index}
                      className="px-3 py-1.5 rounded-[12px] bg-[#f6f6f3] border border-[#dadad3] text-xs font-medium text-black flex items-center gap-2"
                    >
                      <span>{s}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveScholarship(index)}
                        className="w-4 h-4 rounded-full bg-[#dadad3] text-black hover:bg-[#cc001f] hover:text-white flex items-center justify-center transition-all cursor-pointer text-[10px]"
                      >
                        <X size={8} />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MEDIA SECTION */}
        {activeTab === 'media' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Logo Manager */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-black uppercase tracking-wider">Logo trường học (80px tròn)</h3>
                
                <div className="flex items-center gap-6 p-4 bg-[#fbfbf9] rounded-[24px] border border-[#e5e5e0]">
                  <div className="w-20 h-20 rounded-full border border-[#dadad3] bg-white flex items-center justify-center font-bold text-[#e60023] overflow-hidden p-1 shrink-0 text-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                    {logo ? (
                      <img src={logo} alt="Logo preview" className="w-full h-full object-contain" />
                    ) : (
                      nameVi.charAt(0) || 'L'
                    )}
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <input
                      type="text"
                      value={logo}
                      onChange={(e) => setLogo(e.target.value)}
                      placeholder="URL hoặc tải lên file bên dưới"
                      className="w-full h-10 px-3 rounded-[12px] border border-[#dadad3] text-xs outline-none focus:border-black"
                    />
                    
                    <label className="inline-flex items-center justify-center h-10 px-4 rounded-[12px] bg-black text-white hover:bg-neutral-800 text-xs font-bold cursor-pointer transition-all gap-1.5 active:scale-95">
                      <UploadCloud size={14} />
                      {isUploading === 'logo' ? 'Đang tải...' : 'Tải ảnh lên'}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, 'logo')}
                        disabled={isUploading !== null}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Cover Photo Manager */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-black uppercase tracking-wider">Ảnh bìa (Landscape preview)</h3>
                
                <div className="space-y-4">
                  <div className="w-full h-24 rounded-[20px] border border-[#dadad3] bg-[#f6f6f3] overflow-hidden flex items-center justify-center relative">
                    {coverPhoto ? (
                      <img src={coverPhoto} alt="Cover preview" className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-xs text-[#91918c] font-medium flex items-center gap-1">
                        <ImageIcon size={14} /> Chưa tải lên ảnh bìa
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      value={coverPhoto}
                      onChange={(e) => setCoverPhoto(e.target.value)}
                      placeholder="URL ảnh bìa"
                      className="flex-1 h-10 px-3 rounded-[12px] border border-[#dadad3] text-xs outline-none focus:border-black"
                    />
                    
                    <label className="inline-flex items-center justify-center h-10 px-4 rounded-[12px] bg-black text-white hover:bg-neutral-800 text-xs font-bold cursor-pointer transition-all gap-1.5 active:scale-95">
                      <UploadCloud size={14} />
                      {isUploading === 'cover' ? 'Tải...' : 'Tải lên'}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, 'cover')}
                        disabled={isUploading !== null}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Campus Photos Gallery */}
            <div className="space-y-4 pt-6 border-t border-[#e5e5e0]">
              <h3 className="text-sm font-bold text-black uppercase tracking-wider">Bộ sưu tập khuôn viên trường (Campus Gallery)</h3>

              {/* Upload area dropzone */}
              <label className="border-2 border-dashed border-[#dadad3] hover:border-black bg-[#fbfbf9] rounded-[24px] p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2 group">
                <UploadCloud size={32} className="text-[#91918c] group-hover:text-black transition-colors" />
                <span className="text-xs font-bold text-black">
                  {isUploading === 'campus' ? 'Đang xử lý tải lên ảnh...' : 'Nhấp chuột để chọn ảnh chụp Campus và tải lên'}
                </span>
                <span className="text-[10px] text-[#91918c]">Hỗ trợ định dạng PNG, JPG, JPEG</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, 'campus')}
                  disabled={isUploading !== null}
                  className="hidden"
                />
              </label>

              {/* Thumbnail grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                {campusPhotos.length === 0 ? (
                  <p className="col-span-full text-xs text-[#91918c] text-center py-4 italic">Chưa có ảnh campus nào trong bộ sưu tập.</p>
                ) : (
                  campusPhotos.map((photo, index) => (
                    <div key={index} className="group relative aspect-video rounded-[16px] border border-[#dadad3] bg-[#f6f6f3] overflow-hidden">
                      <img src={photo} alt={`Campus ${index + 1}`} className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => handleRemoveCampusPhoto(index)}
                        className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/60 hover:bg-[#cc001f] text-white flex items-center justify-center transition-all cursor-pointer opacity-0 group-hover:opacity-100 shadow-md"
                      >
                        <X size={12} />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SEO SECTION */}
        {activeTab === 'seo' && (
          <div className="space-y-6">
            {/* Language Selection Chips */}
            <div className="flex gap-2">
              {(['vi', 'ko', 'en'] as const).map((lang) => (
                <button
                  type="button"
                  key={lang}
                  onClick={() => setSeoPreviewLang(lang)}
                  className={`px-3 py-1.5 rounded-[12px] text-xs font-bold border transition-all cursor-pointer ${
                    seoPreviewLang === lang
                      ? 'bg-black border-black text-white'
                      : 'bg-white border-[#dadad3] text-[#62625b] hover:text-black'
                  }`}
                >
                  {lang === 'vi' ? '🇻🇳 Tiếng Việt' : lang === 'ko' ? '🇰🇷 Tiếng Hàn' : '🇺🇸 Tiếng Anh'}
                </button>
              ))}
            </div>

            {/* Language inputs fields block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Vietnamese Inputs */}
              {seoPreviewLang === 'vi' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">
                      Meta Title (Tiếng Việt)
                    </label>
                    <input
                      type="text"
                      value={seoViTitle}
                      onChange={(e) => setSeoViTitle(e.target.value)}
                      placeholder="Tra cứu học phí Đại học Quốc gia Seoul"
                      className="w-full h-11 px-4 rounded-[16px] border border-[#dadad3] bg-white text-sm outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">
                      Meta Description (Tiếng Việt)
                    </label>
                    <textarea
                      value={seoViDesc}
                      onChange={(e) => setSeoViDesc(e.target.value)}
                      placeholder="Tra cứu chi tiết học phí, học bổng, phí ký túc xá trường Đại học Quốc gia Seoul cập nhật mới nhất..."
                      className="w-full p-4 min-h-[120px] rounded-[16px] border border-[#dadad3] bg-white text-sm outline-none focus:border-black placeholder-[#91918c]"
                    />
                  </div>
                </div>
              )}

              {/* Korean Inputs */}
              {seoPreviewLang === 'ko' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">
                      Meta Title (Tiếng Hàn)
                    </label>
                    <input
                      type="text"
                      value={seoKoTitle}
                      onChange={(e) => setSeoKoTitle(e.target.value)}
                      placeholder="서울대학교 등록금 및 장학금 정보"
                      className="w-full h-11 px-4 rounded-[16px] border border-[#dadad3] bg-white text-sm outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">
                      Meta Description (Tiếng Hàn)
                    </label>
                    <textarea
                      value={seoKoDesc}
                      onChange={(e) => setSeoKoDesc(e.target.value)}
                      placeholder="서울대학교 등록금, 생활비 및 기숙사 비용 상세 정보를 안내합니다..."
                      className="w-full p-4 min-h-[120px] rounded-[16px] border border-[#dadad3] bg-white text-sm outline-none focus:border-black placeholder-[#91918c]"
                    />
                  </div>
                </div>
              )}

              {/* English Inputs */}
              {seoPreviewLang === 'en' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">
                      Meta Title (Tiếng Anh)
                    </label>
                    <input
                      type="text"
                      value={seoEnTitle}
                      onChange={(e) => setSeoEnTitle(e.target.value)}
                      placeholder="Seoul National University Tuition Fees"
                      className="w-full h-11 px-4 rounded-[16px] border border-[#dadad3] bg-white text-sm outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">
                      Meta Description (Tiếng Anh)
                    </label>
                    <textarea
                      value={seoEnDesc}
                      onChange={(e) => setSeoEnDesc(e.target.value)}
                      placeholder="Find all tuition costs, scholarships and housing fees for international students at Seoul National University..."
                      className="w-full p-4 min-h-[120px] rounded-[16px] border border-[#dadad3] bg-white text-sm outline-none focus:border-black placeholder-[#91918c]"
                    />
                  </div>
                </div>
              )}

              {/* Right Col: Google Snippet Preview */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-[#000000] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles size={14} className="text-[#e60023]" />
                  Xem trước Google Search kết quả thực tế
                </h3>
                
                {/* Search result mock card */}
                <div className="bg-[#f6f6f3] p-5 rounded-[24px] border border-[#dadad3] space-y-2">
                  {/* Google site info */}
                  <div className="flex items-center gap-2">
                    <div className="w-[26px] h-[26px] rounded-full bg-white border border-[#dadad3] flex items-center justify-center text-xs font-bold">
                      G
                    </div>
                    <div>
                      <p className="text-[12px] text-neutral-800 leading-none">KoreaEdu</p>
                      <p className="text-[10px] text-neutral-500 leading-none mt-0.5">https://koreaedu.vn › universities › {id || 'slug'}</p>
                    </div>
                  </div>

                  {/* Title mock */}
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="block text-[#1a0dab] hover:underline text-[19px] leading-[1.3] font-medium font-sans pt-1"
                  >
                    {previewSnippet.title}
                  </a>

                  {/* Snippet text */}
                  <p className="text-neutral-600 text-[14px] leading-[1.4] font-sans">
                    {previewSnippet.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Form CTA Buttons */}
        <div className="pt-6 border-t border-[#e5e5e0] flex items-center justify-between">
          <p className="text-[11px] text-[#91918c] font-medium">
            <span className="text-[#e60023] font-bold">*</span> Các trường thông tin bắt buộc không được bỏ trống.
          </p>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => router.push('/admin/truong')}
              disabled={isSaving}
              className="h-11 px-5 rounded-[16px] bg-[#e5e5e0] hover:bg-[#c8c8c1] text-black text-xs font-bold transition-all disabled:opacity-50 cursor-pointer"
            >
              Hủy bỏ
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="h-11 px-5 rounded-[16px] bg-[#e60023] hover:bg-[#cc001f] text-white text-xs font-bold transition-all shadow-md shadow-[#e60023]/10 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              <Save size={14} />
              {isSaving ? 'Đang lưu...' : 'Lưu thay đổi'}
            </button>
          </div>
        </div>

      </form>
    </div>
  );
}
