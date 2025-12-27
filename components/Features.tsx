
import React from 'react';

const Features: React.FC = () => {
  const pillars = [
    {
      title: "Spatial Labs",
      description: "Pioneering the next generation of MR/AR environments for collaborative industrial design.",
      icon: "✧"
    },
    {
      title: "Bio-Synthetic Core",
      description: "Researching living materials that adapt and evolve within architectural frameworks.",
      icon: "◈"
    },
    {
      title: "Neural Synergy",
      description: "Developing non-invasive BCI tools to bridge the gap between thought and creation.",
      icon: "≋"
    }
  ];

  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-white border border-[#F0F7F4] hover:border-[#98BDAB] transition-all duration-500 hover:shadow-xl hover:shadow-[#98BDAB]/5">
              <div className="text-4xl text-[#98BDAB] mb-6 font-serif">{pillar.icon}</div>
              <h3 className="text-2xl font-serif font-bold text-[#2D4F40] mb-4">{pillar.title}</h3>
              <p className="text-[#5A7A6B] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
