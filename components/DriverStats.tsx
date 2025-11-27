import React from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'
import {
  Trophy,
  Zap,
  Award,
  Cpu,
  Shield,
  Activity,
  Target,
  BicepsFlexed,
  Goal,
  Skull,
  Scroll,
  Heart,
  Crosshair,
  Briefcase,
  Layers,
  Code,
} from 'lucide-react'

interface DriverStatsProps {
  currentTheme?: string
}

const DriverStats: React.FC<DriverStatsProps> = ({
  currentTheme = 'festival',
}) => {
  // Dynamic Data based on Theme
  const getThemeStats = () => {
    switch (currentTheme) {
      case 'professional':
        return {
          // Professional - Architectural & Quality Focus
          data: [
            { subject: 'Arch', value: 95, fullMark: 100 },
            { subject: 'Scale', value: 92, fullMark: 100 },
            { subject: 'Secure', value: 90, fullMark: 100 },
            { subject: 'Perf', value: 98, fullMark: 100 },
            { subject: 'Reliable', value: 95, fullMark: 100 },
            { subject: 'Maintain', value: 100, fullMark: 100 },
          ],
          title: 'Stats',
          chartTitle: 'Capabilities',
          subtitle: 'Overview',
          icons: {
            rank: <Briefcase className="text-[#3b82f6]" size={24} />,
            speed: <Layers className="text-[#a1a1aa]" size={24} />,
            cert: <Code className="text-[#ffffff]" size={24} />,
          },
          labels: {
            rank: 'Years Exp',
            rankDesc: '1.5+',
            speed: 'Projects',
            speedDesc: '3+',
            cert: 'Specialty',
          },
        }
      case 'dead-cells':
        return {
          // Dead Cells Stats - Brutality (Backend) High
          data: [
            { subject: 'BRUTALITY', value: 98, fullMark: 100 }, // Backend/Logic
            { subject: 'TACTICS', value: 85, fullMark: 100 }, // Frontend
            { subject: 'SURVIVAL', value: 90, fullMark: 100 }, // Database/DevOps
            { subject: 'CELLS', value: 88, fullMark: 100 }, // Experience
            { subject: 'GOLD', value: 80, fullMark: 100 }, // Value
            { subject: 'SCROLLS', value: 95, fullMark: 100 }, // Learning
          ],
          title: 'THE INVENTORY',
          chartTitle: 'RUN STATS',
          subtitle: 'CURRENT BUILD',
          icons: {
            rank: <Skull className="text-[#ff2a2a]" size={24} />,
            speed: <Scroll className="text-[#bd6eff]" size={24} />,
            cert: <Heart className="text-[#00ff41]" size={24} />,
          },
          labels: {
            rank: 'Kill Count',
            rankDesc: 'Bugs squashed: Infinite. Clean Code: Always.',
            speed: 'Scrolls Count',
            speedDesc: 'Focus on Scalability and Performance.',
            cert: 'Mutations',
          },
        }
      case 'valorant':
        return {
          // Valorant Stats - KDA (Code/Debug/Deploy)
          data: [
            { subject: 'KDA', value: 98, fullMark: 100 }, // High KDA (Success rate)
            { subject: 'HS%', value: 95, fullMark: 100 }, // Precision (Clean Code)
            { subject: 'ACS', value: 92, fullMark: 100 }, // Combat Score (Impact)
            { subject: 'ADR', value: 90, fullMark: 100 }, // Damage/Round (Consistency)
            { subject: 'CAST', value: 88, fullMark: 100 }, // Ability Usage (Tech Stack)
            { subject: 'WIN%', value: 99, fullMark: 100 }, // Win Rate
          ],
          title: 'COMBAT RECORD',
          chartTitle: 'MATCH MVP',
          subtitle: 'PERFORMANCE',
          icons: {
            rank: <Trophy className="text-[#ECE8E1]" size={24} />,
            speed: <Crosshair className="text-[#FF4655]" size={24} />,
            cert: <Shield className="text-[#ECE8E1]" size={24} />,
          },
          labels: {
            rank: 'Rank Rating',
            rankDesc: 'Peak Rank: Radiant (Backend Specialist).',
            speed: 'Headshot %',
            speedDesc: '95% Clean Code Accuracy.',
            cert: 'Accomplishments',
          },
        }
      case 'club':
        return {
          // FIFA / FC Stats - Defensive (Security) & Physical (Stamina) High
          data: [
            { subject: 'PAC', value: 90, fullMark: 100 }, // Coding Speed
            { subject: 'SHO', value: 88, fullMark: 100 }, // Shooting
            { subject: 'PAS', value: 95, fullMark: 100 }, // Passing (Teamwork)
            { subject: 'DRI', value: 85, fullMark: 100 }, // Dribbling
            { subject: 'DEF', value: 96, fullMark: 100 }, // Defense (Security/Backend)
            { subject: 'PHY', value: 92, fullMark: 100 }, // Physical (Hard work)
          ],
          title: 'PLAYER ATTRIBUTES',
          chartTitle: 'SEASON 24/25',
          subtitle: 'STATS',
          icons: {
            rank: <Goal className="text-[#32ff7e]" size={24} />,
            speed: <Zap className="text-[#eebb54]" size={24} />,
            cert: <BicepsFlexed className="text-white" size={24} />,
          },
          labels: {
            rank: 'Current Form',
            rankDesc: 'Specializes in OOP, SOLID, and MVC Patterns.',
            speed: 'Work Rate',
            speedDesc: 'High / High. Strong mentor for juniors.',
            cert: 'Traits',
          },
        }
      case 'neon-city':
        return {
          // Cyberpunk Hardware Stats - Logic/CPU High
          data: [
            { subject: 'CPU', value: 98, fullMark: 100 }, // Logic
            { subject: 'RAM', value: 92, fullMark: 100 }, // Memory
            { subject: 'ICE', value: 95, fullMark: 100 }, // Security
            { subject: 'NET', value: 90, fullMark: 100 }, // Networking
            { subject: 'COOL', value: 85, fullMark: 100 }, // Stability
            { subject: 'RFLX', value: 88, fullMark: 100 }, // Reactivity
          ],
          title: 'SYSTEM METRICS',
          chartTitle: 'OVERCLOCKING',
          subtitle: 'NEURAL LINK STATUS',
          icons: {
            rank: <Cpu className="text-horizon-pink" size={24} />,
            speed: <Activity className="text-horizon-cyan" size={24} />,
            cert: <Shield className="text-horizon-yellow" size={24} />,
          },
          labels: {
            rank: 'Mainframe Access',
            rankDesc: 'Root access. SQL Optimization expert.',
            speed: 'Processing Power',
            speedDesc: 'CI/CD Pipelines fully operational.',
            cert: 'Protocols',
          },
        }
      case 'vice-city':
        return {
          // GTA Stats
          data: [
            { subject: 'RESPECT', value: 100, fullMark: 100 },
            { subject: 'DRIVING', value: 85, fullMark: 100 },
            { subject: 'SHOOTING', value: 95, fullMark: 100 }, // Bug Fixing
            { subject: 'STAMINA', value: 98, fullMark: 100 },
            { subject: 'FLYING', value: 75, fullMark: 100 },
            { subject: 'LUCK', value: 80, fullMark: 100 },
          ],
          title: 'STREET CRED',
          chartTitle: 'REPUTATION',
          subtitle: 'CRIMINAL RECORD',
          icons: {
            rank: <Trophy className="text-[#fbbf24]" size={24} />,
            speed: <Zap className="text-[#ec4899]" size={24} />,
            cert: <Award className="text-[#8b5cf6]" size={24} />,
          },
          labels: {
            rank: 'Most Wanted',
            rankDesc: 'Wanted for excessive Clean Code practices.',
            speed: 'Getaway Speed',
            speedDesc: 'Deploying hotfixes faster than 5 stars.',
            cert: 'Achievements',
          },
        }
      default:
        return {
          // Forza Stats - Tuning for Backend
          data: [
            { subject: 'SPEED', value: 90, fullMark: 100 }, // Coding Speed
            { subject: 'HANDLING', value: 95, fullMark: 100 }, // Logic/Backend
            { subject: 'ACCEL', value: 98, fullMark: 100 }, // Learning
            { subject: 'LAUNCH', value: 88, fullMark: 100 }, // Deployment
            { subject: 'BRAKING', value: 85, fullMark: 100 }, // Testing
          ],
          title: 'DRIVER STATS',
          chartTitle: 'TUNING SETUP',
          subtitle: 'CAREER HISTORY',
          icons: {
            rank: <Trophy className="text-horizon-pink" size={24} />,
            speed: <Zap className="text-horizon-dark" size={24} />,
            cert: <Award className="text-horizon-cyan" size={24} />,
          },
          labels: {
            rank: 'Hall of Fame',
            rankDesc: 'Backend Developer at HOPEE SOLUTIONS.',
            speed: 'Speed Zone',
            speedDesc: 'Optimized for Scalability & Performance.',
            cert: 'Certifications',
          },
        }
    }
  }

  const content = getThemeStats()

  // Helper for container styling
  const getContainerStyle = () => {
    if (currentTheme === 'club')
      return 'bg-transparent text-white border-y border-[#32ff7e]/20'
    if (currentTheme === 'dead-cells')
      return 'bg-transparent text-white border-y border-[#4d3e75] font-pixel'
    if (currentTheme === 'vice-city') return 'bg-transparent text-white'
    if (currentTheme === 'neon-city')
      return 'bg-black/50 border-y border-horizon-cyan/30 text-white'
    if (currentTheme === 'valorant')
      return 'bg-[#0F1923] border-y border-white/10 text-[#ECE8E1] font-valo uppercase'
    if (currentTheme === 'professional')
      return 'bg-transparent text-white border-t border-[#2a2a2a] font-sans'
    return 'bg-horizon-gray text-horizon-dark'
  }

  const cardStyle =
    currentTheme === 'festival'
      ? 'bg-white text-black'
      : 'bg-black/40 backdrop-blur-md text-white border border-white/10'

  const profCardStyle =
    'bg-[#111] border border-[#2a2a2a] text-white hover:border-[#3b82f6] hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all flex flex-col items-center justify-center text-center'

  return (
    <div
      className={`w-full py-20 relative overflow-hidden ${getContainerStyle()}`}
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-horizon-dark skew-x-12 opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Text Info */}
          <div className="w-full md:w-1/2 space-y-8">
            <div>
              <h2
                className={`text-6xl md:text-8xl font-display font-bold uppercase mb-2 -ml-2 
                 ${
                   currentTheme === 'festival'
                     ? 'text-horizon-dark italic'
                     : 'text-white drop-shadow-lg'
                 }
                 ${
                   currentTheme === 'dead-cells'
                     ? 'font-pixel text-4xl leading-relaxed text-[#bd6eff]'
                     : ''
                 }
                 ${
                   currentTheme === 'valorant'
                     ? 'font-display text-[#FF4655]'
                     : ''
                 }
                 ${
                   currentTheme === 'professional'
                     ? 'font-display not-italic tracking-tight text-5xl font-semibold'
                     : ''
                 }`}
              >
                {content.title}
              </h2>
              {currentTheme !== 'professional' && (
                <div className="h-2 w-32 bg-horizon-pink skew-x-[-20]" />
              )}
            </div>

            <div
              className={`grid gap-4 ${
                currentTheme === 'professional'
                  ? 'grid-cols-2'
                  : 'grid-cols-1 sm:grid-cols-2'
              }`}
            >
              {/* Cards */}
              <div
                className={`p-4 border-l-4 shadow-lg transform hover:-translate-y-1 transition-transform rounded-card 
                   ${
                     currentTheme === 'professional'
                       ? `${profCardStyle} border-l-0 rounded-[16px] h-32`
                       : `${cardStyle} border-horizon-cyan`
                   }
                   ${
                     currentTheme === 'valorant'
                       ? 'border-[#FF4655] bg-[#1a2733]'
                       : ''
                   }
                   `}
              >
                {currentTheme === 'professional' ? (
                  <>
                    <h3 className="font-mono text-3xl text-white mb-1">1.5+</h3>
                    <p className="text-[#a1a1aa] text-sm">Years Exp</p>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-2">
                      {content.icons.rank}
                      <h4
                        className={`font-bold font-display text-2xl uppercase ${
                          currentTheme === 'dead-cells'
                            ? 'font-pixel text-xs'
                            : ''
                        }`}
                      >
                        {content.labels.rank}
                      </h4>
                    </div>
                    <p className="text-sm opacity-80">
                      {content.labels.rankDesc}
                    </p>
                  </>
                )}
              </div>

              <div
                className={`p-4 border-l-4 shadow-lg transform hover:-translate-y-1 transition-transform rounded-card 
                   ${
                     currentTheme === 'professional'
                       ? `${profCardStyle} border-l-0 rounded-[16px] h-32`
                       : `${cardStyle} border-horizon-yellow`
                   }
                   ${
                     currentTheme === 'valorant'
                       ? 'border-white bg-[#1a2733]'
                       : ''
                   }
                   `}
              >
                {currentTheme === 'professional' ? (
                  <>
                    <h3 className="font-mono text-3xl text-white mb-1">3+</h3>
                    <p className="text-[#a1a1aa] text-sm">Projects</p>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-2">
                      {content.icons.speed}
                      <h4
                        className={`font-bold font-display text-2xl uppercase ${
                          currentTheme === 'dead-cells'
                            ? 'font-pixel text-xs'
                            : ''
                        }`}
                      >
                        {content.labels.speed}
                      </h4>
                    </div>
                    <p className="text-sm opacity-80">
                      {content.labels.speedDesc}
                    </p>
                  </>
                )}
              </div>

              <div
                className={`p-4 border-l-4 shadow-lg transform hover:-translate-y-1 transition-transform sm:col-span-2 rounded-card 
                   ${
                     currentTheme === 'professional'
                       ? `${profCardStyle} border-l-0 rounded-[16px] items-start text-left pl-6`
                       : `${cardStyle} border-horizon-pink`
                   }
                   ${
                     currentTheme === 'valorant'
                       ? 'border-[#FF4655] bg-[#1a2733]'
                       : ''
                   }
                   `}
              >
                <div className="flex items-center gap-3 mb-2">
                  {currentTheme !== 'professional' && content.icons.cert}
                  <h4
                    className={`font-bold font-display text-2xl uppercase ${
                      currentTheme === 'dead-cells' ? 'font-pixel text-xs' : ''
                    } ${
                      currentTheme === 'professional'
                        ? 'font-display not-italic tracking-tight'
                        : ''
                    }`}
                  >
                    {content.labels.cert}
                  </h4>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span
                    className={`px-2 py-1 text-xs font-bold rounded ${
                      currentTheme === 'professional'
                        ? 'bg-transparent text-[#a1a1aa] border border-[#333] font-mono'
                        : 'bg-white/20'
                    }`}
                  >
                    PHP/LARAVEL
                  </span>
                  <span
                    className={`px-2 py-1 text-xs font-bold rounded ${
                      currentTheme === 'professional'
                        ? 'bg-transparent text-[#a1a1aa] border border-[#333] font-mono'
                        : 'bg-white/20'
                    }`}
                  >
                    REST API
                  </span>
                  <span
                    className={`px-2 py-1 text-xs font-bold rounded ${
                      currentTheme === 'professional'
                        ? 'bg-transparent text-[#a1a1aa] border border-[#333] font-mono'
                        : 'bg-white/20'
                    }`}
                  >
                    DOCKER
                  </span>
                  <span
                    className={`px-2 py-1 text-xs font-bold rounded ${
                      currentTheme === 'professional'
                        ? 'bg-transparent text-[#a1a1aa] border border-[#333] font-mono'
                        : 'bg-white/20'
                    }`}
                  >
                    SOLID
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div
            className={`w-full md:w-1/2 h-[400px] md:h-[500px] rounded-3xl shadow-2xl p-4 border-4 relative overflow-hidden
              ${
                currentTheme === 'festival'
                  ? 'bg-white border-horizon-dark/5'
                  : 'bg-black/60 border-white/10'
              }
              ${
                currentTheme === 'club'
                  ? 'border-[#32ff7e]/50 bg-[#141b33]/60'
                  : ''
              }
              ${
                currentTheme === 'dead-cells'
                  ? 'border-[#4d3e75] bg-[#110b29]'
                  : ''
              }
              ${
                currentTheme === 'valorant'
                  ? 'border-[#FF4655]/50 bg-[#0F1923] rounded-none'
                  : ''
              }
              ${
                currentTheme === 'professional'
                  ? 'border-[#2a2a2a] bg-[#111] rounded-[16px] border'
                  : ''
              }
              `}
          >
            {currentTheme === 'neon-city' && (
              <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/xT9IgusfVcQH5TSWYE/giphy.gif')] opacity-5 pointer-events-none mix-blend-screen" />
            )}

            <div
              className={`absolute top-4 left-4 font-display text-3xl font-bold opacity-50 uppercase z-10 
                 ${
                   currentTheme === 'dead-cells'
                     ? 'font-pixel text-lg text-[#bd6eff]'
                     : ''
                 }
                 ${currentTheme === 'valorant' ? 'text-[#FF4655]' : ''}
                 ${
                   currentTheme === 'professional'
                     ? 'font-display not-italic text-[#3b82f6]'
                     : ''
                 }
             `}
            >
              {content.chartTitle}
            </div>

            <ResponsiveContainer width="100%" height="100%">
              <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="80%"
                data={content.data}
              >
                <PolarGrid
                  stroke={
                    currentTheme === 'festival'
                      ? '#e5e7eb'
                      : currentTheme === 'professional'
                      ? '#333'
                      : 'rgba(255,255,255,0.2)'
                  }
                />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{
                    fill: currentTheme === 'festival' ? '#1a1a1a' : '#fff',
                    fontSize: currentTheme === 'dead-cells' ? 10 : 14,
                    fontWeight: 'bold',
                    fontFamily:
                      currentTheme === 'club'
                        ? 'Oswald'
                        : currentTheme === 'dead-cells'
                        ? "'Press Start 2P'"
                        : currentTheme === 'professional'
                        ? "'JetBrains Mono'"
                        : 'Teko',
                  }}
                />
                <PolarRadiusAxis
                  angle={30}
                  domain={[0, 100]}
                  tick={false}
                  axisLine={false}
                />
                <Radar
                  name="Stats"
                  dataKey="value"
                  stroke={
                    currentTheme === 'valorant'
                      ? '#FF4655'
                      : currentTheme === 'professional'
                      ? '#3b82f6'
                      : 'var(--color-horizon-pink)'
                  }
                  strokeWidth={3}
                  fill={
                    currentTheme === 'valorant'
                      ? '#FF4655'
                      : currentTheme === 'professional'
                      ? '#3b82f6'
                      : 'var(--color-horizon-pink)'
                  }
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DriverStats
