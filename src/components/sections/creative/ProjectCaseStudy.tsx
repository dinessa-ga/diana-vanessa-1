import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CaseStudy } from './CaseStudy';
import { CreativeLayout } from '../../layouts/CreativeLayout';
import { brandProjects } from '../../../data/projects';

export default function ProjectCaseStudy() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = brandProjects.find((item) => item.id === Number(projectId));

  if (!project) {
    return (
      <CreativeLayout>
        <main className="flex min-h-[70vh] items-center justify-center px-4 py-16">
          <div className="text-center">
            <h1 className="mb-4 text-3xl text-foreground">Proyecto no encontrado</h1>
            <p className="mb-8 text-muted-foreground">
              El proyecto que buscas no está disponible en este portafolio.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground transition-opacity hover:opacity-90"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a proyectos
            </Link>
          </div>
        </main>
      </CreativeLayout>
    );
  }

  return (
    <CreativeLayout>
      <CaseStudy project={project} onBack={() => navigate('/projects')} />
    </CreativeLayout>
  );
}