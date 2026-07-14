import { motion } from "framer-motion";
import { Upload, X, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

type Cert = { id: string; name: string; dataUrl: string; type: string };

const STORAGE_KEY = "portfolio_certificates_v1";

export function Certificates() {
  const [certs, setCerts] = useState<Cert[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setCerts(JSON.parse(raw));
    } catch {}
  }, []);

  const persist = (next: Cert[]) => {
    setCerts(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      toast.error("Storage full — remove a certificate first.");
    }
  };

  const onFiles = async (files: FileList | null) => {
    if (!files || !files.length) return;
    const readers = Array.from(files).map(
      (f) =>
        new Promise<Cert>((resolve, reject) => {
          if (f.size > 3 * 1024 * 1024) {
            reject(new Error(`${f.name} exceeds 3MB`));
            return;
          }
          const r = new FileReader();
          r.onload = () =>
            resolve({
              id: crypto.randomUUID(),
              name: f.name,
              type: f.type,
              dataUrl: String(r.result),
            });
          r.onerror = () => reject(new Error("Read failed"));
          r.readAsDataURL(f);
        })
    );
    try {
      const added = await Promise.all(readers);
      persist([...certs, ...added]);
      toast.success(`${added.length} certificate(s) added`);
    } catch (e: any) {
      toast.error(e.message ?? "Upload failed");
    }
  };

  const remove = (id: string) => persist(certs.filter((c) => c.id !== id));

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
              Upload and showcase your verified achievements. Stored locally in
              your browser.
            </p>
          </div>

          <button
            onClick={() => inputRef.current?.click()}
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-violet)] text-background font-semibold text-sm shadow-[var(--shadow-neon)] hover:scale-[1.03] active:scale-[0.98] transition-transform"
          >
            <Upload className="w-4 h-4" /> Upload Certificate
          </button>
          <input
            ref={inputRef}
            type="file"
            accept="image/*,application/pdf"
            multiple
            className="hidden"
            onChange={(e) => {
              onFiles(e.target.files);
              e.target.value = "";
            }}
          />
        </motion.div>

        {certs.length === 0 ? (
          <div className="glass rounded-2xl p-10 text-center">
            <Award className="mx-auto w-10 h-10 text-primary/70" />
            <p className="mt-3 text-muted-foreground">
              No certificates yet. Click{" "}
              <span className="text-foreground font-medium">Upload Certificate</span>{" "}
              to add PDFs or images.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certs.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative rounded-2xl overflow-hidden glass-strong neon-border"
              >
                <button
                  onClick={() => remove(c.id)}
                  aria-label="Remove"
                  className="absolute top-2 right-2 z-10 grid place-items-center w-8 h-8 rounded-lg bg-background/70 backdrop-blur border border-white/10 hover:text-destructive hover:border-destructive/40 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <a
                  href={c.dataUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <div className="aspect-[4/3] bg-black/40 grid place-items-center">
                    {c.type.startsWith("image/") ? (
                      <img
                        src={c.dataUrl}
                        alt={c.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-primary">
                        <Award className="w-10 h-10" />
                        <span className="font-mono text-xs">PDF</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-medium truncate">{c.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Click to view
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
