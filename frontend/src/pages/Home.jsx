import Navbar from "../components/layouts/Navbar";
import Hero from "../components/sections/Hero";

function Home() {
  console.log("Home component rendered");

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <h1 className="text-4xl text-green-500">
        THIS IS HOME
      </h1>

      <Hero />
    </main>
  );
}

export default Home;