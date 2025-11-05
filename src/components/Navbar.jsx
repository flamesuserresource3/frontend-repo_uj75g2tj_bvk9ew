import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 shadow-sm" />
            <span className="text-sm font-semibold tracking-tight sm:text-base">
              Muhammad Ihsanuddienullah
            </span>
          </a>

          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#projects" className="hover:text-cyan-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-600 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="mailto:muhammad.ihsanuddienullah@example.com"
              className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-md transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">Get in touch</span>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
