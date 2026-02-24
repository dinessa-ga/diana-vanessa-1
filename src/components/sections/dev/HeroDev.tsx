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
    role: 'Desarrolladora Frontend, experiencia en React y UX/UI',
    description: 'Combino código y creatividad para construir aplicaciones web que funcionan y son intuitivas',
    primaryButtonText: 'Ver proyectos',
    secondaryButtonText: 'Contáctame',
    scrollToId: 'projects-dev',
  };

  return <Hero config={devHeroConfig} />;
}
