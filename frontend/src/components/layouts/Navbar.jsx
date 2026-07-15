import Button from "../ui/Button";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        {/* Logo */}

        <h1 className="text-3xl font-extrabold tracking-wide">
          <span className="text-indigo-500">Task</span>
          <span className="text-white">Nova</span>
        </h1>

        {/* Navigation */}

        <ul className="hidden gap-8 text-slate-300 md:flex">
          <li>
            <a href="#" className="transition hover:text-indigo-400">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-indigo-400">
              Features
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-indigo-400">
              Pricing
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-indigo-400">
              About
            </a>
          </li>
        </ul>

        <Button>Login</Button>
      </div>
    </nav>
  );
}

export default Navbar;