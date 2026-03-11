import { motion } from "framer-motion";
import { Shield, Terminal, Bug, Lock, Award, ExternalLink, ChevronRight, Linkedin, Mail, Eye, KeyRound, Search, ShieldCheck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const navItems = ["About", "Projects", "Achievements", "Skills", "Contact"];

const projects = [
  {
    title: "Gilgamesh",
    subtitle: "Master's Thesis Tool",
    description: "An advanced automated web vulnerability scanner named after the ancient king of Uruk. Developed as part of Master's thesis research at the University of Miskolc, detecting OWASP Top 10 vulnerabilities with intelligent crawling and automated reporting.",
    tags: ["Python", "OWASP", "Automated Scanning", "Academic Research"],
    icon: Bug,
    highlight: true,
  },
  {
    title: "SteganoCrypt",
    description: "A tool for encrypting and hiding secret messages inside images using advanced steganography techniques. Combines cryptographic encryption with image manipulation for covert communication.",
    tags: ["Python", "Steganography", "Cryptography", "Image Processing"],
    icon: Eye,
  },
  {
    title: "Web Recon Tool",
    description: "A comprehensive scanner for website reconnaissance and information gathering. Automates subdomain enumeration, technology detection, header analysis, and WHOIS lookups.",
    tags: ["Python", "Reconnaissance", "OSINT", "Automation"],
    icon: Search,
  },
  {
    title: "PassGuard",
    description: "A tool for testing and analyzing password strength and complexity. Evaluates passwords against common attack patterns, dictionary attacks, and provides detailed security scoring.",
    tags: ["Python", "Password Security", "Analysis", "CLI"],
    icon: KeyRound,
  },
];

const achievements = [
  { name: "Jr Pentester", fullName: "Junior Pentester Certificate", year: "TryHackMe", org: "Certified" },
  { name: "CTFs", fullName: "Completed Numerous Security Labs & CTFs", year: "Ongoing", org: "Various Platforms" },
  { name: "Research", fullName: "Developing Custom Vulnerability Scanner for Academic Research", year: "2025", org: "University of Miskolc" },
];

const skills = [
  "Web Penetration Testing",
  "Python for Security",
  "Steganography",
  "Reconnaissance",
  "Vulnerability Research",
];

const stats = [
  { value: "4+", label: "Security Tools Built" },
  { value: "Jr Pen", label: "TryHackMe Certified" },
  { value: "MSc", label: "Cybersecurity Student" },
  { value: "CTFs", label: "Labs Completed" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Scanline overlay */}
      <div className="fixed inset-0 scanline pointer-events-none z-50" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-display font-bold text-foreground text-sm tracking-wider">
              <span className="text-primary">~/</span>hussein_khikani
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-1.5 border border-border rounded-full bg-muted/50">
              <span className="text-xs text-primary tracking-widest uppercase">MSc Cybersecurity · University of Miskolc</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 text-foreground">
              Hussein<br />
              <span className="text-glow text-primary">Khikani</span>
            </h1>
            <p className="text-secondary font-display text-lg mb-6">
              Cyber Security Researcher
            </p>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-sm leading-relaxed">
              Master's student specializing in Cybersecurity at the University of Miskolc, Hungary.
              Passionate about developing automated security tools, penetration testing, and vulnerability research.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#projects" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-display font-semibold hover:opacity-90 transition-opacity">
                View Projects <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-md text-sm font-display hover:border-primary transition-colors">
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-primary text-glow mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-bold text-foreground mb-2">
              <span className="text-primary">$</span> whoami
            </h2>
            <div className="h-px bg-border mb-8" />
            <div className="bg-card border border-border rounded-lg p-6 border-glow">
              <p className="text-card-foreground text-sm leading-relaxed mb-4">
                I am <span className="text-primary font-semibold">Hussein Khikani</span>, a Master's student specializing in Cybersecurity
                at the University of Miskolc, Hungary. Originally from Iraq, I hold the <span className="text-secondary font-semibold">'Junior Pentester'</span> certification
                from TryHackMe.
              </p>
              <p className="text-card-foreground text-sm leading-relaxed mb-4">
                I am passionate about developing automated security tools and penetration testing. My Master's thesis focuses on
                building <span className="text-primary font-semibold">Gilgamesh</span> — an advanced automated web vulnerability scanner named after the ancient king of Uruk.
              </p>
              <p className="text-card-foreground text-sm leading-relaxed">
                <span className="text-muted-foreground">📍</span> Miskolc, Hungary · Originally from Iraq
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-bold text-foreground mb-2">
              <span className="text-primary">$</span> ls ./projects
            </h2>
            <div className="h-px bg-border mb-12" />
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-card border rounded-lg p-6 card-hover group cursor-pointer ${
                  project.highlight ? "border-primary/50 border-glow md:col-span-2" : "border-border"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-muted rounded-md">
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-1">{project.title}</h3>
                {project.subtitle && (
                  <span className="inline-block text-xs text-secondary mb-2">{project.subtitle}</span>
                )}
                {project.highlight && (
                  <span className="inline-block text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded mb-3 ml-2">
                    Main Project
                  </span>
                )}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[11px] px-2 py-1 bg-muted rounded text-muted-foreground border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-bold text-foreground mb-2">
              <span className="text-primary">$</span> cat achievements.txt
            </h2>
            <div className="h-px bg-border mb-12" />
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6">
            {achievements.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 card-hover text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <div className="text-xl font-display font-bold text-foreground mb-1">{cert.name}</div>
                <div className="text-xs text-muted-foreground mb-2">{cert.fullName}</div>
                <div className="text-[11px] text-primary">{cert.org} · {cert.year}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 bg-muted/20">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-bold text-foreground mb-2">
              <span className="text-primary">$</span> cat skills.conf
            </h2>
            <div className="h-px bg-border mb-8" />
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="px-4 py-2 bg-card border border-border rounded-md text-sm text-foreground font-display hover:border-primary hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-t border-border">
        <div className="container mx-auto px-6 text-center max-w-xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              <span className="text-primary">$</span> ping me
            </h2>
            <p className="text-sm text-muted-foreground mb-8">
              Interested in collaboration, security research, or penetration testing projects? Let's connect.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 Hussein Khikani. Built with precision.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
