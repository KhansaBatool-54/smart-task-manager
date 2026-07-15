function Card({ children }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-2xl hover:shadow-indigo-500/20">
      {children}
    </div>
  );
}

export default Card;