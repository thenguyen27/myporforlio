import React from 'react'
import {
  ArrowRight,
  Terminal,
  Crosshair,
  PlayCircle,
  Skull,
  Lock,
} from 'lucide-react'
import { HERO_BACKGROUNDS } from '../constants'

interface HeroProps {
  onStart: () => void
  currentTheme?: string
}

const Hero: React.FC<HeroProps> = ({ onStart, currentTheme = 'festival' }) => {
  // Content Configuration based on Theme
  const getContent = () => {
    switch (currentTheme) {
      case 'dead-cells':
        return {
          banner: "PRISONERS' QUARTERS",
          title: (
            <>
              <span className="block text-[#ff2a2a] drop-shadow-[4px_4px_0_#111]">
                THE. ULTIMATE.
              </span>
              <span className="block text-[#00d0ff] drop-shadow-[4px_4px_0_#111]">
                CODE. COLLECTOR.
              </span>
            </>
          ),
          button: 'START RUN',
          bg: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80', // Dungeon-like
          credits: { left: 'EXP: 1.5 YEARS', right: 'STATUS: ALIVE' },
        }
      case 'valorant':
        return {
          banner: 'AGENT SELECT',
          title: (
            <>
              <span className="block text-[#ECE8E1] tracking-widest font-display uppercase">
                NGUYEN
              </span>
              <span className="block text-[#FF4655] tracking-widest font-display uppercase">
                TRAN
              </span>
            </>
          ),
          button: 'LOCK IN',
          bg: 'https://images.unsplash.com/photo-1531297461136-82lw9f5727e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80', // High-tech
          credits: { left: 'ROLE: SENTINEL', right: 'MAP: HAVEN' },
        }
      case 'club':
        return {
          banner: 'THE WALKOUT',
          title: (
            <>
              <span className="block text-white drop-shadow-md">NGUYEN</span>
              <span className="block text-[#eebb54] drop-shadow-[0_0_20px_rgba(238,187,84,0.6)]">
                TRAN
              </span>
            </>
          ),
          button: 'KICK OFF',
          bg: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80', // Stadium
          credits: { left: 'CLUB: HOPEE SOL', right: 'POS: BACKEND DEV' },
        }
      case 'vice-city':
        return {
          banner: 'WASTED? NO, HIRED.',
          title: (
            <>
              <span className="block text-[#ec4899] drop-shadow-[4px_4px_0px_#000]">
                VICE
              </span>
              <span className="block text-[#fbbf24] drop-shadow-[4px_4px_0px_#000]">
                DEV
              </span>
            </>
          ),
          button: 'START MISSION',
          bg: 'https://images.unsplash.com/photo-1605218427306-6354db69e563?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
          credits: { left: '$ 1,500,000', right: 'LOC: SAI GON' },
        }
      case 'neon-city':
        return {
          banner: 'SYSTEM BREACH DETECTED',
          title: (
            <>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-horizon-cyan to-white drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]">
                NEON
              </span>
              <span className="block text-horizon-pink drop-shadow-[0_0_15px_rgba(255,0,127,0.8)]">
                PROTOCOL
              </span>
            </>
          ),
          button: 'INITIALIZE',
          bg: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
          credits: { left: 'STACK: LARAVEL', right: 'NET: ONLINE' },
        }
      case 'professional':
        return {
          banner: 'Available for work',
          title: (
            <>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 tracking-tighter font-sans font-bold pb-2">
                Nguyen Tran
              </span>
            </>
          ),
          button: 'INITIALIZE SYSTEM',
          bg: '', // No bg image for clean look
          credits: { left: 'Backend Developer', right: 'Based in HCMC' },
        }
      case 'festival':
      default:
        return {
          banner: 'FULLSTACK EXPANSION PACK NOW AVAILABLE',
          title: (
            <>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 italic">
                NGUYEN
              </span>
              <span className="block text-horizon-pink italic">THE</span>
              <span className="block text-horizon-cyan italic">DEV</span>
            </>
          ),
          button: 'ENTER WORLD',
          bg: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
          credits: { left: 'EXP 1.5 YEARS', right: 'LVL 24' },
        }
    }
  }

  const content = getContent()

  return (
    <div
      className={`relative w-full h-screen overflow-hidden flex items-center justify-center bg-horizon-dark`}
    >
      {/* Background Image with Blur */}
      {(() => {
        const bgUrl = HERO_BACKGROUNDS[currentTheme] ?? content.bg
        return (
          bgUrl && (
            <div
              className="absolute inset-0 z-0 bg-cover bg-center opacity-60 transition-all duration-700"
              style={{
                backgroundImage: `url("${bgUrl}")`,
                filter:
                  currentTheme === 'valorant'
                    ? 'brightness(0.6)'
                    : currentTheme === 'dead-cells'
                    ? 'brightness(0.3) contrast(1.2)'
                    : 'blur(4px)',
              }}
            />
          )
        )
      })()}

      {/* Scan lines / Grid overlay */}
      {currentTheme === 'neon-city' && (
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(0,255,0,.3)_25%,rgba(0,255,0,.3)_26%,transparent_27%,transparent_74%,rgba(0,255,0,.3)_75%,rgba(0,255,0,.3)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(0,255,0,.3)_25%,rgba(0,255,0,.3)_26%,transparent_27%,transparent_74%,rgba(0,255,0,.3)_75%,rgba(0,255,0,.3)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      )}

      {/* Valorant Tech Overlay */}
      {currentTheme === 'valorant' && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-12 left-12 w-24 h-24 border-t-2 border-l-2 border-white/20"></div>
          <div className="absolute bottom-12 right-12 w-24 h-24 border-b-2 border-r-2 border-white/20"></div>
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5"></div>
        </div>
      )}

      {/* Scan lines standard */}
      {currentTheme !== 'professional' && (
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none" />
      )}

      {/* Professional Theme Background */}
      {currentTheme === 'professional' && (
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-[#0f1923] to-[#0f1923]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center">
        {/* Avatar - Added for all themes */}
        <div className="mb-8 relative group"></div>

        {/* Animated Banner Top */}
        <div
          className={`text-black font-bold px-4 py-1 mb-6 transform rounded-card uppercase
             ${
               currentTheme === 'club'
                 ? 'bg-[#eebb54] text-[#141b33] border-2 border-[#141b33] skew-x-0 animate-pulse'
                 : currentTheme === 'vice-city'
                 ? 'bg-gradient-to-r from-horizon-pink to-horizon-yellow text-white -skew-x-10 animate-pulse'
                 : currentTheme === 'neon-city'
                 ? 'bg-black border border-horizon-cyan text-horizon-cyan shadow-[0_0_10px_#00F0FF] -skew-x-10 animate-pulse'
                 : currentTheme === 'valorant'
                 ? 'bg-[#FF4655] text-white tracking-widest skew-x-0 font-valo font-bold animate-pulse'
                 : currentTheme === 'dead-cells'
                 ? 'bg-black text-[#00ff41] border border-[#00ff41] font-pixel text-xs animate-pulse'
                 : currentTheme === 'professional'
                 ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full px-4 py-1.5 font-mono text-xs tracking-wide'
                 : 'bg-horizon-yellow -skew-x-10 animate-pulse'
             }`}
        >
          {currentTheme === 'professional' && (
            <span className="inline-block w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
          )}
          {content.banner}
        </div>

        {/* Main Headline */}
        <h1
          className={`text-5xl md:text-[9rem] leading-[0.85] font-display font-bold text-white uppercase drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] mix-blend-screen
            ${
              currentTheme === 'club'
                ? 'tracking-normal'
                : currentTheme === 'dead-cells'
                ? 'font-pixel text-3xl md:text-[3.5rem] tracking-widest leading-relaxed'
                : currentTheme === 'valorant'
                ? 'font-display tracking-widest'
                : currentTheme === 'vice-city'
                ? 'tracking-normal'
                : currentTheme === 'professional'
                ? 'text-6xl md:text-8xl font-display normal-case tracking-tighter drop-shadow-none mix-blend-normal'
                : 'italic leading-[0.75]'
            }`}
        >
          {content.title}
        </h1>

        {currentTheme === 'professional' && (
          <p className="mt-6 text-gray-400 max-w-lg text-lg font-light">
            Building scalable systems focused on Clean Code & Performance.
          </p>
        )}

        {/* CTA Button */}
        <button
          onClick={onStart}
          className={`group mt-12 relative px-12 py-6 bg-transparent border-4 font-display text-4xl uppercase font-bold tracking-widest overflow-hidden transition-all rounded-card
              ${
                currentTheme === 'club'
                  ? 'border-[#32ff7e] text-[#32ff7e] hover:bg-[#32ff7e] hover:text-[#141b33] skew-x-0'
                  : currentTheme === 'vice-city'
                  ? 'border-horizon-yellow text-horizon-yellow hover:bg-horizon-yellow hover:text-black -skew-x-10'
                  : currentTheme === 'neon-city'
                  ? 'border-horizon-pink text-horizon-pink hover:bg-horizon-pink hover:text-white shadow-[0_0_20px_#FF007F] -skew-x-10'
                  : currentTheme === 'valorant'
                  ? 'border-[#FF4655] text-white hover:bg-[#FF4655] hover:text-black transform-none font-valo'
                  : currentTheme === 'dead-cells'
                  ? 'border-[#ff2a2a] text-[#ff2a2a] hover:bg-[#ff2a2a] hover:text-white font-pixel text-xl hover:shadow-[0_0_20px_#ff2a2a]'
                  : currentTheme === 'professional'
                  ? 'bg-white text-black hover:bg-gray-200 border-none text-lg normal-case tracking-normal px-8 py-3 rounded-full font-medium transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] font-[JetBrains Mono]'
                  : 'border-white text-white italic hover:border-horizon-pink hover:text-horizon-pink -skew-x-10'
              }`}
        >
          <span className="relative z-10 flex items-center gap-4">
            {content.button}
          </span>
        </button>
      </div>

      {/* Decorative Bottom Bar */}
      <div
        className={`absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent flex items-end pb-8 px-12 justify-between text-white font-mono text-xs opacity-60
         ${
           currentTheme === 'valorant'
             ? 'border-t border-white/20 font-valo uppercase tracking-widest'
             : ''
         }
         ${
           currentTheme === 'professional'
             ? 'bg-transparent opacity-40 font-mono'
             : ''
         }
         `}
      >
        <div>{content.credits.left}</div>
        <div>{content.credits.right}</div>
      </div>
    </div>
  )
}

export default Hero
