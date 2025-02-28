
import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    id: 1,
    title: "Create Your Project",
    description: "Describe your project requirements and budget in detail.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600",
    icon: "📝"
  },
  {
    id: 2,
    title: "Match with Freelancers",
    description: "Get matched with the most suitable professionals for your needs.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600",
    icon: "🔍"
  },
  {
    id: 3,
    title: "Collaborate Effectively",
    description: "Work together seamlessly with built-in communication tools.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    icon: "💬"
  },
  {
    id: 4,
    title: "Approve & Pay",
    description: "Review the completed work and release payment when satisfied.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=600",
    icon: "✅"
  }
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [imgLoaded, setImgLoaded] = useState<Record<number, boolean>>({});
  const targetRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % steps.length) + 1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isInView]);

  const handleImageLoad = (stepId: number) => {
    setImgLoaded(prev => ({ ...prev, [stepId]: true }));
  };

  return (
    <section id="how-it-works" ref={targetRef} className="section-padding bg-hustlance-soft-gray relative overflow-hidden">
      <div className="container-wide">
        <div className="text-center mb-16">
          <div className="inline-block bg-white text-hustlance-dark-purple text-sm font-medium px-3 py-1 rounded-full mb-4">
            Simple Process
          </div>
          <h2 className="section-heading">How Hustlance Works</h2>
          <p className="section-subheading">
            Get your projects done in four simple steps with our streamlined process
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Steps */}
          <div className="space-y-5">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`relative p-6 rounded-xl transition-all duration-500 cursor-pointer ${
                  activeStep === step.id
                    ? 'bg-white shadow-md scale-[1.02]'
                    : 'bg-transparent hover:bg-white/50'
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <div className="flex items-start">
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-xl mr-5 transition-all duration-300 ${
                      activeStep === step.id
                        ? 'bg-hustlance-purple text-white'
                        : 'bg-white text-hustlance-dark-purple'
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <h3 
                      className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                        activeStep === step.id 
                          ? 'text-hustlance-dark-gray' 
                          : 'text-hustlance-neutral-gray'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className={`transition-colors duration-300 ${
                        activeStep === step.id 
                          ? 'text-hustlance-neutral-gray' 
                          : 'text-hustlance-neutral-gray/80'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Active indicator */}
                {activeStep === step.id && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-hustlance-purple rounded-l-xl"></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Right Column: Image */}
          <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
            {steps.map((step) => (
              <div 
                key={step.id}
                className={`absolute inset-0 transition-all duration-700 ${
                  activeStep === step.id
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                }`}
              >
                {!imgLoaded[step.id] && (
                  <div className="absolute inset-0 bg-hustlance-soft-gray animate-pulse"></div>
                )}
                <img
                  src={step.image}
                  alt={step.title}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    imgLoaded[step.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(step.id)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-hustlance-dark-purple text-sm font-bold mb-2">
                    {step.id}
                  </span>
                  <h4 className="text-xl font-semibold text-white">{step.title}</h4>
                </div>
              </div>
            ))}
            
            {/* Progress Indicators */}
            <div className="absolute bottom-3 right-3 flex space-x-1">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeStep === step.id
                      ? 'bg-white w-6'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to step ${step.id}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
