
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Info, Star, Award, Flame } from 'lucide-react';

// Create the Leaderboard component
const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState('leaderboard');

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <motion.header 
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
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
                <motion.a
                  key={item}
                  href={item === "Leaderboard" ? "#" : `/${item.toLowerCase().replace(' ', '-')}`}
                  className={`text-sm font-medium ${item === "Leaderboard" ? "text-sololearn-blue" : "text-gray-700 hover:text-sololearn-blue"} transition-colors`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
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
              <motion.div 
                className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User profile" className="h-full w-full object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-sololearn-navy wave-bottom noise-bg text-white py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between md:items-center">
              {/* Leaderboard Title */}
              <motion.div
                className="mb-8 md:mb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-4xl font-bold mb-2">Leaderboard</h1>
              </motion.div>

              {/* Your League */}
              <motion.div
                className="glass rounded-xl p-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center mb-2">
                  <h2 className="text-xl font-bold">Your League</h2>
                  <motion.div 
                    className="ml-2 cursor-pointer text-white/80"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Info size={16} />
                  </motion.div>
                </div>
                <div className="flex space-x-4">
                  <motion.div
                    className="flex flex-col items-center"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-yellow-500 to-orange-400 flex items-center justify-center shadow-lg mb-2 animate-pulse-subtle">
                      <img src="https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Mercury" className="h-full w-full object-cover rounded-full" />
                    </div>
                    <span className="text-sm">Mercury</span>
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-center opacity-50"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center shadow-lg mb-2">
                      <img src="https://images.unsplash.com/photo-1614314169000-4c4331e04018?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Saturn" className="h-full w-full object-cover rounded-full" />
                    </div>
                    <span className="text-sm">Saturn</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Users */}
            <motion.div 
              className="mt-12 flex flex-wrap justify-center md:justify-start gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {[
                { name: "Jaiden", img: "https://randomuser.me/api/portraits/women/44.jpg", badge: "silver" },
                { name: "John Cena", img: "https://randomuser.me/api/portraits/men/32.jpg", badge: "gold" },
                { name: "Emily", img: "https://randomuser.me/api/portraits/women/65.jpg", badge: "bronze" }
              ].map((user, index) => (
                <motion.div 
                  key={user.name}
                  className="flex flex-col items-center relative user-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative">
                    <div className="h-24 w-24 rounded-full overflow-hidden border-2 border-white shadow-lg">
                      <img src={user.img} alt={user.name} className="h-full w-full object-cover" />
                    </div>
                    <div className={`absolute -top-2 -right-2 h-8 w-8 rounded-full flex items-center justify-center shadow-md ${user.badge === 'gold' ? 'bg-yellow-500' : user.badge === 'silver' ? 'bg-gray-300' : 'bg-orange-600'}`}>
                      {user.badge === 'gold' ? (
                        <Star size={16} className="text-white" />
                      ) : user.badge === 'silver' ? (
                        <Star size={16} className="text-white" />
                      ) : (
                        <Star size={16} className="text-white" />
                      )}
                    </div>
                  </div>
                  <h3 className="mt-3 text-sm font-medium">{user.name}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Leaderboard and Tasks Section */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Leaderboard Table */}
              <motion.div 
                className="bg-white rounded-2xl shadow-md overflow-hidden flex-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.no</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">XP</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Streaks</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { id: '01', name: 'Abhishek', img: 'https://randomuser.me/api/portraits/men/32.jpg', xp: '120 XP', streak: 447 },
                      { id: '02', name: 'Abhishek', img: 'https://randomuser.me/api/portraits/men/68.jpg', xp: '110 XP', streak: 703 },
                      { id: '03', name: 'Abhishek', img: 'https://randomuser.me/api/portraits/men/78.jpg', xp: '110 XP', streak: 154 },
                    ].map((person, idx) => (
                      <motion.tr 
                        key={person.id}
                        className="hover:bg-gray-50 transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1 + idx * 0.1 }}
                        whileHover={{ backgroundColor: 'rgba(249, 250, 251, 0.5)' }}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0 rounded-full overflow-hidden">
                              <img src={person.img} alt={person.name} className="h-full w-full object-cover" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{person.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.xp}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <Flame className="text-orange-500 mr-1" size={16} />
                            <span className="text-sm text-gray-700">{person.streak}</span>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>

              {/* Task Panel */}
              <motion.div 
                className="md:w-96 bg-white rounded-2xl shadow-md p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <h2 className="text-xl font-bold mb-6">Earn XP</h2>
                <div className="space-y-4">
                  {[
                    { name: 'Task Name', xp: 20 },
                    { name: 'Task Name', xp: 15 }
                  ].map((task, idx) => (
                    <motion.div 
                      key={idx}
                      className="bg-gray-50 rounded-xl p-4 flex items-center justify-between"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.1 + idx * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div>
                        <h3 className="font-medium">{task.name}</h3>
                        <p className="text-sm text-blue-500">+{task.xp} XP</p>
                      </div>
                      <motion.button 
                        className="task-button h-12 w-12 rounded-full bg-sololearn-blue flex items-center justify-center text-white shadow-md"
                        whileHover={{ scale: 1.1, backgroundColor: '#33c3f0' }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play size={20} fill="white" />
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              className="flex items-center mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
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
            </motion.div>
            <motion.div 
              className="flex space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              {['Privacy', 'Terms', 'Contact', 'Help'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-sm text-gray-500 hover:text-sololearn-blue transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Leaderboard;
