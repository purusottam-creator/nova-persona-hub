import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import type { MouseEvent } from "react";

const projects = [
  {
    title: "Suraksha Setu — Smart Tourist Safety Platform",
    description:
      "AI-powered tourist safety platform with SOS system, live location tracking, QR authentication, emergency response, and a tourist dashboard.",
    tech: ["MERN", "AI", "MongoDB", "Express", "React", "Node"],
    github: "#",
    live: "#",
    accent: "from-cyan-400/30 to-violet-500/30",
  },
  {
    title: "Soil Moisture Monitoring System",
    description:
      "Smart irrigation system that measures soil moisture in real time and helps optimize water usage for precision farming.",
    tech: ["IoT", "Sensors", "Arduino", "Smart Agriculture"],
    github: "#",
    live: "#",
    accent: "from-emerald-400/30 to-cyan-400/30",
  },
  {
    title: "Student Information Management System",
    description:
      "Desktop application to manage student records with full CRUD operations, search, and a clean, user-friendly interface.",
    tech: ["Python", "Tkinter", "JSON"],
    github: "#",
    live: "#",
    accent: "from-pink-400/30 to-orange-400/30",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Modern responsive portfolio with cinematic animations, glassmorphism, and optimized performance.",
    tech: ["React", "Node.js", "Express", "Tailwind CSS"],
    github: "#",
    live: "#",
    accent: "from-violet-400/30 to-pink-400/30",
  },
];

function TiltCard({ p, i }: { p: (typeof projects)[number]; i: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-50, 50], [8, -8]), { stiffness: 150, damping: 15 });
  const ry = useSpring(useTransform(x, [-50, 50], [-8, 8]), { stiffness: 150, damping: 15 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - r.left) / r.width - 0.5) * 100);
    y.set(((e.clientY - r.top) / r.height - 0.5) * 100);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="group relative glass rounded-2xl p-6 overflow-hidden"
    >
      <div
        className={`absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-50 bg-gradient-to-br ${p.accent} group-hover:opacity-80 transition-opacity`}
      />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-primary">PROJECT · 0{i + 1}</span>
          <div className="flex gap-2">
            <a href={p.github} aria-label="GitHub" className="grid place-items-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 hover:text-primary transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href={p.live} aria-label="Live demo" className="grid place-items-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 hover:text-primary transition-colors">
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-tight">{p.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-primary/10 text-primary border border-primary/20"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <p className="font-mono text-xs tracking-widest text-primary uppercase mb-3">// Selected work</p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Projects that <span className="text-gradient">push the stack</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <TiltCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
