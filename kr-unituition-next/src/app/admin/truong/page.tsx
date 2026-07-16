import { universities } from '@/data/universities';
import SchoolManagerList from '@/components/SchoolManagerList';

export const dynamic = 'force-dynamic';

export default function AdminSchoolsPage() {
  const typedUniversities = universities as any[];

  return (
    <div className="space-y-6 font-sans">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-[#000000]">Quản lý trường học</h1>
        <p className="text-sm text-[#62625b] mt-1">
          Quản lý danh sách các trường đại học liên kết tại Hàn Quốc, thay đổi thông tin chi tiết, hình ảnh và cấu hình SEO.
        </p>
      </div>

      <SchoolManagerList initialSchools={typedUniversities} />
    </div>
  );
}
