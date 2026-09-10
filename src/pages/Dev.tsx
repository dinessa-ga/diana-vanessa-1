import ProjectsDev from '../components/sections/dev/ProjectsDev';
import { DevLayout } from '../components/layouts/DevLayout';
import AboutDev  from '../components/sections/dev/AboutDev';
import { HeroDev } from '../components/sections/dev/HeroDev';
import { ServicesDev } from '../components/sections/dev/ServicesDev';
import { ContactDev } from '../components/sections/dev/ContactDev';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Dev() {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;

    if (!scrollTo) return;

    const frame = requestAnimationFrame(() => {
      document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
    });

    return () => cancelAnimationFrame(frame);
  }, [location.state]);

  return (
    <DevLayout>
      <HeroDev />
      <AboutDev />
      <ProjectsDev />
      <ServicesDev />
      <ContactDev />
    </DevLayout>
  );
}