import { Header } from '../Header';


interface CreativeLayoutProps {
  children: React.ReactNode;
}

export function CreativeLayout({ children }: CreativeLayoutProps) {
  const menuItems = [
    { label: 'Sobre mí', href: '#about' },
    { label: 'Proyectos', href: '#projects-creative' },
     { label: '¿Cómo te ayudo?', href: '#skills' },
    { label: 'Contacto', href: '#contact' },
    { label: 'Perfil Developer →', href: '/dev' },
  ];

  return (
    <div className="min-h-screen">
     
      <Header menuItems={menuItems} />
      <div className="pt-16">
        {children}
      </div>
    </div>
  );
}