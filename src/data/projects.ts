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
    visualExamples?: Array<{
      src: string;
      embedCode?: string;
      isVideo?: boolean;
      platform?: 'instagram' | string;
    }>; // URLs o datos de publicaciones de Instagram en formato 1080x1350
    instagramPosts?: Array<{
      src: string;
      embedCode: string;
      isVideo?: boolean;
    }>; // Enlaces directos o códigos de inserción de publicaciones de Instagram
    copyExamples?: {
      type: string; // 'caption', 'copy', 'slogan', etc.
      text: string;
    }[];
    results: string[];
    testimonials: Array<{
      text: string;
      author: string;
      position: string;
    }>;
  };
}

export const brandProjects: BrandProject[] = [

  {
    id: 1,
    brandName: 'Diana Vanessa',
    category: 'Estrategia de Contenido',
    description: 'Fusiono conocimientos en tecnología con el marketing de contenidos. Traduzco conceptos técnicos complejos en narrativas claras y diseño de microcopy.',
    image: 'case-study-1.png',
    colors: ['#ff65a1', '#591fff', '#9908cd', '#fff3fe', '#0a0224'],
    services: ['Estrategia de Contenidos Tech', 'UX Writing & Microcopy', 'Gestión de Comunidades', 'Redacción Técnica'],
    results: {
      metric1: 'Top Tier',
      label1: 'Posicionamiento Tech',
      metric2: 'Híbrido',
      label2: 'Perfil técnico + Creativo'
    },
    caseStudy: {
      clientOverview: 'Ingeniera en Sistemas con experiencia en marketing digital, conocimientos en UX Writing y creación de contenido.',
      challenge: 'El sector tecnológico carece de comunicadores que entiendan el código, herramientas digitales y procesos en tecnología. El reto es posicionar una marca que demuestre capacidad técnica y sensibilidad creativa desde las palabras y el diseño.',
      purpose: 'Humanizar la tecnología mediante palabras precisas y estrategias basadas en datos, ayudando a empresas a conectar auténticamente con sus usuarios y potenciales clientes.',
      buyerPersona: {
        name: 'Product Manager',
        age: '25-45 años',
        occupation: 'Líder de Producto / CEO Tech',
        interests: ['Plataformas de E-commerce/Landing pages', 'Experiencia de Usuario (UX)', 'Growth Marketing', 'Inteligencia Artificial'],
        painPoints: ['Tiene un producto técnico increíble pero difícil de explicar', 'Necesita mejorar la retención de usuarios', 'Busca perfiles que entiendan el backend y el frontend del negocio']
      },
      brandPersonality: {
        tone: ['Analítico', 'Empático', 'Profesional', 'Innovador'],
        voice: '"Traductora Tecnológica": Capaz de hablar de APIs con los devs y de beneficios con los usuarios. Clara, directa y orientada a soluciones.'
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
          'Community Building',
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
        { src: 'me/case-study-1-art1.png', embedCode: undefined, isVideo: false, platform: 'instagram' },
        { src: 'me/case-study-1-art2.png', embedCode: undefined, isVideo: false, platform: 'instagram' },
        { src: 'me/case-study-1-art3.png', embedCode: undefined, isVideo: false, platform: 'instagram' },
      ],
      instagramPosts: [
        { src: 'me/instagram-post-1.png', embedCode: 'https://www.instagram.com/p/DOY_OhdALKX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', isVideo: false },
        { src: 'me/instagram-post-2.png', embedCode: 'https://www.instagram.com/p/EJEMPLO2/', isVideo: false },
        { src: 'me/instagram-post-3.png', embedCode: 'https://www.instagram.com/p/EJEMPLO3/', isVideo: false },
      ],
      copyExamples: [
        {
          type: 'Bio de LinkedIn',
          text: 'He formado parte de equipos dedicados a la creación y ejecución de estrategias de contenido y comunicación digital, fortaleciendo la identidad y visibilidad de marcas y comunidades.'
        },
      
        {
          type: 'Post de Comunidad',
          text: 'Este 2025 construiremos una comunidad tech fortalecida con tus conocimientos y de lo mucho que puedes aprender.👩🏽‍💻 \n👉 ¡Únete! ¡Déjanos un comentario o escríbenos directamente! 🚀✨\nSi ya tomaste la decisión de unirte, puedes llenar el siguiente formulario y luego escríbenos directamente.😊'
        }
      ],
      results: [
        'Desarrollo de MVPs  en Hackathons (Experian, Bluetab)',
        'Estrategias de contenido en organizaciones sociales y de tecnología',
        'Optimización de procesos mediante herramientas No-Code',
        'Creación de agentes de IA para generación de contenido'
      ],
      testimonials: [
        {
          text: 'Diana, es una profesional apasionada por el desarrollo web, está en constante actualización tecnológica y desafiando retos en el ámbito web. ¡Si ustedes necesitan a alguien con determinación, pasión, no duden en contratar a Diana, estoy segura de que será fundamental en su equipo!',
          author: 'Mayra Ceballos / Laboratoria',
          position: 'Coordinadora de Employability & Placement'
        },
        {
          text: 'He tenido la oportunidad de coincidir profesionalmente con Diana y puedo destacar su amplio conocimiento en diversas áreas, lo que le permite aportar valor de manera integral en los equipos en los que participa. Se caracteriza por ser una persona gentil, colaborativa y con una energía muy positiva, lo que contribuye a generar un ambiente de trabajo ameno y motivador. Su disposicion para apoyar y su actitud proactiva hacen que sea un gran soporte dentro de cualquier equipo. Sin duda, Diana es una profesional que suma tanto por sus habilidades como por su calidad humana.',
          author: 'Ivanna Maridueña / Akros',
          position: 'Analista de Talento Humano'
        },
        {
          text: 'Diana fue una de nuestras estudiantes del programa dual de Negociación y Ventas de servicios digitales de la Universidad Católica de Cuenca. Ahí demostró madurez, compromiso y responsabilidad, cumpliendo con todo lo necesario en la fase académica y empresarial. Además, demostró rápidas habilidades de adaptacion y planteo propuestas pertinentes para la empresa.',
          author: 'Andre Vallejo / Universidad Católica de Cuenca',
          position: 'Coordinadora Campus Quito'
        },
      ]
  
    }
  },
  {
    id: 2,
    brandName: 'Akros',
    category: 'Content Creation & Branding',
    description: 'Proyecto colaborativo para el desarrollo de piezas gráficas moderna y minimalista que refleja innovación y cercanía.',
    image: 'case-study-2.png',
    colors: ['#aa1a85', '#eef0ff', '#eb2766', '#001865', '#ffbc00'],
    services: ['Estrategia de contenido', 'Contenido y diseño de piezas gráficas'],
    results: {
      metric1: '20%',
      label1: 'Reconocimiento de marca',
      metric2: '30%',
      label2: 'Asistencia a eventos'
    },
    caseStudy: {
      clientOverview: 'Akros domina el entorno digital con soluciones integradas, personalizadas y escalables. Acompaña la evolución tecnológica con visión, control y propósito.',
      challenge: 'Generar contenido de valor manteniendo criterio técnico y emocional, a través de generar estructuras y mejora de procesos de contenido.',
      deliverables: [
        {
          category: 'Estrategia de contenido',
          items: ['Auditoría de marca', 'Reposicionamiento estratégico', 'Análisis del proceso de contenido y branding', 'Creación de agentes de IA']
        },
        {
          category: 'Contenido y diseño',
          items: ['Estrategia de contenido B2B', 'Carruseles(15)', 'Infografías (5)', 'Blog Linkedin(6)']
        },
      ],
      visualExamples: [
        { src: 'akros/case-study-2-art1.png', embedCode: undefined, isVideo: false, platform: 'instagram' },
        { src: 'akros/case-study-2-art2.png', embedCode: undefined, isVideo: false, platform: 'instagram' },
        { src: 'akros/case-study-2-art3.png', embedCode: undefined, isVideo: false, platform: 'instagram' },
        { src: 'akros/case-study-2-art4.png', embedCode: undefined, isVideo: false, platform: 'instagram' },
        { src: 'akros/case-study-2-art5.png', embedCode: undefined, isVideo: false, platform: 'instagram' },
        { src: 'akros/case-study-2-art6.png', embedCode: undefined, isVideo: false, platform: 'instagram' },
      ],
    

      copyExamples: [
        {
          type: 'Caption de carrusel de LinkedIn',
          text: '¿Qué tienen en común un banco, un gobierno y una tienda online? \nCada sector enfrenta amenazas distintas, pero todos necesitan lo mismo: contexto, visibilidad y acción para anticiparse. \nEn Akros, activamos soluciones de ciberseguridad que combinan inteligencia, tecnología y visión de negocio. \nDescubre cómo podemos ayudarte a anticipar lo que otros aún no ven. 🔍 Contáctanos: '
        },
      ],
      results: [],
      testimonials: []
    }
  },

];
