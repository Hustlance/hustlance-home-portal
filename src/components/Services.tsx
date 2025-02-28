
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "development",
    title: "Development",
    description: "Find expert developers for your web, mobile, or software projects.",
    items: [
      { name: "Web Development", icon: "💻" },
      { name: "Mobile Apps", icon: "📱" },
      { name: "Custom Software", icon: "⚙️" },
      { name: "API Integration", icon: "🔌" },
      { name: "E-commerce", icon: "🛒" },
      { name: "WordPress", icon: "🔧" },
    ]
  },
  {
    id: "design",
    title: "Design",
    description: "Collaborate with talented designers to bring your vision to life.",
    items: [
      { name: "UI/UX Design", icon: "🎨" },
      { name: "Graphic Design", icon: "✏️" },
      { name: "Logo Design", icon: "🔠" },
      { name: "Brand Identity", icon: "🏷️" },
      { name: "Illustrations", icon: "🖌️" },
      { name: "Motion Graphics", icon: "🎬" },
    ]
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "Drive growth with marketing experts who deliver results.",
    items: [
      { name: "SEO", icon: "🔍" },
      { name: "Content Marketing", icon: "📝" },
      { name: "Social Media", icon: "📱" },
      { name: "Email Marketing", icon: "📧" },
      { name: "PPC", icon: "💰" },
      { name: "Analytics", icon: "📊" },
    ]
  },
  {
    id: "writing",
    title: "Writing",
    description: "Get compelling content from experienced writers.",
    items: [
      { name: "Blog Posts", icon: "📄" },
      { name: "Copywriting", icon: "✍️" },
      { name: "Technical Writing", icon: "📘" },
      { name: "UX Writing", icon: "🖋️" },
      { name: "Ghostwriting", icon: "👻" },
      { name: "Editing", icon: "📝" },
    ]
  }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("development");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section id="services" className="section-padding bg-white relative">
      <div className="container-wide">
        <div className="text-center mb-16">
          <div className="inline-block bg-hustlance-light-purple text-hustlance-dark-purple text-sm font-medium px-3 py-1 rounded-full mb-4">
            Our Services
          </div>
          <h2 className="section-heading">Find the perfect skill set</h2>
          <p className="section-subheading">
            Browse through our wide range of services and find the perfect match for your project needs
          </p>
        </div>

        <Tabs defaultValue="development" onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full bg-hustlance-soft-gray rounded-lg p-1 mb-8 flex flex-wrap">
            {services.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className={`flex-1 rounded-md py-3 text-sm font-medium transition-all data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-hustlance-dark-purple data-[state=inactive]:text-hustlance-neutral-gray`}
              >
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((category) => (
            <TabsContent
              key={category.id}
              value={category.id}
              className="mt-0 animate-fade-in"
            >
              <div className="text-center mb-10 max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold mb-3 text-hustlance-dark-gray">
                  {category.title}
                </h3>
                <p className="text-hustlance-neutral-gray">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {category.items.map((item) => (
                  <Card 
                    key={item.name}
                    className={`glass-card overflow-hidden cursor-pointer transition-all duration-300 ${
                      hoveredItem === item.name ? 'scale-[1.02]' : 'scale-100'
                    }`}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <CardContent className="p-6 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="mr-4 text-2xl">{item.icon}</div>
                        <h4 className="font-medium text-hustlance-dark-gray">{item.name}</h4>
                      </div>
                      <ArrowRight 
                        className={`h-4 w-4 text-hustlance-purple transition-all duration-300 ${
                          hoveredItem === item.name ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
                        }`} 
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
