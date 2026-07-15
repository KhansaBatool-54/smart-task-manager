import Button from "../ui/Button";
import Container from "../ui/Container";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">

      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl"></div>

      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <p className="mb-5 font-semibold uppercase tracking-[0.3em] text-indigo-400">
              AI Powered Productivity
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">

              Organize

              <span className="block bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Everything.
              </span>

            </h1>

            <p className="mt-8 text-lg leading-9 text-slate-400">

              TaskNova combines AI, Kanban,
              Calendar, Analytics and Smart
              Automation into one modern
              productivity platform.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button>
                Get Started
              </Button>

              <Button variant="secondary">
                Live Demo
              </Button>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">

              {/* Top */}

              <div className="mb-6 flex items-center justify-between">

                <h3 className="font-bold text-xl">
                  Dashboard
                </h3>

                <span className="rounded-full bg-green-500 px-3 py-1 text-xs">
                  Live
                </span>

              </div>

              {/* Stats */}

              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-xl bg-slate-800 p-5">

                  <p className="text-slate-400">
                    Tasks
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    148
                  </h2>

                </div>

                <div className="rounded-xl bg-slate-800 p-5">

                  <p className="text-slate-400">
                    Completed
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-green-400">
                    92%
                  </h2>

                </div>

              </div>

              {/* Today's Tasks */}

              <div className="mt-6 space-y-3">

                <div className="rounded-lg bg-slate-800 p-4">
                  ✔ Complete React Project
                </div>

                <div className="rounded-lg bg-slate-800 p-4">
                  📅 Team Meeting
                </div>

                <div className="rounded-lg bg-slate-800 p-4">
                  🤖 AI Suggestions Ready
                </div>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}

export default Hero;