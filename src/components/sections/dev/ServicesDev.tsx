import { motion } from 'motion/react';
import {
  Code2,
  PenTool,
  Zap
} from 'lucide-react';

export function ServicesDev() {
  const services = [
    {
      title: 'Desarrollo Web & UX/UI',
      icon: Code2,
      color: 'from-primary to-secondary',
      skills: [
        'Interfaces accesibles',
        'Diseño responsivo',
        'Arquitectura escalable',
      ],
    },
    {
      title: 'UX Writing & Copywriting',
      icon: PenTool,
      color: 'from-secondary to-accent',
      skills: [
        'Microcopy para formularios y flujos',
        'Textos persuasivos y claros',
        'Optimización de comunicación en interfaces',
      ],
    },
    {
      title: 'Automatización & Integraciones',
      icon: Zap,
      color: 'from-accent to-primary',
      skills: [
        'Chatbots personalizados',
        'Flujos automatizados',
        'Análisis de procesos y optimización de tareas',
      ],
    },
  ];

  const openWhatsApp = (serviceTitle: string) => {
    const phoneNumber = '593967008345'; // Reemplazar con el número real
    const message = `Hola, me gustaría solicitar el servicio de ${serviceTitle}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="services" className="py-12 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
            Servicios
          </span>
          <h2 className="mb-6 text-4xl md:text-5xl text-foreground">
            Servicios que ofrezco
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales para potenciar tu presencia digital
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-8 w-full">
          {services.map((service, serviceIndex) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-border flex flex-col"
              >
                <div className="flex flex-col items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-3`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-center text-foreground">{service.title}</h3>
                </div>

                <ul className="space-y-2 flex-grow">
                  {service.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex justify-center align-items-center">
                  <button
                    onClick={() => openWhatsApp(service.title)}
                    className=" flex items-center gap-2 px-5 py-2 bg-card border-2 border-border rounded-full hover:border-primary transition-colors"
                  >
                    Solicitar
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
