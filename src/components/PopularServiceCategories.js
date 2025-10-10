import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const PopularServiceCategories = () => {
  const { isDark } = useTheme();
  const categories = [
    {
      id: 1,
      title: "Catering",
      professionals: 12,
      icon: "🍽️",
      gradient: "from-orange-100 to-amber-100",
      description: "Delicious culinary experiences",
      filterValue: "catering"
    },
    {
      id: 2,
      title: "Bakery",
      professionals: 6,
      icon: "🧁",
      gradient: "from-pink-100 to-rose-100",
      description: "Custom cakes and baked goods",
      filterValue: "bakery"
    },
    {
      id: 3,
      title: "Tents & Decor",
      professionals: 10,
      icon: "⛺",
      gradient: "from-green-100 to-emerald-100",
      description: "Tents, decorations and styling",
      filterValue: "tents-decor"
    },
    {
      id: 4,
      title: "Transport Services",
      professionals: 8,
      icon: "🚐",
      gradient: "from-blue-100 to-indigo-100",
      description: "Reliable event transportation",
      filterValue: "transport"
    },
    {
      id: 5,
      title: "Team Building",
      professionals: 5,
      icon: "🤝",
      gradient: "from-purple-100 to-violet-100",
      description: "Corporate team activities",
      filterValue: "team-building"
    },
    {
      id: 6,
      title: "Ushers/Venue Coordinators",
      professionals: 15,
      icon: "👥",
      gradient: "from-teal-100 to-cyan-100",
      description: "Professional event coordination",
      filterValue: "ushers-venue"
    },
    {
      id: 7,
      title: "Event Planners",
      professionals: 8,
      icon: "📋",
      gradient: "from-indigo-100 to-purple-100",
      description: "Complete event planning services",
      filterValue: "event-planners"
    },
    {
      id: 8,
      title: "Security Services",
      professionals: 12,
      icon: "🛡️",
      gradient: "from-gray-100 to-slate-100",
      description: "Safe and secure events",
      filterValue: "security"
    },
    {
      id: 9,
      title: "Corporate Events",
      professionals: 6,
      icon: "🏢",
      gradient: "from-slate-100 to-gray-100",
      description: "Professional business events",
      filterValue: "corporate"
    },
    {
      id: 10,
      title: "Venues",
      professionals: 20,
      icon: "🏛️",
      gradient: "from-emerald-100 to-teal-100",
      description: "Gardens, halls & conference facilities",
      filterValue: "venues"
    },
    {
      id: 11,
      title: "Stylists",
      professionals: 18,
      icon: "💄",
      gradient: "from-rose-100 to-pink-100",
      description: "Fashion, makeup & beauty services",
      filterValue: "stylists"
    },
    {
      id: 12,
      title: "Entertainment",
      professionals: 25,
      icon: "🎭",
      gradient: "from-violet-100 to-purple-100",
      description: "Photography, sound, lights & more",
      filterValue: "entertainment"
    }
  ];

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
            Popular Service Categories
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Discover top-rated service providers across our most requested event services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={category.id} 
              to={`/browse?category=${category.filterValue}`}
              className={`${isDark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'} border rounded-lg p-4 hover:shadow-md transition-shadow duration-200 min-h-[140px] flex flex-col justify-between`}
            >
              <div>
                <div className="text-2xl mb-2">
                  {category.icon}
                </div>
                <h3 className={`text-base font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-1`}>
                  {category.title}
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-3`}>{category.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-sm ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  {category.professionals} service providers
                </span>
                <svg className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularServiceCategories;
