import Button from "../ui/Button";

function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      {/* Background Glow */}

      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-indigo-600/30 blur-[120px]" />

      <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-violet-600/20 blur-[150px]" />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <div className="max-w-3xl">
          <p className="mb-6 font-semibold uppercase tracking-[0.35em] text-indigo-400">
            AI Powered Productivity
          </p>

          <h1 className="text-6xl font-black leading-tight md:text-8xl">
            Organize

            <span className="block bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Everything.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-400">
            TaskNova combines AI, Kanban, Calendar,
            Analytics and Smart Automation into one
            beautiful productivity platform.
          </p>

          <div className="mt-12 flex gap-5">
            <Button>Get Started</Button>

            <Button variant="secondary">
              Live Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;