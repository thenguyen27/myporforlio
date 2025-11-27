import React from 'react'
import { EXPERIENCE } from '../constants'
import {
  Briefcase,
  GraduationCap,
  Terminal,
  ChevronRight,
  Calendar,
  MapPin,
} from 'lucide-react'

interface TimelineProps {
  currentTheme?: string
}

// --- 1. Vertical Git Flow (Default for most themes) ---
const VerticalGitFlowTimeline: React.FC<{ currentTheme: string }> = ({
  currentTheme,
}) => {
  const getConfig = () => {
    switch (currentTheme) {
      case 'dead-cells':
        return {
          title: 'RUN HISTORY',
          bg: 'bg-[#110b29]',
          lineColor: 'bg-[#4d3e75]',
          dotColor: 'bg-[#bd6eff]',
          cardBg: 'bg-[#180b2a] border-2 border-[#4d3e75]',
          titleColor: 'text-[#bd6eff]',
          textColor: 'text-gray-400 font-pixel text-xs',
          font: 'font-pixel',
          icon: '💀',
        }
      case 'valorant':
        return {
          title: 'EPISODE HISTORY',
          bg: 'bg-[#0F1923]',
          lineColor: 'bg-white/20',
          dotColor: 'bg-[#FF4655]',
          cardBg: 'bg-[#1a2733] border-l-4 border-[#FF4655]',
          titleColor: 'text-[#ECE8E1]',
          textColor: 'text-[#ECE8E1] font-valo',
          font: 'font-valo tracking-widest',
          icon: '⚔️',
        }
      case 'vice-city':
        return {
          title: 'CRIMINAL RECORD',
          bg: 'bg-transparent',
          lineColor: 'bg-[#ec4899]',
          dotColor: 'bg-[#fbbf24]',
          cardBg: 'bg-black/40 backdrop-blur-md border border-[#ec4899]',
          titleColor: 'text-[#fbbf24]',
          textColor: 'text-white font-sans',
          font: 'font-display',
          icon: '🌴',
        }
      case 'neon-city':
        return {
          title: 'NETRUNNER LOGS',
          bg: 'bg-transparent',
          lineColor: 'bg-horizon-cyan shadow-[0_0_10px_#00F0FF]',
          dotColor: 'bg-horizon-pink',
          cardBg:
            'bg-black/60 border border-horizon-cyan shadow-[0_0_15px_rgba(0,240,255,0.2)]',
          titleColor: 'text-horizon-cyan',
          textColor: 'text-white font-mono',
          font: 'font-display',
          icon: '💾',
        }
      default:
        return {
          title: 'CAREER MODE',
          bg: 'bg-white',
          lineColor: 'bg-gray-200',
          dotColor: 'bg-horizon-pink',
          cardBg: 'bg-gray-50',
          titleColor: 'text-horizon-dark',
          textColor: 'text-gray-600 font-sans',
          font: 'font-display italic',
          icon: '🚩',
        }
    }
  }

  const config = getConfig()

  return (
    <div className={`max-w-5xl mx-auto py-20 px-6 ${config.bg}`}>
      <h2
        className={`text-6xl md:text-8xl font-bold uppercase mb-16 text-center ${config.font} ${config.titleColor}`}
      >
        {config.title}
      </h2>
      <div className="relative">
        {/* Vertical Line */}
        <div
          className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 ${config.lineColor}`}
        />

        <div className="space-y-12">
          {EXPERIENCE.map((exp, index) => {
            const isLeft = index % 2 === 0
            return (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-center ${
                  isLeft ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2" />

                {/* Node/Dot */}
                <div
                  className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-opacity-50 z-10 flex items-center justify-center
                      ${config.dotColor} ${
                    currentTheme === 'neon-city'
                      ? 'shadow-[0_0_15px_currentColor]'
                      : ''
                  }
                  `}
                >
                  {currentTheme === 'dead-cells' && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                    isLeft
                      ? 'md:pr-12 text-left md:text-right'
                      : 'md:pl-12 text-left'
                  }`}
                >
                  <div
                    className={`p-6 relative group transition-all duration-300 hover:-translate-y-1 ${
                      config.cardBg
                    } ${
                      currentTheme === 'neon-city'
                        ? 'hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]'
                        : 'hover:shadow-xl'
                    }`}
                  >
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 
                              ${
                                currentTheme === 'valorant'
                                  ? 'bg-[#FF4655] text-white'
                                  : currentTheme === 'dead-cells'
                                  ? 'bg-[#4d3e75] text-[#bd6eff]'
                                  : currentTheme === 'neon-city'
                                  ? 'bg-horizon-pink text-white'
                                  : 'bg-gray-200 text-gray-700'
                              }
                          `}
                    >
                      {exp.period}
                    </span>
                    <h3
                      className={`text-2xl font-bold mb-1 ${
                        currentTheme === 'dead-cells'
                          ? 'text-[#00d0ff]'
                          : 'text-white'
                      }`}
                    >
                      {exp.role}
                    </h3>
                    <div
                      className={`text-lg font-bold mb-4 ${
                        currentTheme === 'vice-city'
                          ? 'text-[#ec4899]'
                          : 'text-gray-400'
                      }`}
                    >
                      {exp.company}
                    </div>
                    <p className={`${config.textColor} leading-relaxed`}>
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// --- 2. System Log (Professional) ---
const SystemLogTimeline: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#050505] flex items-center justify-center py-20 px-4 font-mono">
      <div className="w-full max-w-3xl bg-[#111] border border-[#333] rounded-xl p-8 shadow-2xl">
        <div className="flex justify-between items-center border-b border-[#333] pb-4 mb-8 text-gray-500 text-sm">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500"></div>
          </div>
          <div className="flex gap-4">
            <span>&gt; system_career_log.json</span>
            <span>--verbose</span>
          </div>
        </div>

        <div className="space-y-8 relative">
          {/* Vertical Guide Line */}
          <div className="absolute left-[7px] top-4 bottom-4 w-[1px] bg-[#222] z-0"></div>

          {EXPERIENCE.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 group">
              {/* Status Dot */}
              <div
                className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 z-10 transition-transform group-hover:scale-125
                            ${
                              index === 0
                                ? 'bg-emerald-500 border-[#111] shadow-[0_0_10px_rgba(16,185,129,0.4)]'
                                : 'bg-[#3b82f6] border-[#111]'
                            }
                        `}
              ></div>

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
                <span className="text-gray-500 text-xs font-bold">
                  [{exp.period}]
                </span>
                <h3 className="text-gray-200 font-bold text-lg group-hover:text-white transition-colors">
                  {exp.role}
                </h3>
              </div>

              <a
                href="#"
                className="text-[#3b82f6] hover:underline text-sm mb-2 block"
              >
                @ {exp.company}
              </a>

              <div className="text-gray-500 text-sm leading-relaxed pl-4 border-l border-[#333] mt-2 group-hover:text-gray-400 transition-colors">
                <span className="text-gray-600 mr-2">&gt;&gt;</span>
                {exp.description}
              </div>
            </div>
          ))}

          <div className="pl-8 pt-4">
            <span className="animate-pulse text-[#3b82f6]">_</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// --- 3. Horizontal Scroll (Festival) ---
const HorizontalTimeline: React.FC = () => {
  return (
    <div className="w-full py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-6xl md:text-8xl font-bold uppercase text-horizon-dark font-display italic">
          FESTIVAL <span className="text-horizon-pink">TOUR</span>
        </h2>
      </div>

      <div className="w-full overflow-x-auto pb-12 pt-20 hide-scrollbar">
        <div className="flex px-12 md:px-64 gap-8 w-max">
          {EXPERIENCE.map((exp, index) => (
            <div
              key={exp.id}
              className="relative w-[350px] md:w-[450px] flex-shrink-0 group"
            >
              {/* Number Watermark (make slightly darker for better visibility) */}
              <div className="absolute -top-16 -left-4 text-9xl font-display font-bold text-gray-300 opacity-70 italic select-none z-0">
                0{index + 1}
              </div>

              <div className="relative z-10 mt-12 bg-gray-50 p-8 border-l-8 border-horizon-pink shadow-lg transform -skew-x-6 hover:-translate-y-2 transition-transform duration-300">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-horizon-dark text-white px-3 py-1 text-sm font-bold italic transform skew-x-6">
                    {exp.period}
                  </span>
                  <Briefcase className="text-horizon-pink" size={24} />
                </div>

                <h3 className="text-2xl font-bold text-horizon-dark italic mb-1 transform skew-x-6">
                  {exp.role}
                </h3>
                <div className="text-horizon-pink font-bold mb-4 transform skew-x-6">
                  {exp.company}
                </div>
                <p className="text-gray-600 text-sm transform skew-x-6">
                  {exp.description}
                </p>
              </div>

              {/* Connecting Line (Visual only) */}
              {index !== EXPERIENCE.length - 1 && (
                <div className="absolute top-1/2 -right-4 w-8 h-1 bg-gray-200 transform -skew-x-6"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// --- 4. Card Stacking (Club / FIFA) ---
const CardStackTimeline: React.FC = () => {
  return (
    <div className="w-full py-20 bg-[#0e1015] overflow-hidden relative">
      {/* Background Stadium Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1a202c_0%,#0e1015_70%)] z-0"></div>

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <h2 className="text-6xl font-bold uppercase text-center mb-20 font-display text-white drop-shadow-lg">
          PLAYER <span className="text-[#eebb54]">CAREER</span>
        </h2>

        <div className="flex flex-col items-center space-y-6 pb-20">
          {EXPERIENCE.map((exp, index) => (
            <div
              key={exp.id}
              className="w-full bg-gradient-to-br from-[#1f2937] to-[#111827] border border-[#374151] p-6 rounded-xl shadow-2xl transform transition-all duration-500 hover:translate-y-[-10px] hover:scale-105 group"
              style={{ zIndex: EXPERIENCE.length - index }}
            >
              <div className="flex items-center justify-between border-b border-gray-700 pb-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#eebb54] rounded-full flex items-center justify-center text-[#0e1015] font-bold text-xl">
                    {90 - index * 5}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                      {exp.role}
                    </h3>
                    <div className="text-[#32ff7e] text-sm font-mono">
                      {exp.company}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-gray-400 text-xs uppercase tracking-widest">
                    Season
                  </div>
                  <div className="text-white font-bold">{exp.period}</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-[#111827] p-2 rounded">
                  <div className="text-gray-500 text-xs">EXP</div>
                  <div className="text-[#eebb54] font-bold">
                    {(index + 1) * 1.5}Y
                  </div>
                </div>
                <div className="bg-[#111827] p-2 rounded">
                  <div className="text-gray-500 text-xs">TYPE</div>
                  <div className="text-white font-bold text-xs mt-1">
                    {exp.type || 'Full-time'}
                  </div>
                </div>
                <div className="bg-[#111827] p-2 rounded">
                  <div className="text-gray-500 text-xs">RATING</div>
                  <div className="text-[#32ff7e] font-bold">
                    {(9.0 - index * 0.5).toFixed(1)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Timeline: React.FC<TimelineProps> = ({ currentTheme = 'festival' }) => {
  switch (currentTheme) {
    case 'professional':
      return <SystemLogTimeline />
    case 'festival':
      return <HorizontalTimeline />
    case 'club':
      return <CardStackTimeline />
    default:
      return <VerticalGitFlowTimeline currentTheme={currentTheme} />
  }
}

export default Timeline
