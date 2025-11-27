import React, { useRef, useState } from 'react'
import ProjectCard from './ProjectCard'
import { PROJECTS } from '../constants'
import { ArrowUpRight, MousePointer2 } from 'lucide-react'

interface GarageProps {
  currentTheme?: string
}

const Garage: React.FC<GarageProps> = ({ currentTheme = 'festival' }) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  // --- DRAGGABLE STATE ---
  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  // --- CONFIG ---
  const getConfig = () => {
    switch (currentTheme) {
      case 'dead-cells':
        return {
          title: 'BIOME MAP',
          subtitle: 'CHOOSE YOUR PATH',
          titleStyle:
            'text-[#bd6eff] drop-shadow-[4px_4px_0_#000] font-pixel tracking-normal',
          border: 'border-[#4d3e75]',
          type: 'MARQUEE',
        }
      case 'valorant':
        return {
          title: 'MATCH HISTORY',
          subtitle: 'CAREER STATS',
          titleStyle: 'text-[#ECE8E1] font-display tracking-tight',
          border: 'border-[#FF4655]',
          type: 'ELASTIC',
        }
      case 'club':
        return {
          title: 'STARTING XI',
          subtitle: 'SQUAD BATTLES',
          titleStyle: 'text-white drop-shadow-md',
          border: 'border-[#32ff7e]',
          type: 'MARQUEE',
        }
      case 'vice-city':
        return {
          title: 'MISSIONS',
          subtitle: 'RESPECT IS EVERYTHING',
          titleStyle: 'text-white/90 drop-shadow-[4px_4px_0_#ec4899]',
          border: 'border-horizon-pink/50',
          type: 'DRAGGABLE',
        }
      case 'neon-city':
        return {
          title: 'CYBER DECK',
          subtitle: 'INSTALLING SOFTWARE...',
          titleStyle:
            'text-transparent bg-clip-text bg-gradient-to-b from-horizon-cyan to-blue-600 drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]',
          border: 'border-horizon-cyan',
          type: 'MARQUEE',
        }
      case 'professional':
        return {
          title: 'Featured Case Studies',
          subtitle: 'Selected Works',
          titleStyle:
            'text-white font-display tracking-tight not-italic capitalize text-5xl',
          border: 'border-[#2a2a2a]',
          type: 'ELASTIC',
        }
      default: // festival
        return {
          title: 'MY GARAGE',
          subtitle: 'SELECT YOUR RIDE',
          titleStyle: 'text-horizon-dark italic',
          border: 'border-horizon-yellow',
          type: 'DRAGGABLE',
        }
    }
  }

  const config = getConfig()

  // --- DRAGGABLE HANDLERS ---
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    setIsDown(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }
  const handleMouseLeave = () => setIsDown(false)
  const handleMouseUp = () => setIsDown(false)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll-fastness
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  // --- 1. ELASTIC ACCORDION RENDER (Professional & Valorant) ---
  if (config.type === 'ELASTIC') {
    const isValo = currentTheme === 'valorant'
    return (
      <div
        className={`w-full py-24 relative border-t bg-[#050505] flex justify-center 
          ${isValo ? 'bg-[#0F1923] border-[#FF4655]/20' : 'border-[#2a2a2a]'}`}
      >
        {/* Valorant Decor */}
        {isValo && (
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `linear-gradient(45deg, #FF4655 1px, transparent 1px), linear-gradient(-45deg, #FF4655 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          ></div>
        )}

        <div className="w-full max-w-[1200px] px-6 z-10">
          {/* Header */}
          <div className="mb-12">
            <span
              className={`${
                isValo
                  ? 'text-[#FF4655] font-valo tracking-widest'
                  : 'text-[#3b82f6] font-mono'
              } text-xs uppercase mb-2 block`}
            >
              {config.subtitle}
            </span>
            <h2
              className={`${
                isValo
                  ? 'text-[#ECE8E1] font-valo uppercase'
                  : 'text-white font-display font-semibold'
              } text-5xl md:text-6xl tracking-tight leading-none`}
            >
              {config.title}
            </h2>
          </div>

          {/* Accordion Container */}
          <div className="flex flex-col md:flex-row w-full h-[600px] md:h-[500px] gap-3">
            {PROJECTS.map((project, index) => (
              <div
                key={project.id}
                className={`relative flex-1 hover:flex-[3] transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer overflow-hidden group will-change-[flex]
                       ${
                         isValo
                           ? 'border border-white/20 hover:border-[#FF4655] bg-[#1a2733]'
                           : 'rounded-[16px] border border-[#333] hover:border-[#3b82f6] bg-[#111]'
                       }
                   `}
              >
                {/* Background Image (Optimized using img tag instead of bg-image for performance) */}
                <img
                  src={project.image}
                  alt={project.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100 will-change-transform transform-gpu
                        ${
                          isValo
                            ? 'opacity-60 group-hover:opacity-100'
                            : 'opacity-60 group-hover:opacity-80'
                        }
                      `}
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 transition-colors duration-500 ${
                    isValo
                      ? 'bg-[#0F1923]/60 group-hover:bg-transparent'
                      : 'bg-black/60 group-hover:bg-black/20'
                  }`}
                />

                {/* Vertical Title (Collapsed State) */}
                <div
                  className={`absolute bottom-12 left-1/2 -translate-x-1/2 rotate-[-90deg] origin-center whitespace-nowrap opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none uppercase
                       ${
                         isValo
                           ? 'text-[#ECE8E1] font-valo tracking-widest text-lg'
                           : 'text-[#666] font-mono text-xs tracking-widest'
                       }
                   `}
                >
                  {isValo
                    ? `// ${project.title}`
                    : `0${index + 1} / ${project.category}`}
                </div>

                {/* Content (Expanded State) */}
                <div
                  className={`absolute inset-x-0 bottom-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-[transform,opacity] duration-500 delay-100 flex flex-col justify-end h-3/4
                       ${
                         isValo
                           ? 'bg-gradient-to-t from-[#0F1923] via-[#0F1923]/90 to-transparent'
                           : 'bg-gradient-to-t from-black via-black/90 to-transparent'
                       }
                   `}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span
                      className={`px-2 py-1 uppercase text-[10px]
                              ${
                                isValo
                                  ? 'bg-[#FF4655] text-white font-bold font-valo tracking-wider'
                                  : 'rounded border border-[#3b82f6] text-[#3b82f6] bg-[#3b82f6]/10 font-mono'
                              }
                          `}
                    >
                      {project.category}
                    </span>
                    {!isValo && (
                      <ArrowUpRight
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity delay-300"
                        size={20}
                      />
                    )}
                  </div>

                  <h3
                    className={`text-3xl font-bold text-white mb-3 leading-tight ${
                      isValo
                        ? 'font-valo uppercase tracking-wide'
                        : 'font-display'
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`text-sm mb-4 leading-relaxed line-clamp-2 ${
                      isValo
                        ? 'text-[#ECE8E1]/80 font-sans'
                        : 'text-[#a1a1aa] font-sans'
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`text-[11px] uppercase tracking-tight
                                ${
                                  isValo
                                    ? 'text-[#FF4655] font-bold font-valo border border-[#FF4655]/30 px-2 py-1'
                                    : 'text-[#888] font-mono border-b border-[#333] pb-0.5'
                                }
                            `}
                      >
                        {isValo ? t : `#${t}`}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // --- 2. INFINITE MARQUEE RENDER (Neon, Club, Dead Cells) ---
  if (config.type === 'MARQUEE') {
    // Duplicate projects to ensure seamless loop
    const marqueeProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS]

    return (
      <div
        className={`w-full py-20 relative border-t-2 overflow-hidden bg-black/20 backdrop-blur-sm ${config.border}`}
      >
        {/* Marquee Header */}
        <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between relative z-10">
          <div>
            <h2
              className={`text-6xl md:text-8xl font-bold uppercase ${config.titleStyle}`}
            >
              {config.title}
            </h2>
            <p
              className={`text-xl font-bold italic ml-2 mt-2 ${
                currentTheme === 'neon-city'
                  ? 'text-horizon-cyan'
                  : 'text-white'
              }`}
            >
              {config.subtitle}
            </p>
          </div>
        </div>

        {/* Marquee Container with CSS Mask for clean fade */}
        <div className="relative w-full overflow-hidden">
          {/* Moving Track */}
          <div
            className="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused] py-8 pl-6"
            style={{
              maskImage:
                'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            }}
          >
            {marqueeProjects.map((project, idx) => (
              <div
                key={`${project.id}-${idx}`}
                className="transform transition-transform hover:scale-105 duration-300"
              >
                <ProjectCard project={project} theme={currentTheme} />
              </div>
            ))}
          </div>
        </div>

        <style>{`
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-100% / 3)); }
            }
            .animate-marquee {
                animation: marquee 30s linear infinite;
            }
         `}</style>
      </div>
    )
  }

  // --- 3. DRAGGABLE SCROLL RENDER (Festival, Vice City) ---
  // Default fallback
  return (
    <div
      className={`w-full py-24 relative border-t-8 bg-transparent ${config.border}`}
    >
      {/* Header Area */}
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
        <div>
          <h2
            className={`text-7xl md:text-9xl font-display font-bold uppercase tracking-tighter leading-[0.8] ${config.titleStyle}`}
          >
            {config.title}
          </h2>
          <p className="text-xl font-bold italic ml-2 mt-2 text-horizon-pink">
            {config.subtitle}
          </p>
        </div>

        {/* Navigation Hint */}
        <div className="hidden md:flex gap-4 items-center opacity-50">
          <MousePointer2 className="animate-bounce" color="white" />
          <span className="text-white font-display italic text-xl">
            DRAG TO EXPLORE
          </span>
        </div>
      </div>

      {/* Horizontal Scroll Area */}
      <div
        ref={scrollRef}
        className={`flex overflow-x-auto pb-12 px-6 md:px-[15vw] gap-8 hide-scrollbar cursor-grab active:cursor-grabbing select-none`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="py-10 transform transition-transform duration-500 hover:scale-105"
          >
            <ProjectCard project={project} theme={currentTheme} />
          </div>
        ))}

        {/* Spacer for end of list */}
        <div className="w-24 flex-shrink-0"></div>
      </div>

      {/* Instructions Overlay if needed */}
      <div className="absolute bottom-6 left-6 flex items-center gap-2 opacity-30 text-white pointer-events-none">
        <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center font-bold">
          L
        </div>
        <span className="font-display text-xl">SCROLL</span>
      </div>
    </div>
  )
}

export default Garage
