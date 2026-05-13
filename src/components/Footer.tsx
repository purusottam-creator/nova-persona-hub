export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Purusottam Nanda. Crafted with care.
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Built with React · TanStack Start · Framer Motion
        </p>
      </div>
    </footer>
  );
}
