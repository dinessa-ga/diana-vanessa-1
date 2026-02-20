import { Hero } from '../creative/Hero';

export function HeroDev() {
  const devHeroConfig = {
    label: 'Desarrolladora web',
    title: (
      <>
        Creo <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">experiencias</span> digitales
      </>
    ),
    name: 'Diana',
    role: 'Desarrolladora Frontend, especialista en React y experiencia del usuario',
    description: 'Combino código limpio, diseño intuitivo y creatividad para construir aplicaciones web que funcionan perfectamente y se ven increíbles',
    primaryButtonText: 'Ver proyectos',
    secondaryButtonText: 'Contáctame',
    scrollToId: 'projects-dev',
  };

  return <Hero config={devHeroConfig} />;
}
