import { motion } from "framer-motion";

const items = [
  {
    year: "2024 — Present",
    title: "B.Tech in CSE (Artificial Intelligence)",
    place: "Engineering College",
    desc: "Specializing in AI/ML alongside core computer science. Building full-stack projects on the side.",
    tag: "Education",
  },
  {
    year: "2025",
    title: "MERN Stack Developer Intern",
    place: "Remote Startup",
    desc: "Shipped REST APIs, dashboards, and auth flows. Owned features end-to-end with React + Node.",
    tag: "Internship",
  },
  {
    year: "2025",
    title: "Full-Stack Web Development — Certification",
    place: "Online Specialization",
    desc: "Completed advanced full-stack track covering MongoDB, Express, React, Node and deployment.",
    tag: "Certification",
  },
  {
    year: "2024",
    title: "Hackathon Finalist — AI Build",
    place: "National Hackathon",
    desc: "Built an AI assistant for students in 36 hours. Selected as a top-10 team out of 200+.",
    tag: "Achievement",
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <p className="font-mono text-xs tracking-widest text-primary uppercase mb-3">// Journey</p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            The <span className="text-gradient">timeline</span> so far.
          </h2>
        </motion.div>

        <div className="relative pl-8 sm:pl-12">
          {/* line */}
          <div className="absolute left-3 sm:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--neon-cyan)] via-[var(--neon-violet)] to-transparent" />

          <ul className="space-y-10">
            {items.map((it, i) => (
              <motion.li
                key={it.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                {/* node */}
                <span className="absolute -left-[1.85rem] sm:-left-[2.4rem] top-1.5 grid place-items-center w-4 h-4 rounded-full bg-background border border-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--neon-cyan)] shadow-[0_0_12px_var(--neon-cyan)]" />
                </span>
                <div className="glass rounded-xl p-5">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="text-primary">{it.year}</span>
                    <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                      {it.tag}
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">{it.title}</h3>
                  <p className="text-xs text-muted-foreground">{it.place}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
