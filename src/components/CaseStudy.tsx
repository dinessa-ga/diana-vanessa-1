import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Target, 
  Users, 
  Lightbulb, 
  TrendingUp, 
  Quote,
  CheckCircle2,
  Palette,
  MessageSquare,
  Package
} from 'lucide-react';
import { BrandProject } from '../data/projects';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CaseStudyProps {
  project: BrandProject;
  onBack: () => void;
}

export function CaseStudy({ project, onBack }: CaseStudyProps) {
  const caseStudy = project.caseStudy;

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl mb-4 text-foreground">Caso de estudio no disponible</h2>
          <button
            onClick={onBack}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
          >
            Volver al portafolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header con imagen hero */}
      <div className="relative h-[60vh] overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
        <img 
          src={project.image} 
          alt={project.brandName}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        {/* Botón volver */}
        <button
          onClick={onBack}
          className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-card/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-105 transition-transform text-foreground border border-border"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver</span>
        </button>

        {/* Título del proyecto */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-6xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm text-primary rounded-full mb-4 border border-primary/30">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4 text-foreground">
              {project.brandName}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-20">
        
        {/* Overview & Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-foreground">El Cliente</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{caseStudy.clientOverview}</p>
          </div>

          <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-foreground">El Desafío</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
          </div>
        </motion.div>

        {/* Propósito (si existe) */}
        {caseStudy.purpose && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-primary/10 to-accent/10 p-10 rounded-3xl border border-primary/20"
          >
            <h3 className="text-center mb-4 text-foreground">Propósito de la Marca</h3>
            <p className="text-lg text-center text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              "{caseStudy.purpose}"
            </p>
          </motion.div>
        )}

        {/* Buyer Persona */}
        {caseStudy.buyerPersona && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl mb-8 text-center text-foreground">
              Buyer <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Persona</span>
            </h2>
            <div className="bg-card p-8 md:p-10 rounded-3xl shadow-lg border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl text-foreground">{caseStudy.buyerPersona.name}</h4>
                  <p className="text-muted-foreground">{caseStudy.buyerPersona.age} • {caseStudy.buyerPersona.occupation}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="mb-3 text-primary">Intereses</h5>
                  <ul className="space-y-2">
                    {caseStudy.buyerPersona.interests.map((interest, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {interest}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="mb-3 text-accent">Pain Points</h5>
                  <ul className="space-y-2">
                    {caseStudy.buyerPersona.painPoints.map((pain, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <Target className="w-4 h-4 text-accent" />
                        {pain}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Personalidad de Marca */}
        {caseStudy.brandPersonality && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl mb-8 text-center text-foreground">
              Personalidad de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Marca</span>
            </h2>
            <div className="bg-card p-8 md:p-10 rounded-3xl shadow-lg border border-border">
              <div className="space-y-6">
                <div>
                  <h5 className="mb-4 text-primary flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Tono de Voz
                  </h5>
                  <div className="flex flex-wrap gap-3">
                    {caseStudy.brandPersonality.tone.map((tone, index) => (
                      <span
                        key={index}
                        className="px-5 py-2 bg-primary/10 text-foreground rounded-full border border-primary/20"
                      >
                        {tone}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="mb-3 text-secondary">Voice Description</h5>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{caseStudy.brandPersonality.voice}"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Estrategia de Contenido */}
        {caseStudy.contentStrategy && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl mb-8 text-center text-foreground">
              Estrategia de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Contenido</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
                <h5 className="mb-4 text-primary">Objetivos</h5>
                <ul className="space-y-3">
                  {caseStudy.contentStrategy.objectives.map((obj, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
                <h5 className="mb-4 text-secondary">Pilares de Contenido</h5>
                <ul className="space-y-3">
                  {caseStudy.contentStrategy.pillars.map((pillar, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>{pillar}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* Deliverables */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl mb-8 text-center text-foreground">
            Entregables del <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Proyecto</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudy.deliverables.map((deliverable, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                    <Package className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-foreground">{deliverable.category}</h4>
                </div>
                <ul className="space-y-2">
                  {deliverable.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Ejemplos de Copy */}
        {caseStudy.copyExamples && caseStudy.copyExamples.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-8 text-center text-foreground">
              Ejemplos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Copywriting</span>
            </h2>
            <div className="space-y-6">
              {caseStudy.copyExamples.map((copy, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-3xl shadow-lg border border-border"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <span className="text-sm uppercase tracking-wider text-primary">
                      {copy.type}
                    </span>
                  </div>
                  <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                    {copy.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Ejemplos Visuales */}
        {caseStudy.visualExamples && caseStudy.visualExamples.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl mb-8 text-center text-foreground">
              Piezas <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Gráficas</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.visualExamples.map((imgUrl, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square"
                >
                  <ImageWithFallback
                    src={imgUrl}
                    alt={`Pieza gráfica ${index + 1} - ${project.brandName}`}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Paleta de colores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-card p-8 rounded-3xl shadow-lg border border-border"
        >
          <h3 className="text-center mb-6 text-foreground">Paleta de Colores</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {project.colors.map((color, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-20 h-20 rounded-2xl shadow-lg mb-2 border-2 border-border"
                  style={{ backgroundColor: color }}
                />
                <span className="text-sm text-muted-foreground">{color}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Resultados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <h2 className="text-3xl md:text-4xl mb-8 text-center text-foreground">
            Resultados e <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Impacto</span>
          </h2>
          <div className="bg-gradient-to-br from-primary to-secondary p-10 rounded-3xl text-white shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl mb-2">{project.results.metric1}</div>
                <div className="text-lg opacity-90">{project.results.label1}</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">{project.results.metric2}</div>
                <div className="text-lg opacity-90">{project.results.label2}</div>
              </div>
            </div>
            
            <ul className="space-y-3 max-w-3xl mx-auto">
              {caseStudy.results.map((result, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Testimonial */}
        {caseStudy.testimonial && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="bg-card p-10 md:p-12 rounded-3xl shadow-lg border border-border relative"
          >
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 italic leading-relaxed">
                "{caseStudy.testimonial.text}"
              </p>
              <div>
                <div className="text-foreground">{caseStudy.testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{caseStudy.testimonial.position}</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="text-center py-12"
        >
          <h3 className="text-2xl md:text-3xl mb-6 text-foreground">
            ¿Listo para transformar tu marca?
          </h3>
          <button
            onClick={() => window.location.hash = '#contact'}
            className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Hablemos de tu proyecto
          </button>
        </motion.div>
      </div>
    </div>
  );
}
