
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedGradient from '@/components/AnimatedGradient';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Founder & CEO",
    bio: "With over 10 years of freelance and project management experience, Sarah founded Hustlance to connect businesses with top-tier talent.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 2,
    name: "David Chen",
    role: "CTO",
    bio: "As a tech enthusiast with a background in AI and software development, David ensures Hustlance's technology delivers seamless experiences.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Head of Talent",
    bio: "Emily's expertise in recruitment helps Hustlance maintain its pool of exceptional freelancers across all professional categories.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300"
  }
];

const values = [
  {
    id: 1,
    title: "Students Just Like You",
    description: "We understand the challenges students face because we've been there. Our platform is designed by students, for students.",
    icon: "👥"
  },
  {
    id: 2,
    title: "Expert Guidance",
    description: "Our mentors and project leads provide the guidance you need to turn your academic projects into impressive portfolios.",
    icon: "🧠"
  },
  {
    id: 3,
    title: "Hands-On Experience",
    description: "We believe in learning by doing. Get real-world experience that complements your theoretical knowledge.",
    icon: "🛠️"
  }
];

const About = () => {
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
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-hustlance-soft-gray opacity-60"></div>
          <div className="container-wide relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-hustlance-dark-gray">
                Helping You Build Your Dreams
              </h1>
              <p className="text-xl text-hustlance-neutral-gray mb-8">
                Hustlance was founded with a simple mission: connect great talent with amazing opportunities and help students showcase their skills.
              </p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-hustlance-light-purple rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-hustlance-light-purple rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </section>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="appear-animate">
                <h2 className="text-3xl font-bold mb-6 text-hustlance-dark-gray">Our Story</h2>
                <p className="text-hustlance-neutral-gray mb-4">
                  Hustlance began in 2020 when a group of passionate students and professionals noticed a gap between academic learning and industry requirements. Many talented students struggled to showcase their skills, while businesses searched for fresh perspectives.
                </p>
                <p className="text-hustlance-neutral-gray mb-6">
                  We created a platform that bridges this gap - connecting businesses with skilled students and freelancers while providing mentorship to help students build impressive portfolios through real-world projects.
                </p>
                <p className="text-hustlance-neutral-gray mb-6">
                  Today, Hustlance has helped thousands of students gain practical experience and assisted businesses in finding the perfect talent for their projects. Our community continues to grow, united by a passion for learning and innovation.
                </p>
                <Button 
                  className="bg-hustlance-purple hover:bg-hustlance-dark-purple text-white group"
                >
                  <span>Join Our Community</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl appear-animate">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2940" 
                  alt="Hustlance team collaboration" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-hustlance-soft-gray relative overflow-hidden">
          <div className="container-wide relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-hustlance-dark-gray">Our Values</h2>
              <p className="text-hustlance-neutral-gray max-w-3xl mx-auto">
                At Hustlance, we're guided by core principles that shape everything we do. These values ensure we deliver exceptional experiences for both clients and freelancers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.id} className="glass-card p-8 rounded-xl text-center appear-animate">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-hustlance-dark-gray">{value.title}</h3>
                  <p className="text-hustlance-neutral-gray">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-hustlance-light-purple rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-hustlance-light-purple rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-hustlance-dark-gray">Meet Our Team</h2>
              <p className="text-hustlance-neutral-gray max-w-3xl mx-auto">
                The passionate individuals behind Hustlance are dedicated to creating opportunities and fostering growth for both students and businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="glass-card rounded-xl overflow-hidden appear-animate">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1 text-hustlance-dark-gray">{member.name}</h3>
                    <p className="text-hustlance-purple mb-3">{member.role}</p>
                    <p className="text-hustlance-neutral-gray">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Hustlance Approach */}
        <section className="py-20 bg-hustlance-soft-gray">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-hustlance-dark-gray">The Hustlance Approach</h2>
              <p className="text-hustlance-neutral-gray max-w-3xl mx-auto">
                Our unique methodology ensures successful project delivery while providing valuable learning experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="appear-animate">
                <div className="space-y-8">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-hustlance-purple text-white flex items-center justify-center font-semibold">1</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-hustlance-dark-gray">Understanding Your Needs</h3>
                      <p className="text-hustlance-neutral-gray">We begin by thoroughly understanding your project requirements, goals, and constraints. This foundation ensures we can match you with the perfect talent.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-hustlance-purple text-white flex items-center justify-center font-semibold">2</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-hustlance-dark-gray">Talent Matching</h3>
                      <p className="text-hustlance-neutral-gray">Our sophisticated matching algorithm and manual curation process connects you with freelancers whose skills and experience align perfectly with your project needs.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-hustlance-purple text-white flex items-center justify-center font-semibold">3</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-hustlance-dark-gray">Guided Execution</h3>
                      <p className="text-hustlance-neutral-gray">For student projects, we provide mentorship and guidance throughout the development process, ensuring quality output while facilitating learning.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-hustlance-purple text-white flex items-center justify-center font-semibold">4</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-hustlance-dark-gray">Quality Assurance</h3>
                      <p className="text-hustlance-neutral-gray">Every project undergoes rigorous quality checks to ensure it meets both industry standards and client requirements before final delivery.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="appear-animate">
                <div className="glass-card p-8 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-hustlance-dark-gray">Our Commitment to Excellence</h3>
                  <p className="text-hustlance-neutral-gray mb-6">
                    What sets Hustlance apart is our unwavering commitment to excellence in everything we do. We believe in:
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mr-3 text-hustlance-purple">✓</div>
                      <p className="text-hustlance-neutral-gray"><span className="font-medium text-hustlance-dark-gray">Quality over quantity</span> - We focus on delivering exceptional work rather than rushing through projects.</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mr-3 text-hustlance-purple">✓</div>
                      <p className="text-hustlance-neutral-gray"><span className="font-medium text-hustlance-dark-gray">Transparent communication</span> - We maintain clear, open channels of communication throughout the project lifecycle.</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mr-3 text-hustlance-purple">✓</div>
                      <p className="text-hustlance-neutral-gray"><span className="font-medium text-hustlance-dark-gray">Continuous improvement</span> - We continuously refine our processes based on feedback and evolving industry standards.</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mr-3 text-hustlance-purple">✓</div>
                      <p className="text-hustlance-neutral-gray"><span className="font-medium text-hustlance-dark-gray">Educational value</span> - Every project is an opportunity for growth and learning for all involved.</p>
                    </li>
                  </ul>
                  
                  <div className="mt-8">
                    <Button 
                      className="w-full bg-hustlance-purple hover:bg-hustlance-dark-purple text-white group"
                    >
                      <span>Explore Our Projects</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
