import { universities } from '@/data/universities';
import TuitionEditor from '@/components/TuitionEditor';

export const dynamic = 'force-dynamic';

export default function AdminTuitionPage() {
  // Convert type to match custom typing and send to component
  const typedUniversities = universities as any[];

  return (
    <div className="space-y-6 font-sans">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-[#000000]">Quản lý học phí (Tuition Manager)</h1>
        <p className="text-sm text-[#62625b] mt-1">
          Chỉnh sửa trực tiếp học phí Won (KRW) từng ngành học theo năm, hoặc sao chép nhân bản mức học phí sang niên học mới.
        </p>
      </div>

      <TuitionEditor initialUniversities={typedUniversities} />
    </div>
  );
}
