import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Product Designer",
    text: "TaskNova completely changed how I manage my work every day.",
  },
  {
    name: "Ali Khan",
    role: "Software Engineer",
    text: "The AI suggestions save me hours every single week.",
  },
  {
    name: "Emma Wilson",
    role: "Project Manager",
    text: "Beautiful interface with incredibly useful productivity tools.",
  },
];

function Testimonials() {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <Container>

        <SectionTitle
          subtitle="Testimonials"
          title="Loved by Professionals"
        />

        <div className="grid gap-8 md:grid-cols-3">

          {testimonials.map((item) => (

            <Card key={item.name}>

              <p className="leading-8 text-slate-400">
                "{item.text}"
              </p>

              <div className="mt-8">

                <h3 className="font-bold">
                  {item.name}
                </h3>

                <p className="text-sm text-indigo-400">
                  {item.role}
                </p>

              </div>

            </Card>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Testimonials;