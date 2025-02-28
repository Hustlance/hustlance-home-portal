
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 glass shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a 
            href="/" 
            className="text-2xl font-bold text-hustlance-dark-gray tracking-tight"
          >
            hustlance
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#services" 
            className="font-medium text-hustlance-dark-gray hover:text-hustlance-purple transition-colors"
          >
            Services
          </a>
          <a 
            href="#how-it-works" 
            className="font-medium text-hustlance-dark-gray hover:text-hustlance-purple transition-colors"
          >
            How It Works
          </a>
          <a 
            href="#testimonials" 
            className="font-medium text-hustlance-dark-gray hover:text-hustlance-purple transition-colors"
          >
            Testimonials
          </a>
          <div className="flex items-center space-x-4">
            <a 
              href="/login" 
              className="font-medium text-hustlance-dark-gray hover:text-hustlance-purple transition-colors"
            >
              Log In
            </a>
            <Button 
              className="bg-hustlance-purple hover:bg-hustlance-dark-purple text-white font-medium px-6 py-2 rounded-lg transition-all duration-300"
            >
              Sign Up
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-hustlance-dark-gray focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full p-5 shadow-md border-t border-white/20 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#services" 
              className="font-medium text-hustlance-dark-gray hover:text-hustlance-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#how-it-works" 
              className="font-medium text-hustlance-dark-gray hover:text-hustlance-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="font-medium text-hustlance-dark-gray hover:text-hustlance-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <div className="pt-4 border-t border-gray-200">
              <a 
                href="/login" 
                className="block font-medium text-hustlance-dark-gray hover:text-hustlance-purple transition-colors py-2"
              >
                Log In
              </a>
              <Button 
                className="w-full mt-2 bg-hustlance-purple hover:bg-hustlance-dark-purple text-white font-medium px-6 py-2 rounded-lg transition-all duration-300"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
