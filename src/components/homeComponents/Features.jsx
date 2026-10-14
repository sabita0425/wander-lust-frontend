import { FileText, Handshake, ShieldCheck, Users } from "lucide-react";
import React from "react";

const data = [
  {
    icon: Handshake,
    title: "Customer Support",
    description:
      "We provide best customer support so that people do not get confused about our service.",
  },
  {
    icon: Users,
    title: "Multiple Collaborators",
    description:
      "you can add multiple collaborators to your project and work together with them.",
  },
  {
    icon: ShieldCheck,
    title: "Secure",
    description:
      "Our website is secure and we provide best security to our users so that they do not get hacked.",
  },
  {
    icon: FileText,
    title: "Detailed Reports",
    description:
      "We provide detailed reports to help you track your progress and make informed decisions.",
  },
];

const Features = () => {
  return (
    <section className="px-20 py-24 bg-orange-50">
      <div>
        <h2 className="mb-20 text-5xl font-bold text-center">Features</h2>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {data.map((f, index) => {
          return (
            <div className="border border-gray-300 px-4 py-8 rounded text-center bg-white">
              <div className="flex justify-center py-8">
                <f.icon size={50} className="text-orange-500" />
              </div>

              <h3 className="text-2xl font-semibold mb-6"> {f.title}</h3>

              <p>{f.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
