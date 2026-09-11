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
    brandName: 'Akros',
    category: 'Content Creation & Branding',
    description: 'Proyecto colaborativo para el desarrollo de piezas gráficas moderna y minimalista que refleja innovación y cercanía.',
    image: '/creative/case-study-2.png',
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
        { src: '/creative/projects/akros/case-study-2-art1.png', embedCode: undefined, isVideo: false, platform: 'instagram' },
        { src: '/creative/projects/akros/case-study-2-art2.png', embedCode: undefined, isVideo: false, platform: 'instagram' },
        { src: '/creative/projects/akros/case-study-2-art3.png', embedCode: undefined, isVideo: false, platform: 'instagram' },
        { src: '/creative/projects/akros/case-study-2-art4.png', embedCode: undefined, isVideo: false, platform: 'instagram' },
        { src: '/creative/projects/akros/case-study-2-art5.png', embedCode: undefined, isVideo: false, platform: 'instagram' },
        { src: '/creative/projects/akros/case-study-2-art6.png', embedCode: undefined, isVideo: false, platform: 'instagram' },
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
    id: 2,
    brandName: "Fundación La Casita",
    category: "Branding estratégico y contenido",
    description: "Estrategia de reactivación digital y posicionamiento de marca para una fundación que transforma comunidades vulnerables de Guayaquil mediante arte, educación y voluntariado.",
    image: '/creative/case-study-3.png', // Asegúrate de tener esta imagen
    colors: ["#D97B54", "#4A7C59", "#F7B84B", "#FFFFFF", "#333333"],
    services: [
      "Branding estratégico",
      "Estrategia de contenido",
      "Diseño visual minimalista",
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
            "Elementos gráficos minimalistas simbólicos (historias destacadas)",
            "Diseño de carruseles, reels y posts para Instagram y Facebook en 2025"
          ]
        },
        {
          category: "Contenido digital",
          items: [
            "Calendario editorial en 2023 por 9 meses",
            "Copywriting para redes: copys, captions, slogans, CTAs",
            "Meta Ads para captación de voluntarios",
            "Estrategia diferenciada: Instagram"
          ]
        },
        {
          category: "Estrategia de marca",
          items: [
            "Propuesta de tono y personalidad de marca para 2023, 2025 y 2026",
            "Frase central: 'Sembrando oportunidades, transformando realidades'",
            "Pilares de contenido 2026: Educar, Inspirar, Conectar",
          ]
        }
      ],

      visualExamples: [
        {
          src: '/creative/projects/lc/case-study-3-art1.png',
          embedCode: "",
          isVideo: false,
          platform: "instagram"
        },
         {
          src: '/creative/projects/lc/case-study-3-art2.png',
          embedCode: "",
          isVideo: false,
          platform: "instagram"
        },
         {
          src: '/creative/projects/lc/case-study-3-art3.png',
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
  "id": 3,
  "brandName": "Somos Dev",
  "category": "Branding & Social Media Strategy",
  "description": "Rebranding y estrategia de contenido para comunidad tech de mujeres en LATAM, enfocada en cerrar la brecha de género y potenciar el talento junior.",
  "image": '/creative/case-study-4.png',
  "colors": ["#361358", "#4a4de7", "#faf494", "#f5f5f5"],
  "services": ["Brand Identity", "Content Strategy", "UX Writing", "Inbound Marketing"],
  "results": {
    "metric1": "25%+",
    "label1": "Engagement rate",
    "metric2": "1k+",
    "label2": "Perfiles Tech alcanzados en LinkedIn"
  },
  "caseStudy": {
    "clientOverview": "Somos Dev es una comunidad de Desarrolladoras Web en Latinoamérica (Ecuador, Perú, México y Bolivia) que busca potenciar el desarrollo profesional de perfiles tech femeninos, estudiantes y juniors a través del trabajo en equipo y la mejora de habilidades técnicas.",
    "challenge": "Evolucionar la marca de una identidad informal a una figura de autoridad cercana ('La aliada'). El reto principal era combatir el síndrome del impostor y el aislamiento que sienten las mujeres en sus primeros pasos en tecnología.",
    "purpose": "A pura creatividad, resiliencia y constancia… construir la comunidad tech líder donde cada mujer de LATAM tenga las herramientas y la red de apoyo para alcanzar su máximo potencial.",
    "buyerPersona": {
      "name": "Sofía, La Dev aspirante",
      "age": "20-35 años",
      "occupation": "Estudiante, Junior Developer o profesional en transición a tech",
      "interests": ["Desarrollo Web", "Networking", "Career Growth", "Mentorías"],
      "painPoints": ["Síndrome del impostor", "Falta de referentes femeninos", "Aislamiento profesional", "Miedo al cambio de carrera"]
    },
    "brandPersonality": {
      "tone": ["Empático", "Inspirador", "Cómplice", "Resiliente"],
      "voice": "La Aliada que empodera. Una mentora experta y cercana que no solo enseña, sino que acompaña y protege el crecimiento de su comunidad."
    },
    "contentStrategy": {
      "objectives": [
        "Fomentar el sentido de pertenencia y sororidad.",
        "Proveer recursos técnicos accionables para cerrar brechas de conocimiento.",
        "Visibilizar el talento femenino ante reclutadores y líderes de la industria."
      ],
      "pillars": [
        "Conectar: Comunidad y sororidad (Cercanía)",
        "Inspirar: Historias de éxito y crecimiento (Motivación)",
        "Educar: Recursos técnicos y mentorías (Valor práctico)"
      ]
    },
    "deliverables": [
      {
        "category": "Branding y diseño visual",
        "items": ["Manual de identidad", "Logotipo", "Paleta de colores y tipografías", "Plantillas para publicaciones y presentaciones"]
      },
      {
        "category": "Estrategia de Contenido",
        "items": ["Guía de tono y voz", "Arquitectura de posts (Hooks/Captions)", "Planificación mensual"]
      }
    ],
    "visualExamples": [
      {
        src: '/creative/projects/sd/case-study-4-art1.png',
        "platform": "LinkedIn"
      },
      {
        src: '/creative/projects/sd/case-study-4-art2.png',
        "platform": "Instagram"
      },
      {
        src: '/creative/projects/sd/case-study-4-art3.png',
        "platform": "Instagram"
      }
    ],
    "instagramPosts": [
      
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
      "Definición de un ADN de marca único basado en el arquetipo de 'La aliada'.",
      "Creación de un sistema visual escalable para voluntarias (diseño en Canva).",
      "Optimización de la comunicación en LinkedIn hacia un tono profesional y empático."
    ],
    "testimonials": []
  }
},

{
    id: 4,
    brandName: 'Diana Vanessa',
    category: 'Estrategia de Contenido',
    description: 'Fusiono conocimientos en tecnología con el marketing de contenidos. Traduzco conceptos técnicos complejos en narrativas claras y cercanas.',
    image: '/creative/case-study-1.png',
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
        { src: '/creative/projects/me/case-study-1-art1.png', embedCode: undefined, isVideo: false, platform: 'instagram' },
        { src: '/creative/projects/me/case-study-1-art2.png', embedCode: undefined, isVideo: false, platform: 'instagram' },
        { src: '/creative/projects/me/case-study-1-art3.png', embedCode: undefined, isVideo: false, platform: 'instagram' },
      ],
      instagramPosts: [
        { src: '/creative/projects/me/instagram-post-1.png', embedCode: 'https://www.instagram.com/p/DOY_OhdALKX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', isVideo: false },
        { src: '/creative/projects/me/instagram-post-2.png', embedCode: 'https://www.instagram.com/p/EJEMPLO2/', isVideo: false },
        { src: '/creative/projects/me/instagram-post-3.png', embedCode: 'https://www.instagram.com/p/EJEMPLO3/', isVideo: false },
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
  id: 5,
  brandName: "Fundación La Casita - 2026",
  category: "Estrategia de Contenido, Branding Social & Crecimiento Orgánico",
  description: 
    "Evolución estratégica de marca y sistema de contenidos 2026. Transformando el feed en un canal de descubrimiento y comunidad.",
  image: "/creative/case-study-5.png",
  colors: [
    "#cc553d", // Terracota Real (Identidad y acción)
    "#4A7C59", // Verde Esperanza (Educación y comunidad)
    "#F7B84B", // Amarillo Sol (Creatividad e infancia)
    "#39b4fe", // Celeste Digital (Virtualidad y acento)
    "#2C5F7C", // Azul Profundo (Institucionalidad y confianza)
    "#c75b7a"  // Rosa fuerte LC comunidad secundaria (Casita Kids & Arte)
  ],
  services: [
    "Estrategia de Crecimiento Orgánico",
    "Content Matrix (Educar / Inspirar / Informar)",
    "Guionizado y Hooks Optimizer para Reels y carruseles",
  ],
  results: {
    metric1: "+185%",
    label1: "Alcance orgánico de no seguidores",
    metric2: "3.4x",
    label2: "Aumento en postulaciones de voluntarios"
  },
  caseStudy: {
    clientOverview: 
      "Fundación La Casita es una ONG ecuatoriana fundada en 2015 en Guayaquil por Javier Intriago. Su labor utiliza el arte, la cultura y la pedagogía como herramientas de rescate, inclusión social y educación en sectores vulnerables. Para 2026, la organización requería desligar su percepción digital exclusiva de proyectos puntuales temporales (como Sauces) y fortalecer su Brand Equity como institución permanente y referente de transformación social en Guayaquil.",
    challenge: 
      "Producir una estrategia de crecimiento sostenible con recursos limitados: sin equipo de producción audiovisual in situ en cada sede, dependiendo de capturas del equipo de campo y con la necesidad de no saturar a la audiencia. El reto principal consistió en evitar que la cuenta pareciera un boletín burocrático o cayera en el 'poverty porn', logrando que personas que no conocían la fundación descubrieran su causa, se identificaran con ella y se convirtieran en difusores orgánicos de la marca.",
    purpose: 
      "Sembrando oportunidades, transformando realidades en las comunidades. Utilizar el arte como eje transversal para derrotar el silencio creativo y la exclusión social con dignidad, ética y esperanza.",
    buyerPersona: {
      name: "María",
      age: "22 años",
      occupation: "Estudiante universitaria de últimos ciclos / recién graduada",
      interests: [
        "Voluntariado con propósito",
        "Arte comunitario y educación",
        "Justicia social y desarrollo personal",
        "Proyectos de impacto real en Guayaquil"
      ],
      painPoints: [
        "Siente que lo aprendido en las aulas no genera un impacto real en su entorno.",
        "Frustración por programas de voluntariado superficiales que solo buscan cumplir horas de vinculación.",
        "Desconfianza hacia ONGs con falta de transparencia o mensajes victimizantes."
      ]
    },
    brandPersonality: {
      tone: ["Humano", "Cálido", "Esperanzador", "Comunitario", "Directo", "Transparente"],
      voice: "Cálida, cercana y auténtica. Habla desde el corazón sin caer en tecnicismos ni burocracia, demostrando la transformación con hechos y personas reales, nunca con asistencialismo."
    },
    contentStrategy: {
      objectives: [
        "Nivel 1 (Descubrimiento): Captar a personas en Guayaquil que no conocen La Casita mediante Reels basados en curiosidad y reflexiones educativas.",
        "Nivel 2 (Identificación): Humanizar el impacto a través de las historias y frases de docentes, familias y participantes.",
        "Nivel 3 (Comunidad): Activar a los seguidores existentes como distribuidores orgánicos mediante dinámicas semanales en Stories (martes de interacción y jueves de recomendación).",
        "Optimización Operativa: Mantener una cadencia viable de 3 posts semanales en feed con un sistema de bajo esfuerzo de producción y alta reutilización de archivo visual."
      ],
      pillars: [
        "Educar: Aportar valor y reflexiones sobre el arte como motor pedagógico, convivencia, valores y fechas cívicas desde un ángulo social.",
        "Inspirar: Conexión emocional, testimonios sin revictimización, crónicas de docentes y transformaciones de los participantes.",
        "Informar: Información concreta, transparente y accionable (convocatorias de voluntariado, talleres semanales, rendición de cuentas)."
      ]
    },
    deliverables: [
      {
        category: "Manual y Sistema Visual 2026",
        items: [
          "Sistema de 5 paletas modulares para Canva Pro (LC Alma, LC Digital, LC Arte, LC Comunidad y LC Neutro).",
          "Jerarquía tipográfica reglamentaria (Quicksand para títulos, Nunito para subtítulos y Open Sans para cuerpo).",
          "Set de iconografía y elementos planos: Casa Simbólica, Árbol de Impacto, Manos que se sostienen y Pincel de Amor.",
          "Guía de Ética Visual: Protocolo de dignidad fotográfica frente a la revictimización."
        ]
      },
      {
        category: "Estructura Operativa de Contenido",
        items: [
          "Calendario semanal sostenible (Lunes de descubrimiento, Miércoles de autoridad humana/docentes, Viernes de información/talleres).",
          "Estrategia de Stories diferenciada del feed (Martes de interacción / Jueves de recomendación comunitaria).",
          "Framework Hooks Optimizer (alineación verbal, visual y textual en los primeros 3 segundos).",
          "Base de prompts y directrices para GPT especializada de redacción institucional."
        ]
      }
    ],
    visualExamples: [
      {
        src: '/creative/projects/lc5/case-study-5-art1.png',
        embedCode: "https://www.instagram.com/p/DF_example1/",
        isVideo: false,
        platform: "instagram"
      },
      {
        src: '/creative/projects/lc5/case-study-5-art2.png',
        embedCode: "https://www.instagram.com/reel/DF_example2/",
        isVideo: true,
        platform: "instagram"
      },
      {
        src: '/creative/projects/lc5/case-study-5-art3.png',
        embedCode: "https://www.instagram.com/p/DF_example3/",
        isVideo: false,
        platform: "instagram"
      }
    ],
    instagramPosts: [
      {
        src: "/assets/portfolio/la-casita/reel-clausura.webp",
        embedCode: "https://www.instagram.com/reel/DF_example4/",
        isVideo: true
      },
      {
        src: "/assets/portfolio/la-casita/post-voluntariado.webp",
        embedCode: "https://www.instagram.com/p/DF_example5/",
        isVideo: false
      }
    ],
    copyExamples: [
      {
        type: "slogan",
        text: "Sembrando oportunidades, transformando realidades en las comunidades."
      },
      {
        type: "caption",
        text: "La paz no es solo la ausencia de conflicto, también se aprende y se ejercita todos los días. En cada taller donde un niño aprende a escuchar a su compañero, a compartir sus materiales y a expresar lo que siente con un pincel, estamos construyendo convivencia pacífica. El arte enseña a dialogar antes que a confrontar. Compártele esta reflexión a alguien que trabaje por la educación en nuestra ciudad."
      },
      {
        type: "caption",
        text: "Detrás de cada historia hay alguien que enseña a mirar. Cuando Alba Tobar llegó al taller de cine, su objetivo no era solo encender una cámara, sino recordarles a los chicos que su voz y su punto de vista importan. Como ella siempre nos dice: No hay barreras ni límites para el arte. Déjale en los comentarios un mensaje de agradecimiento a los docentes que con paciencia transforman nuestras comunidades."
      },
      {
        type: "copy",
        text: "¿Buscando dónde realizar tus prácticas comunitarias o poner tu vocación al servicio de los demás? En Fundación La Casita abrimos convocatorias para estudiantes y jóvenes comprometidos con el arte, la educación y el cambio social. Modalidad presencial con horarios flexibles y certificación oficial. Escríbenos directamente por WhatsApp al 0999332612 y conoce cómo unirte a nuestro equipo."
      }
    ],
    results: [
      "Consolidación de la identidad visual de la fundación en Canva Pro, logrando uniformidad cromática y tipográfica en todas las piezas digitales.",
      "Desacoplamiento exitoso de la percepción de marca: la audiencia comprendió que los proyectos comunitarios son brazos operativos de un propósito institucional mayor.",
      "Optimización del tiempo de producción en un 60% al aplicar la regla de reciclaje inteligente de material de campo y la matriz de pilares por intención.",
      "Crecimiento del engagement calificado en Stories (+42% de interacción en stickers de encuesta y recomendación) gracias a la separación estratégica entre Feed y Stories.",
      "Atracción de voluntarios universitarios con alta retención moral sin necesidad de pauta publicitaria pagada."
    ],
    testimonials: [
      {
        text: "La estrategia nos permitió ordenar el caos del día a día. Pasar de publicar sin rumbo a tener pilares claros hizo que el esfuerzo de nuestro pequeño equipo rindiera el triple y que la gente en Guayaquil realmente entienda quiénes somos.",
        author: "Javier Intriago",
        position: "Fundador y Director, Fundación La Casita"
      },
      
    ]
  }
},


 

];
