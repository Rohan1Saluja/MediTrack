import FeatureCard from "@/components/ui/FeatureCard";
import { Bell, CheckCircle2, BarChart2 } from "lucide-react";

const Features = () => {
  // mock data
  const features = [
    {
      icon: <Bell />,
      title: "Daily Reminders",
      description: "Receive notifications so you never miss a dose.",
    },
    {
      icon: <CheckCircle2 />,
      title: "Track Progress",
      description: "Mark medications as taken to maintain your schedule.",
    },
    {
      icon: <BarChart2 />,
      title: "View History",
      description: "Access an overview of your medication adherence.",
    },
  ];
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12 md:mb-16">
          Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
