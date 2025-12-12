import { motion } from 'motion/react';
import { Mail, Linkedin, Instagram, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu mensaje! Te contactaré pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      href: '#',
      color: 'hover:text-[#0077B5]',
      bg: 'hover:bg-[#0077B5]/10'
    },
    { 
      icon: Instagram, 
      label: 'Instagram', 
      href: '#',
      color: 'hover:text-[#E4405F]',
      bg: 'hover:bg-[#E4405F]/10'
    },
    { 
      icon: Twitter, 
      label: 'Twitter', 
      href: '#',
      color: 'hover:text-[#1DA1F2]',
      bg: 'hover:bg-[#1DA1F2]/10'
    },
    { 
      icon: Mail, 
      label: 'Email', 
      href: 'mailto:tu@email.com',
      color: 'hover:text-primary',
      bg: 'hover:bg-primary/10'
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
            Contacto
          </span>
          <h2 className="mb-6 text-4xl md:text-5xl text-foreground">
            ¿Listo para <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">crear</span> algo increíble?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estoy siempre abierto a nuevos proyectos y colaboraciones. Hablemos sobre tu marca.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-foreground">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-card border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors text-foreground"
                  required
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-card border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors text-foreground"
                  required
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-foreground">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-card border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors resize-none text-foreground"
                  required
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Enviar mensaje</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Info Card */}
            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
              <h3 className="mb-6 text-foreground">Conectemos</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ya sea que tengas un proyecto en mente, necesites ayuda con tu estrategia de marca,
                o simplemente quieras charlar sobre diseño, me encantaría escucharte.
              </p>

              {/* Direct Contact */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:tu@email.com" className="hover:text-primary transition-colors">
                    tu@email.com
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="mb-4 text-sm uppercase tracking-wider text-muted-foreground">
                  Sígueme en redes
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 px-4 py-3 bg-muted rounded-xl transition-all ${social.color} ${social.bg}`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{social.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-3xl text-white">
              <h4 className="mb-4">¿Por qué trabajar conmigo?</h4>
              <ul className="space-y-3">
                {[
                  'Enfoque estratégico y creativo',
                  'Resultados medibles y tangibles',
                  'Comunicación clara y constante',
                  'Entrega puntual garantizada',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-border text-center text-muted-foreground"
        >
          <p>© 2024 • Diseñado y desarrollado con 💖 y mucho ☕</p>
        </motion.div>
      </div>
    </section>
  );
}
