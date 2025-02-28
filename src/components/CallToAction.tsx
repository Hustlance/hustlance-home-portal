
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    const element = document.getElementById('cta-section');
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="cta-section" className="section-padding bg-hustlance-soft-gray relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-hustlance-light-purple rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-hustlance-light-purple rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="container-wide relative z-10">
        <div 
          className={`glass-card p-12 md:p-16 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-hustlance-dark-gray mb-6">
            Ready to find your perfect match?
          </h2>
          <p className="text-lg text-hustlance-neutral-gray max-w-2xl mx-auto mb-10">
            Join thousands of businesses and freelancers already using Hustlance to connect, collaborate, and create amazing projects together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="btn-primary group w-full sm:w-auto"
              size="lg"
            >
              <span>Get Started For Free</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              className="btn-secondary w-full sm:w-auto"
              size="lg"
              variant="outline"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
