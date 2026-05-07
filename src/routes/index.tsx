import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Cloud, Server, Boxes, GitBranch, Terminal, Cpu, Activity, Shield,
  Github, Linkedin, Mail, Download, ExternalLink, MessageCircle, MapPin,
  Award, Briefcase, ArrowRight, Sparkles, Zap, Code2, Database, Container,
} from "lucide-react";
import { Particles } from "@/components/Particles";
import { Typing } from "@/components/Typing";
import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const TECH_BADGES = [
  { name: "AWS", icon: Cloud },
  { name: "Kubernetes", icon: Boxes },
  { name: "Docker", icon: Container },
  { name: "Terraform", icon: Server },
  { name: "Jenkins", icon: GitBranch },
  { name: "Linux", icon: Terminal },
  { name: "Python", icon: Code2 },
  { name: "CI/CD", icon: Zap },
];

const SKILLS = [
  { cat: "Cloud", icon: Cloud, items: ["AWS", "EC2", "IAM", "VPC", "Route53", "CloudWatch", "S3", "RDS"] },
  { cat: "Containers", icon: Container, items: ["Docker", "Kubernetes", "Helm", "EKS"] },
  { cat: "CI / CD", icon: GitBranch, items: ["Jenkins", "GitHub Actions", "GitLab CI"] },
  { cat: "Infrastructure as Code", icon: Server, items: ["Terraform", "Ansible"] },
  { cat: "Monitoring", icon: Activity, items: ["Grafana", "Prometheus", "ELK Stack"] },
  { cat: "Languages", icon: Code2, items: ["Python", "Bash", "YAML"] },
];

const EXPERIENCE = [
  {
    company: "Wipro Technologies",
    role: "Senior Project Engineer · Senior DevOps Engineer",
    period: "2016 — Present  ·  8.5+ years",
    points: [
      "Architected CI/CD pipelines automating deployments across multi-account AWS environments.",
      "Operated production Kubernetes clusters (EKS) — Helm charts, autoscaling, blue/green & canary releases.",
      "Designed Infrastructure-as-Code with Terraform & Ansible for reproducible, auditable environments.",
      "Built observability stacks with Prometheus, Grafana & ELK — SLO dashboards and proactive alerting.",
      "Led incident response, post-mortems and reliability engineering across high-traffic services.",
      "Hardened Linux systems, optimized performance, reduced cloud spend through right-sizing & FinOps.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Fitness SaaS Platform",
    tag: "Full-stack · Cloud Native",
    desc: "Production-grade SaaS with auth, dashboards, and zero-downtime deploys on Kubernetes.",
    features: ["Authentication", "Dashboard", "Cloud Deploy", "CI/CD", "Responsive UI"],
    icon: Activity,
  },
  {
    title: "Video Downloader Platform",
    tag: "API · Secure Backend",
    desc: "Modern frontend backed by hardened APIs, rate limiting and resilient production deploy.",
    features: ["Modern Frontend", "API Integrations", "Secure Architecture", "Production Deploy"],
    icon: Cpu,
  },
  {
    title: "Kubernetes Monitoring Stack",
    tag: "Observability · SRE",
    desc: "Prometheus + Grafana stack with curated dashboards, alert routing and SLO tracking.",
    features: ["Prometheus", "Grafana", "Metrics", "Alerting"],
    icon: Activity,
  },
  {
    title: "CI/CD Automation System",
    tag: "Automation · Platform",
    desc: "End-to-end pipelines with Jenkins, GitHub Actions and Docker — push to production in minutes.",
    features: ["Jenkins", "GitHub Actions", "Docker", "Automated Deploys"],
    icon: GitBranch,
  },
];

const CERTS = [
  { name: "AWS Certified", icon: Cloud },
  { name: "Kubernetes (CKA)", icon: Boxes },
  { name: "Linux Professional", icon: Terminal },
  { name: "Terraform Associate", icon: Server },
  { name: "DevOps Engineer", icon: GitBranch },
  { name: "Cloud Engineering", icon: Cloud },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"
        }`}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 ${scrolled ? "" : ""}`}>
        <div className={`glass rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between transition-all ${scrolled ? "shadow-2xl" : ""}`}>
          <a href="#top" className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 rounded-xl grad-border flex items-center justify-center">
              <span className="font-display font-bold text-sm gradient-text">AM</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-display font-semibold">Annappa M</div>
              <div className="text-[10px] text-muted-foreground tracking-wider uppercase">DevOps · SRE</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-muted-foreground hover:text-foreground transition-colors relative group">
                {n.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl glass glass-hover"
          >
            Let's Talk <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 hero-bg" />
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0"><Particles /></div>

      {/* Floating tech badges */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {TECH_BADGES.map((t, i) => {
          const positions = [
            "top-[18%] left-[6%]", "top-[28%] right-[8%]", "top-[58%] left-[4%]",
            "top-[70%] right-[6%]", "top-[14%] left-[42%]", "top-[80%] left-[36%]",
            "top-[44%] right-[14%]", "top-[36%] left-[10%]",
          ];
          const Icon = t.icon;
          return (
            <div
              key={t.name}
              className={`absolute ${positions[i]} animate-float`}
              style={{ animationDelay: `${i * 0.6}s` }}
            >
              <div className="glass rounded-2xl px-3 py-2 flex items-center gap-2 text-xs font-medium">
                <Icon className="w-3.5 h-3.5 text-primary" />
                <span>{t.name}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Senior DevOps / SRE roles
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-tight">
              <span className="block text-foreground/90">Hi, I'm</span>
              <span className="block gradient-text glow-text animate-gradient mt-2">Annappa M</span>
            </h1>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-6 text-lg sm:text-2xl text-muted-foreground font-light">
              <Typing
                words={[
                  "Senior DevOps Engineer",
                  "Site Reliability Engineer",
                  "Platform Engineer",
                  "Kubernetes Specialist",
                  "AWS Cloud Architect",
                ]}
              />
            </div>
          </Reveal>

          <Reveal delay={400}>
            <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
              Building <span className="text-foreground">scalable cloud infrastructure</span> and{" "}
              <span className="text-foreground">production-grade DevOps systems</span>. 8.5+ years engineering reliability at enterprise scale.
            </p>
          </Reveal>

          <Reveal delay={550}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/Annappa_Master_Resume.pdf"
                download
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary via-amber-500 to-accent text-primary-foreground font-semibold shadow-[0_0_40px_oklch(0.82_0.17_85/0.5)] hover:shadow-[0_0_70px_oklch(0.62_0.24_25/0.7)] transition-all hover:scale-105"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass glass-hover font-medium">
                <Mail className="w-4 h-4" /> Contact Me
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass glass-hover font-medium">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass glass-hover font-medium">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal delay={700}>
            <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
              {[
                { v: 8.5, s: "+", l: "Years Experience" },
                { v: 50, s: "+", l: "Deployments / week" },
                { v: 99.9, s: "%", l: "Uptime delivered" },
              ].map((m) => (
                <div key={m.l} className="glass rounded-2xl p-4 sm:p-5">
                  <div className="text-2xl sm:text-4xl font-display font-bold gradient-text">
                    <Counter to={m.v} suffix={m.s} />
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground mt-1 uppercase tracking-wider">{m.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <Reveal>
      <div className="max-w-3xl mx-auto text-center mb-14">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary mb-4">
          <Sparkles className="w-3.5 h-3.5" /> {kicker}
        </div>
        <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl gradient-text">{title}</h2>
        {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
      </div>
    </Reveal>
  );
}

function About() {
  const highlights = [
    { icon: Briefcase, t: "Enterprise Tenure", d: "8.5+ years at Wipro Technologies engineering production systems for Fortune-500 customers." },
    { icon: Boxes, t: "Kubernetes & Containers", d: "EKS administration, Helm charts, autoscaling, rolling & canary deployments." },
    { icon: Cloud, t: "AWS Infrastructure", d: "VPC, EC2, IAM, RDS, S3, CloudWatch — secure multi-account landing zones." },
    { icon: GitBranch, t: "CI/CD Automation", d: "Jenkins, GitHub Actions & GitLab pipelines from commit to production." },
    { icon: Activity, t: "Observability & SRE", d: "Prometheus, Grafana, ELK — SLOs, alerting and incident response." },
    { icon: Shield, t: "Reliability & Security", d: "Hardened Linux, IAM least-privilege, automated patching and backups." },
  ];
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle kicker="About" title="Engineering Reliability at Scale" sub="A senior DevOps engineer obsessed with automation, observability and craftsmanship." />
        <div className="grid lg:grid-cols-3 gap-6">
          <Reveal className="lg:col-span-1">
            <div className="glass rounded-3xl p-7 h-full glass-hover">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl grad-border flex items-center justify-center text-2xl font-display font-bold gradient-text">A</div>
                <div>
                  <div className="font-display font-semibold text-lg">Annappa M</div>
                  <div className="text-xs text-muted-foreground">Senior DevOps · SRE · Platform</div>
                </div>
              </div>
              <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
                Driven by elegant infrastructure, fast feedback loops and bullet-proof production systems. I build platforms engineers love to ship on.
              </p>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <div className="text-foreground">Suragihalli, Shikaripura</div>
                    <div className="text-muted-foreground text-xs">Shivamogga District, Karnataka</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent mt-0.5" />
                  <div>
                    <div className="text-foreground">Kanivebilachi, Channagiri</div>
                    <div className="text-muted-foreground text-xs">Davanagere District · Native</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <Reveal key={h.t} delay={i * 80}>
                  <div className="glass glass-hover rounded-2xl p-6 h-full group">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="font-display font-semibold mb-1">{h.t}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{h.d}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle kicker="Stack" title="Skills & Technologies" sub="The toolchain I build, automate and operate at production scale." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.cat} delay={i * 70}>
                <div className="group relative glass glass-hover rounded-2xl p-6 h-full overflow-hidden">
                  <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{ background: "var(--gradient-border)", filter: "blur(20px)", zIndex: -1 }} />
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="font-display font-semibold">{s.cat}</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <span key={it} className="text-xs px-3 py-1.5 rounded-lg bg-secondary/60 border border-border text-foreground/80 hover:border-primary/60 hover:text-primary transition-colors">
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle kicker="Experience" title="Where I've Engineered" />
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
          {EXPERIENCE.map((e, i) => (
            <Reveal key={i}>
              <div className="relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-10 mb-10">
                <div className="absolute left-2 sm:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_oklch(0.82_0.17_85/0.8)]" />
                <div className="hidden sm:block sm:text-right sm:pr-10">
                  <div className="text-xs uppercase tracking-widest text-primary mb-2">{e.period}</div>
                  <div className="font-display font-semibold text-xl">{e.company}</div>
                  <div className="text-muted-foreground text-sm">{e.role}</div>
                </div>
                <div className="glass glass-hover rounded-2xl p-6">
                  <div className="sm:hidden mb-3">
                    <div className="text-xs uppercase tracking-widest text-primary mb-1">{e.period}</div>
                    <div className="font-display font-semibold">{e.company}</div>
                    <div className="text-muted-foreground text-xs">{e.role}</div>
                  </div>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle kicker="Selected Work" title="Projects & Platforms" sub="Production systems that scale from zero to enterprise traffic." />
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 100}>
                <div className="group relative grad-border rounded-3xl p-7 h-full glass-hover overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/20 blur-3xl opacity-50 group-hover:opacity-80 transition-opacity" />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{p.tag}</span>
                    </div>
                    <h3 className="font-display font-semibold text-2xl mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.features.map((f) => (
                        <span key={f} className="text-[11px] px-2.5 py-1 rounded-md bg-secondary/60 border border-border text-foreground/70">{f}</span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a href="#" className="inline-flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg bg-primary/15 text-primary hover:bg-primary/25 transition-colors">
                        <ExternalLink className="w-3.5 h-3.5" /> Live Preview
                      </a>
                      <a href="#" className="inline-flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg glass glass-hover">
                        <Github className="w-3.5 h-3.5" /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  const items = [...CERTS, ...CERTS];
  return (
    <section id="certifications" className="relative py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle kicker="Credentials" title="Certifications" />
      </div>
      <div className="relative">
        <div className="flex gap-5 marquee w-max">
          {items.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="glass rounded-2xl px-7 py-5 flex items-center gap-3 min-w-[260px] glass-hover">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-display font-semibold text-sm">{c.name}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-1">
                    <Icon className="w-3 h-3" /> Verified
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="relative grad-border rounded-[2rem] p-10 sm:p-14 text-center overflow-hidden">
            <div className="absolute inset-0 hero-bg opacity-60" />
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Let's Build
              </div>
              <h2 className="font-display font-bold text-4xl sm:text-6xl gradient-text">Ready when you are.</h2>
              <p className="mt-5 max-w-xl mx-auto text-muted-foreground">
                Hiring for a senior DevOps / SRE / platform role? Let's design infrastructure your team can trust.
              </p>

              <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {[
                  { icon: Mail, label: "Email", value: "annappabca@gmail.com", href: "mailto:annappabca@gmail.com" },
                  { icon: Linkedin, label: "LinkedIn", value: "https://www.linkedin.com/in/annappam7778/", href: "https://www.linkedin.com/in/annappam7778/" },
                  { icon: Github, label: "GitHub", value: "https://github.com/Ani-k8s", href: "https://github.com" },
                  { icon: MessageCircle, label: "WhatsApp", value: "Chat directly", href: "https://wa.me/919900657021" },
                ].map((c) => {
                  const Icon = c.icon;
                  return (
                    <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="glass glass-hover rounded-2xl p-5 flex items-center gap-4 text-left">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{c.label}</div>
                        <div className="text-sm font-medium truncate">{c.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/Annappa_Master_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium shadow-[0_0_40px_oklch(0.72_0.18_250/0.4)] hover:scale-105 transition-transform"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
                <a href="https://wa.me/919900657021" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass glass-hover font-medium">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Me
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative py-10 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row gap-4 items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Database className="w-3.5 h-3.5 text-primary" />
          <span>© {new Date().getFullYear()} Annappa M · Crafted with precision · 777c8</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com" className="hover:text-foreground transition"><Github className="w-4 h-4" /></a>
          <a href="https://linkedin.com" className="hover:text-foreground transition"><Linkedin className="w-4 h-4" /></a>
          <a href="mailto:annappa.m@example.com" className="hover:text-foreground transition"><Mail className="w-4 h-4" /></a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="relative">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
