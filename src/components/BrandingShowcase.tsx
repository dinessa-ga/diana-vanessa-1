import { motion, AnimatePresence } from 'motion/react';
import { BrandCard } from './BrandCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { brandProjects } from '../data/projects';

export function BrandingShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = brandProjects.length - 1;
      if (nextIndex >= brandProjects.length) nextIndex = 0;
      return nextIndex;
    });
  };

  // Auto-play functionality removed for better UX
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     paginate(1);
  //   }, 6000);
  //   return () => clearInterval(timer);
  // }, [currentIndex]);

  return (
    <section id="branding" className="py-20 px-4 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
            Proyectos destacados
          </span>
          <h2 className="mb-6 text-4xl md:text-5xl text-foreground">
            Marcas que han <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">confiado</span> en mí
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada proyecto es una historia única de transformación y crecimiento
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="w-full"
            >
              <BrandCard project={brandProjects[currentIndex]} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-4 md:top-1/2 -translate-y-0 md:-translate-y-1/2 z-10 w-12 h-12 bg-card shadow-lg rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 border-2 border-border"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-4 md:top-1/2 -translate-y-0 md:-translate-y-1/2 z-10 w-12 h-12 bg-card shadow-lg rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 border-2 border-border"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {brandProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all ${index === currentIndex
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-muted hover:bg-muted-foreground'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section - editing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 text-center justify-items-center"
        >
          <div>
            <div className="text-4xl mb-2 text-primary">3+</div>
            <div className="text-muted-foreground">Años en organizaciones sociales </div>
          </div>
          <div>
            <div className="text-4xl mb-2 text-accent">3+</div>
            <div className="text-muted-foreground">Años de experiencia en redacción</div>
          </div>
          <div>
            <div className="text-4xl mb-2 text-primary">2+</div>
            <div className="text-muted-foreground">Años en marketing digital y contenido</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}