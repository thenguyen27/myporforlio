import React, { useState, useEffect } from 'react'
import { ThemeConfig } from '../types'
import { SOCIALS } from '../constants'

interface ThemeLoaderProps {
  themes: ThemeConfig[]
  onSelect: (themeId: string) => void
  onComplete: () => void
}

const ThemeLoader: React.FC<ThemeLoaderProps> = ({
  themes,
  onSelect,
  onComplete,
}) => {
  const [selectedThemeId, setSelectedThemeId] = useState(themes[0].id)
  const [hoveredThemeId, setHoveredThemeId] = useState<string | null>(null)
  const [isExiting, setIsExiting] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('INITIALIZING...')

  // Display the hovered theme if available, otherwise the selected one
  const activeThemeId = hoveredThemeId || selectedThemeId
  const activeTheme = themes.find((t) => t.id === activeThemeId) || themes[0]

  // Use the pink color as the primary theme color for the UI, or fallback
  const themeColor = activeTheme.colors.pink || '#ff4655'

  const handleLockIn = () => {
    setIsLoading(true)
    let currentProgress = 0

    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 5) + 1
      if (currentProgress > 100) currentProgress = 100

      setProgress(currentProgress)

      if (currentProgress < 30) setLoadingText('ESTABLISHING CONNECTION...')
      else if (currentProgress < 60) setLoadingText('DOWNLOADING ASSETS...')
      else if (currentProgress < 80) setLoadingText('VERIFYING INTEGRITY...')
      else setLoadingText('SYSTEM READY')

      if (currentProgress === 100) {
        clearInterval(interval)

        // Apply theme (use the selected one, not necessarily the one being hovered)
        onSelect(selectedThemeId)

        setTimeout(() => {
          setIsExiting(true)
          setTimeout(() => {
            onComplete()
          }, 500)
        }, 200)
      }
    }, 30)
  }

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLoading || isExiting) return

      const currentIndex = themes.findIndex((t) => t.id === selectedThemeId)

      if (e.key === 'w' || e.key === 'W' || e.key === 'ArrowUp') {
        const prevIndex = (currentIndex - 1 + themes.length) % themes.length
        setSelectedThemeId(themes[prevIndex].id)
      } else if (e.key === 's' || e.key === 'S' || e.key === 'ArrowDown') {
        const nextIndex = (currentIndex + 1) % themes.length
        setSelectedThemeId(themes[nextIndex].id)
      } else if (e.key === 'Enter') {
        handleLockIn()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedThemeId, themes, isLoading, isExiting]) // Re-bind when state changes to ensure fresh closures

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#0f1923] text-white font-['Rajdhani'] overflow-hidden flex transition-opacity duration-500 ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={
        {
          '--theme-color': themeColor,
        } as React.CSSProperties
      }
    >
      {/* --- BACKGROUND EFFECTS --- */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
                linear-gradient(90deg, var(--theme-color) 1px, transparent 1px),
                linear-gradient(0deg, var(--theme-color) 1px, transparent 1px)
             `,
          backgroundSize: '100px 100px',
          animation: 'bg-move 20s linear infinite',
        }}
      />

      {/* Slash Background */}
      <div className="absolute -top-1/2 -right-[20%] w-[80vh] h-[200vh] bg-[var(--theme-color)] opacity-10 rotate-[20deg] z-0 transition-colors duration-500 pointer-events-none" />

      {/* Decor Line */}
      <div className="absolute left-[35%] top-0 w-[1px] h-full bg-white opacity-10 z-0 pointer-events-none" />

      {/* Abstract Geometry - Top Right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none z-0 opacity-20">
        <svg viewBox="0 0 600 600" className="w-full h-full">
          <defs>
            <pattern
              id="grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-[var(--theme-color)]"
              />
            </pattern>
          </defs>
          {/* Large Triangle */}
          <path d="M600 0 L300 0 L600 300 Z" fill="url(#grid)" opacity="0.5" />
          {/* Solid Shapes */}
          <path
            d="M500 0 L600 100 L600 0 Z"
            className="fill-[var(--theme-color)]"
            opacity="0.3"
          />
          <path
            d="M450 0 L550 0 L500 50 Z"
            className="fill-white"
            opacity="0.1"
          />
          {/* Lines */}
          <line
            x1="300"
            y1="0"
            x2="600"
            y2="300"
            className="stroke-[var(--theme-color)]"
            strokeWidth="2"
          />
          <line
            x1="400"
            y1="0"
            x2="600"
            y2="200"
            className="stroke-white"
            strokeWidth="1"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Abstract Geometry - Bottom Left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none z-0 opacity-20">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <line
            x1="0"
            y1="400"
            x2="200"
            y2="200"
            className="stroke-[var(--theme-color)]"
            strokeWidth="2"
          />
          <line
            x1="20"
            y1="400"
            x2="220"
            y2="200"
            className="stroke-[var(--theme-color)]"
            strokeWidth="1"
            opacity="0.7"
          />
          <line
            x1="40"
            y1="400"
            x2="240"
            y2="200"
            className="stroke-[var(--theme-color)]"
            strokeWidth="1"
            opacity="0.5"
          />
          <rect
            x="0"
            y="350"
            width="100"
            height="50"
            className="fill-[var(--theme-color)]"
            opacity="0.1"
          />
        </svg>
      </div>

      {/* --- CONTAINER --- */}
      <div className="relative z-10 flex w-full h-full">
        {/* --- LEFT SIDEBAR --- */}
        <div className="w-[35%] p-12 flex flex-col bg-gradient-to-r from-black/90 to-transparent h-full">
          <div
            className="font-['Oswald'] text-6xl uppercase leading-[0.9] mb-10 transition-all duration-300 shrink-0 whitespace-nowrap"
            style={{ textShadow: '2px 2px 0 var(--theme-color)' }}
          >
            SELECT THEME
          </div>

          <div
            className="flex flex-col gap-3 overflow-y-auto pr-2 -mr-2 pb-4 no-scrollbar"
            style={{ perspective: '500px' }}
          >
            {themes.map((theme, index) => {
              const isSelected = selectedThemeId === theme.id

              return (
                <div
                  key={theme.id}
                  onClick={() => setSelectedThemeId(theme.id)}
                  className={`
                                group relative h-14 flex items-center px-6 cursor-pointer uppercase transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] -skew-x-[15deg]
                                ${
                                  isSelected
                                    ? 'bg-[var(--theme-color)] text-black translate-x-6 scale-105 shadow-[0_0_20px_var(--theme-color)] border-none z-10 opacity-100 rotate-x-0'
                                    : 'bg-white/5 text-gray-400 border-l-2 border-white/10 hover:bg-white/10 hover:text-white hover:border-l-4 hover:border-white hover:translate-x-4 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] opacity-60 hover:opacity-100 rotate-x-[20deg] hover:rotate-x-0 scale-90 hover:scale-100'
                                }
                            `}
                >
                  {/* Content Wrapper */}
                  <div className="flex items-baseline gap-4 w-full">
                    <span
                      className={`font-mono text-sm tracking-wider transition-colors duration-300 ${
                        isSelected
                          ? 'text-black font-bold'
                          : 'text-white/30 group-hover:text-white/60'
                      }`}
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-['Oswald'] text-xl tracking-widest truncate flex-1">
                      {theme.label}
                    </span>

                    {/* Recommended Badge */}
                    {theme.id === 'professional' && (
                      <span
                        className={`
                            text-[10px] font-bold px-2 py-0.5 rounded-sm flex items-center gap-1 shrink-0 animate-pulse
                            ${
                              isSelected
                                ? 'bg-black text-white'
                                : 'bg-[#f2a900] text-black'
                            }
                        `}
                      >
                        ★ RECOMMENDED
                      </span>
                    )}
                  </div>

                  {/* Decorative Elements for Selected State */}
                  {isSelected && (
                    <>
                      <div className="absolute right-0 top-0 w-2 h-2 bg-black/20" />
                      <div className="absolute bottom-0 left-0 w-2 h-2 bg-black/20" />
                      {/* Active Indicator Line */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white/50 rounded-full" />
                    </>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-6 shrink-0 w-full flex justify-end">
            <button
              onClick={handleLockIn}
              disabled={isLoading}
              className="w-fit px-10 py-5 bg-[var(--theme-color)] border-2 border-[var(--theme-color)] text-black font-['Oswald'] text-2xl uppercase cursor-pointer transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_30px_var(--theme-color)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'INITIALIZING...' : 'CONFIRM SELECTION'}
            </button>
          </div>

          {/* --- FOOTER INFO (Keyboard, System, Social) --- */}
          <div className="mt-auto pt-8 space-y-6">
            {/* Option 1: Keyboard Hints */}
            <div className="flex gap-6 opacity-50 font-mono text-xs text-white">
              <div className="flex items-center gap-2">
                <span className="border border-white/50 px-1.5 py-0.5 rounded font-bold">
                  W
                </span>
                <span className="border border-white/50 px-1.5 py-0.5 rounded font-bold">
                  S
                </span>
                <span>NAVIGATE</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="border border-white/50 px-1.5 py-0.5 rounded font-bold">
                  ENTER
                </span>
                <span>LOCK IN</span>
              </div>
            </div>

            {/* Combined System Status & Social */}
            <div className="flex justify-between items-end border-t border-white/10 pt-4">
              {/* Option 2: System Status */}
              <div className="font-mono text-xs text-gray-400 leading-relaxed">
                <div className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 shadow-[0_0_5px_#00ff00] animate-pulse"></span>
                  SYSTEM ONLINE
                </div>
                <div className="opacity-60 text-[11px]">
                  PING: 4ms | REGION: VN | BUILD: v2.5.0
                </div>
              </div>

              {/* Option 3: Social Tech */}
              <div className="flex gap-4 font-mono text-xs text-gray-400">
                {SOCIALS.map((s) => {
                  const isExternal = String(s.href).startsWith('http')

                  return (
                    <a
                      key={s.id}
                      href={s.href}
                      className="hover:text-[var(--theme-color)] transition-colors"
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noreferrer' : undefined}
                    >
                      {String(s.label).toUpperCase()}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT PREVIEW AREA --- */}
        <div className="flex-1 flex flex-col p-12 relative">
          {/* Personal ID Badge */}
          <div className="absolute top-12 left-12 text-left z-20 flex items-center gap-4">
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full border-2 border-white/20 overflow-hidden relative group shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <img
                src="../Assets/images/avta.jpg"
                alt="Avatar"
                className={`w-full h-full object-cover transition-all duration-500 ${
                  activeTheme.id === 'valorant'
                    ? ''
                    : 'grayscale group-hover:grayscale-0'
                }`}
              />
              <div className="absolute inset-0 bg-[var(--theme-color)] opacity-20 mix-blend-overlay"></div>
            </div>

            <div>
              <h2 className="m-0 font-['Oswald'] text-2xl text-white tracking-wider">
                NGUYEN TRAN
              </h2>
              <span className="font-['Rajdhani'] text-gray-400 text-sm tracking-widest">
                BACKEND DEVELOPER (1.5 YOE)
              </span>
            </div>
          </div>

          {/* Portfolio Title - Top Right */}
          <div className="absolute top-12 right-12 text-right z-20">
            <h2 className="m-0 font-['Oswald'] text-4xl text-white tracking-widest font-bold opacity-80">
              PORTFOLIO
            </h2>
            <div className="text-[var(--theme-color)] text-sm font-mono tracking-[0.5em] mt-1">
              v2.0 // 2025
            </div>
          </div>

          {/* Hero Text Background */}
          <div
            key={`${activeTheme.id}-bg-text`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold font-['Oswald'] whitespace-nowrap pointer-events-none select-none animate-in fade-in zoom-in-90 duration-500"
            style={{
              textShadow:
                '0 0 60px var(--theme-color), 0 6px 20px rgba(0,0,0,0.5)',
              color:
                activeTheme.id === 'vice-city'
                  ? 'rgba(255,255,255,0.28)'
                  : 'rgba(255,255,255,0.12)',
              WebkitTextFillColor:
                activeTheme.id === 'vice-city'
                  ? 'rgba(255,255,255,0.28)'
                  : undefined,
              WebkitTextStroke:
                activeTheme.id === 'vice-city'
                  ? '0.5px rgba(0,0,0,0.12)'
                  : undefined,
              fontSize: activeTheme.id === 'vice-city' ? '180px' : '150px',
              lineHeight: activeTheme.id === 'vice-city' ? 0.95 : 1,
              opacity: 1,
            }}
          >
            {activeTheme.label.split(' ')[0]}
          </div>

          {/* Preview Image Frame */}
          <div
            key={`${activeTheme.id}-preview`}
            className="w-full flex-1 min-h-[300px] bg-black/40 border-2 border-white/10 mb-8 mt-[94px] relative overflow-hidden group animate-in fade-in slide-in-from-right-10 duration-500"
          >
            {activeTheme.previewImage ? (
              <>
                <img
                  src={activeTheme.previewImage}
                  alt={activeTheme.label}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 bg-black/80 text-white text-[10px] px-3 py-1 border-t border-r border-white/20 font-mono uppercase">
                  PREVIEW: {activeTheme.label} LAYOUT
                </div>
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/20 font-['Oswald'] text-2xl">
                NO PREVIEW AVAILABLE
              </div>
            )}

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--theme-color)]" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[var(--theme-color)]" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[var(--theme-color)]" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--theme-color)]" />
          </div>

          {/* Stats Panel */}
          <div
            key={`${activeTheme.id}-stats`}
            className="flex gap-5 items-end animate-in fade-in slide-in-from-right-10 duration-500 delay-100 fill-mode-both"
          >
            <div className="bg-black/60 border-t-2 border-[var(--theme-color)] p-5 w-[200px] backdrop-blur-md">
              <div className="text-xs text-gray-400 uppercase">
                Visual Style
              </div>
              <div className="text-2xl font-bold mt-1 truncate">
                {activeTheme.fontDisplay.split(',')[0].replace(/'/g, '')}
              </div>
            </div>
            <div className="bg-black/60 border-t-2 border-[var(--theme-color)] p-5 w-[200px] backdrop-blur-md">
              <div className="text-xs text-gray-400 uppercase">System ID</div>
              <div className="text-2xl font-bold mt-1 text-[var(--theme-color)] truncate">
                {activeTheme.id.toUpperCase()}
              </div>
            </div>
            <div className="bg-black/60 border-t-2 border-[var(--theme-color)] p-5 flex-1 backdrop-blur-md">
              <div className="text-xs text-gray-400 uppercase">Description</div>
              <div className="text-lg mt-1 leading-tight text-gray-200">
                {activeTheme.description}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- LOADING OVERLAY --- */}
      {isLoading && (
        <div className="absolute inset-0 z-50 bg-[#0f1923] flex flex-col items-center justify-center">
          {/* Grid Background */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />

          {/* Central Content */}
          <div className="relative z-10 w-[600px] flex flex-col items-center">
            {/* Rotating Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[var(--theme-color)] rounded-full opacity-10 animate-[spin_10s_linear_infinite] border-t-transparent border-l-transparent pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full animate-[spin_5s_linear_infinite_reverse] pointer-events-none" />

            {/* Status Text */}
            <div
              className="text-5xl font-['Oswald'] font-bold text-white mb-12 tracking-[0.2em] animate-pulse text-center"
              style={{ textShadow: '0 0 20px var(--theme-color)' }}
            >
              {loadingText}
            </div>

            {/* Segmented Progress Bar */}
            <div className="w-full h-6 bg-black/50 border border-white/10 skew-x-[-20deg] p-1 flex gap-1 mb-4">
              {Array.from({ length: 40 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 transition-all duration-75 ${
                    progress / 2.5 > i
                      ? 'bg-[var(--theme-color)] shadow-[0_0_10px_var(--theme-color)]'
                      : 'bg-white/5'
                  }`}
                />
              ))}
            </div>

            {/* Stats Row */}
            <div className="w-full flex justify-between font-mono text-xs text-[var(--theme-color)] opacity-80 tracking-widest">
              <div>
                SYSTEM_INTEGRITY: <span className="text-white">100%</span>
              </div>
              <div>
                DATA_STREAM:{' '}
                <span className="text-white">
                  {Math.floor(progress * 42.4)} MB/s
                </span>
              </div>
              <div>
                TARGET:{' '}
                <span className="text-white">
                  {activeTheme.id.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes bg-move {
            from { transform: scale(1.1); }
            to { transform: scale(1.0); }
        }
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

export default ThemeLoader
