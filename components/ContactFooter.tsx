import React from 'react'
import { Mail, Github, Linkedin, Phone, Twitter, Instagram } from 'lucide-react'
import { SOCIALS } from '../constants'

interface ContactFooterProps {
  currentTheme?: string
}

const ContactFooter: React.FC<ContactFooterProps> = ({
  currentTheme = 'festival',
}) => {
  const getConfig = () => {
    switch (currentTheme) {
      case 'dead-cells':
        return {
          bgText: 'COLLECTOR',
          title: 'THE COLLECTOR',
          desc: 'Focused on Clean Code, Scalability and Performance optimization.',
          copyright: '© 2025 PRISONERS QUARTERS. DIE. LEARN. REPEAT.',
        }
      case 'valorant':
        return {
          bgText: 'SPIKE',
          title: 'DEFUSE THE SPIKE',
          desc: 'Spike planted. Defuse it by hiring me.',
          copyright: '© 2025 PROTOCOL. MATCH FOUND.',
        }
      case 'club':
        return {
          bgText: 'TRANSFER',
          title: 'SIGN PLAYER?',
          desc: 'Negotiations are open. Special traits: Teamwork, Problem Solving, Clean Code.',
          copyright: '© 2025 ULTIMATE TEAM. NGUYEN TRAN.',
        }
      case 'neon-city':
        return {
          bgText: 'DISCONNECT',
          title: 'JACK IN?',
          desc: 'Backend architecture ready for direct link establishment.',
          copyright: '© 2077 NEON CITY. SYSTEM SECURE.',
        }
      case 'vice-city':
        return {
          bgText: 'GAME OVER',
          title: 'PARTNER UP?',
          desc: 'Looking for a new crew member? I handle the heavy lifting (Backend).',
          copyright: '© 1986 VICE CITY. KEEP IT REAL.',
        }
      case 'professional':
        return {
          bgText: 'CONTACT',
          title: 'Ready to collaborate?',
          desc: 'Available for freelance & full-time opportunities. Building scalable backends together.',
          copyright: `© ${new Date().getFullYear()} Nguyen Tran. All rights reserved.`,
        }
      default:
        return {
          bgText: 'FINISH LINE',
          title: 'RACE TOGETHER?',
          desc: 'Backend Developer focused on Clean Code, Scalability, and User Experience. Based in Go Vap, HCMC.',
          copyright: `© ${new Date().getFullYear()} NGUYEN TRAN. INSPIRED BY FORZA HORIZON 5.`,
        }
    }
  }

  const config = getConfig()

  return (
    <footer
      className={`py-20 relative overflow-hidden ${
        currentTheme === 'professional'
          ? 'bg-[#050505] border-t border-[#2a2a2a]'
          : 'bg-horizon-dark text-white border-t border-white/5'
      }`}
    >
      {/* Big overlay text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
        <span
          className={`text-[20vw] font-display font-bold italic uppercase whitespace-nowrap 
             ${
               currentTheme === 'dead-cells'
                 ? 'font-pixel not-italic text-[10vw]'
                 : ''
             }
             ${
               currentTheme === 'professional'
                 ? 'font-display not-italic opacity-30 text-[#2a2a2a]'
                 : ''
             }`}
        >
          {config.bgText}
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2
          className={`text-6xl md:text-8xl font-display font-bold uppercase mb-8 
             ${
               currentTheme === 'dead-cells'
                 ? 'font-pixel not-italic text-4xl text-[#bd6eff]'
                 : ''
             }
             ${
               currentTheme === 'professional'
                 ? 'text-white not-italic tracking-tight text-5xl'
                 : 'italic text-horizon-yellow'
             }
             `}
        >
          {config.title}
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 font-sans max-w-2xl mx-auto">
          {config.desc}
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {SOCIALS.map((s) => {
            const ICONS: Record<string, any> = {
              email: Mail,
              phone: Phone,
              github: Github,
              linkedin: Linkedin,
              twitter: Twitter,
              instagram: Instagram,
            }
            const Icon = ICONS[s.id] ?? Mail
            const isExternal = String(s.href).startsWith('http')

            return (
              <a
                key={s.id}
                href={s.href}
                className="flex flex-col items-center gap-2 group"
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
              >
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full transition-colors ${
                    currentTheme === 'professional'
                      ? 'bg-[#111] border border-[#2a2a2a] group-hover:border-[#3b82f6] text-white'
                      : 'bg-white/10 group-hover:bg-horizon-pink'
                  }`}
                >
                  <Icon size={32} />
                </div>
                <span
                  className={`font-display text-xl uppercase tracking-wider ${
                    currentTheme === 'professional'
                      ? 'text-gray-400 font-sans normal-case text-sm'
                      : ''
                  }`}
                >
                  {s.label}
                </span>
              </a>
            )
          })}
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 text-gray-500 text-sm">
          {config.copyright}
        </div>
      </div>
    </footer>
  )
}

export default ContactFooter
