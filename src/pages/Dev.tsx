import ProjectsDev from '../components/sections/dev/ProjectsDev';
import { DevLayout } from '../components/layouts/DevLayout';
import AboutDev  from '../components/sections/dev/AboutDev';

export default function Dev() {
  return (
    <DevLayout>
      <AboutDev />
      <ProjectsDev />
     

    </DevLayout>
  );
}