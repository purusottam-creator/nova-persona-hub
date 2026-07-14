import { motion } from "framer-motion";
import { Award, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useRef } from "react";
import backend from "@/assets/certificates/BACKEND_WEBDEVELOPMENT.pdf.asset.json";
import cloud from "@/assets/certificates/Cloud_Computing_1.pdf.asset.json";
import iot from "@/assets/certificates/IOT_INTERNSHIP.pdf.asset.json";
import nptel from "@/assets/certificates/NPTEL24CS115S75010100504218384.pdf.asset.json";
import privacy from "@/assets/certificates/Privacy_and_Security_in_Online_Social_Media_2.pdf.asset.json";
import swadeshi from "@/assets/certificates/SWADESHI_SANKALPA_RUN.pdf.asset.json";
import times from "@/assets/certificates/TIMES_FOUNDATION.pdf.asset.json";

const CERTIFICATES = [
  { title: "Backend Web Development", issuer: "Certification", url: backend.url },
  { title: "Cloud Computing", issuer: "NPTEL", url: cloud.url },
  { title: "IoT Internship", issuer: "Internship Program", url: iot.url },
  { title: "NPTEL Course", issuer: "NPTEL", url: nptel.url },
  { title: "Privacy & Security in Online Social Media", issuer: "NPTEL", url: privacy.url },
  { title: "Swadeshi Sankalpa Run", issuer: "Participation", url: swadeshi.url },
  { title: "Times Foundation", issuer: "Times Foundation", url: times.url },
];

export function Certificates() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };

  return (
    <section id="certificates" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-end justify-between gap-4 mb-10"
        >
          <div>
            <span className="font-mono text-xs text-primary">// credentials</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
              <span className="text-gradient">Certificates</span>
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl">
              Scroll through my verified achievements and course completions.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous"
              className="grid place-items-center w-11 h-11 rounded-xl glass-strong hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next"
              className="grid place-items-center w-11 h-11 rounded-xl glass-strong hover:text-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div
          ref={scrollerRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth"
          style={{ scrollbarWidth: "thin" }}
        >
          {CERTIFICATES.map((c, i) => (
            <motion.a
              key={c.url}
              href={c.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group snap-start shrink-0 w-[85%] sm:w-[420px] rounded-2xl overflow-hidden glass-strong neon-border"
            >
              <div className="aspect-[4/3] bg-black/40 relative">
                <iframe
                  src={`${c.url}#toolbar=0&navpanes=0&view=FitH`}
                  title={c.title}
                  className="w-full h-full pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute top-3 right-3 grid place-items-center w-9 h-9 rounded-lg bg-background/70 backdrop-blur border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
              <div className="p-4 flex items-start gap-3">
                <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate">{c.title}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground truncate">
                    {c.issuer}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
