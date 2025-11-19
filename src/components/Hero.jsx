import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mx-auto mb-8 h-28 w-28 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 p-[2px] shadow-[0_0_60px_rgba(59,130,246,0.35)]">
            <div className="h-full w-full rounded-2xl bg-slate-950/80 backdrop-blur-sm grid place-items-center">
              <span className="text-3xl font-semibold text-white">DA</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Daham Abeyratne
          </h1>
          <p className="mt-4 text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto">
            AI and Data Science undergraduate crafting intelligent, data-driven solutions.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center rounded-xl bg-blue-500 px-5 py-3 text-white shadow-lg shadow-blue-500/25 transition hover:brightness-110"
            >
              View Projects
            </a>
            <a
              href="mailto:daham.abeyratne@example.com"
              className="inline-flex items-center rounded-xl border border-blue-400/40 px-5 py-3 text-blue-100 hover:bg-white/5"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4 text-blue-200/80">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white transition">GitHub</a>
            <span className="opacity-40">•</span>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white transition">LinkedIn</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
