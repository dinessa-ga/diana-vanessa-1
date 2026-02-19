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
    name: "E-commerce Platform",
    description: "Plataforma de comercio electrónico full-stack con React, Node.js y MongoDB.",
    image: "/placeholder-project.jpg",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    projectUrl: "#",
    codeUrl: "#",
  },
  {
    id: "2",
    name: "Task Management App",
    description: "Aplicación de gestión de tareas con autenticación y base de datos SQL.",
    image: "/placeholder-project.jpg",
    stack: ["React", "TypeScript", "PostgreSQL", "Prisma"],
    projectUrl: "#",
    codeUrl: "#",
  },
  {
    id: "3",
    name: "API RESTful",
    description: "API RESTful para servicios backend con documentación Swagger.",
    image: "/placeholder-project.jpg",
    stack: ["Node.js", "Express", "JWT", "Swagger"],
    projectUrl: "#",
    codeUrl: "#",
  },
];

export default function ProjectsDev() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4"
        >
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            Proyectos
          </span>
        </motion.div>

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
        >
          Soluciones que he construido
        </motion.h2>

        {/* Subtexto */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground mb-12 max-w-2xl"
        >
          Explora mis proyectos técnicos y soluciones innovadoras que demuestran mi experiencia en desarrollo full-stack.
        </motion.p>

        {/* Grid de proyectos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
              className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden relative group"
            >
              {/* Imagen */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-muted-foreground">Imagen del proyecto</span>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones */}
                <div className="flex gap-3">
                  <a
                    href={project.projectUrl}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:shadow-lg transition-shadow"
                  >
                    Ver proyecto
                  </a>
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      className="px-4 py-2 border border-border rounded-lg text-center font-medium hover:bg-gray-50 transition-colors"
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
      </div>
    </section>
  );
}