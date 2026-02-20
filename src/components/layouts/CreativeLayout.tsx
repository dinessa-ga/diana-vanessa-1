import { Header } from '../Header';
import { ThemeToggle } from '../ThemeToggle';

interface CreativeLayoutProps {
  children: React.ReactNode;
}

export function CreativeLayout({ children }: CreativeLayoutProps) {
  const menuItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Sobre mí', href: '#about' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
    { label: 'Perfil Dev →', href: '/Dev' },
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