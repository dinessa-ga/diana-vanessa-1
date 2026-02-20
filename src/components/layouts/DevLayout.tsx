import { Header } from '../Header';
import { ThemeToggle } from '../ThemeToggle';

interface DevLayoutProps {
  children: React.ReactNode;
}

export function DevLayout({ children }: DevLayoutProps) {
  const menuItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Sobre mí', href: '#about' },
    { label: 'Proyectos ', href: '#projects' },
    { label: 'Servicios', href: '#services' },
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