export default function RelataFooter() {
  return (
      <footer className="flex flex-col gap-5 bg-[#101314] px-6 pb-8 text-[10px] uppercase tracking-[0.2em] text-white/40 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <span>© {new Date().getFullYear()} Relata LLC</span>
        <span>Digital communications for a connected world</span>
        <a href="#top" className="text-[#d4af62]">
          Back to top ↑
        </a>
      </footer>
  );
}
