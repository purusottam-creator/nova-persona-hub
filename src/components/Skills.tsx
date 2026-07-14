import { motion } from "framer-motion";

const groups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 95, hue: 20 },
      { name: "CSS", level: 92, hue: 200 },
      { name: "JavaScript", level: 90, hue: 50 },
      { name: "React", level: 88, hue: 190 },
      { name: "Tailwind CSS", level: 90, hue: 210 },
      { name: "Bootstrap", level: 85, hue: 260 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88, hue: 140 },
      { name: "Express.js", level: 86, hue: 160 },
      { name: "MongoDB", level: 84, hue: 130 },
      { name: "REST API", level: 88, hue: 270 },
      { name: "Authentication", level: 82, hue: 300 },
      { name: "Database Design", level: 80, hue: 110 },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 85, hue: 240 },
      { name: "JavaScript", level: 90, hue: 50 },
      { name: "C", level: 78, hue: 220 },
    ],
  },
  {
    title: "AI & IoT",
    skills: [
      { name: "Artificial Intelligence", level: 80, hue: 290 },
      { name: "Machine Learning", level: 72, hue: 310 },
      { name: "IoT", level: 82, hue: 170 },
      { name: "Cloud Computing", level: 75, hue: 200 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 88, hue: 10 },
      { name: "GitHub", level: 88, hue: 20 },
      { name: "VS Code", level: 92, hue: 210 },
      { name: "Postman", level: 84, hue: 30 },
      { name: "MongoDB Compass", level: 82, hue: 130 },
      { name: "MS Office", level: 85, hue: 220 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <p className="font-mono text-xs tracking-widest text-primary uppercase mb-3">// Stack</p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Tools I use to <span className="text-gradient">ship</span>.
          </h2>
        </motion.div>

        <div className="space-y-12">
          {groups.map((group, gi) => (
            <div key={group.title}>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: gi * 0.05 }}
                className="font-mono text-sm text-[var(--neon-cyan)] mb-4"
              >
                / {group.title}
              </motion.h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {group.skills.map((s, i) => (
                  <motion.div
                    key={`${group.title}-${s.name}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    whileHover={{ y: -4 }}
                    className="group relative glass rounded-2xl p-5 overflow-hidden"
                    style={{ ["--hue" as string]: s.hue }}
                  >
                    <div
                      className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, oklch(0.7 0.2 var(--hue) / 0.4), transparent 70%)`,
                      }}
                    />
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">{s.name}</span>
                      <span
                        className="text-xs font-mono"
                        style={{ color: `oklch(0.8 0.15 ${s.hue})` }}
                      >
                        {s.level}%
                      </span>
                    </div>
                    <div className="mt-4 h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 + i * 0.04, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, oklch(0.75 0.18 ${s.hue}), oklch(0.7 0.22 ${(s.hue + 60) % 360}))`,
                          boxShadow: `0 0 20px oklch(0.75 0.2 ${s.hue} / 0.6)`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
