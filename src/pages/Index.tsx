
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <svg className="h-8 w-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" fill="url(#logo-gradient)" />
                <path d="M35 40C35 35 40 30 50 30C65 30 65 45 50 45C40 45 35 50 35 55C35 65 50 70 60 65" stroke="white" strokeWidth="6" strokeLinecap="round" />
                <defs>
                  <linearGradient id="logo-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0FA0CE" />
                    <stop offset="1" stopColor="#F97316" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sololearn-blue to-sololearn-orange">sololearn</span>
            </motion.div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              {["Courses", "Leaderboard", "Code Bits", "Discuss", "Blog"].map((item) => (
                <Link
                  key={item}
                  to={item === "Leaderboard" ? "/leaderboard" : `/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-sm font-medium text-gray-700 hover:text-sololearn-blue transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* CTA and Profile */}
            <div className="flex items-center space-x-4">
              <motion.button
                className="bg-gradient-to-r from-yellow-500 to-sololearn-orange text-white px-4 py-2 rounded-lg font-medium text-sm shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Go Pro
              </motion.button>
              <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User profile" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
        <div className="text-center p-8">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sololearn-blue to-sololearn-orange"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to SoloLearn
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Check out our beautiful <Link to="/leaderboard" className="text-sololearn-blue hover:underline">Leaderboard</Link> page!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              to="/leaderboard" 
              className="bg-sololearn-blue text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all hover:bg-blue-500"
            >
              View Leaderboard
            </Link>
          </motion.div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <svg className="h-6 w-6" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" fill="url(#footer-logo-gradient)" />
                <path d="M35 40C35 35 40 30 50 30C65 30 65 45 50 45C40 45 35 50 35 55C35 65 50 70 60 65" stroke="white" strokeWidth="6" strokeLinecap="round" />
                <defs>
                  <linearGradient id="footer-logo-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0FA0CE" />
                    <stop offset="1" stopColor="#F97316" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="ml-2 text-sm font-medium text-gray-600">© 2024 SoloLearn. All rights reserved.</span>
            </div>
            <div className="flex space-x-6">
              {['Privacy', 'Terms', 'Contact', 'Help'].map((item) => (
                <a key={item} href="#" className="text-sm text-gray-500 hover:text-sololearn-blue transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
