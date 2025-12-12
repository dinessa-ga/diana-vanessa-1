import { motion } from 'motion/react';
import { Palette, Target, Lightbulb, Users } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Palette,
      title: 'Creatividad sin límites',
      description: 'Cada proyecto es una oportunidad para innovar y romper moldes',
    },
    {
      icon: Target,
      title: 'Estrategia primero',
      description: 'El diseño hermoso debe cumplir objetivos de negocio',
    },
    {
      icon: Lightbulb,
      title: 'Pensamiento disruptivo',
      description: 'Cuestiono lo establecido para encontrar soluciones únicas',
    },
    {
      icon: Users,
      title: 'Colaboración activa',
      description: 'Los mejores resultados nacen del trabajo en equipo',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
              Sobre mí
            </span>
            <h2 className="mb-6 text-4xl md:text-5xl text-foreground">
              Transformo <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">visiones</span> en realidad
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Soy un apasionado del branding y el diseño estratégico. Mi misión es ayudar a las marcas
                a encontrar su voz única y comunicarla de manera efectiva al mundo.
              </p>
              <p>
                Con más de 5 años de experiencia en marketing y diseño, he trabajado con startups,
                empresas consolidadas y emprendedores para crear identidades de marca memorables
                que generan resultados tangibles.
              </p>
              <p>
                Creo firmemente que el diseño es una herramienta poderosa de negocios. No se trata
                solo de hacer que las cosas se vean bien, sino de crear conexiones emocionales
                que impulsen el crecimiento.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-card shadow-md rounded-full text-foreground border border-border">
                Brand Strategy
              </span>
              <span className="px-4 py-2 bg-card shadow-md rounded-full text-foreground border border-border">
                Visual Identity
              </span>
              <span className="px-4 py-2 bg-card shadow-md rounded-full text-foreground border border-border">
                Creative Direction
              </span>
              <span className="px-4 py-2 bg-card shadow-md rounded-full text-foreground border border-border">
                Marketing Digital
              </span>
              <span className="px-4 py-2 bg-card shadow-md rounded-full text-foreground border border-border">
                UX/UI Design
              </span>
            </div>
          </motion.div>

          {/* Right Content - Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-border"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="mb-2 text-foreground">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-center mb-12 text-3xl text-foreground">Mi proceso creativo</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Descubrir', desc: 'Entender tu marca, objetivos y audiencia' },
              { step: '02', title: 'Estrategia', desc: 'Definir posicionamiento y dirección creativa' },
              { step: '03', title: 'Crear', desc: 'Diseñar soluciones visuales impactantes' },
              { step: '04', title: 'Lanzar', desc: 'Implementar y medir resultados' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-primary/20 to-accent/20 mb-4">
                  {item.step}
                </div>
                <h4 className="mb-2 text-primary">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-accent opacity-20" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
