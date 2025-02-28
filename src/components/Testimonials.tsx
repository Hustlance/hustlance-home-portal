
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    content: "Working with freelancers on Hustlance was seamless. We found a designer who perfectly captured our brand vision, and the platform made collaboration easy.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    rating: 5
  },
  {
    id: 2,
    name: "David Chen",
    role: "Startup Founder",
    content: "As a startup, we needed quality developers without breaking the bank. Hustlance helped us connect with amazing talent who delivered our MVP on time and within budget.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "E-commerce Manager",
    content: "The writers we found through Hustlance transformed our product descriptions and significantly improved our conversion rates. The platform's selection process is top-notch.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
    rating: 4
  },
  {
    id: 4,
    name: "Michael Taylor",
    role: "Creative Director",
    content: "I've used many freelance platforms, but Hustlance stands out for the quality of professionals and user-friendly interface. Finding the right talent has never been easier.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [imgLoaded, setImgLoaded] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setTimeout(() => {
      setDirection('right');
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearTimeout(timer);
  }, [activeIndex, isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setDirection('left');
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setDirection('right');
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setDirection(index > activeIndex ? 'right' : 'left');
    setActiveIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    
    setTouchStart(null);
  };

  const handleImageLoad = (id: number) => {
    setImgLoaded(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="testimonials" className="section-padding bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-hustlance-soft-gray"></div>
      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-white text-hustlance-dark-purple text-sm font-medium px-3 py-1 rounded-full mb-4 shadow-sm">
            Client Feedback
          </div>
          <h2 className="section-heading">What people are saying</h2>
          <p className="section-subheading">
            Don't just take our word for it — hear from some of our satisfied clients
          </p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-700 ease-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    {/* Rating */}
                    <div className="flex mb-6">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    {/* Content */}
                    <p className="text-hustlance-neutral-gray text-lg italic mb-8">"{testimonial.content}"</p>
                    
                    {/* Author */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative">
                        {!imgLoaded[testimonial.id] && (
                          <div className="absolute inset-0 bg-hustlance-soft-gray animate-pulse rounded-full"></div>
                        )}
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className={`w-full h-full object-cover transition-opacity duration-300 ${
                            imgLoaded[testimonial.id] ? 'opacity-100' : 'opacity-0'
                          }`}
                          onLoad={() => handleImageLoad(testimonial.id)}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-hustlance-dark-gray">{testimonial.name}</h4>
                        <p className="text-sm text-hustlance-neutral-gray">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-between mt-8">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-hustlance-dark-gray hover:text-hustlance-purple transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-hustlance-purple w-8'
                      : 'bg-hustlance-neutral-gray/30 hover:bg-hustlance-neutral-gray/60'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-hustlance-dark-gray hover:text-hustlance-purple transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
