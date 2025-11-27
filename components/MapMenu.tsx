import React from 'react'
import { NAV_ITEMS } from '../constants'
import {
  X,
  MapPin,
  User,
  Folder,
  GitBranch,
  Code,
  Mail,
  Shield,
  Crosshair,
  Activity,
  Zap,
  Radio,
  Ghost,
  Sword,
  Scroll,
  FlaskConical,
  MessageCircle,
  Briefcase,
  Map,
  Phone,
  Trophy,
  TrendingUp,
  Users,
  Box,
  GitCommit,
  Cpu,
  Wifi,
  Car,
  Wrench,
} from 'lucide-react'

interface MapMenuProps {
  isOpen: boolean
  onClose: () => void
  onNavigate: (id: string) => void
  currentTheme?: string
}

const MapMenu: React.FC<MapMenuProps> = ({
  isOpen,
  onClose,
  onNavigate,
  currentTheme = 'festival',
}) => {
  if (!isOpen) return null

  const getMenuTitles = () => {
    switch (currentTheme) {
      case 'dead-cells':
        return { main: 'Teleport Rune', stats: 'Run Stats' }
      case 'valorant':
        return { main: 'Mini Map', stats: 'Combat Report' }
      case 'club':
        return { main: 'World Tour', stats: 'Club Facilities' }
      case 'vice-city':
        return { main: 'City Map', stats: 'Empire Stats' }
      case 'neon-city':
        return { main: 'Network Grid', stats: 'Server Status' }
      case 'professional':
        return { main: 'Navigation', stats: 'Overview' }
      default:
        return { main: 'World Map', stats: 'Festival Status' }
    }
  }

  const getIcon = (itemId: string) => {
    let Icon = MapPin

    if (currentTheme === 'professional') {
      switch (itemId) {
        case 'about':
          Icon = User
          break
        case 'garage':
          Icon = Folder
          break
        case 'timeline':
          Icon = GitBranch
          break
        case 'skills':
          Icon = Code
          break
        case 'contact':
          Icon = Mail
          break
      }
    } else if (currentTheme === 'valorant') {
      switch (itemId) {
        case 'about':
          Icon = Shield
          break
        case 'garage':
          Icon = Crosshair
          break
        case 'timeline':
          Icon = Activity
          break
        case 'skills':
          Icon = Zap
          break
        case 'contact':
          Icon = Radio
          break
      }
    } else if (currentTheme === 'dead-cells') {
      switch (itemId) {
        case 'about':
          Icon = Ghost
          break
        case 'garage':
          Icon = Sword
          break
        case 'timeline':
          Icon = Scroll
          break
        case 'skills':
          Icon = FlaskConical
          break
        case 'contact':
          Icon = MessageCircle
          break
      }
    } else if (currentTheme === 'vice-city') {
      switch (itemId) {
        case 'about':
          Icon = User
          break
        case 'garage':
          Icon = Briefcase
          break
        case 'timeline':
          Icon = Map
          break
        case 'skills':
          Icon = Zap
          break
        case 'contact':
          Icon = Phone
          break
      }
    } else if (currentTheme === 'club') {
      switch (itemId) {
        case 'about':
          Icon = User
          break
        case 'garage':
          Icon = Trophy
          break
        case 'timeline':
          Icon = TrendingUp
          break
        case 'skills':
          Icon = Activity
          break
        case 'contact':
          Icon = Users
          break
      }
    } else if (currentTheme === 'neon-city') {
      switch (itemId) {
        case 'about':
          Icon = User
          break
        case 'garage':
          Icon = Box
          break
        case 'timeline':
          Icon = GitCommit
          break
        case 'skills':
          Icon = Cpu
          break
        case 'contact':
          Icon = Wifi
          break
      }
    } else {
      // Festival / Default
      switch (itemId) {
        case 'about':
          Icon = User
          break
        case 'garage':
          Icon = Car
          break
        case 'timeline':
          Icon = Map
          break
        case 'skills':
          Icon = Wrench
          break
        case 'contact':
          Icon = MessageCircle
          break
      }
    }

    const isLightBackground =
      ['timeline', 'skills'].includes(itemId) && currentTheme !== 'professional'
    const textColor = isLightBackground ? 'text-black' : 'text-white'

    return <Icon className={textColor} size={24} />
  }

  const titles = getMenuTitles()

  const isLightItem = (itemId: string) =>
    ['timeline', 'skills'].includes(itemId) && currentTheme !== 'professional'

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col p-6 animate-in fade-in duration-200 overflow-y-auto
        ${
          currentTheme === 'professional'
            ? 'bg-[#050505]/98 backdrop-blur-md'
            : 'bg-black/95 backdrop-blur-md'
        }
    `}
    >
      {/* Top Bar */}
      <div
        className={`flex justify-between items-center mb-8 pb-4 ${
          currentTheme === 'professional'
            ? 'border-b border-[#2a2a2a]'
            : 'border-b border-gray-700'
        }`}
      >
        <h2
          className={`font-display text-4xl uppercase ${
            currentTheme === 'dead-cells' ? 'font-pixel not-italic' : ''
          } ${
            currentTheme === 'professional'
              ? 'text-white font-sans normal-case font-bold'
              : 'text-white italic'
          }`}
        >
          {titles.main}
        </h2>
        <button
          onClick={onClose}
          className="text-white hover:text-horizon-pink transition-colors"
        >
          <X size={48} />
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 content-center max-w-7xl mx-auto w-full pb-10">
        {NAV_ITEMS.map((item, index) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`
              group relative h-40 md:h-56 overflow-hidden
              ${
                currentTheme === 'professional'
                  ? 'bg-[#111] border border-[#2a2a2a] hover:border-[#3b82f6]'
                  : item.color
              } 
              border border-white/10
              flex items-end p-6
              transition-all duration-300 
              hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]
              focus:outline-none rounded-card
              ${
                currentTheme === 'professional'
                  ? 'rounded-[16px] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]'
                  : ''
              }
            `}
            style={{
              animation: `slideIn 0.4s ease-out forwards ${index * 0.1}s`,
              opacity: 0,
              transform: 'translateY(20px)',
            }}
          >
            {/* Hover overlay pattern */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-white to-transparent transition-opacity" />

            <div className="relative z-10 text-left">
              <div
                className={`p-2 w-fit mb-2 ${
                  currentTheme === 'professional'
                    ? 'bg-[#222] rounded-full'
                    : isLightItem(item.id)
                    ? 'bg-black/10 backdrop-blur-sm'
                    : 'bg-white/20 backdrop-blur-sm'
                }`}
              >
                {getIcon(item.id)}
              </div>
              <h3
                className={`text-3xl font-display font-bold uppercase leading-none 
                    ${
                      currentTheme === 'dead-cells'
                        ? 'font-pixel not-italic text-xl'
                        : ''
                    }
                    ${
                      currentTheme === 'professional'
                        ? 'text-white not-italic'
                        : isLightItem(item.id)
                        ? 'text-black italic'
                        : 'text-white italic'
                    }
                `}
              >
                {item.label}
              </h3>
            </div>
          </button>
        ))}
      </div>

      <style>{`
        @keyframes slideIn {
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default MapMenu
