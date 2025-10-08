import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import SubscriptionPlans from './SubscriptionPlans';

import RecentEventRequests from './RecentEventRequests';
import PopularServiceCategories from './PopularServiceCategories';

const ServicesSection = () => {
  const { isDark } = useTheme();
  const services = [
    {
      id: 1,
      title: "Event Planners",
      description: "Professional event coordination and planning services",
      professionals: 8,
      rating: 4.5,
      startingPrice: "KSh120,000",
      responseTime: "2 hours",
      topPro: "Grace Wanjiku",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      filterValue: "event-planners"
    },
    {
      id: 2,
      title: "Catering",
      description: "Delicious culinary experiences tailored to your event",
      professionals: 12,
      rating: 4.4,
      startingPrice: "KSh2,800/person",
      responseTime: "4 hours",
      topPro: "Joseph Kiprotich",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      filterValue: "catering"
    },
    {
      id: 3,
      title: "Bakery",
      description: "Custom cakes and baked goods for special occasions",
      professionals: 6,
      rating: 4.6,
      startingPrice: "KSh15,000",
      responseTime: "6 hours",
      topPro: "Mary Wanjiku",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      filterValue: "bakery"
    },
    {
      id: 4,
      title: "Tents & Decor",
      description: "Transform spaces with stunning decorations and tent rentals",
      professionals: 10,
      rating: 4.4,
      startingPrice: "KSh45,000",
      responseTime: "1 hour",
      topPro: "Diana Wanjiku",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      filterValue: "tents-decor"
    },
    {
      id: 5,
      title: "Transport Services",
      description: "Reliable transportation solutions for events and guests",
      professionals: 8,
      rating: 4.3,
      startingPrice: "KSh25,000",
      responseTime: "1 hour",
      topPro: "John Mwangi",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      filterValue: "transport"
    },
    {
      id: 6,
      title: "Team Building",
      description: "Engaging team building activities and corporate retreats",
      professionals: 5,
      rating: 4.5,
      startingPrice: "KSh35,000",
      responseTime: "2 hours",
      topPro: "Sarah Kimani",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      filterValue: "team-building"
    },
    {
      id: 7,
      title: "Ushers/Venue Coordinators",
      description: "Professional ushers and venue coordination services",
      professionals: 15,
      rating: 4.5,
      startingPrice: "KSh8,000",
      responseTime: "2 hours",
      topPro: "Andrew Mwangi",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      filterValue: "ushers-venue"
    },
    {
      id: 8,
      title: "Security Services",
      description: "Professional security personnel for safe and secure events",
      professionals: 12,
      rating: 4.6,
      startingPrice: "KSh25,000",
      responseTime: "30 mins",
      topPro: "Captain Mwangi",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      filterValue: "security"
    },
    {
      id: 9,
      title: "Entertainment",
      description: "Photography, videography, sound, lighting and live entertainment",
      professionals: 25,
      rating: 4.5,
      startingPrice: "KSh35,000",
      responseTime: "1 hour",
      topPro: "DJ Mike Ochieng",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      filterValue: "entertainment"
    }
  ];

  return (
    <section id="services" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
            Browse Service Provider Services
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto mb-6`}>
            Connect with verified service providers who bring your events to life
          </p>
          <div className="flex justify-center items-center gap-8 text-sm">
            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>100+ Active Service Providers</span>
            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>4.5★ Average Rating</span>
            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Fast Response</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-200`}>
              <div className="relative mb-3 overflow-hidden rounded-md">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                  <span className="text-sm font-bold text-gray-800">{service.rating}</span>
                </div>
              </div>
              
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
                {service.title}
              </h3>
              
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-3 text-sm`}>
                {service.description}
              </p>
              
              <div className="space-y-3 mb-4">
                <div className={`flex justify-between items-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {service.professionals} professionals
                  </span>
                  <span className="font-semibold text-green-600">From {service.startingPrice}</span>
                </div>
                
                <div className={`flex justify-between items-center text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Avg response: {service.responseTime}
                  </span>
                  <span className="text-blue-600 font-medium">Top: {service.topPro}</span>
                </div>
              </div>
              
              <Link to={`/browse?category=${service.filterValue}`} className={`block w-full ${isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white font-medium py-2 px-4 rounded text-center transition-colors duration-200`}>
                Browse Service Providers
              </Link>
            </div>
          ))}

          {/* View All Services Card */}
          <Link to="/browse" className={`${isDark ? 'bg-gray-800 border-gray-600 hover:border-blue-500' : 'bg-white border-gray-300 hover:border-blue-400'} rounded-lg shadow-sm p-4 flex flex-col items-center justify-center text-center border-2 border-dashed transition-colors duration-200`}>
            <div className={`w-16 h-16 ${isDark ? 'bg-blue-600/20' : 'bg-blue-50'} rounded-full flex items-center justify-center mb-3`}>
              <svg className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>View All Service Providers</h3>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm`}>Discover 100+ verified service providers</p>
          </Link>
        </div>
      </div>
      <PopularServiceCategories />
      <RecentEventRequests />
    </section>
  );
};

export default ServicesSection;

