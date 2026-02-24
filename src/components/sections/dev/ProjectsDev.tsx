import { useState } from "react";
import { motion } from "motion/react";

interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  stack: string[];
  projectUrl?: string;
  codeUrl?: string;
}

const projects: Project[] = [
  {
    id: "1",
    name: "EduRuta Web",
    description: "Sitio web informativo para la plataforma de educación en línea EduRuta.",
    image: "/dev/eduruta-web.png",
    stack: ["React", "Tailwind CSS", "Supabase", "Google Auth"],
    projectUrl: "https://eduruta.lovable.app/",
    codeUrl: "https://github.com/dinessa-ga/eduruta-web-n8n"

  },
  {
    id: "2",
    name: "Beat - Social Network ",
    description: "Beat, primer proyecto aplicando UX design, reviews de música.",
    image: "dev/beat-app.png",
    stack: ["Javascript", "Firebase", "Figma", "HTML", "CSS"],
    projectUrl: "https://beat-1-29ed1.web.app/",
    codeUrl: "https://github.com/dinessa-ga/DEV003-social-network",
  },
  {
    id: "3",
    name: "Bluetab - Human Resources",
    description: "Formulario y Chatbot para la búsqueda y formación de equipos de trabajo.",
    image: "dev/bluetab.png",
    stack: ["Vite.js", "Flowise AI", "API Open AI", "Airtable"],
    projectUrl: "https://bluetab-test.vercel.app/",
    codeUrl: "https://github.com/dinessa-ga/Bluetab_desarrollo",
  },
  {
    id: "4",
    name: "Bluetab - Human Resources",
    description: "Formulario y Chatbot para la búsqueda y formación de equipos de trabajo.",
    image: "dev/bluetab.png",
    stack: ["Vite.js", "Flowise AI", "API Open AI", "Airtable"],
    projectUrl: "https://bluetab-test.vercel.app/",
    codeUrl: "https://github.com/dinessa-ga/Bluetab_desarrollo",
  },
  {
    id: "5",
    name: "Sitio web HerUX",
    description: "Formulario y Chatbot para la búsqueda y formación de equipos de trabajo.",
    image: "dev/bluetab.png",
    stack: ["Vite.js", "Flowise AI", "API Open AI", "Airtable"],
    projectUrl: "https://bluetab-test.vercel.app/",
    codeUrl: "https://github.com/dinessa-ga/Bluetab_desarrollo",
  },
  {
    id: "6",
    name: "Bluetab - Human Resources",
    description: "Formulario y Chatbot para la búsqueda y formación de equipos de trabajo.",
    image: "dev/bluetab.png",
    stack: ["Vite.js", "Flowise AI", "API Open AI", "Airtable"],
    projectUrl: "https://bluetab-test.vercel.app/",
    codeUrl: "https://github.com/dinessa-ga/Bluetab_desarrollo",
  },
];

export default function ProjectsDev() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section id="projects-dev" className="py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-4xl md:text-5xl font-bold mt-8 mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text"
        >
          Soluciones que he construido
        </motion.h2>

        {/* Subtexto */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-center"
        >
          Explora mis proyectos técnicos y soluciones que demuestran mis habilidades en desarrollo web.
        </motion.p>

        {/* Grid de proyectos */}
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.slice(0, isExpanded ? projects.length : 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
              className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden "
            >
              {/* Imagen */}
              <img
                src={project.image}
                alt={project.name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              {/* Contenido */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-accent text-secondary-foreground px-4 py-2 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones */}
                <div className="flex gap-3">
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border border-border rounded-lg hover:border-primary text-center font-medium transition-colors"
                  >
                    Ver proyecto
                  </a>
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-border rounded-lg hover:border-primary text-center font-medium  transition-colors"
                    >
                      Ver código
                    </a>
                  )}
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Botón Ver más proyectos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <button onClick={() => setIsExpanded(!isExpanded)} className="px-8 py-4 bg-card text-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all border-2 border-border hover:border-primary">
            {isExpanded ? "Ver menos proyectos" : "Ver más proyectos"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}