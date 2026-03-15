import { motion } from "motion/react";
import {
    Clock,
    GraduationCap,
    TrendingUp,
    Palette,
    Target,
    Lightbulb,
    Users,
} from "lucide-react";

export default function AboutDev() {
    const benefits = [
        {
            icon: Clock,
            title: "Flexibilidad",
            description:
                "Adaptación a diferentes tecnologías y metodologías según las necesidades del proyecto.",
        },
        {
            icon: GraduationCap,
            title: "Expertise técnico",
            description:
                "Dominio de herramientas y frameworks modernos para crear soluciones robustas y escalables.",
        },
        {
            icon: TrendingUp,
            title: "Crecimiento continuo",
            description:
                "Aprendizaje constante para mantenerme al día con las últimas tendencias tecnológicas.",
        },
    ];

    const values = [
        {
            icon: Palette,
            title: "Creatividad sin límites",
            description:
                "Cada proyecto es una oportunidad para innovar y romper moldes.",
        },
        {
            icon: Target,
            title: "Estrategia primero",
            description:
                "El diseño y desarrollo deben cumplir objetivos claros de negocio.",
        },
        {
            icon: Lightbulb,
            title: "Pensamiento disruptivo",
            description:
                "Cuestiono lo establecido para encontrar soluciones únicas y escalables.",
        },
        {
            icon: Users,
            title: "Colaboración activa",
            description:
                "Los mejores resultados nacen del trabajo en equipo y la comunidad.",
        },
    ];

    return (
        <section
            id="about"
            className="py-12 px-4 bg-gradient-to-br from-background to-muted/30"
        >
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Columna izquierda - Párrafos */}
                    
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4 text-lg text-muted-foreground"
                    >
                         <h2 className="mb-6 text-4xl md:text-5xl text-foreground ext-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            Sobre mí
                        </h2>
                        <p>
                            Creo experiencias digitales accesibles y centradas en las personas: 
                            Soluciones que no solo se ven bien, 
                            sino que también cumplen objetivos claros y generan impacto real.
                            
                        </p>
                        <p>
                            Actualmente, lidero una comunidad tecnológica en Latinoamérica, donde diseño y gestiono
                            iniciativas que fomentan la innovación, la colaboración y la formación continua en tech.
                        </p>
                        <p>
                            Más que código: transformo ideas en soluciones útiles, escalables y sostenibles.
                             Mi objetivo es aportar valor a través 
                            de proyectos que integren diseño, accesibilidad y visión estratégica.
                        </p>
                    </motion.div>

                    {/* Columna derecha - Beneficios */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                       
                        <div className="space-y-6">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex items-start gap-4   bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-border"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-1">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-muted-foreground">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
