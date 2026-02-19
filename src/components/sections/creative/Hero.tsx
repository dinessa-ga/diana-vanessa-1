import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('branding')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10"
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-card backdrop-blur-sm rounded-full shadow-lg mb-6 border border-border"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-sm text-foreground">Perfil creativo en tech</span>
          </motion.div>

          <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl text-foreground">
            Doy <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">vida</span> a las marcas
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Hola, soy <b>Diana</b>
            <br /> Estratega de marca, diseñadora y redactora creativa
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Transformo ideas en identidades memorables que conectan con las personas y generan resultados
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Ver mi trabajo
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-card text-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all border-2 border-border hover:border-primary"
          >
            Hablemos
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20"
        >
          <button
            onClick={scrollToProjects}
            className="inline-block animate-bounce text-primary hover:text-secondary transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-8 h-8" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
