
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedGradient from '@/components/AnimatedGradient';
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

// Sample project data - in a real application, this would come from an API
const projects = [
  {
    id: '1',
    title: 'E-commerce Platform Redesign',
    description: 'A complete overhaul of an outdated e-commerce platform, focusing on user experience and conversion optimization.',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?auto=format&fit=crop&q=80&w=2940',
    tags: ['UX/UI', 'E-commerce', 'Web Design']
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    description: 'A secure and user-friendly mobile banking application with advanced features and biometric authentication.',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=2940',
    tags: ['Mobile App', 'Fintech', 'React Native']
  },
  {
    id: '3',
    title: 'Marketing Campaign for Startup',
    description: 'A comprehensive digital marketing campaign that increased brand awareness and lead generation for a tech startup.',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2940',
    tags: ['Digital Marketing', 'SEO', 'Content Strategy']
  },
  {
    id: '4',
    title: 'Corporate Website Copywriting',
    description: 'Engaging and SEO-optimized content for a corporate website that improved search rankings and conversions.',
    category: 'Writing',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2940',
    tags: ['Copywriting', 'SEO', 'Content']
  },
  {
    id: '5',
    title: 'Fitness Tracking Application',
    description: 'A mobile app that helps users track their fitness goals, workouts, and nutrition with personalized recommendations.',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1540396515873-d95b951b1e15?auto=format&fit=crop&q=80&w=2940',
    tags: ['Mobile App', 'Health Tech', 'UI/UX']
  },
  {
    id: '6',
    title: 'Brand Identity for Restaurant Chain',
    description: 'Complete brand identity including logo, color scheme, typography, and marketing materials for a restaurant chain.',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1580974852861-c5fecb3d9c0c?auto=format&fit=crop&q=80&w=2940',
    tags: ['Branding', 'Graphic Design', 'Logo Design']
  }
];

const categories = ['All', 'Development', 'Design', 'Marketing', 'Writing'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  useEffect(() => {
    // Filter projects based on category and search query
    const filtered = projects.filter((project) => {
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
    
    setFilteredProjects(filtered);
  }, [activeCategory, searchQuery]);

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
                Our Projects - Turning Ideas into Reality
              </h1>
              <p className="text-xl text-hustlance-neutral-gray mb-8">
                Explore our portfolio of successful projects across various industries and disciplines. Each project represents our commitment to excellence and innovation.
              </p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-hustlance-light-purple rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-hustlance-light-purple rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </section>

        {/* Filters Section */}
        <section className="py-12">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              {/* Category Filters */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? 'default' : 'outline'}
                    className={`rounded-full ${
                      activeCategory === category
                        ? 'bg-hustlance-purple hover:bg-hustlance-dark-purple text-white'
                        : 'border-hustlance-neutral-gray/30 text-hustlance-neutral-gray hover:bg-hustlance-light-purple hover:text-hustlance-dark-purple hover:border-transparent'
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              {/* Search Bar */}
              <div className="relative max-w-sm w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-hustlance-neutral-gray h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-hustlance-neutral-gray/30 focus:border-hustlance-purple"
                />
              </div>
            </div>
            
            {/* Projects Grid */}
            {filteredProjects.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold mb-2 text-hustlance-dark-gray">No projects found</h3>
                <p className="text-hustlance-neutral-gray">Try adjusting your search or filter criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <Link
                    key={project.id}
                    to={`/projects/${project.id}`}
                    className="appear-animate"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className={`glass-card rounded-xl overflow-hidden transition-all duration-300 h-full ${
                      hoveredProject === project.id ? 'transform scale-[1.02] shadow-lg' : ''
                    }`}>
                      <div className="h-60 overflow-hidden relative">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-500"
                          style={{
                            transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)'
                          }}
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-hustlance-dark-purple text-sm font-medium rounded-full">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-hustlance-dark-gray">{project.title}</h3>
                        <p className="text-hustlance-neutral-gray mb-4 line-clamp-2">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, index) => (
                            <span 
                              key={index} 
                              className="px-2 py-1 bg-hustlance-light-purple text-hustlance-dark-purple text-xs rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
