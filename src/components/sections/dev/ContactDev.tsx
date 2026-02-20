import { Contact } from '../creative/Contact';
import { Linkedin, Github } from 'lucide-react';

export function ContactDev() {
  const devContactConfig = {
    label: 'Contacto',
    title: (
      <>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Construyamos </span> algo increíble juntos
      </>
    ),
    description: 'Estoy disponible para proyectos freelance, colaboraciones o posiciones full-time. Hablemos sobre tu próximo proyecto web.',
    email: 'dinessa.tech@gmail.com',
    connectText: 'Ya sea que necesites una aplicación web desde cero, mejorar tu proyecto existente, o busques una desarrolladora frontend para tu equipo, estoy aquí para ayudarte a construir soluciones digitales excepcionales.',
    socialLinks: [
      { 
        icon: Linkedin, 
        label: 'LinkedIn', 
        href: 'https://www.linkedin.com/in/diana-vanessa/',
        color: 'hover:text-[#0077B5]',
        bg: 'hover:bg-[#0077B5]/10'
      },
      { 
        icon: Github, 
        label: 'GitHub', 
        href: 'https://github.com/dinessa-ga',
        color: 'hover:text-[#333]',
        bg: 'hover:bg-[#333]/10'
      },
    ],
    whyWorkWithMe: [
      'Experiencia en React, TypeScript y frameworks modernos',
      'Atención al detalle en UX/UI y rendimiento',
      'Comunicación proactiva y trabajo en equipo',
    ]
  };

  return <Contact config={devContactConfig} />;
}
