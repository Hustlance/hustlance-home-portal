
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import AnimatedGradient from '@/components/AnimatedGradient';

const Index = () => {
  useEffect(() => {
    // Initialize animation for elements with appear-animate class
    const appearElements = document.querySelectorAll('.appear-animate');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    appearElements.forEach((element) => {
      observer.observe(element);
    });
    
    return () => {
      appearElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <AnimatedGradient />
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
