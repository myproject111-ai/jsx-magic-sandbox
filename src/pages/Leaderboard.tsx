
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Info, Play, Star, Flame, Trophy, Medal, Award, Crown, 
  ChevronUp, ChevronDown, Gift, User, Users, UserCheck, 
  Target, Sparkles, Search, Filter, ArrowLeft, ArrowRight, 
  Rocket, Zap, Calendar, Timer, ArrowUpRight
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";

const Leaderboard = () => {
  // State for interactive elements
  const [activeTab, setActiveTab] = useState('global');
  const [expandedTask, setExpandedTask] = useState<number | null>(null);
  const [hoveredUser, setHoveredUser] = useState<number | null>(null);
  const [currentXP, setCurrentXP] = useState(85);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [animateXP, setAnimateXP] = useState(false);
  const { toast } = useToast();
  
  // Leaderboard data
  const leaderboardData = [
    { id: 1, name: 'Abhishek', xp: '120 XP', streaks: 447, language: 'Python', level: 12, rankChange: 'up' },
    { id: 2, name: 'Jaiden', xp: '110 XP', streaks: 703, language: 'JavaScript', level: 10, rankChange: 'same' },
    { id: 3, name: 'Emily', xp: '110 XP', streaks: 154, language: 'Java', level: 11, rankChange: 'down' },
    { id: 4, name: 'John Cena', xp: '95 XP', streaks: 321, language: 'C++', level: 9, rankChange: 'up' },
    { id: 5, name: 'Sara Kim', xp: '85 XP', streaks: 112, language: 'React', level: 8, rankChange: 'up' },
    { id: 6, name: 'Michael B.', xp: '80 XP', streaks: 95, language: 'Go', level: 7, rankChange: 'down' },
    { id: 7, name: 'Tina Chen', xp: '78 XP', streaks: 87, language: 'Swift', level: 7, rankChange: 'up' },
    { id: 8, name: 'Robert J.', xp: '75 XP', streaks: 74, language: 'Kotlin', level: 6, rankChange: 'same' },
  ];

  // Filtered leaderboard data
  const filteredLeaderboardData = leaderboardData.filter(user => {
    if (searchQuery) {
      return user.name.toLowerCase().includes(searchQuery.toLowerCase());
    }
    if (selectedFilter !== 'all') {
      return user.language.toLowerCase() === selectedFilter.toLowerCase();
    }
    return true;
  });

  // Pagination
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredLeaderboardData.length / itemsPerPage);
  const paginatedData = filteredLeaderboardData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Top users
  const topUsers = [
    { id: 1, name: 'Jaiden', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', badge: 'silver', level: 15, totalXP: 4502 },
    { id: 2, name: 'John Cena', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', badge: 'gold', level: 23, totalXP: 8754 },
    { id: 3, name: 'Emily', avatar: 'https://randomuser.me/api/portraits/women/65.jpg', badge: 'bronze', level: 14, totalXP: 3956 },
  ];

  // League data
  const leagueData = [
    { id: 1, name: 'Mercury', avatar: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80', type: 'planet', users: 245, minXP: 1000, color: '#FDA4AF' },
    { id: 2, name: 'Saturn', avatar: 'https://images.unsplash.com/photo-1614314169000-4c4331e04018?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80', type: 'empty', users: 0, minXP: 2500, color: '#FCD34D' },
    { id: 3, name: 'Jupiter', avatar: 'https://images.unsplash.com/photo-1639925176350-1c99986cbd47?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80', type: 'empty', users: 0, minXP: 5000, color: '#60A5FA' },
    { id: 4, name: 'Neptune', avatar: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80', type: 'empty', users: 0, minXP: 10000, color: '#34D399' },
  ];

  // Daily challenges
  const dailyChallenges = [
    { id: 1, title: 'Daily Login', xp: 5, completed: true },
    { id: 2, title: 'Solve a Coding Challenge', xp: 10, completed: false },
    { id: 3, title: 'Help Another User', xp: 15, completed: false },
  ];

  // Tasks
  const tasks = [
    { 
      id: 1, 
      name: 'Complete Python Basics', 
      xp: 20, 
      description: 'Finish at least 3 lessons in the Python basics module',
      progress: 67,
      estimatedTime: '15 min',
      tags: ['beginner', 'python'],
      difficulty: 'easy'
    },
    { 
      id: 2, 
      name: 'Daily Coding Challenge', 
      xp: 15, 
      description: 'Solve today\'s coding problem',
      progress: 0,
      estimatedTime: '10 min',
      tags: ['challenge', 'algorithm'],
      difficulty: 'medium'
    },
    { 
      id: 3, 
      name: 'Complete a Project', 
      xp: 50, 
      description: 'Finish and submit a project from the project library',
      progress: 25,
      estimatedTime: '2 hours',
      tags: ['project', 'advanced'],
      difficulty: 'hard'
    },
    { 
      id: 4, 
      name: 'AI Model Training', 
      xp: 35, 
      description: 'Learn how to train a basic neural network model',
      progress: 10,
      estimatedTime: '45 min',
      tags: ['ai', 'python', 'data'],
      difficulty: 'medium'
    },
  ];

  // Filter options
  const filterOptions = [
    { id: 'all', label: 'All', color: '#94A3B8' },
    { id: 'python', label: 'Python', color: '#3B82F6' },
    { id: 'javascript', label: 'JavaScript', color: '#FBBF24' },
    { id: 'java', label: 'Java', color: '#F87171' },
    { id: 'c++', label: 'C++', color: '#60A5FA' },
    { id: 'react', label: 'React', color: '#38BDF8' },
  ];

  // Simulate XP increase when completing a task
  const completeTask = (taskId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      setAnimateXP(true);
      setTimeout(() => {
        setCurrentXP(prev => prev + task.xp);
        setAnimateXP(false);
        setShowConfetti(true);
        
        toast({
          title: "Task Completed!",
          description: `You earned +${task.xp} XP. Keep up the good work!`,
          variant: "success",
        });
        
        setTimeout(() => setShowConfetti(false), 3000);
      }, 500);
    }
  };
  
  // Complete daily challenge
  const completeDailyChallenge = (id: number) => {
    const challenge = dailyChallenges.find(c => c.id === id);
    if (challenge && !challenge.completed) {
      setAnimateXP(true);
      setTimeout(() => {
        setCurrentXP(prev => prev + challenge.xp);
        setAnimateXP(false);
        
        toast({
          title: "Challenge Completed!",
          description: `You earned +${challenge.xp} XP for completing "${challenge.title}"`,
          variant: "success",
        });
      }, 500);
    }
  };

  // Change page
  const changePage = (page: number) => {
    setCurrentPage(page);
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
    <div className="leaderboard-container">
      {/* Confetti Effect */}
      {renderConfetti()}

      {/* Main Content */}
      <div className="main-content-leaderboard">
        <div className="container-leaderboard">
          <motion.div 
            className="page-header-leaderboard"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="header-content-leaderboard">
              <Trophy size={36} className="header-icon-leaderboard" />
              <h1 className="header-title-leaderboard">Leaderboard</h1>
            </div>
            <div className="header-quote-leaderboard">
              <Sparkles size={16} className="quote-icon-leaderboard" />
              <span>"Competing with others is good, but competing with yourself is better."</span>
            </div>
          </motion.div>

          <div className="content-row-leaderboard">
            {/* Left Section - Leaderboard */}
            <motion.div 
              className="section-leaderboard leaderboard-section"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="section-header-leaderboard">
                <h2 className="section-title-leaderboard">Rankings</h2>
                <div className="tab-switcher-leaderboard">
                  <button 
                    className={`tab-btn-leaderboard ${activeTab === 'global' ? 'active' : ''}`}
                    onClick={() => setActiveTab('global')}
                  >
                    <Users size={16} className="tab-icon-leaderboard" />
                    Global
                  </button>
                  <button 
                    className={`tab-btn-leaderboard ${activeTab === 'friends' ? 'active' : ''}`}
                    onClick={() => setActiveTab('friends')}
                  >
                    <UserCheck size={16} className="tab-icon-leaderboard" />
                    Friends
                  </button>
                </div>
              </div>
              
              {/* Search and Filter Bar */}
              <div className="search-filter-bar-leaderboard">
                <div className="search-container-leaderboard">
                  <Search size={14} className="search-icon-leaderboard" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="search-input-leaderboard"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="filter-buttons-leaderboard">
                  {filterOptions.map(option => (
                    <button
                      key={option.id}
                      className={`filter-btn-leaderboard ${selectedFilter === option.id ? 'active' : ''}`}
                      onClick={() => setSelectedFilter(option.id)}
                      style={{ borderColor: selectedFilter === option.id ? option.color : 'transparent' }}
                    >
                      {option.label}
                      {selectedFilter === option.id && (
                        <span className="filter-indicator" style={{ backgroundColor: option.color }}></span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Top Users */}
              <div className="top-users-container-leaderboard">
                <h3 className="section-subtitle-leaderboard">Top Performers</h3>
                <div className="top-users-leaderboard">
                  {topUsers.map((user, index) => (
                    <motion.div 
                      key={user.id} 
                      className="top-user-leaderboard"
                      onMouseEnter={() => setHoveredUser(user.id)}
                      onMouseLeave={() => setHoveredUser(null)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="ranking-badge-leaderboard">
                        {index === 0 ? <Crown size={16} className="crown-icon-leaderboard" /> : (index + 1)}
                      </div>
                      <div className="avatar-container-leaderboard">
                        <motion.img 
                          src={user.avatar} 
                          alt={user.name} 
                          className={`user-avatar-leaderboard ${hoveredUser === user.id ? 'active' : ''}`}
                          whileHover={{ scale: 1.05 }}
                        />
                        <div className={`badge-leaderboard ${user.badge}`}>
                          <Star size={16} className="badge-icon-leaderboard" />
                        </div>
                        {hoveredUser === user.id && (
                          <motion.div 
                            className="user-tooltip-leaderboard"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                          >
                            <div className="tooltip-content-leaderboard">
                              <div className="tooltip-name-leaderboard">{user.name}</div>
                              <div className="tooltip-level-leaderboard">Level {user.level}</div>
                              <div className="tooltip-xp-leaderboard">XP: {user.totalXP.toLocaleString()}</div>
                              <div className="tooltip-badge-leaderboard">
                                <Medal size={14} className="badge-icon-small-leaderboard" />
                                <span className="badge-text-leaderboard">{user.badge.charAt(0).toUpperCase() + user.badge.slice(1)}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                      <span className="user-name-leaderboard">{user.name}</span>
                      <span className="user-level-leaderboard">Level {user.level}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Leaderboard Table */}
              <div className="leaderboard-table-container-leaderboard">
                <table className="leaderboard-table-leaderboard">
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>User</th>
                      <th>XP</th>
                      <th>Streaks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedData.map((item, index) => (
                      <motion.tr 
                        key={item.id} 
                        className="leaderboard-row-leaderboard"
                        onClick={() => alert(`Viewing ${item.name}'s profile`)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        whileHover={{ backgroundColor: '#f7fafc' }}
                      >
                        <td className="rank-cell-leaderboard">
                          <div className="rank-value-leaderboard">{item.id < 10 ? `0${item.id}` : item.id}</div>
                          <div className={`rank-change-leaderboard ${item.rankChange}`}>
                            {item.rankChange === 'up' ? (
                              <ChevronUp size={14} className="rank-icon-leaderboard up" />
                            ) : item.rankChange === 'down' ? (
                              <ChevronDown size={14} className="rank-icon-leaderboard down" />
                            ) : (
                              <div className="rank-dot-leaderboard" />
                            )}
                          </div>
                        </td>
                        <td>
                          <div className="user-cell-leaderboard">
                            <div className="user-avatar-small-container-leaderboard">
                              <img 
                                src={`https://randomuser.me/api/portraits/men/${30 + item.id}.jpg`} 
                                alt={item.name} 
                                className="user-avatar-small-leaderboard" 
                              />
                              <div className="online-indicator-small-leaderboard"></div>
                            </div>
                            <div className="user-info-leaderboard">
                              <div className="user-name-table-leaderboard">{item.name}</div>
                              <div className="user-details-leaderboard">{item.language} • Lvl {item.level}</div>
                            </div>
                          </div>
                        </td>
                        <td className="xp-cell-leaderboard">{item.xp}</td>
                        <td>
                          <div className="streak-cell-leaderboard">
                            <Flame size={16} className="fire-icon-leaderboard" />
                            <div className="streak-count-leaderboard">{item.streaks}</div>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="pagination-leaderboard">
                <button 
                  className="pagination-btn-leaderboard prev"
                  onClick={() => changePage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  <ArrowLeft size={14} />
                  Previous
                </button>
                <div className="pagination-numbers-leaderboard">
                  {[...Array(totalPages)].map((_, i) => (
                    <button 
                      key={i}
                      className={`page-number-leaderboard ${currentPage === i + 1 ? 'active' : ''}`}
                      onClick={() => changePage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button 
                  className="pagination-btn-leaderboard next"
                  onClick={() => changePage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
            
            {/* Right Section - Your League */}
            <motion.div 
              className="section-leaderboard league-section-leaderboard"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="section-header-leaderboard">
                <h2 className="section-title-leaderboard">Your League</h2>
                <div 
                  className="info-icon-leaderboard"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <Info size={16} />
                  {showTooltip && (
                    <motion.div 
                      className="info-tooltip-leaderboard"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                    >
                      <p>Leagues are groups of users with similar skill levels. Rise through the ranks by earning XP and completing challenges to unlock new planets!</p>
                    </motion.div>
                  )}
                </div>
              </div>
              
              {/* User Stats */}
              <div className="user-stats-leaderboard">
                <div className="user-stats-header-leaderboard">
                  <div className="user-stats-avatar-leaderboard">
                    <img 
                      src="https://randomuser.me/api/portraits/men/32.jpg" 
                      alt="Your Avatar" 
                      className="stats-avatar-img-leaderboard" 
                    />
                    <div className="stats-badge-leaderboard">
                      <Star size={14} className="stats-badge-icon-leaderboard" />
                    </div>
                  </div>
                  <div className="user-stats-info-leaderboard">
                    <h3 className="stats-name-leaderboard">Your Progress</h3>
                    <div className="stats-rank-leaderboard">Rank: #246</div>
                  </div>
                </div>
                
                <div className="stats-grid-leaderboard">
                  <motion.div 
                    className="stat-item-leaderboard"
                    animate={animateXP ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="stat-value-leaderboard">{currentXP}</div>
                    <div className="stat-label-leaderboard">Current XP</div>
                  </motion.div>
                  <div className="stat-item-leaderboard">
                    <div className="stat-value-leaderboard">42</div>
                    <div className="stat-label-leaderboard">Daily Streak</div>
                  </div>
                  <div className="stat-item-leaderboard">
                    <div className="stat-value-leaderboard">8</div>
                    <div className="stat-label-leaderboard">Your Level</div>
                  </div>
                  <div className="stat-item-leaderboard">
                    <div className="stat-value-leaderboard">75%</div>
                    <div className="stat-label-leaderboard">Completion</div>
                  </div>
                </div>
              </div>
              
              {/* Daily Challenges */}
              <div className="daily-challenges-container-leaderboard">
                <div className="daily-header-leaderboard">
                  <h3 className="daily-title-leaderboard">
                    <Calendar size={16} className="daily-icon-leaderboard" />
                    Daily Challenges
                  </h3>
                  <div className="daily-reset-leaderboard">
                    <Timer size={14} className="reset-icon-leaderboard" />
                    <span>Resets in 12:42:07</span>
                  </div>
                </div>
                
                <div className="challenges-list-leaderboard">
                  {dailyChallenges.map(challenge => (
                    <motion.div 
                      key={challenge.id}
                      className={`challenge-item-leaderboard ${challenge.completed ? 'completed' : ''}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * challenge.id }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="challenge-info-leaderboard">
                        <div className="challenge-icon-container-leaderboard">
                          {challenge.completed ? (
                            <div className="challenge-completed-icon-leaderboard">✓</div>
                          ) : (
                            <Zap size={16} className="challenge-icon-leaderboard" />
                          )}
                        </div>
                        <div className="challenge-content-leaderboard">
                          <div className="challenge-title-leaderboard">{challenge.title}</div>
                          <div className="challenge-xp-leaderboard">+{challenge.xp} XP</div>
                        </div>
                      </div>
                      {!challenge.completed && (
                        <button 
                          className="challenge-claim-btn-leaderboard"
                          onClick={() => completeDailyChallenge(challenge.id)}
                        >
                          Claim
                        </button>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* League Progress */}
              <div className="league-progress-container-leaderboard">
                <h3 className="progress-title-leaderboard">League Progress</h3>
                <div className="progress-labels-leaderboard">
                  <span>Current XP: {currentXP}</span>
                  <span>Next League: {leagueData[1].minXP} XP</span>
                </div>
                <Progress value={(currentXP / leagueData[1].minXP) * 100} className="progress-bar-custom" />
                <div className="xp-needed-leaderboard">
                  <Target size={16} className="target-icon-leaderboard" />
                  <span>You need {leagueData[1].minXP - currentXP} more XP to reach Saturn</span>
                </div>
              </div>
              
              {/* League Planets */}
              <div className="league-journey-leaderboard">
                <h3 className="journey-title-leaderboard">Your Journey</h3>
                <div className="planets-container-leaderboard">
                  {leagueData.map((item, index) => (
                    <motion.div 
                      key={item.id} 
                      className="planet-container-leaderboard"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    >
                      <div className={`planet-connection-leaderboard ${index > 0 ? 'line' : ''}`}></div>
                      <div 
                        className={`planet-circle-leaderboard ${item.type === 'planet' ? 'active' : 'inactive'}`}
                        style={{ 
                          boxShadow: item.type === 'planet' ? `0 0 20px ${item.color}` : 'none',
                          border: `2px solid ${item.color}`
                        }}
                      >
                        <motion.img 
                          src={item.avatar}
                          alt={item.name} 
                          className="planet-image-leaderboard"
                          animate={item.type === 'planet' ? { scale: [1, 1.05, 1] } : {}}
                          transition={{ repeat: Infinity, duration: 3 }}
                        />
                      </div>
                      <div className="planet-info-leaderboard">
                        <span className="planet-name-leaderboard" style={{ color: item.color }}>{item.name || "???"}</span>
                        {item.type === 'planet' ? (
                          <div className="planet-users-leaderboard">
                            <Users size={12} className="users-icon-leaderboard" />
                            <span>{item.users} users</span>
                          </div>
                        ) : (
                          <div className="planet-locked-leaderboard">
                            <span>{item.minXP} XP to unlock</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Earn XP Section */}
              <div className="earn-xp-container-leaderboard">
                <h3 className="earn-xp-title-leaderboard">
                  <Gift size={18} className="gift-icon-leaderboard" />
                  Earn XP
                </h3>
                
                <div className="task-filter-buttons-leaderboard">
                  <button className="task-filter-btn-leaderboard active">All</button>
                  <button className="task-filter-btn-leaderboard">Beginner</button>
                  <button className="task-filter-btn-leaderboard">Challenges</button>
                  <button className="task-filter-btn-leaderboard">Projects</button>
                </div>
                
                <div className="tasks-list-leaderboard">
                  {tasks.map((task) => (
                    <motion.div 
                      key={task.id} 
                      className={`task-container-leaderboard ${expandedTask === task.id ? 'expanded' : ''}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * task.id }}
                      layoutId={`task-${task.id}`}
                    >
                      <div className="task-header-leaderboard" onClick={() => setExpandedTask(expandedTask === task.id ? null : task.id)}>
                        <div className="task-title-container-leaderboard">
                          <span className="task-title-leaderboard">{task.name}</span>
                          <div className="task-meta-leaderboard">
                            <span className="task-xp-leaderboard">+{task.xp} XP</span>
                            <div className="task-tags-leaderboard">
                              {task.tags.map((tag, idx) => (
                                <span 
                                  key={idx} 
                                  className="task-tag-leaderboard"
                                  style={{ 
                                    backgroundColor: 
                                      tag === 'beginner' ? '#DCFCE7' : 
                                      tag === 'python' ? '#DBEAFE' : 
                                      tag === 'challenge' ? '#FEF3C7' : 
                                      tag === 'project' ? '#FFE4E6' : 
                                      tag === 'advanced' ? '#FFEDD5' : 
                                      tag === 'ai' ? '#F3E8FF' : 
                                      tag === 'data' ? '#E0E7FF' : 
                                      '#F1F5F9',
                                    color: 
                                      tag === 'beginner' ? '#166534' : 
                                      tag === 'python' ? '#1E40AF' : 
                                      tag === 'challenge' ? '#92400E' : 
                                      tag === 'project' ? '#9F1239' : 
                                      tag === 'advanced' ? '#9A3412' : 
                                      tag === 'ai' ? '#6B21A8' : 
                                      tag === 'data' ? '#3730A3' : 
                                      '#475569',
                                  }}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <span className={`difficulty-badge-leaderboard ${task.difficulty}`}>
                              {task.difficulty}
                            </span>
                          </div>
                        </div>
                        <motion.button 
                          className="task-play-btn-leaderboard"
                          onClick={(e) => completeTask(task.id, e)}
                          whileHover={{ scale: 1.1, backgroundColor: '#F97316' }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Play size={16} fill="white" />
                        </motion.button>
                      </div>
                      
                      <AnimatePresence>
                        {expandedTask === task.id && (
                          <motion.div 
                            className="task-details-leaderboard"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="task-description-leaderboard">{task.description}</p>
                            <div className="task-progress-container-leaderboard">
                              <div className="progress-labels-leaderboard">
                                <span>Progress</span>
                                <span>{task.progress}%</span>
                              </div>
                              <Progress value={task.progress} className="progress-bar-custom task-progress" />
                            </div>
                            <div className="task-footer-leaderboard">
                              <div className="task-time-leaderboard">
                                <span className="time-icon-leaderboard">⏱️</span>
                                <span>{task.estimatedTime}</span>
                              </div>
                              <motion.button 
                                className="task-details-btn-leaderboard"
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                                whileTap={{ scale: 0.95 }}
                              >
                                See details
                                <ArrowUpRight size={14} className="arrow-icon-leaderboard" />
                              </motion.button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Rocket Animation */}
              <motion.div 
                className="rocket-animation-leaderboard"
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                <Rocket size={40} className="rocket-icon-leaderboard" />
                <div className="rocket-trail-leaderboard"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Wave Effect */}
        <div className="wave-container-leaderboard">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,128L80,117.3C160,107,320,85,480,96C640,107,800,149,960,154.7C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
