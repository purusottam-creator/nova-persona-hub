import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { GraduationCap, Target, Sparkles } from "lucide-react";

function Counter({ to, suffix = "+" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const sp = useSpring(mv, { duration: 1.6, bounce: 0 });
  const display = useTransform(sp, (v) => Math.floor(v).toString());

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold text-gradient">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  { value: 15, label: "Projects Built" },
  { value: 12, label: "Technologies" },
  { value: 6, label: "Certifications" },
  { value: 3, label: "Years Coding" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="font-mono text-xs tracking-widest text-primary uppercase mb-3">// About</p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Engineering <span className="text-gradient">curious code</span> with intent.
          </h2>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 glass rounded-2xl p-8"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm a B.Tech Computer Science (AI) student with a deep love for building things that
              live on the web. I work across the MERN stack, design with intention, and explore the
              edges of artificial intelligence to ship products that feel intelligent — and look
              futuristic.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              When I'm not in VS Code, I'm sketching system designs, reading ML papers, or chasing
              that one bug that only appears on Fridays.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <GraduationCap className="w-5 h-5 text-[var(--neon-cyan)]" />
                <h3 className="mt-3 font-semibold">Education</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  B.Tech CSE (AI) — pursuing, focused on full-stack & applied ML.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <Target className="w-5 h-5 text-[var(--neon-violet)]" />
                <h3 className="mt-3 font-semibold">Career Goal</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Become a product-minded engineer building AI-augmented web platforms.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl p-5 flex flex-col justify-between min-h-[140px] hover:border-primary/40 transition-colors group"
              >
                <Sparkles className="w-4 h-4 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                <div>
                  <Counter to={s.value} />
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
