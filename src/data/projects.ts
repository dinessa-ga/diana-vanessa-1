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
        interests: ['Plataformas de E-commerce/Landing pages', 'Experiencia de Usuario (UX)', 'Growth Marketing', 'Inteligencia Artificial'],
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
        'Fundadora y líder de contenido de la comunidad Somos Dev',
        'Desarrollo de MVPs  en Hackathons (Experian, Bluetab)',
        'Estrategias de contenido exitosas en Akros y La Casita',
        'Optimización de procesos mediante herramientas No-Code',
        'Creación de agentes de IA para generación de contenido'
      ],
      testimonial: {
        text: 'Diana, es una profesional apasionada por el desarrollo web, está en constante actualización tecnológica y desafiando retos en el ámbito web. ¡Si ustedes necesitan a alguien con determinación, pasión, no duden en contratar a Diana, estoy segura de que será fundamental en su equipo!',
        author: 'Mayra Ceballos / Laboratoria',
        position: 'Senior Recruiter IT'
      }
    }
  },

  {
    id: 2,
    brandName: 'Akros',
    category: 'Content Creation & Branding',
    description: 'Línea gráfica gestionada con el equipo de marketing, para el contenido de valor para empresa tecnológica. Desarrollo de piezas gráficas moderna y minimalista que refleja innovación y cercanía.',
    image: 'src/assets/case-study-2.png',
    colors: ['#aa1a85', '#eef0ff', '#eb2766', '#001865', '#ffbc00'],
    services: ['Rebranding', 'Diseño web', 'Estrategia de marca'],
    results: {
      metric1: '200%',
      label1: 'Aumento en conversiones',
      metric2: '$2M',
      label2: 'Ronda de inversión'
    },
    caseStudy: {
      clientOverview: 'Akros domina el entorno digital con soluciones integradas, personalizadas y escalables. Acompaña la evolución tecnológica con visión, control y propósito.',
      challenge: 'Generar contenido de valor manteniendo criterio técnico y emocional, a través de generar estructuras y mejora de procesos de contenido',
      deliverables: [
        {
          category: 'Estrategia de contenido',
          items: ['Auditoría de marca', 'Reposicionamiento estratégico', 'Arquitectura de marca', 'Messaging framework']
        },
        {
          category: 'Contenido y diseño',
          items: ['Estrategia de contenido B2B', 'Carruseles(15)', 'Infografías (5)', 'Blog Linkedin(6)']
        },

      ],
      results: [
        'Aumento del 200% en conversiones del sitio web',
        'Cierre de ronda de inversión de $2M',
        'Reducción del 40% en ciclo de ventas',
        'Aumento del 150% en leads calificados'
      ],

      visualExamples: [
         'src/assets/akros/case-study-2-art1.png',
        'src/assets/akros/case-study-2-art2.png',
        'src/assets/akros/case-study-2-art3.png',
        'src/assets/akros/case-study-2-art4.png',
        'src/assets/akros/case-study-2-art5.png',
        'src/assets/akros/case-study-2-art6.png',
       
      ],

      copyExamples: [
        {
          type: 'Caption de carrusel de LinkedIn',
          text: '¿Qué tienen en común un banco, un gobierno y una tienda online? Cada sector enfrenta amenazas distintas, pero todos necesitan lo mismo: contexto, visibilidad y acción para anticiparse. En Akros, activamos soluciones de ciberseguridad que combinan inteligencia, tecnología y visión de negocio. Descubre cómo podemos ayudarte a anticipar lo que otros aún no ven. 🔍 Contáctanos: '
        },
       
      ],
    }
  },

];
