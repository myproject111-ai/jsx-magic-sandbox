
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Info, Play, Star, Flame } from 'lucide-react';

const Leaderboard = () => {
  // State for interactive elements
  const [activeTab, setActiveTab] = useState('global');
  const [expandedTask, setExpandedTask] = useState<number | null>(null);
  const [hoveredUser, setHoveredUser] = useState<number | null>(null);
  const [currentXP, setCurrentXP] = useState(85);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  
  // Leaderboard data
  const leaderboardData = [
    { id: 1, name: 'Abhishek', xp: '120 XP', streaks: 447, language: 'Python', level: 12 },
    { id: 2, name: 'Abhishek', xp: '110 XP', streaks: 703, language: 'JavaScript', level: 10 },
    { id: 3, name: 'Abhishek', xp: '110 XP', streaks: 154, language: 'Java', level: 11 },
  ];

  // Top users
  const topUsers = [
    { id: 1, name: 'Jaiden', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', badge: 'silver', level: 15, totalXP: 4502 },
    { id: 2, name: 'John Cena', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', badge: 'gold', level: 23, totalXP: 8754 },
    { id: 3, name: 'Emily', avatar: 'https://randomuser.me/api/portraits/women/65.jpg', badge: 'bronze', level: 14, totalXP: 3956 },
  ];

  // League data
  const leagueData = [
    { id: 1, name: 'Mercury', avatar: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80', type: 'planet', users: 245, minXP: 1000 },
    { id: 2, name: 'Saturn', avatar: 'https://images.unsplash.com/photo-1614314169000-4c4331e04018?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80', type: 'empty', users: 0, minXP: 2500 },
  ];

  // Tasks
  const tasks = [
    { 
      id: 1, 
      name: 'Complete Python Basics', 
      xp: 20, 
      description: 'Finish at least 3 lessons in the Python basics module',
      progress: 67,
      estimatedTime: '15 min'
    },
    { 
      id: 2, 
      name: 'Daily Coding Challenge', 
      xp: 15, 
      description: 'Solve today\'s coding problem',
      progress: 0,
      estimatedTime: '10 min'
    },
  ];

  // Simulate XP increase when completing a task
  const completeTask = (taskId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      setCurrentXP(prev => prev + task.xp);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  // Render confetti
  const renderConfetti = () => {
    if (!showConfetti) return null;
    
    return (
      <div className="confetti-container">
        {[...Array(50)].map((_, i) => {
          const size = Math.random() * 10 + 5;
          const left = Math.random() * 100 + '%';
          const animDuration = Math.random() * 3 + 2;
          const delay = Math.random() * 0.5;
          const color = ['#FFD700', '#FF6347', '#4169E1', '#32CD32', '#FF69B4'][Math.floor(Math.random() * 5)];
          
          return (
            <div 
              key={i}
              className="confetti-piece"
              style={{
                width: size + 'px',
                height: size + 'px',
                left: left,
                backgroundColor: color,
                animationDuration: `${animDuration}s`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="app-container">
      {/* Confetti Effect */}
      {renderConfetti()}

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <svg className="logo" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="url(#logo-gradient)" />
            <path d="M35 40C35 35 40 30 50 30C65 30 65 45 50 45C40 45 35 50 35 55C35 65 50 70 60 65" stroke="white" strokeWidth="6" strokeLinecap="round" />
            <defs>
              <linearGradient id="logo-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0FA0CE" />
                <stop offset="1" stopColor="#F97316" />
              </linearGradient>
            </defs>
          </svg>
          <span className="brand-name">sololearn</span>
        </div>
        <div className="navbar-menu">
          {["Courses", "Leaderboard", "Code Bits", "Discuss", "Blog"].map((item) => (
            <div key={item} className="nav-item-container">
              <span className={`nav-item ${item === "Leaderboard" ? "active" : ""}`}>
                {item}
              </span>
            </div>
          ))}
          <button className="btn-pro">
            Go Pro
          </button>
          <div className="profile-container">
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="Profile" 
              className="profile-image" 
            />
            <div className="online-indicator"></div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <div className="container">
          <div className="content-row">
            {/* Left Section - Leaderboard */}
            <div className="section leaderboard-section">
              <div className="section-header">
                <h2 className="section-title">Leaderboard</h2>
                <div className="tab-switcher">
                  <button 
                    className={`tab-btn ${activeTab === 'global' ? 'active' : ''}`}
                    onClick={() => setActiveTab('global')}
                  >
                    Global
                  </button>
                  <button 
                    className={`tab-btn ${activeTab === 'friends' ? 'active' : ''}`}
                    onClick={() => setActiveTab('friends')}
                  >
                    Friends
                  </button>
                </div>
              </div>
              
              {/* Top Users */}
              <div className="top-users">
                {topUsers.map((user) => (
                  <div 
                    key={user.id} 
                    className="top-user"
                    onMouseEnter={() => setHoveredUser(user.id)}
                    onMouseLeave={() => setHoveredUser(null)}
                  >
                    <div className="avatar-container">
                      <img 
                        src={user.avatar} 
                        alt={user.name} 
                        className={`user-avatar ${hoveredUser === user.id ? 'active' : ''}`}
                      />
                      <div className={`badge ${user.badge}`}>
                        <Star size={16} className="badge-icon" />
                      </div>
                      {hoveredUser === user.id && (
                        <div className="user-tooltip">
                          <div className="tooltip-content">
                            <div className="tooltip-name">{user.name}</div>
                            <div>Level {user.level}</div>
                            <div>XP: {user.totalXP}</div>
                          </div>
                        </div>
                      )}
                    </div>
                    <span className="user-name">{user.name}</span>
                  </div>
                ))}
              </div>
              
              {/* Leaderboard Table */}
              <div className="leaderboard-table-container">
                <table className="leaderboard-table">
                  <thead>
                    <tr>
                      <th>S.no</th>
                      <th>Name</th>
                      <th>XP</th>
                      <th>Streaks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboardData.map((item) => (
                      <tr 
                        key={item.id} 
                        className="leaderboard-row"
                        onClick={() => alert(`Viewing ${item.name}'s profile`)}
                      >
                        <td>{item.id < 10 ? `0${item.id}` : item.id}</td>
                        <td>
                          <div className="user-cell">
                            <div className="user-avatar-small-container">
                              <img 
                                src={`https://randomuser.me/api/portraits/men/${30 + item.id}.jpg`} 
                                alt={item.name} 
                                className="user-avatar-small" 
                              />
                              <div className="online-indicator-small"></div>
                            </div>
                            <div className="user-info">
                              <div>{item.name}</div>
                              <div className="user-details">{item.language} • Lvl {item.level}</div>
                            </div>
                          </div>
                        </td>
                        <td>{item.xp}</td>
                        <td>
                          <div className="streak-cell">
                            <Flame size={16} className="fire-icon" />
                            <div className="streak-count">{item.streaks}</div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Right Section - Your League */}
            <div className="section league-section">
              <div className="section-header">
                <h2 className="section-title">Your League</h2>
                <div 
                  className="info-icon"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <Info size={16} />
                  {showTooltip && (
                    <div className="info-tooltip">
                      <p>Leagues are groups of users with similar skill levels. Rise through the ranks by earning XP and completing challenges to unlock new planets!</p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* League Progress */}
              <div className="league-progress-container">
                <div className="progress-labels">
                  <span>Current XP: {currentXP}</span>
                  <span>Next League: {leagueData[1].minXP} XP</span>
                </div>
                <div className="progress-bar-container">
                  <div 
                    className="progress-bar"
                    style={{ width: `${(currentXP / leagueData[1].minXP) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              {/* League Planets */}
              <div className="planets-container">
                {leagueData.map((item) => (
                  <div 
                    key={item.id} 
                    className="planet-container"
                  >
                    <img 
                      src={item.avatar}
                      alt={item.name} 
                      className={`planet-image ${item.type === 'planet' ? 'active' : 'inactive'}`}
                    />
                    <span className="planet-name">{item.name}</span>
                    {item.type === 'planet' && (
                      <div className="planet-users">
                        {item.users} users
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Earn XP Section */}
              <div className="earn-xp-container">
                <h3 className="earn-xp-title">Earn XP</h3>
                
                {tasks.map((task) => (
                  <div 
                    key={task.id} 
                    className={`task-container ${expandedTask === task.id ? 'expanded' : ''}`}
                  >
                    <div className="task-header" onClick={() => setExpandedTask(expandedTask === task.id ? null : task.id)}>
                      <div className="task-title-container">
                        <span className="task-title">{task.name}</span>
                        <span className="task-xp">+{task.xp} XP</span>
                      </div>
                      <button 
                        className="task-play-btn"
                        onClick={(e) => completeTask(task.id, e)}
                      >
                        <Play size={16} fill="white" />
                      </button>
                    </div>
                    
                    {expandedTask === task.id && (
                      <div className="task-details">
                        <p className="task-description">{task.description}</p>
                        <div className="task-progress-container">
                          <div className="progress-labels">
                            <span>Progress</span>
                            <span>{task.progress}%</span>
                          </div>
                          <div className="progress-bar-container">
                            <div 
                              className="progress-bar task-progress"
                              style={{ width: `${task.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="task-footer">
                          <div className="task-time">
                            <span className="time-icon">⏱️</span>
                            <span>{task.estimatedTime}</span>
                          </div>
                          <button className="task-details-btn">
                            See details
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Effect */}
        <div className="wave-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,128L80,117.3C160,107,320,85,480,96C640,107,800,149,960,154.7C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
