import { motion } from 'motion/react';
import { TrendingUp, Award } from 'lucide-react';
import { BrandProject } from '../data/projects';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BrandCardProps {
  project: BrandProject;
}

export function BrandCard({ project }: BrandCardProps) {
  const handleViewCaseStudy = () => {
    // Abrir en nueva pestaña con hash routing
    window.open(`#/case-study/${project.id}`, '_blank');
  };

  return (
    <div className="px-4 md:px-8 py-8">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0 }}
          className="relative group"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <ImageWithFallback
              src={project.image}
              alt={project.brandName}
              className="w-full h-[400px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Brand Name Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-3xl md:text-4xl mb-2">{project.brandName}</h3>
              <p className="text-white/90 text-lg">{project.category}</p>
            </div>
          </div>

          {/* Color Palette */}
          <div className="flex gap-2 mt-6 justify-center md:justify-start">
            {project.colors.map((color, index) => (
              <motion.div
                key={index}
                className="w-12 h-12 rounded-full shadow-lg border-2 border-white"
                style={{ backgroundColor: color }}
                whileHover={{ scale: 1.2, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
         className="space-y-6"  //  Aún no sé si cambiar aquí
        >
          <div>
            <p className="text-lg text-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
              Servicios
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.services.map((service, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-foreground rounded-full border border-primary/20"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary">
                <TrendingUp className="w-5 h-5" />
                <span className="text-3xl">{project.results.metric1}</span>
              </div>
              <p className="text-sm text-muted-foreground">{project.results.label1}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-secondary">
                <Award className="w-5 h-5" />
                <span className="text-3xl">{project.results.metric2}</span>
              </div>
              <p className="text-sm text-muted-foreground">{project.results.label2}</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button
              className="group px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full hover:shadow-xl transition-all hover:scale-105"
              onClick={handleViewCaseStudy}
            >
              <span className="flex items-center gap-2">
                Ver caso de estudio
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}