import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { CreativeLayout } from '../../layouts/CreativeLayout';
import { brandProjects } from '../../../data/projects';

export default function Projects() {
  return (
    <CreativeLayout>
      <main className="min-h-screen bg-background px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/"
            className="relative z-10 mb-10 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>

          <header className="mb-12 max-w-3xl">
            <p className="mb-3 text-lg font-bold uppercase tracking-[0.2em] text-primary">
              Portafolio creativo
            </p>
            <h1 className="mb-5 text-4xl text-foreground md:text-6xl">Conoce mis proyectos</h1>
            <p className="text-lg pt-6 leading-relaxed text-muted-foreground">
              Una selección de proyectos de branding, contenido y comunicación digital.
            </p>
          </header>

          <div className="projects-grid">
            {brandProjects.map((project) => (
              <article
                key={project.id}
                className="project-card group overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Link
                  to={`/projects/${project.id}`}
                  className="project-card-link focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary"
                >
                  <div className="project-card-media">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.brandName}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="project-card-overlay" aria-hidden="true" />
                    <div className="project-card-meta">
                      <p className="project-card-category">{project.category}</p>
                      <h2 className="project-card-title">{project.brandName}</h2>
                    </div>
                  </div>

                  <div className="project-card-content">
                    <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                    <span className="project-card-cta inline-flex items-center gap-2 font-semibold text-primary transition-colors group-hover:text-secondary">
                      Ver proyecto
                      <ExternalLink className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    </CreativeLayout>
  );
}