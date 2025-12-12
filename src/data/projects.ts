export interface BrandProject {
  id: number;
  brandName: string;
  category: string;
  description: string;
  image: string;
  colors: string[];
  services: string[];
  results: {
    metric1: string;
    label1: string;
    metric2: string;
    label2: string;
  };
  // Detalles completos del caso de estudio
  caseStudy?: {
    clientOverview: string;
    challenge: string;
    purpose?: string;
    buyerPersona?: {
      name: string;
      age: string;
      occupation: string;
      interests: string[];
      painPoints: string[];
    };
    brandPersonality?: {
      tone: string[];
      voice: string;
    };
    contentStrategy?: {
      objectives: string[];
      pillars: string[];
    };
    deliverables: {
      category: string;
      items: string[];
    }[];
    visualExamples?: string[]; // URLs de imágenes de piezas creadas
    copyExamples?: {
      type: string; // 'caption', 'copy', 'slogan', etc.
      text: string;
    }[];
    results: string[];
    testimonial?: {
      text: string;
      author: string;
      position: string;
    };
  };
}

export const brandProjects: BrandProject[] = [
  {
    id: 1,
    brandName: 'Luna Café',
    category: 'Café & Restaurante',
    description: 'Identidad de marca completa para cadena de cafeterías premium. Creación de logotipo, paleta de colores, tipografía y aplicaciones en packaging.',
    image: 'https://images.unsplash.com/photo-1634671495197-fb9ec3230ef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kaW5nJTIwZGVzaWdufGVufDF8fHx8MTc2NTQxMjg4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    colors: ['#591fff', '#9908cd', '#ff65a1'],
    services: ['Identidad de marca', 'Packaging', 'Manual de marca'],
    results: {
      metric1: '+45%',
      label1: 'Reconocimiento de marca',
      metric2: '3x',
      label2: 'Engagement en redes'
    },
    caseStudy: {
      clientOverview: 'Luna Café es una cadena emergente de cafeterías artesanales que busca diferenciarse en un mercado saturado ofreciendo experiencias únicas y café de especialidad.',
      challenge: 'La marca necesitaba una identidad visual que comunicara calidad premium sin perder la calidez y accesibilidad que atrae a su público objetivo.',
      purpose: 'Crear un espacio donde cada taza de café sea una experiencia sensorial memorable, conectando a las personas con el arte del café de especialidad.',
      buyerPersona: {
        name: 'Ana Creativa',
        age: '28-35 años',
        occupation: 'Profesional creativa, freelancer',
        interests: ['Diseño', 'Gastronomía', 'Experiencias únicas', 'Sostenibilidad'],
        painPoints: ['Busca espacios inspiradores para trabajar', 'Valora la calidad sobre precio', 'Quiere marcas con propósito']
      },
      brandPersonality: {
        tone: ['Cálido', 'Sofisticado', 'Acogedor', 'Auténtico'],
        voice: 'Conversacional pero refinado, como un barista experto que comparte su pasión por el café con amigos cercanos.'
      },
      contentStrategy: {
        objectives: [
          'Educar sobre el proceso del café de especialidad',
          'Construir comunidad alrededor de la marca',
          'Mostrar el behind-the-scenes del proceso artesanal',
          'Destacar la experiencia sensorial'
        ],
        pillars: [
          'El Arte del Café (educativo)',
          'Momentos Luna (lifestyle)',
          'Sostenibilidad & Origen (valores)',
          'Comunidad Cafetera (engagement)'
        ]
      },
      deliverables: [
        {
          category: 'Estrategia de Contenido',
          items: ['Análisis de audiencia', 'Calendario editorial mensual', 'Estrategia multiplataforma', 'KPIs y métricas']
        },
        {
          category: 'Copywriting & Captions',
          items: ['30 captions para Instagram', '15 copys para Facebook', 'Descripciones de productos', 'Bio optimizado para redes']
        },
        {
          category: 'Identidad Visual',
          items: ['Logotipo principal y variantes', 'Paleta de colores', 'Tipografía corporativa', 'Manual de marca (40 páginas)']
        },
        {
          category: 'Piezas Gráficas',
          items: ['Templates para Instagram (15 diseños)', 'Stories templates (10 diseños)', 'Diseño de menú', 'Packaging para productos']
        }
      ],
      visualExamples: [
        'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800',
        'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800',
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
        'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800'
      ],
      copyExamples: [
        {
          type: 'Caption Instagram',
          text: '☕️ Cada taza cuenta una historia.\n\nEn Luna Café, no solo servimos café. Creamos momentos. Desde el primer aroma hasta el último sorbo, cada detalle está pensado para despertar tus sentidos.\n\n¿Cuál es tu ritual de café favorito? 👇\n\n#LunaCafé #CaféDeEspecialidad #MomentosCafé'
        },
        {
          type: 'Copy Facebook',
          text: '¿Sabías que el café que disfrutas hoy viajó más de 8,000 km para llegar a tu taza? 🌍☕\n\nEn Luna Café trabajamos directamente con productores de Colombia, Etiopía y Costa Rica para traerte los mejores granos, cosechados con amor y tostados con precisión.\n\nCada sorbo es un viaje. ¿Te unes?'
        },
        {
          type: 'Slogan',
          text: 'Luna Café - Donde cada sorbo es una experiencia'
        }
      ],
      results: [
        'Incremento del 45% en reconocimiento de marca en 6 meses',
        'Triplicación del engagement en redes sociales',
        '12,000 nuevos seguidores orgánicos en Instagram',
        'Apertura de 3 nuevas sucursales en primer año',
        'Tasa de retención de clientes del 78%'
      ],
      testimonial: {
        text: 'Transformó completamente nuestra visión. No solo creó una identidad visual hermosa, sino que entendió nuestra esencia y la plasmó de manera brillante. El aumento en ventas y reconocimiento habla por sí solo.',
        author: 'María González',
        position: 'Fundadora, Luna Café'
      }
    }
  },
  {
    id: 2,
    brandName: 'Tech Innovate',
    category: 'Tecnología & Software',
    description: 'Rebranding completo para startup tecnológica. Desarrollo de nueva identidad visual moderna y minimalista que refleja innovación.',
    image: 'https://images.unsplash.com/photo-1616205255812-c07c8102cc02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwbW9ja3VwfGVufDF8fHx8MTc2NTQ5NDQzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    colors: ['#591fff', '#0a0224', '#FFFFFF'],
    services: ['Rebranding', 'Diseño web', 'Estrategia de marca'],
    results: {
      metric1: '200%',
      label1: 'Aumento en conversiones',
      metric2: '$2M',
      label2: 'Ronda de inversión'
    },
    caseStudy: {
      clientOverview: 'Tech Innovate es una startup de SaaS B2B que ofrece soluciones de automatización empresarial. Necesitaban reposicionarse como líderes de la industria.',
      challenge: 'Su identidad anterior era genérica y no reflejaba su nivel de innovación tecnológica. Tenían baja confianza de inversores y dificultades para destacar entre competidores.',
      deliverables: [
        {
          category: 'Estrategia de Marca',
          items: ['Auditoría de marca', 'Reposicionamiento estratégico', 'Arquitectura de marca', 'Messaging framework']
        },
        {
          category: 'Contenido',
          items: ['Estrategia de contenido B2B', 'White papers (3)', 'Case studies (5)', 'Blog posts (20)']
        },
        {
          category: 'Diseño',
          items: ['Identidad visual completa', 'Sistema de diseño', 'Sitio web responsive', 'Presentaciones corporativas']
        }
      ],
      results: [
        'Aumento del 200% en conversiones del sitio web',
        'Cierre de ronda de inversión de $2M',
        'Reducción del 40% en ciclo de ventas',
        'Aumento del 150% en leads calificados'
      ]
    }
  },
  {
    id: 3,
    brandName: 'Natura Wellness',
    category: 'Salud & Bienestar',
    description: 'Diseño de identidad para línea de productos naturales. Enfoque en sostenibilidad y conexión con la naturaleza.',
    image: 'https://images.unsplash.com/photo-1761223956832-a1e341babb92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsb2dvJTIwZGVzaWdufGVufDF8fHx8MTc2NTQ4ODkxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    colors: ['#9908cd', '#ff65a1', '#591fff'],
    services: ['Identidad visual', 'Packaging eco-friendly', 'Campaña de lanzamiento'],
    results: {
      metric1: '15k+',
      label1: 'Unidades vendidas',
      metric2: '4.8/5',
      label2: 'Rating de clientes'
    }
  },
  {
    id: 4,
    brandName: 'Urban Threads',
    category: 'Moda & Lifestyle',
    description: 'Brand identity para marca de ropa urbana. Diseño audaz y contemporáneo que conecta con audiencia millennial y Gen Z.',
    image: 'https://images.unsplash.com/photo-1590102425728-aa39769512ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBzdHJhdGVneSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjUzODAwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    colors: ['#ff65a1', '#591fff', '#9908cd'],
    services: ['Branding completo', 'Redes sociales', 'Campaña publicitaria'],
    results: {
      metric1: '50k+',
      label1: 'Seguidores en 3 meses',
      metric2: '85%',
      label2: 'Tasa de satisfacción'
    }
  },
  {
    id: 5,
    brandName: 'Gourmet Box',
    category: 'Alimentos & Delivery',
    description: 'Diseño de packaging y marca para servicio de cajas gourmet. Sistema visual colorido y apetitoso.',
    image: 'https://images.unsplash.com/photo-1744911491113-dd50a819472a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJyYW5kJTIwcGFja2FnaW5nfGVufDF8fHx8MTc2NTUwMTI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    colors: ['#591fff', '#9908cd', '#ff65a1', '#e0cedd'],
    services: ['Packaging design', 'Branding', 'Marketing digital'],
    results: {
      metric1: '120%',
      label1: 'Crecimiento mensual',
      metric2: '92%',
      label2: 'Tasa de recompra'
    }
  },
];
