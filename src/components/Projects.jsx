import { Code2, Globe, Cpu } from "lucide-react";

const projects = [
  {
    title: "Realtime Dashboard",
    description:
      "High-performance analytics dashboard with live data streams, built with websockets and reactive charts.",
    icon: Cpu,
    link: "#",
    stack: ["TypeScript", "React", "WebSocket"],
  },
  {
    title: "Modern Portfolio",
    description:
      "3D-enhanced portfolio with smooth motion and delightful interactions powered by Spline.",
    icon: Globe,
    link: "#",
    stack: ["Vite", "Tailwind", "Spline"],
  },
  {
    title: "API Toolkit",
    description:
      "Clean, well-documented API layer with auth, rate limits, and monitoring.",
    icon: Code2,
    link: "#",
    stack: ["FastAPI", "MongoDB", "Docker"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Selected Work</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">
            A few projects that showcase my approach to performance, polish, and developer ergonomics.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ title, description, icon: Icon, link, stack }) => (
            <a
              key={title}
              href={link}
              className="group rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 p-6 backdrop-blur hover:shadow-xl hover:shadow-cyan-500/10 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-xs text-neutral-500">{stack.join(" • ")}</div>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {description}
              </p>
              <div className="mt-4 text-sm text-cyan-600">View details →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
