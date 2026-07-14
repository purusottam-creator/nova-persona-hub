import { motion } from "framer-motion";

const items = [
  {
    year: "2023 — Present",
    title: "B.Tech in CSE (Artificial Intelligence)",
    place: "GIFT Autonomous, Bhubaneswar",
    desc: "Pursuing Computer Science & Engineering with a specialization in Artificial Intelligence.",
    tag: "Education",
  },
  {
    year: "May 2025 — July 2025",
    title: "Backend Web Development Intern",
    place: "Web Bocket",
    desc: "Developed backend APIs with Express.js, integrated MongoDB, implemented authentication and built REST APIs end-to-end.",
    tag: "Internship",
  },
  {
    year: "July 2024",
    title: "IT / OT Intern",
    place: "Skill Development Institute",
    desc: "Worked on IoT applications, smart agriculture, industrial automation, sensor networks and real-time data monitoring.",
    tag: "Internship",
  },
  {
    year: "2023",
    title: "Higher Secondary",
    place: "Salipur Higher Secondary School",
    desc: "Completed 10+2 with a focus on science and mathematics.",
    tag: "Education",
  },
  {
    year: "2021",
    title: "Matriculation",
    place: "Janaki Ballav High School",
    desc: "Completed secondary education with distinction.",
    tag: "Education",
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
