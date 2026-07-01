export default function Footer() {
  return (
    <footer className="section-pad mx-auto max-w-6xl border-t border-void-line py-10">
      <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} Caio Oliveira Gonçalves. Goiânia, Brasil.
        </p>
        <p className="font-mono text-xs text-ink-faint">
          Construído com Next.js, Tailwind e Three.js <span className="text-moon">☾</span>
        </p>
      </div>
    </footer>
  );
}
