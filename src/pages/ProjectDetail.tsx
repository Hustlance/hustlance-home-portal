
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedGradient from '@/components/AnimatedGradient';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Tag, ExternalLink } from "lucide-react";

// Sample project data - in a real application, this would come from an API
const projectsData = [
  {
    id: '1',
    title: 'E-commerce Platform Redesign',
    description: 'A complete overhaul of an outdated e-commerce platform, focusing on user experience and conversion optimization.',
    fullDescription: `
      <p>This project involved a comprehensive redesign of an established e-commerce platform that was struggling with declining conversion rates and high cart abandonment. Our team conducted extensive user research to identify pain points in the customer journey.</p>
      
      <p>Key challenges included simplifying the checkout process, improving product discovery, and creating a responsive design that worked flawlessly across all devices. We implemented a clean, modern interface with intuitive navigation and enhanced search functionality.</p>
      
      <p>The results were significant: a 34% increase in conversion rate, 27% reduction in cart abandonment, and a 42% increase in average order value within three months of launch. The client also reported a substantial decrease in customer support inquiries related to website navigation and checkout issues.</p>
    `,
    category: 'Design',
    client: 'Fashion Retailer',
    completionDate: 'June 2023',
    duration: '12 weeks',
    image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?auto=format&fit=crop&q=80&w=2940',
    gallery: [
      'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=1400'
    ],
    tags: ['UX/UI', 'E-commerce', 'Web Design'],
    technologies: ['Figma', 'Adobe XD', 'HTML/CSS', 'JavaScript', 'Shopify'],
    teamMembers: ['Sarah Johnson (Lead Designer)', 'David Chen (UX Researcher)', 'Emily Rodriguez (Frontend Developer)'],
    website: 'https://example.com'
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    description: 'A secure and user-friendly mobile banking application with advanced features and biometric authentication.',
    fullDescription: `
      <p>We developed a cutting-edge mobile banking application that prioritizes security while delivering an intuitive user experience. The app includes features such as biometric authentication, real-time transaction monitoring, and personalized financial insights.</p>
      
      <p>A major challenge was balancing robust security measures with ease of use. Our solution incorporated multi-factor authentication and encryption while maintaining a clean, streamlined interface. We also implemented machine learning algorithms to detect unusual account activity and prevent fraud.</p>
      
      <p>The app has received exceptionally positive feedback from users, with a 4.8/5 rating on app stores. The client reported a 58% increase in mobile banking adoption among their customers and a significant reduction in call center volume for routine banking tasks.</p>
    `,
    category: 'Development',
    client: 'Regional Bank',
    completionDate: 'March 2023',
    duration: '20 weeks',
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=2940',
    gallery: [
      'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1579621970590-9d624316904b?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1400'
    ],
    tags: ['Mobile App', 'Fintech', 'React Native'],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Firebase'],
    teamMembers: ['David Chen (Lead Developer)', 'Sarah Johnson (UI Designer)', 'Michael Taylor (Backend Developer)'],
    website: 'https://example.com'
  },
  {
    id: '3',
    title: 'Marketing Campaign for Startup',
    description: 'A comprehensive digital marketing campaign that increased brand awareness and lead generation for a tech startup.',
    fullDescription: `
      <p>We designed and executed a multi-channel digital marketing strategy for a tech startup looking to increase brand awareness and generate qualified leads. The campaign included content marketing, social media, email marketing, and targeted PPC advertising.</p>
      
      <p>The startup faced challenges with limited brand recognition and a highly competitive market. Our approach focused on establishing thought leadership through valuable content and leveraging data-driven targeting to maximize ROI on advertising spend.</p>
      
      <p>Within six months, the campaign resulted in a 215% increase in website traffic, a 180% increase in social media engagement, and a 67% increase in qualified leads. The content we created continues to generate organic traffic and leads, providing ongoing value beyond the initial campaign period.</p>
    `,
    category: 'Marketing',
    client: 'Tech Startup',
    completionDate: 'November 2022',
    duration: '6 months',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2940',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400'
    ],
    tags: ['Digital Marketing', 'SEO', 'Content Strategy'],
    technologies: ['Google Analytics', 'HubSpot', 'SEMrush', 'Facebook Ads', 'Google Ads'],
    teamMembers: ['Emily Rodriguez (Marketing Strategist)', 'Sarah Johnson (Content Creator)', 'David Chen (Analytics Specialist)'],
    website: 'https://example.com'
  },
  {
    id: '4',
    title: 'Corporate Website Copywriting',
    description: 'Engaging and SEO-optimized content for a corporate website that improved search rankings and conversions.',
    fullDescription: `
      <p>We created compelling, SEO-optimized content for a corporate website relaunch, focusing on clearly communicating the company's value proposition while improving search engine visibility. The project included website copy, blog articles, case studies, and product descriptions.</p>
      
      <p>The client needed to maintain a professional tone while making complex technical information accessible to a broader audience. We developed a content strategy that balanced industry expertise with clarity and readability.</p>
      
      <p>After the website relaunch, the client saw a 94% increase in organic traffic, improved keyword rankings for targeted terms, and a 32% increase in contact form submissions. The blog content strategy continues to generate consistent traffic and leads.</p>
    `,
    category: 'Writing',
    client: 'Enterprise Software Company',
    completionDate: 'August 2022',
    duration: '10 weeks',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2940',
    gallery: [
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1400'
    ],
    tags: ['Copywriting', 'SEO', 'Content'],
    technologies: ['SEMrush', 'Ahrefs', 'Grammarly Business', 'WordPress', 'Google Analytics'],
    teamMembers: ['Emily Rodriguez (Lead Copywriter)', 'Sarah Johnson (SEO Specialist)', 'Michael Taylor (Content Strategist)'],
    website: 'https://example.com'
  },
  {
    id: '5',
    title: 'Fitness Tracking Application',
    description: 'A mobile app that helps users track their fitness goals, workouts, and nutrition with personalized recommendations.',
    fullDescription: `
      <p>We developed a feature-rich fitness tracking application that allows users to set goals, track workouts, monitor nutrition, and receive personalized recommendations based on their progress and preferences. The app integrates with wearable devices and offers social features for community support.</p>
      
      <p>Key challenges included creating accurate tracking algorithms, designing an intuitive interface for quick data entry, and developing personalization algorithms that provide valuable recommendations. We implemented machine learning to continuously improve the personalization engine based on user behavior and feedback.</p>
      
      <p>Since launch, the app has gained over 75,000 active monthly users and maintains a 4.7/5 rating on app stores. User retention rates exceed industry averages by 42%, with 68% of users reporting improved fitness outcomes after three months of use.</p>
    `,
    category: 'Development',
    client: 'Health & Fitness Brand',
    completionDate: 'April 2022',
    duration: '16 weeks',
    image: 'https://images.unsplash.com/photo-1540396515873-d95b951b1e15?auto=format&fit=crop&q=80&w=2940',
    gallery: [
      'https://images.unsplash.com/photo-1540396515873-d95b951b1e15?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=1400'
    ],
    tags: ['Mobile App', 'Health Tech', 'UI/UX'],
    technologies: ['React Native', 'Firebase', 'TensorFlow', 'Node.js', 'MongoDB'],
    teamMembers: ['David Chen (Lead Developer)', 'Sarah Johnson (UI/UX Designer)', 'Emily Rodriguez (Backend Developer)'],
    website: 'https://example.com'
  },
  {
    id: '6',
    title: 'Brand Identity for Restaurant Chain',
    description: 'Complete brand identity including logo, color scheme, typography, and marketing materials for a restaurant chain.',
    fullDescription: `
      <p>We created a cohesive brand identity for a growing restaurant chain that was expanding to new markets. The project encompassed logo design, color palette, typography, menu design, signage, packaging, and digital assets. The goal was to create a distinctive, memorable brand that would appeal to the target demographic while maintaining flexibility for different locations.</p>
      
      <p>The main challenge was developing a brand system that could maintain consistency across multiple locations while allowing for local adaptations. We created comprehensive brand guidelines and templates that provided clear direction while allowing controlled flexibility.</p>
      
      <p>The rebrand successfully unified the chain's visual identity, resulting in 92% brand recognition in market research, a 24% increase in new customer acquisition, and positive reception from both existing customers and new markets.</p>
    `,
    category: 'Design',
    client: 'Restaurant Chain',
    completionDate: 'January 2022',
    duration: '14 weeks',
    image: 'https://images.unsplash.com/photo-1580974852861-c5fecb3d9c0c?auto=format&fit=crop&q=80&w=2940',
    gallery: [
      'https://images.unsplash.com/photo-1580974852861-c5fecb3d9c0c?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1541659078635-0a6c129740b5?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1583845112239-290938c90d2f?auto=format&fit=crop&q=80&w=1400'
    ],
    tags: ['Branding', 'Graphic Design', 'Logo Design'],
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Figma'],
    teamMembers: ['Sarah Johnson (Lead Designer)', 'Emily Rodriguez (Brand Strategist)', 'Michael Taylor (Print Designer)'],
    website: 'https://example.com'
  }
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<typeof projectsData[0] | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    // In a real application, this would be an API call
    const foundProject = projectsData.find(p => p.id === id);
    if (foundProject) {
      setProject(foundProject);
      setActiveImage(foundProject.image);
    }
    
    // Scroll to top when project changes
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen">
        <AnimatedGradient />
        <Navbar />
        <main className="pt-20">
          <div className="container-wide py-20 text-center">
            <h1 className="text-3xl font-bold mb-4 text-hustlance-dark-gray">Project Not Found</h1>
            <p className="text-hustlance-neutral-gray mb-8">The project you're looking for doesn't exist or has been removed.</p>
            <Button 
              className="bg-hustlance-purple hover:bg-hustlance-dark-purple text-white"
              asChild
            >
              <Link to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                <span>Back to Projects</span>
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <AnimatedGradient />
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-hustlance-soft-gray opacity-60"></div>
          <div className="container-wide relative z-10">
            <div className="flex flex-col items-start mb-6">
              <Button 
                variant="outline"
                className="mb-6 border-hustlance-neutral-gray/30 text-hustlance-neutral-gray hover:bg-hustlance-light-purple hover:text-hustlance-dark-purple hover:border-transparent"
                asChild
              >
                <Link to="/projects">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  <span>Back to Projects</span>
                </Link>
              </Button>
              <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-hustlance-dark-purple text-sm font-medium rounded-full mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-hustlance-dark-gray">
                {project.title}
              </h1>
              <p className="text-xl text-hustlance-neutral-gray">
                {project.description}
              </p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-hustlance-light-purple rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-hustlance-light-purple rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </section>

        {/* Project Details */}
        <section className="py-12">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column: Project Info */}
              <div className="lg:col-span-1 order-2 lg:order-1">
                <div className="glass-card p-8 rounded-xl sticky top-24">
                  <h2 className="text-2xl font-bold mb-6 text-hustlance-dark-gray">Project Details</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <User className="flex-shrink-0 mr-3 h-5 w-5 text-hustlance-purple" />
                      <div>
                        <h4 className="text-sm font-medium text-hustlance-neutral-gray">Client</h4>
                        <p className="text-hustlance-dark-gray">{project.client}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Calendar className="flex-shrink-0 mr-3 h-5 w-5 text-hustlance-purple" />
                      <div>
                        <h4 className="text-sm font-medium text-hustlance-neutral-gray">Completion Date</h4>
                        <p className="text-hustlance-dark-gray">{project.completionDate}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="flex-shrink-0 mr-3 h-5 w-5 text-hustlance-purple" />
                      <div>
                        <h4 className="text-sm font-medium text-hustlance-neutral-gray">Project Duration</h4>
                        <p className="text-hustlance-dark-gray">{project.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Tag className="flex-shrink-0 mr-3 h-5 w-5 text-hustlance-purple" />
                      <div>
                        <h4 className="text-sm font-medium text-hustlance-neutral-gray">Tags</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
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
                    
                    <div className="pt-6 border-t border-gray-100">
                      <h4 className="text-sm font-medium text-hustlance-neutral-gray mb-3">Technologies Used</h4>
                      <ul className="list-disc pl-5 text-hustlance-dark-gray space-y-1">
                        {project.technologies.map((tech, index) => (
                          <li key={index}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-6 border-t border-gray-100">
                      <h4 className="text-sm font-medium text-hustlance-neutral-gray mb-3">Team Members</h4>
                      <ul className="list-disc pl-5 text-hustlance-dark-gray space-y-1">
                        {project.teamMembers.map((member, index) => (
                          <li key={index}>{member}</li>
                        ))}
                      </ul>
                    </div>
                    
                    {project.website && (
                      <div className="pt-6">
                        <Button 
                          className="w-full bg-hustlance-purple hover:bg-hustlance-dark-purple text-white group"
                          onClick={() => window.open(project.website, '_blank')}
                        >
                          <span>Visit Project</span>
                          <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Right Column: Project Content */}
              <div className="lg:col-span-2 order-1 lg:order-2">
                {/* Main Image */}
                <div className="rounded-xl overflow-hidden mb-6 shadow-md appear-animate">
                  <img 
                    src={activeImage || project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Thumbnail Gallery */}
                {project.gallery && project.gallery.length > 0 && (
                  <div className="flex flex-wrap gap-3 mb-8 appear-animate">
                    {project.gallery.map((image, index) => (
                      <button
                        key={index}
                        className={`w-24 h-24 rounded-lg overflow-hidden transition-all duration-200 ${
                          activeImage === image ? 'ring-2 ring-hustlance-purple' : 'opacity-70 hover:opacity-100'
                        }`}
                        onClick={() => setActiveImage(image)}
                      >
                        <img 
                          src={image} 
                          alt={`${project.title} - image ${index + 1}`} 
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
                
                {/* Project Description */}
                <div className="glass-card p-8 rounded-xl mb-8 appear-animate">
                  <h2 className="text-2xl font-bold mb-6 text-hustlance-dark-gray">Project Overview</h2>
                  <div 
                    className="prose prose-lg max-w-none text-hustlance-neutral-gray"
                    dangerouslySetInnerHTML={{ __html: project.fullDescription }}
                  />
                </div>
                
                {/* Next Project */}
                <div className="appear-animate">
                  <div className="flex justify-between items-center">
                    <Button 
                      variant="outline"
                      className="border-hustlance-neutral-gray/30 text-hustlance-neutral-gray hover:bg-hustlance-light-purple hover:text-hustlance-dark-purple hover:border-transparent"
                      asChild
                    >
                      <Link to="/projects">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        <span>All Projects</span>
                      </Link>
                    </Button>
                    
                    <Button 
                      className="bg-hustlance-purple hover:bg-hustlance-dark-purple text-white"
                      asChild
                    >
                      <Link to="/contact">
                        <span>Start Your Project</span>
                      </Link>
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

export default ProjectDetail;
