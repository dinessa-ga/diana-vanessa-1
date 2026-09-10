import { DevLayout } from '../../layouts/DevLayout';

interface DevSectionPageProps {
  children: React.ReactNode;
}

export default function DevSectionPage({ children }: DevSectionPageProps) {
  return <DevLayout>{children}</DevLayout>;
}