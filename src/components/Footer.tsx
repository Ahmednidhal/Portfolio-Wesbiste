export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-white/10 bg-background text-center">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-foreground/50">
          © {new Date().getFullYear()} Ahmed Nidhal. All rights reserved.
        </p>
        <p className="text-sm text-foreground/50 mt-4 md:mt-0 tracking-widest uppercase">
          Designed & Built by <span className="text-foreground font-medium">Ahmed Nidhal</span>
        </p>
      </div>
    </footer>
  );
}
