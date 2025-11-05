import Spline from "@splinetool/react-spline";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/90 dark:from-neutral-950/70 dark:via-neutral-950/20 dark:to-neutral-950/90" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl py-24 sm:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 px-3 py-1 text-xs font-medium backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
            Available for freelance work
          </div>
          <h1 className="mt-4 text-4xl sm:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400">
            Muhammad Ihsanuddienullah
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Software Engineer crafting thoughtful, scalable web experiences. I build fast UIs, reliable services, and delightful product moments.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-medium shadow hover:scale-[1.02] active:scale-[0.98] transition-transform">
              See projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white/70 dark:bg-neutral-900/70 border border-black/10 dark:border-white/10 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-white hover:dark:bg-neutral-900 transition-colors">
              Contact me
            </a>
          </div>
        </div>

        <a href="#projects" className="relative mt-16 block w-max text-neutral-600 dark:text-neutral-300">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 px-4 py-2 text-sm backdrop-blur hover:translate-y-0.5 transition-transform">
            <ArrowDown className="h-4 w-4" />
            Scroll to explore
          </span>
        </a>
      </div>
    </section>
  );
}
