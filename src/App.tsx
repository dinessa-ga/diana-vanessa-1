import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Dev from './pages/Dev';
import { About } from './components/sections/creative/About';
import { Contact } from './components/sections/creative/Contact';
import CreativeSectionPage from './components/sections/creative/CreativeSectionPage';
import ProjectCaseStudy from './components/sections/creative/ProjectCaseStudy';
import Projects from './components/sections/creative/Projects';
import { Skills } from './components/sections/creative/Skills';
import AboutDev from './components/sections/dev/AboutDev';
import { ContactDev } from './components/sections/dev/ContactDev';
import DevSectionPage from './components/sections/dev/DevSectionPage';
import ProjectsDev from './components/sections/dev/ProjectsDev';
import { ServicesDev } from './components/sections/dev/ServicesDev';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/dev" element={<Dev />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:projectId" element={<ProjectCaseStudy />} />
      <Route path="/about" element={<CreativeSectionPage><About /></CreativeSectionPage>} />
      <Route path="/skills" element={<CreativeSectionPage><Skills /></CreativeSectionPage>} />
      <Route path="/contact" element={<CreativeSectionPage><Contact /></CreativeSectionPage>} />
      <Route path="/dev/about" element={<DevSectionPage><AboutDev /></DevSectionPage>} />
      <Route path="/dev/projects" element={<DevSectionPage><ProjectsDev /></DevSectionPage>} />
      <Route path="/dev/services" element={<DevSectionPage><ServicesDev /></DevSectionPage>} />
      <Route path="/dev/contact" element={<DevSectionPage><ContactDev /></DevSectionPage>} />
    </Routes>
  );
}
