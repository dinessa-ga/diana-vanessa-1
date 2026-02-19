import { Header } from '../Header';
import { ThemeToggle } from '../ThemeToggle';

interface DevLayoutProps {
  children: React.ReactNode;
}

export function DevLayout({ children }: DevLayoutProps) {
  const menuItems = [
    { label: 'Inicio Dev', href: '/Dev' },
    { label: 'Stack', href: '#stack' },
    { label: 'Proyectos Dev', href: '#projects' },
    { label: 'Experiencia', href: '#experience' },
    { label: '← Perfil Creativo', href: '/' },
  ];

  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Header menuItems={menuItems} />
      <div className="pt-16">
        {children}
      </div>
    </div>
  );
}