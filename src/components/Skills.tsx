import { motion } from 'motion/react';
import { useState } from 'react';
import { 
  Sparkles, 
  Paintbrush, 
  BarChart3, 
  MessageSquare, 
  Laptop,
  Package,
  Camera,
  PenTool,
  Award
} from 'lucide-react';
// import { CertificateModal } from './CertificateModal';

export function Skills() {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const skillCategories = [
    {
      title: 'Branding & Estrategia',
      icon: Sparkles,
      color: 'from-primary to-secondary',
      skills: [
        'Estrategia de marca',
        'Posicionamiento',
        'Brand voice',
        'Naming',
      ],
    },
    {
      title: 'Diseño Visual',
      icon: Paintbrush,
      color: 'from-secondary to-accent',
      skills: [
        'Identidad visual',
        'Diseño de logo',
        'Tipografía',
        'Sistemas de color',
      ],
    },
    {
      title: 'Marketing Digital',
      icon: BarChart3,
      color: 'from-accent to-primary',
      skills: [
        'Social media',
        'Content strategy',
        'SEO/SEM',
        'Email marketing',
      ],
    },
    {
      title: 'Herramientas Creativas',
      icon: Laptop,
      color: 'from-primary to-accent',
      skills: [
        'Adobe Creative Suite',
        'Figma',
        'Sketch',
        'After Effects',
      ],
    },
  ];

  const additionalSkills = [
    { icon: Package, label: 'Packaging Design' },
    { icon: Camera, label: 'Dirección de Arte' },
    { icon: PenTool, label: 'Ilustración' },
    { icon: MessageSquare, label: 'Copywriting' },
  ];

  const certifications = [
    { 
      title: 'Tecnología Superior en Negociación y Ventas', 
      org: 'Universidad Católica de Cuenca', 
      year: '2025',
      certificateUrl: 'https://www.credential.net/900b0164-545d-48d4-84d8-77c7e5bbcbfa#acc.Brp9O6qJ'
    },
    { 
      title: 'Digital Marketing Expert', 
      org: 'Google', 
      year: '2022',
      certificateUrl: 'https://www.example.com/certificate2.pdf'
    },
    { 
      title: 'Advanced UX Design', 
      org: 'Nielsen Norman Group', 
      year: '2021',
      certificateUrl: 'https://www.udemy.com/certificate/UC-6fa3c903-dccf-40e6-947d-6211abeaec8b/'
    },
  ];

  const openCertificate = (cert: any) => {
    setSelectedCertificate(cert);
    setIsModalOpen(true);
  };

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
            Expertise
          </span>
          <h2 className="mb-6 text-4xl md:text-5xl text-foreground">
            Habilidades que <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">impulsan</span> resultados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una combinación perfecta de creatividad, estrategia y ejecución
          </p>
        </motion.div>

        {/* Main Skills Grid - Reduced size */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-border"
              >
                <div className="flex flex-col items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-3`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-center text-foreground">{category.title}</h3>
                </div>

                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center mb-8 text-foreground">También trabajo con</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex items-center gap-2 px-5 py-2.5 bg-card border-2 border-border rounded-full hover:border-primary transition-colors"
                >
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">{skill.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-12 border border-border"
        >
          <h3 className="mb-8 text-foreground">Certificaciones & Formación</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.button
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => window.open(cert.certificateUrl, '_blank')}
                className="bg-card p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-border hover:border-primary group cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="mb-2 text-foreground group-hover:text-primary transition-colors">{cert.title}</h4>
                <p className="text-sm text-muted-foreground">{cert.org} • {cert.year}</p>
                <p className="text-xs text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click para ver certificado
                </p>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal 
      <CertificateModal
        certificate={selectedCertificate}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      */}
    </section>
  );
}
