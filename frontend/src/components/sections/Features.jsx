import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const features = [
  {
    emoji: "🤖",
    title: "AI Assistant",
    desc: "Generate smart task suggestions instantly.",
  },

  {
    emoji: "📊",
    title: "Analytics",
    desc: "Visualize productivity with beautiful charts.",
  },

  {
    emoji: "📅",
    title: "Calendar",
    desc: "Plan every task using calendar scheduling.",
  },

  {
    emoji: "📋",
    title: "Kanban Board",
    desc: "Drag and drop tasks with ease.",
  },

  {
    emoji: "🔔",
    title: "Smart Reminder",
    desc: "Never miss important deadlines again.",
  },

  {
    emoji: "👥",
    title: "Team Collaboration",
    desc: "Work together in real time.",
  },
];

function Features() {
  return (
    <section className="bg-slate-950 py-24 text-white">

      <Container>

        <SectionTitle
          subtitle="Features"
          title="Everything you need"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (

            <Card key={feature.title}>

              <div className="text-5xl">
                {feature.emoji}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                {feature.desc}
              </p>

            </Card>

          ))}

        </div>

      </Container>

    </section>
  );
}

export default Features;