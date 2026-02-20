import ProjectsDev from '../components/sections/dev/ProjectsDev';
import { DevLayout } from '../components/layouts/DevLayout';
import AboutDev  from '../components/sections/dev/AboutDev';
import { HeroDev } from '../components/sections/dev/HeroDev';
import { ServicesDev } from '../components/sections/dev/ServicesDev';
import { ContactDev } from '../components/sections/dev/ContactDev';

export default function Dev() {
  return (
    <DevLayout>
      <HeroDev />
      <AboutDev />
      <ProjectsDev />
      <ServicesDev />
      <ContactDev />
    </DevLayout>
  );
}