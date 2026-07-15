import Container from "../ui/Container";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10 text-slate-400">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

          <h2 className="text-2xl font-bold">
            <span className="text-indigo-500">Task</span>
            <span className="text-white">Nova</span>
          </h2>

          <p>
            © 2026 TaskNova. Built with React & Tailwind CSS.
          </p>

        </div>
      </Container>
    </footer>
  );
}

export default Footer;