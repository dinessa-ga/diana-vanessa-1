import { Header } from '../Header';
import { ThemeToggle } from '../ThemeToggle';

interface DevLayoutProps {
  children: React.ReactNode;
}

export function DevLayout({ children }: DevLayoutProps) {
  const menuItems = [
    
    { label: 'Sobre mí', href: '#about' },
    { label: 'Proyectos ', href: '#projects-dev' },
    { label: 'Servicios', href: '#services' },
    { label: 'Contacto', href: '#contact' },
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