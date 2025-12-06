import { Code2, Database, Globe, Palette, Server, Smartphone } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, TypeScript, and modern CSS frameworks",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Building scalable APIs and server-side applications",
    technologies: ["Node.js", "Express.js","Python", "PostgreSQL","MongoDb", "REST APIs"],
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Efficient data modeling and query optimization",
    technologies: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    icon: Globe,
    title: "Python Application Development and Automation",
    description: "Developing robust software applications and services using Python, alongside implementing automation solutions to streamline workflows and manipulate data efficiently.",
    technologies: ["Python", "Django", "Flask", "pandas","NumPy","REST APIs","Git","Docker"],
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Creating seamless experiences across all devices",
    technologies: ["Mobile-First", "Flexbox", "CSS Grid", "Animations"],
  },
  {
    icon: Palette,
    title: "UI/UX Sensibility",
    description: "Translating designs into pixel-perfect interfaces",
    technologies: ["Figma", "Design Systems", "Accessibility", "Prototyping"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(280_80%_60%/0.05)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            What I Do
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A blend of technical skills and creative problem-solving, focused on 
            building exceptional digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(173_80%_50%/0.1)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                {skill.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
