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
          category: 'Estrategia de contenido',
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
    brandName: 'Diana Vanessa | Tech Content Strategist',
    category: 'Estrategia de Contenido',
    description: 'Consultoría estratégica que fusiona conocimientos en tecnología con el marketing de contenidos. Traduzco conceptos técnicos complejos en narrativas claras y diseño de microcopy.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwd29tYW4lMjB3cml0aW5nfGVufDF8fHx8MTc2NTQxMjg4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['#ff65a1', '#591fff', '#9908cd', '#fff3fe', '#0a0224'],
    services: ['Estrategia de Contenidos Tech', 'UX Writing & Microcopy', 'Gestión de Comunidades', 'Redacción Técnica'],
    results: {
      metric1: 'Top Tier',
      label1: 'Posicionamiento Tech',
      metric2: 'Híbrido',
      label2: 'Perfil técnico + Creativo'
    },
    caseStudy: {
      clientOverview: 'Ingeniera en Sistemas con conocimientos en UX Writing y Marketing. Fundadora de Somos Dev, comunidad tech y experta en liderar la comunicación de productos digitales.',
      challenge: 'El sector tecnológico carece de comunicadores que entiendan el código, herramientas digitales y procesos en tecnología. El reto es posicionar una marca que demuestre capacidad técnica y sensibilidad creativa desde las palabras y el diseño.',
      purpose: 'Humanizar la tecnología mediante palabras precisas y estrategias basadas en datos, ayudando a empresas a conectar auténticamente con sus usuarios y potenciales clientes.',
      buyerPersona: {
        name: 'David Product Manager',
        age: '30-45 años',
        occupation: 'Líder de Producto / CEO Tech',
        interests: ['SaaS', 'Experiencia de Usuario (UX)', 'Growth Hacking', 'Inteligencia Artificial'],
        painPoints: ['Tiene un producto técnico increíble pero difícil de explicar', 'Necesita mejorar la retención de usuarios', 'Busca perfiles que entiendan el backend y el frontend del negocio']
      },
      brandPersonality: {
        tone: ['Analítico', 'Empático', 'Profesional', 'Innovador'],
        voice: 'La "Traductora Tecnológica": Capaz de hablar de APIs con los devs y de beneficios con los usuarios. Clara, directa y orientada a soluciones.'
      },
      contentStrategy: {
        objectives: [
          'Demostrar autoridad técnica en desarrollo y herramientas IA',
          'Evidenciar habilidades de liderazgo comunitario',
          'Educar sobre la importancia del UX Writing en el software',
          'Atraer proyectos que requieran visión técnica y ejecución creativa'
        ],
        pillars: [
          'Tech & Code (Frontend, Python, IA)',
          'UX Writing (La voz del producto)',
          'Community Building (Somos Dev)',
          'Productividad Ágil (Notion, Jira)'
        ]
      },
      deliverables: [
        {
          category: 'Estrategia de comunidad',
          items: ['Planificación de contenidos Tech', 'Organización de webinars y talleres', 'Estrategia de crecimiento en LinkedIn', 'Gestión de alianzas estratégicas']
        },
        {
          category: 'UX Writing & Producto',
          items: ['Microcopy para interfaces', 'Diseño de flujos conversacionales (Chatbots)', 'Investigación de usuarios (Maze)', 'Documentación en Confluence']
        },
        {
          category: 'Marketing de contenidos',
          items: ['Artículos técnicos traducidos a lenguaje comercial', 'Posts con storytelling de datos', 'Guiones corporativos', 'Uso de IA para generación de copy']
        },
        {
          category: 'Desarrollo Frontend',
          items: ['Estructura HTML/CSS/JS para landing pages', 'Prototipado en Figma', 'Implementación de lógica básica', 'Optimización SEO técnica']
        }
      ],
      visualExamples: [
        'https://media.licdn.com/dms/image/v2/D4E22AQH56T5Wuf7EMw/feedshare-shrink_2048_1536/B4EZP0Bl.3HEAo-/0/1734965878979?e=1767830400&v=beta&t=iHBYyD6SRmDDhaDtuGTyyvvEC0Ag0_S937zwX6ksDNo',
        'https://media.licdn.com/dms/image/v2/D4E22AQEQYhLudkV4Tg/feedshare-shrink_800/feedshare-shrink_800/0/1712860141168?e=1767830400&v=beta&t=1S9wYrEh9MlIkdSZnbjwsgyT4G2JBCY9Gz9237YjHO4',
        'https://media.licdn.com/dms/image/v2/D4E22AQGczFGjDvi1Pg/feedshare-shrink_1280/feedshare-shrink_1280/0/1715987581536?e=1767830400&v=beta&t=rVIsEpyjarowNxxEGOCGg18eMePNlcqoA3n1Zg8kGvg',
],
      copyExamples: [
        {
          type: 'Bio de LinkedIn',
          text: '💻 Ingeniera en Sistemas & UX Writer. Ayudo a empresas a transformar código complejo en experiencias de usuario irresistibles. Founder de @SomosDev.'
        },
        {
          type: 'Microcopy (Error App)',
          text: 'Antes: "Error 404". \nPropuesta UX: "Parece que hubo un cruce en los cables. No pudimos cargar tu historial por el momento. ¿Intentamos de nuevo?"'
        },
        {
          type: 'Post de Comunidad',
          text: '🚀 No es solo código, es comunicación. En el último Hackathon vi grandes ideas fallar al explicarse. Como devs, a veces olvidamos que el usuario no ve el backend, ve el texto.'
        }
      ],
      results: [
        'Fundadora y líder de crecimiento de la comunidad Somos Dev',
        'Desarrollo de MVPs premiados en Hackathons (Experian, Bluetab)',
        'Estrategias de contenido exitosas en Akros y La Casita',
        'Optimización de procesos mediante herramientas No-Code',
        'Creación de asistentes virtuales IA para análisis de datos'
      ],
      testimonial: {
        text: 'Su capacidad para entender la arquitectura técnica y traducirla en una estrategia de contenido coherente es única. No solo escribe, diseña soluciones que mejoran la experiencia del usuario.',
        author: 'CTO / Cliente Tech',
        position: 'Líder de Desarrollo'
      }
    }
  },

];
