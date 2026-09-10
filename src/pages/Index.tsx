import { Hero } from '../components/sections/creative/Hero';
import { About } from '../components/sections/creative/About';
import { BrandingShowcase } from '../components/sections/creative/BrandingShowcase';
import { Skills } from '../components/sections/creative/Skills';
import { Contact } from '../components/sections/creative/Contact';
import { CreativeLayout } from '../components/layouts/CreativeLayout';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Index() {
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
    <CreativeLayout>
      <Hero />
      <BrandingShowcase />
      <About />
      <Skills />
      <Contact />
    </CreativeLayout>
  );
}