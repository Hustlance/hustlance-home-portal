
import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/sonner";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedGradient from '@/components/AnimatedGradient';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <AnimatedGradient />
      <Navbar />
      <main className="pt-20">
        {/* Hero Banner */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-hustlance-soft-gray opacity-60"></div>
          <div className="container-wide relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-hustlance-dark-gray">
                Let's Build Something Amazing Together!
              </h1>
              <p className="text-xl text-hustlance-neutral-gray mb-8">
                Ready to start your project? Have questions? We're here to help. Contact us today and let's turn your ideas into reality.
              </p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-hustlance-light-purple rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-hustlance-light-purple rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-3 appear-animate">
                <div className="glass-card p-8 rounded-xl">
                  <h2 className="text-2xl font-bold mb-6 text-hustlance-dark-gray">Send Us a Message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-hustlance-dark-gray mb-1">
                          Full Name
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-hustlance-dark-gray mb-1">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="phone" className="block text-sm font-medium text-hustlance-dark-gray mb-1">
                        Phone Number (Optional)
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-hustlance-dark-gray mb-1">
                        Message / Project Idea
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      className="bg-hustlance-purple hover:bg-hustlance-dark-purple text-white"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2 appear-animate">
                <div className="glass-card p-8 rounded-xl h-full">
                  <h2 className="text-2xl font-bold mb-6 text-hustlance-dark-gray">Contact Information</h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="p-3 bg-hustlance-light-purple text-hustlance-dark-purple rounded-full">
                          <Phone size={22} />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-hustlance-dark-gray mb-1">Phone</h4>
                        <a href="tel:9848681711" className="text-hustlance-neutral-gray hover:text-hustlance-purple transition-colors">
                          9848681711
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="p-3 bg-hustlance-light-purple text-hustlance-dark-purple rounded-full">
                          <Mail size={22} />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-hustlance-dark-gray mb-1">Email</h4>
                        <a href="mailto:hustlance@gmail.com" className="text-hustlance-neutral-gray hover:text-hustlance-purple transition-colors">
                          hustlance@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="p-3 bg-hustlance-light-purple text-hustlance-dark-purple rounded-full">
                          <MapPin size={22} />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-hustlance-dark-gray mb-1">Location</h4>
                        <p className="text-hustlance-neutral-gray">
                          123 Innovation Street<br />
                          Tech Campus, City 12345
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="p-3 bg-hustlance-light-purple text-hustlance-dark-purple rounded-full">
                          <Clock size={22} />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-hustlance-dark-gray mb-1">Working Hours</h4>
                        <p className="text-hustlance-neutral-gray">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10">
                    <Button 
                      variant="outline"
                      className="w-full border-hustlance-purple text-hustlance-dark-gray hover:bg-hustlance-light-purple"
                      onClick={() => window.location.href = 'mailto:hustlance@gmail.com?subject=Consultation%20Request'}
                    >
                      Request a Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Map */}
        <section className="py-16 bg-hustlance-soft-gray">
          <div className="container-wide">
            <div className="appear-animate">
              <h2 className="text-2xl font-bold mb-8 text-center text-hustlance-dark-gray">Find Us</h2>
              <div className="relative rounded-xl overflow-hidden h-96 shadow-md border border-white/20">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340002683!2d-0.24168120642536509!3d51.52855824164916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1656599955403!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
