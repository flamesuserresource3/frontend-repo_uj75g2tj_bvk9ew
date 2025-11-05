import { Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Let’s build something great</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">
            I’m open to freelance work, collaborations, and interesting product challenges.
          </p>
        </div>

        <form
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = Object.fromEntries(new FormData(form).entries());
            const mailto = `mailto:muhammad.ihsanuddienullah@example.com?subject=${encodeURIComponent(
              "Portfolio Contact"
            )}&body=${encodeURIComponent(`${data.name} (${data.email})\n\n${data.message}`)}`;
            window.location.href = mailto;
          }}
        >
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium">Name</label>
            <input
              required
              name="name"
              className="mt-1 w-full rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 px-3 py-2 backdrop-blur focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Your name"
            />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium">Email</label>
            <input
              required
              type="email"
              name="email"
              className="mt-1 w-full rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 px-3 py-2 backdrop-blur focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="you@example.com"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium">Message</label>
            <textarea
              required
              name="message"
              rows={4}
              className="mt-1 w-full rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 px-3 py-2 backdrop-blur focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Tell me about your project"
            />
          </div>

          <div className="sm:col-span-2 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
              <Mail className="h-4 w-4" />
              muhammed.ihsanuddienullah@example.com
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 text-sm font-medium shadow hover:from-cyan-600 hover:to-blue-700 transition-colors"
            >
              <Send className="h-4 w-4" /> Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
