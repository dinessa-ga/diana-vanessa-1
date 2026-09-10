import { CreativeLayout } from '../../layouts/CreativeLayout';

interface CreativeSectionPageProps {
  children: React.ReactNode;
}

export default function CreativeSectionPage({ children }: CreativeSectionPageProps) {
  return <CreativeLayout>{children}</CreativeLayout>;
}