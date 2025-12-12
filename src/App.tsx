import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { BrandingShowcase } from './components/BrandingShowcase';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { ThemeToggle } from './components/ThemeToggle';
import { CaseStudy } from './components/CaseStudy';
import { brandProjects } from './data/projects';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'case-study'>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      // Check if it's a case study route
      const caseStudyMatch = hash.match(/#\/case-study\/(\d+)/);
      
      if (caseStudyMatch) {
        const projectId = parseInt(caseStudyMatch[1]);
        setSelectedProjectId(projectId);
        setCurrentView('case-study');
      } else {
        setCurrentView('home');
        setSelectedProjectId(null);
      }
    };

    // Handle initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleBackToHome = () => {
    window.location.hash = '';
    setCurrentView('home');
    setSelectedProjectId(null);
  };

  // Case Study View
  if (currentView === 'case-study' && selectedProjectId !== null) {
    const project = brandProjects.find(p => p.id === selectedProjectId);
    
    if (project) {
      return (
        <div className="min-h-screen">
          <ThemeToggle />
          <CaseStudy project={project} onBack={handleBackToHome} />
        </div>
      );
    }
  }

  // Home View
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Hero />
      <BrandingShowcase />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
