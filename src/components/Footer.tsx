export default function Footer() {
  return (
    <footer className="section-pad mx-auto max-w-6xl border-t border-void-line py-10">
      <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-xs text-ink-faint">© {new Date().getFullYear()} Caio Oliveira. Goiânia, Brazil.</p>
        <p className="font-mono text-xs text-ink-faint">
          Built with Next.js, Tailwind & Three.js <span className="text-moon">☾</span>
        </p>
      </div>
    </footer>
  );
}
