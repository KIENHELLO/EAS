import SchoolFormEditor from '@/components/SchoolFormEditor';

export const dynamic = 'force-dynamic';

export default function NewSchoolPage() {
  return <SchoolFormEditor isNew={true} />;
}
