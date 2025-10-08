import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const HeroSection = () => {
  const { isDark } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundImages = [
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Corporate event
    'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Wedding
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Party/celebration
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Conference
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'  // Outdoor event
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-left">
            <div className="space-y-8">
              {/* Trust Badge */}
              <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium border border-white border-opacity-30">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Trusted by 500+ Companies Across Kenya
              </div>

              {/* Main Heading */}
              <div className="space-y-8">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
                  Kenya's Premier
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Event Platform
                  </span>
                </h1>
                <p className="text-xl leading-relaxed text-gray-200 max-w-2xl">
                  Connect with verified event professionals across Kenya. From corporate conferences to intimate celebrations, we deliver exceptional experiences that exceed expectations.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 hero-card p-4 hover:scale-105 transition-transform duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse-glow">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-white">500+ Verified Professionals</span>
                </div>
                <div className="flex items-center space-x-3 hero-card p-4 hover:scale-105 transition-transform duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center animate-pulse-glow" style={{animationDelay: '0.5s'}}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-white">24/7 Customer Support</span>
                </div>
                <div className="flex items-center space-x-3 hero-card p-4 hover:scale-105 transition-transform duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse-glow" style={{animationDelay: '1s'}}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-white">Guaranteed Satisfaction</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/browse" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 text-center shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105">
                  Browse Professionals
                </Link>
                <Link to="/signup" className="bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white border-2 border-white border-opacity-30 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 text-center hover:border-opacity-50 transform hover:scale-105">
                  Join as Professional
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8">
                <p className="text-sm text-gray-300 mb-4">Trusted by leading companies across Kenya:</p>
                <div className="flex flex-wrap items-center gap-4 opacity-80">
                  <div className="text-lg font-bold text-white bg-white bg-opacity-10 px-4 py-2 rounded-lg backdrop-blur-sm">Safaricom</div>
                  <div className="text-lg font-bold text-white bg-white bg-opacity-10 px-4 py-2 rounded-lg backdrop-blur-sm">KCB</div>
                  <div className="text-lg font-bold text-white bg-white bg-opacity-10 px-4 py-2 rounded-lg backdrop-blur-sm">Equity</div>
                  <div className="text-lg font-bold text-white bg-white bg-opacity-10 px-4 py-2 rounded-lg backdrop-blur-sm">EABL</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Image Slideshow Card */}
          <div className="hidden lg:block relative">
            <div className="hero-card p-6 max-w-md mx-auto animate-float">
              <div className="relative h-80 rounded-xl overflow-hidden">
                {backgroundImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Event ${index + 1}`}
                      className="w-full h-full object-cover animate-slideshow"
                    />
                  </div>
                ))}
                
                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {backgroundImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Professional Events</h3>
                <p className="text-sm text-gray-300">Discover amazing events crafted by our verified professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Stats Cards */}
      <div className="absolute bottom-20 left-8 hero-card p-4 hidden lg:block animate-float" style={{animationDelay: '0s'}}>
        <div className="text-3xl font-bold text-white mb-1">2,500+</div>
        <div className="text-sm text-gray-200">Events Delivered</div>
      </div>
      <div className="absolute top-32 left-8 hero-card p-4 hidden lg:block animate-float" style={{animationDelay: '2s'}}>
        <div className="text-3xl font-bold text-white mb-1">4.9★</div>
        <div className="text-sm text-gray-200">Client Rating</div>
      </div>
      <div className="absolute bottom-32 left-32 hero-card p-4 hidden xl:block animate-float" style={{animationDelay: '4s'}}>
        <div className="text-3xl font-bold text-white mb-1">47</div>
        <div className="text-sm text-gray-200">Counties</div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-xl animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-40 right-40 w-24 h-24 bg-purple-500 rounded-full opacity-10 blur-xl animate-pulse hidden lg:block" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-pink-500 rounded-full opacity-10 blur-xl animate-pulse hidden lg:block" style={{animationDelay: '3s'}}></div>
    </section>
  );
};

export default HeroSection;