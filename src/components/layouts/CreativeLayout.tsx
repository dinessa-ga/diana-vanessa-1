import { Header } from '../Header';


interface CreativeLayoutProps {
  children: React.ReactNode;
}

export function CreativeLayout({ children }: CreativeLayoutProps) {
  const menuItems = [
    { label: 'Sobre mí', href: '/', scrollTo: 'about' },
    { label: 'Proyectos', href: '/projects' },
    { label: '¿Cómo te ayudo?', href: '/', scrollTo: 'skills' },
    { label: 'Contacto', href: '/', scrollTo: 'contact' },
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