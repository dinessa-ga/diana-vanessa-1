import { Header } from '../Header';


interface DevLayoutProps {
  children: React.ReactNode;
}

export function DevLayout({ children }: DevLayoutProps) {
  const menuItems = [

    { label: 'Sobre mí', href: '/dev', scrollTo: 'about' },
    { label: 'Proyectos ', href: '/dev', scrollTo: 'projects-dev' },
    { label: 'Servicios', href: '/dev', scrollTo: 'services' },
    { label: 'Contacto', href: '/dev', scrollTo: 'contact' },
    { label: '← Perfil Creativo', href: '/' },
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