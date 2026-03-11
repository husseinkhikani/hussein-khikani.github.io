import { motion } from "framer-motion";
import { Shield, Terminal, Bug, Lock, Award, ExternalLink, ChevronRight, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const navItems = ["About", "Projects", "Certifications", "Contact"];

const projects = [
  {
    title: "VulnScanner Pro",
    description: "Advanced web vulnerability scanner detecting OWASP Top 10 vulnerabilities including XSS, SQLi, CSRF, and SSRF with automated reporting.",
    tags: ["Python", "Burp Suite API", "OWASP", "REST API"],
    icon: Bug,
    highlight: true,
  },
  {
    title: "NetRecon Toolkit",
    description: "Network reconnaissance framework for automated asset discovery, port scanning, and service enumeration across large-scale environments.",
    tags: ["Go", "Nmap", "Docker", "gRPC"],
    icon: Terminal,
  },
  {
    title: "CryptoVault",
    description: "End-to-end encrypted secrets management system with zero-knowledge architecture and hardware security module integration.",
    tags: ["Rust", "HSM", "AES-256", "Zero Trust"],
    icon: Lock,
  },
  {
    title: "ThreatMap",
    description: "Real-time threat intelligence dashboard aggregating IOCs from multiple feeds with ML-powered anomaly detection.",
    tags: ["React", "ElasticSearch", "ML", "STIX/TAXII"],
    icon: Shield,
  },
];

const certifications = [
  { name: "OSCP", fullName: "Offensive Security Certified Professional", year: "2024", org: "Offensive Security" },
  { name: "CEH", fullName: "Certified Ethical Hacker", year: "2023", org: "EC-Council" },
  { name: "CISSP", fullName: "Certified Information Systems Security Professional", year: "2023", org: "ISC²" },
  { name: "eWPT", fullName: "eLearnSecurity Web Application Penetration Tester", year: "2022", org: "INE Security" },
];

const stats = [
  { value: "50+", label: "Vulnerabilities Reported" },
  { value: "12", label: "CVEs Published" },
  { value: "4", label: "Certifications" },
  { value: "6+", label: "Years Experience" },
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
              <span className="text-primary">~/</span>security_researcher
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
              <span className="text-xs text-primary tracking-widest uppercase">Available for Security Consulting</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-foreground">
              Security<br />
              <span className="text-glow text-primary">Researcher</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-sm leading-relaxed">
              Penetration tester & security researcher specializing in web application security,
              vulnerability research, and building offensive security tools.
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
                Security researcher with 6+ years of experience in offensive security, web application penetration testing,
                and vulnerability research. Creator of VulnScanner Pro — an automated web vulnerability scanner that has
                helped organizations identify and remediate critical security flaws.
              </p>
              <p className="text-card-foreground text-sm leading-relaxed">
                Active contributor to the security community through bug bounty programs, open-source security tools,
                and published CVEs. Passionate about making the internet safer, one vulnerability at a time.
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
                  project.highlight ? "border-primary/50 border-glow" : "border-border"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-muted rounded-md">
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{project.title}</h3>
                {project.highlight && (
                  <span className="inline-block text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded mb-3">
                    Featured
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

      {/* Certifications */}
      <section id="certifications" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-bold text-foreground mb-2">
              <span className="text-primary">$</span> cat certifications.txt
            </h2>
            <div className="h-px bg-border mb-12" />
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
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

      {/* Contact */}
      <section id="contact" className="py-24 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-6 text-center max-w-xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              <span className="text-primary">$</span> ping me
            </h2>
            <p className="text-sm text-muted-foreground mb-8">
              Interested in security consulting, penetration testing, or collaboration? Let's connect.
            </p>
            <div className="flex justify-center gap-6">
              {[
                { icon: Github, label: "GitHub", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
                { icon: Mail, label: "Email", href: "mailto:researcher@example.com" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <link.icon className="w-5 h-5" />
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Security Researcher. Built with precision.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
