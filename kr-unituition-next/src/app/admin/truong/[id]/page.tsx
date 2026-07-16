import { universities } from '@/data/universities';
import SchoolFormEditor from '@/components/SchoolFormEditor';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function EditSchoolPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const school = (universities as any[]).find((u) => u.id === id);

  if (!school) {
    notFound();
  }

  return <SchoolFormEditor school={school} />;
}
