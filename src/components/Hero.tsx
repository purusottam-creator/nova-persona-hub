import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Download, Mail, Github, Linkedin, Instagram } from "lucide-react";
import resumeAsset from "@/assets/Purusottam_Nanda_Resume.pdf.asset.json";
import { useEffect, useState, type MouseEvent } from "react";
import avatar from "@/assets/avatar.jpg";

const ROLES = [
  "AI Engineer",
  "MERN Stack Developer",
  "Backend Developer",
  "Full Stack Web Developer",
  "IoT Enthusiast",
];


function useTyping(words: string[], speed = 80, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          const next = word.slice(0, text.length + 1);
          setText(next);
          if (next === word) setTimeout(() => setDel(true), pause);
        } else {
          const next = word.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDel(false);
            setI((v) => v + 1);
          }
        }
      },
      del ? speed / 2 : speed
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

function HoloCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-50, 50], [12, -12]), { stiffness: 120, damping: 12 });
  const ry = useSpring(useTransform(x, [-50, 50], [-12, 12]), { stiffness: 120, damping: 12 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - r.left) / r.width - 0.5) * 100);
    y.set(((e.clientY - r.top) / r.height - 0.5) * 100);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="relative mx-auto w-[280px] sm:w-[340px] aspect-[4/5] animate-float"
    >
      {/* glow */}
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-violet)] opacity-40 blur-2xl" />
      {/* card */}
      <div className="relative h-full rounded-[1.75rem] glass-strong overflow-hidden neon-border">
        <img
          src={avatar}
          alt="Purusottam Nanda — portrait"
          width={768}
          height={768}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* scanlines */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0 1px, transparent 1px 4px)",
          }}
        />
        {/* gradient veil */}
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
        {/* HUD */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-primary/90">
          <span className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/30">ID · 0421</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--neon-cyan)] animate-pulse" />
            ONLINE
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 font-mono text-[11px] text-foreground/80">
          <div className="flex justify-between">
            <span>PURUSOTTAM.N</span>
            <span className="text-[var(--neon-cyan)]">v.2026</span>
          </div>
          <div className="mt-1 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const typed = useTyping(ROLES);

  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="glow-orb w-[400px] h-[400px] -top-20 -left-20 bg-[var(--neon-violet)]/30" />
      <div className="glow-orb w-[500px] h-[500px] top-40 -right-32 bg-[var(--neon-cyan)]/30" style={{ animationDelay: "1.5s" }} />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono text-primary mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--neon-cyan)] animate-pulse" />
            Available for opportunities
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Hi, I'm <span className="text-gradient">Purusottam Nanda</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl">
            Building intelligent software that combines Artificial Intelligence, Full Stack Development, and modern cloud technologies to solve real-world problems.
          </p>


          <div className="mt-6 flex items-center gap-2 font-mono text-base sm:text-lg">
            <span className="text-muted-foreground">{">"}</span>
            <span className="text-[var(--neon-cyan)]">{typed}</span>
            <span className="inline-block w-[2px] h-5 sm:h-6 bg-[var(--neon-cyan)] animate-pulse" />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={resumeAsset.url}
              download="Purusottam_Nanda_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-violet)] text-background font-semibold text-sm shadow-[var(--shadow-neon)] hover:scale-[1.03] active:scale-[0.98] transition-transform"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-sm font-semibold hover:border-primary/50 transition-colors"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { Icon: Github, href: "https://github.com/purusotam-ctrl", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/purusottam-nanda-a72106295?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
              { Icon: Instagram, href: "https://www.instagram.com/nanda_babu_9?igsh=MXhtMGwwN2g0Z2w2dA==", label: "Instagram" },
              { Icon: Mail, href: "#contact", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid place-items-center w-10 h-10 rounded-lg glass hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="order-1 md:order-2"
        >
          <HoloCard />
        </motion.div>
      </div>
    </section>
  );
}
