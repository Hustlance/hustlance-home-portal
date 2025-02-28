
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    
    setEmail("");
  };

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Logo & About */}
          <div className="col-span-1 lg:col-span-1">
            <a href="/" className="inline-block mb-6">
              <h2 className="text-2xl font-bold text-hustlance-dark-gray">hustlance</h2>
            </a>
            <p className="text-hustlance-neutral-gray mb-6">
              Connecting businesses with top-tier freelance talent for seamless project execution.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-hustlance-soft-gray flex items-center justify-center text-hustlance-neutral-gray hover:bg-hustlance-light-purple hover:text-hustlance-dark-purple transition-colors"
                aria-label="Twitter"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 4.01C21.0424 4.67546 19.9821 5.19211 18.86 5.54C18.2577 4.84751 17.4573 4.34669 16.567 4.11263C15.6767 3.87857 14.7395 3.92233 13.8821 4.23789C13.0247 4.55345 12.2884 5.12495 11.773 5.87271C11.2575 6.62047 10.9877 7.50651 11 8.41V9.41C9.39 9.45 7.8 9.13 6.34 8.47C4.88 7.81 3.6 6.83 2.61 5.61C2.61 5.61 -0.61 13.29 8.22 16.78C6.29 18.07 4.01 18.73 1.68 18.71C10.51 23.11 21.29 18.7 21.29 8.39C21.2901 8.16755 21.2669 7.94616 21.22 7.73C22.2428 6.77334 22.9747 5.46906 23 4.09L22 4.01Z" fill="currentColor"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-hustlance-soft-gray flex items-center justify-center text-hustlance-neutral-gray hover:bg-hustlance-light-purple hover:text-hustlance-dark-purple transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" fill="currentColor"/>
                  <path d="M6 9H2V21H6V9Z" fill="currentColor"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" fill="currentColor"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-hustlance-soft-gray flex items-center justify-center text-hustlance-neutral-gray hover:bg-hustlance-light-purple hover:text-hustlance-dark-purple transition-colors"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-hustlance-dark-gray">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-hustlance-neutral-gray hover:text-hustlance-purple transition-colors">Find Talent</a>
              </li>
              <li>
                <a href="#" className="text-hustlance-neutral-gray hover:text-hustlance-purple transition-colors">Find Work</a>
              </li>
              <li>
                <a href="#" className="text-hustlance-neutral-gray hover:text-hustlance-purple transition-colors">Why Hustlance</a>
              </li>
              <li>
                <a href="#" className="text-hustlance-neutral-gray hover:text-hustlance-purple transition-colors">Enterprise</a>
              </li>
              <li>
                <a href="#" className="text-hustlance-neutral-gray hover:text-hustlance-purple transition-colors">Success Stories</a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-hustlance-dark-gray">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-hustlance-neutral-gray hover:text-hustlance-purple transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-hustlance-neutral-gray hover:text-hustlance-purple transition-colors">Guides</a>
              </li>
              <li>
                <a href="#" className="text-hustlance-neutral-gray hover:text-hustlance-purple transition-colors">Community</a>
              </li>
              <li>
                <a href="#" className="text-hustlance-neutral-gray hover:text-hustlance-purple transition-colors">Trust & Safety</a>
              </li>
              <li>
                <a href="#" className="text-hustlance-neutral-gray hover:text-hustlance-purple transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-hustlance-dark-gray">Stay Updated</h3>
            <p className="text-hustlance-neutral-gray mb-4">
              Subscribe to our newsletter for tips, news, and occasional offers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="rounded-r-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  className="rounded-l-none bg-hustlance-purple hover:bg-hustlance-dark-purple text-white"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-hustlance-neutral-gray">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 text-center md:flex md:justify-between md:items-center">
          <p className="text-sm text-hustlance-neutral-gray mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Hustlance. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm text-hustlance-neutral-gray">
            <a href="#" className="hover:text-hustlance-purple transition-colors">Terms</a>
            <a href="#" className="hover:text-hustlance-purple transition-colors">Privacy</a>
            <a href="#" className="hover:text-hustlance-purple transition-colors">Cookies</a>
            <a href="#" className="hover:text-hustlance-purple transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
