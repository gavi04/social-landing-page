import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Search,
  Share2,
  Palette,
  BarChart3,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Linkedin as LinkedIn,
  Menu,
  X,
  Zap,
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2 group">
              <Zap className="w-8 h-8 text-[#A4B5B9] transform group-hover:rotate-12 transition-transform" />
              <span className="text-xl font-bold group-hover:text-[#A4B5B9] transition-colors">Social Impulse</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-[#A4B5B9] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#A4B5B9] after:transition-all">Home</a>
              <a href="#" className="text-gray-700 hover:text-[#A4B5B9] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#A4B5B9] after:transition-all">About</a>
              <a href="#" className="text-gray-700 hover:text-[#A4B5B9] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#A4B5B9] after:transition-all">Services</a>
              <a href="#" className="text-gray-700 hover:text-[#A4B5B9] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#A4B5B9] after:transition-all">Contact</a>
              <button className="bg-[#A4B5B9] hover:bg-black text-white px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 transition-transform transform hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="py-4 border-t space-y-4">
              <a href="#" className="block text-gray-700 hover:text-[#A4B5B9] transition-colors">Home</a>
              <a href="#" className="block text-gray-700 hover:text-[#A4B5B9] transition-colors">About</a>
              <a href="#" className="block text-gray-700 hover:text-[#A4B5B9] transition-colors">Services</a>
              <a href="#" className="block text-gray-700 hover:text-[#A4B5B9] transition-colors">Contact</a>
              <button className="w-full bg-[#A4B5B9] hover:bg-black text-white px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#A4B5B9] via-white to-white pt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl animate-slide-in">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Empowering Brands to Reach New Heights
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              We help businesses grow with innovative marketing strategies.
            </p>
            <button className="bg-[#A4B5B9] hover:bg-black text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all transform hover:scale-105 hover:shadow-xl group">
              Schedule a Call
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" data-animate className={`py-20 bg-white transition-opacity duration-700 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">About Social Impulse</h2>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-700">
              At Social Impulse, we believe in the power of strategic marketing to transform businesses. 
              Our innovative approach combines creativity with data-driven insights to deliver exceptional results.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Palette className="w-8 h-8" />, title: 'Creative Excellence' },
              { icon: <BarChart3 className="w-8 h-8" />, title: 'Data-Driven Results' },
              { icon: <MessageSquare className="w-8 h-8" />, title: 'Clear Communication' },
            ].map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="bg-[#A4B5B9] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white animate-float">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" data-animate className={`py-20 bg-gray-50 transition-opacity duration-700 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'SEO Optimization', icon: <Search />, desc: 'Boost your online visibility' },
              { title: 'Social Media', icon: <Share2 />, desc: 'Engage your audience' },
              { title: 'Brand Strategy', icon: <Palette />, desc: 'Build a strong identity' },
              { title: 'Analytics', icon: <BarChart3 />, desc: 'Data-driven decisions' },
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 group">
                <div className="text-[#A4B5B9] mb-4 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" data-animate className={`py-20 bg-white transition-opacity duration-700 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A4B5B9] focus:border-transparent transition-all hover:border-[#A4B5B9]" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A4B5B9] focus:border-transparent transition-all hover:border-[#A4B5B9]" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A4B5B9] focus:border-transparent transition-all hover:border-[#A4B5B9]"
                  ></textarea>
                </div>
                <button className="w-full bg-[#A4B5B9] hover:bg-black text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg">
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <p className="text-gray-600">123 Marketing Street</p>
                <p className="text-gray-600">New York, NY 10001</p>
                <p className="text-gray-600">contact@socialimpulse.com</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: <Facebook className="w-6 h-6" />, href: '#' },
                    { icon: <Twitter className="w-6 h-6" />, href: '#' },
                    { icon: <Instagram className="w-6 h-6" />, href: '#' },
                    { icon: <LinkedIn className="w-6 h-6" />, href: '#' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="text-[#A4B5B9] hover:text-black transition-colors transform hover:scale-110"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;