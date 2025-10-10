import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const HeroSection = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12">
      <div className="max-w-6xl mx-auto px-4 w-full text-center">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Find Your Perfect Event
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with top event professionals across Kenya for your next celebration or corporate gathering.
          </p>
        </div>

        {/* Search Form */}
        <form onSubmit={(e) => { e.preventDefault(); navigate('/services'); }} className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 md:p-8 max-w-4xl mx-auto mb-12 border border-white border-opacity-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">Event Type / Location</label>
              <input type="text" placeholder="e.g., Wedding in Nairobi" className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">Event Date</label>
              <input type="date" className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">Attendees</label>
              <select className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>1-10</option>
                <option>11-50</option>
                <option>51-100</option>
                <option>100+</option>
              </select>
            </div>
            <div className="flex items-end">
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                Search
              </button>
            </div>
          </div>
        </form>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-gray-300">Verified Professionals</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">4.9★</div>
            <div className="text-gray-300">Client Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">47</div>
            <div className="text-gray-300">Counties Covered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;