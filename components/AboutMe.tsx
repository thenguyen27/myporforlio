import React from 'react'
import { User, MapPin, Briefcase, Code } from 'lucide-react'

interface AboutMeProps {
  currentTheme?: string
}

const AboutMe: React.FC<AboutMeProps> = ({ currentTheme = 'festival' }) => {
  const getConfig = () => {
    switch (currentTheme) {
      case 'dead-cells':
        return {
          title: 'LORE ROOM',
          subtitle: 'THE BEHEADED DEV',
          cardStyle:
            'bg-[#110b29] border-4 border-[#bd6eff] font-pixel shadow-[0_0_20px_#bd6eff]',
          textStyle: 'text-[#e0e0e0] font-pixel text-xs leading-loose',
          labelStyle: 'text-[#ffd700]',
          iconColor: '#00ff41',
        }
      case 'valorant':
        return {
          title: 'AGENT DOSSIER',
          subtitle: 'SENTINEL / BACKEND',
          cardStyle:
            'bg-[#0F1923]/90 border border-[#FF4655] font-valo uppercase tracking-wide',
          textStyle: 'text-[#ECE8E1] font-valo text-sm leading-relaxed',
          labelStyle: 'text-[#FF4655] font-bold',
          iconColor: '#FF4655',
        }
      case 'club':
        return {
          title: 'PLAYER BIO',
          subtitle: 'CLUB LEGEND',
          cardStyle:
            'bg-gradient-to-br from-[#141b33] to-[#0e1015] border-2 border-[#d4af37] rounded-[20px] shadow-2xl',
          textStyle: 'text-gray-300 font-sans',
          labelStyle: 'text-[#32ff7e] font-display uppercase tracking-widest',
          iconColor: '#eebb54',
        }
      case 'vice-city':
        return {
          title: 'CRIMINAL RECORD',
          subtitle: 'VCPD FILES',
          cardStyle:
            'bg-[#2e1065]/90 backdrop-blur-md border border-[#ec4899] -skew-x-2 shadow-[10px_10px_0_#ec4899]',
          textStyle: 'text-white font-sans',
          labelStyle: 'text-[#fbbf24] font-display uppercase',
          iconColor: '#ec4899',
        }
      case 'professional':
        return {
          title: 'Nguyen Tran',
          subtitle: 'BACKEND DEVELOPER',
          cardStyle:
            'bg-[#111] border border-[#2a2a2a] rounded-[16px] hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-[#555] transition-all',
          textStyle: 'text-[#a1a1aa] font-sans leading-relaxed',
          labelStyle: 'text-[#3b82f6] font-mono text-xs mb-2 block',
          iconColor: '#3b82f6',
        }
      default:
        return {
          title: 'DRIVER PROFILE',
          subtitle: 'LICENSE CLASS A',
          cardStyle:
            'bg-white skew-x-[-10deg] shadow-[20px_20px_0px_rgba(0,0,0,0.1)] border-l-8 border-horizon-pink',
          textStyle: 'text-gray-700 font-sans',
          labelStyle:
            'text-horizon-dark font-display font-bold uppercase italic text-2xl',
          iconColor: 'var(--color-horizon-cyan)',
        }
    }
  }

  const config = getConfig()

  return (
    <section className="py-24 px-6 overflow-hidden relative" id="about">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Image/Avatar Area */}
        <div className="relative group">
          {/* Theme-specific frames */}
          <div
            className={`absolute inset-0 transform translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6
                ${
                  currentTheme === 'dead-cells'
                    ? 'border-4 border-[#ff2a2a] bg-transparent'
                    : currentTheme === 'club'
                    ? 'bg-[#d4af37] rounded-[20px]'
                    : currentTheme === 'valorant'
                    ? 'border border-[#FF4655] bg-transparent'
                    : currentTheme === 'vice-city'
                    ? 'bg-[#00f0ff] -skew-x-2'
                    : currentTheme === 'professional'
                    ? 'bg-transparent'
                    : 'bg-horizon-yellow skew-x-[-10deg]'
                }`}
          />

          <div
            className={`relative h-[500px] w-full overflow-hidden bg-gray-900 
                ${
                  currentTheme === 'club'
                    ? 'rounded-[20px] border-2 border-[#d4af37]'
                    : currentTheme === 'dead-cells'
                    ? 'border-4 border-[#4d3e75]'
                    : currentTheme === 'valorant'
                    ? 'border border-white/20'
                    : currentTheme === 'vice-city'
                    ? '-skew-x-2 border border-white/20'
                    : currentTheme === 'professional'
                    ? 'rounded-[16px] border border-[#2a2a2a] hover:border-[#3b82f6] transition-colors group-hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]'
                    : 'skew-x-[-10deg]'
                }`}
          >
            <img
              src="../Assets/images/avta.jpg"
              alt="Profile"
              className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 
                        ${
                          currentTheme === 'dead-cells'
                            ? 'filter contrast-125 grayscale-[50%]'
                            : currentTheme === 'valorant'
                            ? 'filter contrast-125'
                            : currentTheme === 'vice-city'
                            ? 'filter contrast-110 saturate-150'
                            : 'filter grayscale-[20%]'
                        }`}
            />

            {/* Overlay Text on Image */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
              <h3
                className={`text-white font-bold uppercase ${
                  currentTheme === 'dead-cells'
                    ? 'font-pixel text-xs'
                    : currentTheme === 'professional'
                    ? 'font-display font-semibold text-2xl tracking-tight'
                    : 'font-display text-4xl italic'
                }`}
              >
                Nguyen Tran
              </h3>
              <p
                className={`text-white/80 ${
                  currentTheme === 'dead-cells'
                    ? 'font-pixel text-[10px]'
                    : currentTheme === 'professional'
                    ? 'font-mono text-xs text-[#3b82f6]'
                    : 'font-sans'
                }`}
              >
                Backend Developer
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Info Card */}
        <div className={`p-8 md:p-12 relative z-10 ${config.cardStyle}`}>
          <div className="mb-6">
            <h4 className={`${config.labelStyle} opacity-100 mb-2`}>
              {config.subtitle}
            </h4>
            <h2
              className={`text-5xl md:text-6xl font-bold uppercase leading-none ${
                currentTheme === 'dead-cells'
                  ? 'font-pixel text-[#bd6eff]'
                  : currentTheme === 'club'
                  ? 'text-white font-display'
                  : currentTheme === 'valorant'
                  ? 'text-[#ECE8E1] font-valo uppercase'
                  : currentTheme === 'professional'
                  ? 'text-white font-display tracking-tight normal-case text-4xl font-semibold'
                  : 'font-display italic'
              }`}
            >
              {config.title}
            </h2>
          </div>

          <p className={`mb-8 text-lg ${config.textStyle}`}>
            Building scalable systems with{' '}
            <span
              className={
                currentTheme === 'professional'
                  ? 'text-white font-semibold'
                  : 'font-bold'
              }
            >
              Clean Code
            </span>{' '}
            &{' '}
            <span
              className={
                currentTheme === 'professional'
                  ? 'text-white font-semibold'
                  : 'font-bold'
              }
            >
              Performance
            </span>{' '}
            in mind.
            <br className="hidden md:block" /> Based in Ho Chi Minh City.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-full ${
                  currentTheme === 'professional'
                    ? 'bg-[#222] border border-[#333]'
                    : 'bg-black/5'
                }`}
                style={{ color: config.iconColor }}
              >
                <MapPin size={24} />
              </div>
              <div>
                <h5 className={`${config.labelStyle} text-sm opacity-80`}>
                  Location
                </h5>
                <p className={config.textStyle}>Go Vap, HCMC</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-full ${
                  currentTheme === 'professional'
                    ? 'bg-[#222] border border-[#333]'
                    : 'bg-black/5'
                }`}
                style={{ color: config.iconColor }}
              >
                <Briefcase size={24} />
              </div>
              <div>
                <h5 className={`${config.labelStyle} text-sm opacity-80`}>
                  Experience
                </h5>
                <p className={config.textStyle}>1.5+ Years</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-full ${
                  currentTheme === 'professional'
                    ? 'bg-[#222] border border-[#333]'
                    : 'bg-black/5'
                }`}
                style={{ color: config.iconColor }}
              >
                <Code size={24} />
              </div>
              <div>
                <h5 className={`${config.labelStyle} text-sm opacity-80`}>
                  Stack
                </h5>
                <p className={config.textStyle}>Laravel, VueJS</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-full ${
                  currentTheme === 'professional'
                    ? 'bg-[#222] border border-[#333]'
                    : 'bg-black/5'
                }`}
                style={{ color: config.iconColor }}
              >
                <User size={24} />
              </div>
              <div>
                <h5 className={`${config.labelStyle} text-sm opacity-80`}>
                  Work Style
                </h5>
                <p className={config.textStyle}>Agile, Team Player</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
