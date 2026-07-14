import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

const CONTACT_EMAIL = "npurusotm90@gmail.com";

const socials = [
  { Icon: Github, href: "https://github.com/purusotam-ctrl", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/purusottam-nanda-a72106295", label: "LinkedIn" },
  { Icon: Instagram, href: "https://www.instagram.com/nanda_babu_9", label: "Instagram" },
  { Icon: Mail, href: `mailto:${CONTACT_EMAIL}`, label: "Email" },
];

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid form");
      return;
    }
    setLoading(true);
    const { name, email, message } = parsed.data;
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setLoading(false);
    (e.target as HTMLFormElement).reset();
    toast.success("Opening your email app to send the message.");
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <p className="font-mono text-xs tracking-widest text-primary uppercase mb-3">// Contact</p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Let's build <span className="text-gradient">something</span>.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Have a project, internship, or collaboration in mind? Drop a message.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3 glass rounded-2xl p-6 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs font-mono text-muted-foreground">NAME</span>
                <input
                  name="name"
                  required
                  maxLength={80}
                  className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-colors"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="text-xs font-mono text-muted-foreground">EMAIL</span>
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={160}
                  className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-colors"
                  placeholder="you@domain.com"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-xs font-mono text-muted-foreground">MESSAGE</span>
              <textarea
                name="message"
                rows={5}
                required
                maxLength={1000}
                className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                placeholder="Tell me about your idea..."
              />
            </label>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-violet)] text-background font-semibold text-sm shadow-[var(--shadow-neon)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-transform"
            >
              <Send className="w-4 h-4" />
              {loading ? "Sending..." : "Send message"}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-4"
          >
            <div className="glass rounded-2xl p-6">
              <p className="text-xs font-mono text-muted-foreground">REACH OUT</p>
              <a href="mailto:npurusotam90@gmail.com.com" className="mt-2 block text-lg font-semibold hover:text-primary transition-colors">
                npurusotam90@gmail.com.com
              </a>
              <p className="text-sm text-muted-foreground mt-1">Replies within 24h.</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <p className="text-xs font-mono text-muted-foreground mb-3">SOCIAL</p>
              <div className="flex gap-2">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    className="grid place-items-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:text-primary hover:border-primary/40 hover:-translate-y-0.5 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
