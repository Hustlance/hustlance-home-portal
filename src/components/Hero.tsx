
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const words = ["Developers", "Designers", "Writers", "Marketers", "Experts"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setCurrentWord(words[(currentWordIndex + 1) % words.length]);
        setIsChanging(false);
      }, 500);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [currentWordIndex]);

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-hustlance-light-purple rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-hustlance-light-purple rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse-slow"></div>
      
      <div className="container-wide relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Badge */}
          <div 
            className={`bg-white/80 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 shadow-sm border border-gray-100 transition-all duration-700 ${
              isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
            }`}
          >
            <span className="text-sm font-medium text-hustlance-dark-purple">Find The Perfect Match For Your Project</span>
          </div>
          
          {/* Heading */}
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-hustlance-dark-gray mb-6 transition-all duration-700 delay-100 max-w-3xl leading-tight ${
              isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
            }`}
          >
            Connect with Top-Tier <br className="hidden md:block" />
            <span className="text-hustlance-purple relative inline-block">
              <span 
                className={`inline-block transition-all duration-500 ${
                  isChanging ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'
                }`}
              >
                {currentWord}
              </span>
              <span className="absolute bottom-1 left-0 w-full h-1 bg-hustlance-purple/20 rounded-full"></span>
            </span>
          </h1>
          
          {/* Subheading */}
          <p 
            className={`text-lg text-hustlance-neutral-gray max-w-2xl mb-8 transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
            }`}
          >
            Hustlance connects you with skilled professionals for your projects.
            Find the perfect match for your needs and get your work done effortlessly.
          </p>
          
          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
            }`}
          >
            <Button 
              className="btn-primary group"
              size="lg"
            >
              <span>Find Talent</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              className="btn-secondary"
              size="lg"
              variant="outline"
            >
              Become a Freelancer
            </Button>
          </div>
          
          {/* Stats */}
          <div 
            className={`mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto transition-all duration-700 delay-400 ${
              isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
            }`}
          >
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-hustlance-dark-gray mb-1">10K+</span>
              <span className="text-sm text-hustlance-neutral-gray">Freelancers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-hustlance-dark-gray mb-1">8K+</span>
              <span className="text-sm text-hustlance-neutral-gray">Completed Projects</span>
            </div>
            <div className="flex flex-col items-center col-span-2 md:col-span-1">
              <span className="text-3xl font-bold text-hustlance-dark-gray mb-1">4.9/5</span>
              <span className="text-sm text-hustlance-neutral-gray">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-8 h-12 rounded-full border-2 border-hustlance-neutral-gray/30 flex justify-center p-1">
          <div className="w-1 h-3 bg-hustlance-neutral-gray/50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
