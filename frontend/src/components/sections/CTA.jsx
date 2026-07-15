import Container from "../ui/Container";
import Button from "../ui/Button";

function CTA() {
  return (
    <section className="bg-slate-950 py-24">
      <Container>
        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 p-12 text-center">

          <h2 className="text-4xl font-bold text-white">
            Ready to boost your productivity?
          </h2>

          <p className="mt-6 text-lg text-indigo-100">
            Join thousands of users managing their work smarter with TaskNova.
          </p>

          <div className="mt-10">
            <Button>Get Started Free</Button>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default CTA;