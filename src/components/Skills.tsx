import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 92, hue: 200 },
  { name: "Node.js", level: 88, hue: 140 },
  { name: "Express", level: 85, hue: 160 },
  { name: "MongoDB", level: 84, hue: 130 },
  { name: "TypeScript", level: 80, hue: 220 },
  { name: "JavaScript", level: 92, hue: 50 },
  { name: "Tailwind CSS", level: 90, hue: 190 },
  { name: "Python", level: 78, hue: 240 },
  { name: "AI / ML", level: 72, hue: 290 },
  { name: "HTML & CSS", level: 95, hue: 20 },
  { name: "Git & GitHub", level: 86, hue: 10 },
  { name: "REST APIs", level: 85, hue: 270 },
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -4 }}
              className="group relative glass rounded-2xl p-5 overflow-hidden"
              style={{
                ["--hue" as string]: s.hue,
              }}
            >
              <div
                className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, oklch(0.7 0.2 var(--hue) / 0.4), transparent 70%)`,
                }}
              />
              <div className="flex items-center justify-between">
                <span className="font-medium">{s.name}</span>
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
    </section>
  );
}
