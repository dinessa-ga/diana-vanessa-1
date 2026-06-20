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
    description: 'Fusiono conocimientos en tecnología con el marketing de contenidos. Traduzco conceptos técnicos complejos en narrativas claras y cercanas.',
    image: 'case-study-1.png',
    colors: ['#ff65a1', '#591fff', '#fff3fe', '#0a0224'],
    services: ['Estrategia de Contenidos Tech', 'UX Writing & Microcopy', 'Gestión de Comunidades', 'Redacción Técnica'],
    results: {
      metric1: 'Top Tier',
      label1: 'Posicionamiento Tech',
      metric2: 'Híbrido',
      label2: 'Perfil técnico + Creativo'
    },
    caseStudy: {
      clientOverview: 'Como Ingeniera en Sistemas con experiencia en marketing digital y creación de contenido, me dedico a darle vida a las ideas para tu marca.',
      challenge: 'Generar estrategias que comunican con cercanía tu producto o servicio. El reto es posicionar tu marca para que demuestre capacidad técnica, cercanía más allá de las palabras y el diseño.',
      purpose: 'Humanizar tu servicio o producto mediante estrategias basadas en datos, ayudando a tu negocio a conectar auténticamente con tus usuarios y potenciales clientes.',
      buyerPersona: {
        name: 'Gerente',
        age: '25-45 años',
        occupation: 'Líder de Producto / Emprendedor experto',
        interests: ['Plataformas de E-commerce/Landing pages', 'Incrementar ventas e implementación de estrategias', 'Growth Marketing', 'Automatización de procesos creativos'],
        painPoints: ['Tiene un producto/servicio difícil de explicar', 'Necesita mejorar la captación de clientes potenciales', 'Busca perfiles que entiendan la automatización y procesos creativos.']
      },
      brandPersonality: {
        tone: ['Analítico', 'Empático', 'Profesional'],
        voice: 'Traductora técnica: Capaz de hablar de tecnología con los devs, de beneficios con los usuarios y de comunicar temas complejos de forma cercana. Clara, directa y orientada a soluciones.'
      },
      contentStrategy: {
        objectives: [
          'Demostrar autoridad técnica en desarrollo y herramientas IA',
          'Evidenciar habilidades en marketing estratégico',
          'Educar sobre la importancia del UX Writing en el software',
          'Atraer proyectos que requieran visión técnica y ejecución creativa'
        ],
        pillars: [
          'Educar (Tech, Code & Branding)',
          'Inspirar (Experiencias que conectan)',
          'Conectar (Procesos creativos y humanos detrás de la tecnología)',
        ]
      },
      deliverables: [

        {
          category: 'Marketing de contenidos',
          items: ['Artículos técnicos traducidos a lenguaje comercial', 'Posts con storytelling de datos', 'Guiones corporativos', 'Uso de IA para generación de copy personalizados']
        },
        {
          category: 'Desarrollo Frontend',
          items: ['Estructura HTML/CSS/JS para landing pages', 'Prototipado en Figma', 'Implementación de lógica básica']
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
          text: 'Este 2025 construiremos una comunidad tech fortalecida con tus conocimientos y de lo mucho que puedes aprender. \n👉 ¡Únete! ¡Déjanos un comentario o escríbenos directamente! \nSi ya tomaste la decisión de unirte, puedes llenar el siguiente formulario y luego escríbenos directamente.😊'
        }
      ],
      results: [
        'Desarrollo de MVPs  en Hackathons (Experian, Bluetab).',
        'Estrategias de marketing y contenido en organizaciones sociales, tecnológicas y emprendimientos.',
        'Optimización de procesos mediante herramientas No-Code.',
        'Creación de agentes de IA para generación de contenido.'
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

  {
    id: 3,
    brandName: "Fundación La Casita",
    category: "Non-Profit / Social Impact",
    description: "Estrategia de reactivación digital y posicionamiento de marca para una fundación que transforma comunidades vulnerables de Guayaquil mediante arte, educación y voluntariado.",
    image: "/images/casestudies/lacasita-cover.jpg", // Asegúrate de tener esta imagen
    colors: ["#D97B54", "#4A7C59", "#F7B84B", "#FFFFFF", "#333333"],
    services: [
      "Branding estratégico",
      "Estrategia de contenido",
      "Diseño visual minimalista",
      "Copywriting emocional",
      "Posicionamiento en redes sociales"
    ],
    results: {
      metric1: "80%",
      label1: "Más engagement potencial",
      metric2: "3x",
      label2: "Más visibilidad orgánica"
    },
    caseStudy: {
      clientOverview:
        "Fundación La Casita es una organización sin fines de lucro fundada en 2015 en Guayaquil por Javier Intriago. Desde una pequeña casa en La Carolina, ha crecido hasta convertirse en un centro comunitario que ofrece talleres artísticos, educativos y de emprendimiento a niños, jóvenes y adultos en situación de vulnerabilidad. Su misión es mejorar la calidad de vida a través del arte y la inclusión social, fomentando el voluntariado y la conciencia social.",

      challenge:
        "En 2023 y 2025, a pesar de su impacto real en las comunidades, su presencia digital estaba inactiva. Sus redes sociales no reflejaban su identidad emocional ni su trabajo constante. Necesitaban una estrategia clara para reactivar sus canales, atraer nuevos voluntarios y contar su historia con autenticidad, coherencia y profesionalismo.",

      purpose:
        "Reposicionar a La Casita como una organización humana, cercana y transformadora, utilizando el diseño y el contenido para visibilizar su labor, fortalecer su comunidad digital y facilitar la participación ciudadana.",

      buyerPersona: {
        name: "María",
        age: "19–35 años",
        occupation: "Estudiante universitaria, graduados recientes, jóvenes profesionales",
        interests: ["Voluntariado", "Arte social", "Desarrollo personal", "Cambio comunitario"],
        painPoints: [
          "No sabe cómo contribuir con sus conocimientos fuera del aula",
          "Busca experiencias significativas, no solo cumplir horas de práctica",
          "Quieren aprender y crecer mientras ayudan, no solo dar su tiempo",
          "Conectar con una comunidad real y ver el impacto de su trabajo"
        ]
      },

      brandPersonality: {
        tone: ["cercano", "inspirador", "humano", "esperanzador"],
        voice: "Una voz cálida y clara que habla desde el corazón, conectando emociones con acciones reales. Usa un lenguaje sencillo pero profundo, evitando tecnicismos."
      },

      contentStrategy: {
        objectives: [
          "Reactivar redes sociales con contenido auténtico y visualmente coherente.",
          "Atraer nuevos voluntarios entre estudiantes y jóvenes profesionales.",
          "Contar la historia de impacto año a año."
        ],
        pillars: [
          "Interactuar: Voluntariado y comunidad",
          "Conectar: Historias reales de cambio comunitario",
          "Inspirar: El arte como herramienta de transformación social",
        ]
      },

      deliverables: [
        {
          category: "Identidad visual",
          items: [
            "Paleta de colores institucionales (principal + secundarias)",
            "Guía de tipografías para Canva Pro",
            "Elementos gráficos minimalistas simbólicos (casa, manos, árbol, camino)"
          ]
        },
        {
          category: "Contenido digital",
          items: [
            "Calendario editorial en 2023 por 9 meses",
            "Copywriting para redes: captions, slogans, CTAs",
            "Guión para Reel de aniversario",
            "Estrategia diferenciada: Instagram vs Facebook vs TikTok"
          ]
        },
        {
          category: "Estrategia de marca",
          items: [
            "Propuesta de tono y personalidad de marca",
            "Frase central: 'Sembrando oportunidades, transformando realidades'",
            "Modelo de uso de elementos gráficos en diseños"
          ]
        }
      ],

      visualExamples: [
        {
          src: 'lc/case-study-3-art1.png',
          embedCode: "",
          isVideo: false,
          platform: "instagram"
        },
         {
          src: 'lc/case-study-3-art2.png',
          embedCode: "",
          isVideo: false,
          platform: "instagram"
        },
         {
          src: 'lc/case-study-3-art3.png',
          embedCode: "",
          isVideo: false,
          platform: "instagram"
        },
      
      ],

      copyExamples: [
        {
          type: "slogan",
          text: "Sembrando oportunidades, transformando realidades en las comunidades."
        },
        {
          type: "caption",
          text: "¿Eres estudiante y buscas hacer tus prácticas con propósito? Únete a La Casita y transforma vidas con arte y educación. 🎨📚 #VoluntariadoQueTransforma"
        },
        {
          type: "cta",
          text: "Escríbenos por WhatsApp y sé parte del cambio → 0995738930"
        }
      ],

      results: [
        "Presencia digital reactivada con identidad visual coherente",
        "Kit de marca listo para uso continuo por voluntarios",
        "Contenido emocional que conecta con jóvenes y donantes",
      ],

      testimonials: [
        {
          text: "Este trabajo no solo dio forma a nuestra imagen, sino que nos ayudó a recordar quiénes somos y por qué empezamos. Ahora podemos contar nuestra historia con claridad, firmeza y humanidad.",
          author: "Javier Intriago",
          position: "Director Fundador, Fundación La Casita"
        }
      ]
    }
  },

  {
  "id": 4,
  "brandName": "Somos Dev",
  "category": "Branding & Social Media Strategy",
  "description": "Rebranding y estrategia de contenido para la comunidad tech de mujeres más grande de LATAM, enfocada en cerrar la brecha de género y potenciar el talento junior en Perú y Ecuador.",
  "image": "https://tu-portfolio.com/images/somos-dev-hero.jpg",
  "colors": ["#361358", "#4a4de7", "#faf494", "#f5f5f5"],
  "services": ["Brand Identity", "Content Strategy", "UX Writing", "Inbound Marketing"],
  "results": {
    "metric1": "25%+",
    "label1": "Engagement Rate",
    "metric2": "1.5k+",
    "label2": "Miembros Activos"
  },
  "caseStudy": {
    "clientOverview": "Somos Dev es una comunidad de Desarrolladoras Web en Latinoamérica (Perú y Ecuador) que busca potenciar el desarrollo profesional de perfiles tech femeninos, estudiantes y juniors a través del trabajo en equipo y la mejora de habilidades técnicas.",
    "challenge": "Evolucionar la marca de una identidad informal a una figura de autoridad cercana ('La Aliada'). El reto principal era combatir el síndrome del impostor y el aislamiento que sienten las mujeres en sus primeros pasos en tecnología.",
    "purpose": "A pura creatividad, resiliencia y constancia… construir la comunidad tech líder donde cada mujer de LATAM tenga las herramientas y la red de apoyo para alcanzar su máximo potencial.",
    "buyerPersona": {
      "name": "Sofía, La Dev Aspirante",
      "age": "20-27 años",
      "occupation": "Estudiante o Junior Developer",
      "interests": ["Desarrollo Web", "Networking", "Career Growth", "Mentorías"],
      "painPoints": ["Síndrome del impostor", "Falta de referentes femeninos", "Aislamiento profesional", "Miedo al cambio de carrera"]
    },
    "brandPersonality": {
      "tone": ["Empático", "Inspirador", "Cómplice", "Resiliente"],
      "voice": "La Aliada Empoderadora. Una mentora experta y cercana que no solo enseña, sino que acompaña y protege el crecimiento de su comunidad."
    },
    "contentStrategy": {
      "objectives": [
        "Fomentar el sentido de pertenencia y sororidad.",
        "Proveer recursos técnicos accionables para cerrar brechas de conocimiento.",
        "Visibilizar el talento femenino ante reclutadores y líderes de la industria."
      ],
      "pillars": [
        "Sororidad y Cultura (Conexión)",
        "Crecimiento Profesional (Empoderamiento)",
        "Visibilidad e Inspiración (Impulso)"
      ]
    },
    "deliverables": [
      {
        "category": "Branding Visual",
        "items": ["Manual de Identidad", "Logotipo {S;D}", "Librería de Íconos Vectoriales", "Paleta de Colores de Alto Contraste"]
      },
      {
        "category": "Estrategia de Contenido",
        "items": ["Guía de Tono y Voz", "Arquitectura de Posts (Hooks/Captions)", "Planificación Mensual Multi-canal"]
      }
    ],
    "visualExamples": [
      {
        "src": "https://tu-portfolio.com/images/somos-dev-branding.jpg",
        "platform": "LinkedIn"
      },
      {
        "src": "https://tu-portfolio.com/images/somos-dev-infographic.jpg",
        "platform": "Instagram"
      }
    ],
    "instagramPosts": [
      {
        "src": "https://tu-portfolio.com/images/post-voluntarias.jpg",
        "embedCode": "<blockquote class='instagram-media' data-instgrm-captioned ...></blockquote>",
        "isVideo": false
      }
    ],
    "copyExamples": [
      {
        "type": "Post Hook",
        "text": "¿Conoces ese código que 'funciona'... pero que nadie se atreve a tocar? Hablemos de la deuda técnica invisible."
      },
      {
        "type": "Slogan",
        "text": "A pura creatividad, resiliencia y constancia… construyendo comunidad tech."
      }
    ],
    "results": [
      "Definición de un ADN de marca único basado en el arquetipo de 'La Aliada'.",
      "Creación de un sistema visual escalable para voluntarias (diseño en Inkscape/Affinity).",
      "Optimización de la comunicación en LinkedIn hacia un tono profesional pero empático."
    ],
    "testimonials": [
      {
        "text": "Somos Dev me dio la confianza para aplicar a mi primer empleo cuando pensaba que no estaba lista.",
        "author": "Ana Pérez",
        "position": "Junior Frontend Dev"
      }
    ]
  }
},

];
