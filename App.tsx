import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Timeline from './components/Timeline'
import TechStack from './components/TechStack'
import Garage from './components/Garage'
import DriverStats from './components/DriverStats'
import MapMenu from './components/MapMenu'
import ContactFooter from './components/ContactFooter'
import ThemeSwitcher from './components/ThemeSwitcher'
import ThemeLoader from './components/ThemeLoader'
import { Menu } from 'lucide-react'
import { ThemeConfig } from './types'
import { THEME_PREVIEWS } from './constants'
// Theme Configurations
const THEMES: ThemeConfig[] = [
  {
    id: 'professional',
    label: 'Professional',
    description:
      'Clean, minimalist, and code-focused. Ideal for showcasing technical expertise and system architecture.',
    colors: {
      pink: '#3b82f6', // Main Accent (Blue)
      cyan: '#ffffff', // Text Main
      yellow: '#a1a1aa', // Text Sub
      dark: '#050505', // BG
      gray: '#111111', // Card BG
    },
    skewAngle: 0,
    fontDisplay: "'JetBrains Mono', monospace",
    cardRadius: '16px',
    backgroundImage: `linear-gradient(#2a2a2a 1px, transparent 1px), linear-gradient(90deg, #2a2a2a 1px, transparent 1px)`,
    previewImage: THEME_PREVIEWS.professional,
  },
  {
    id: 'festival',
    label: 'Horizon Festival',
    description:
      'Vibrant colors, energetic vibes, and a festival atmosphere. Perfect for a dynamic portfolio.',
    colors: {
      pink: '#FF007F',
      cyan: '#00F0FF',
      yellow: '#E8FF00',
      dark: '#1a1a1a',
      gray: '#f3f4f6',
    },
    skewAngle: 10,
    fontDisplay: "'Teko', sans-serif",
    cardRadius: '0px',
    previewImage: THEME_PREVIEWS.festival,
  },
  {
    id: 'valorant',
    label: 'Protocol: Valorant',
    description:
      'Tactical, sharp, and high-tech. A theme for those who value precision and strategy.',
    colors: {
      pink: '#FF4655', // Valo Red
      cyan: '#ECE8E1', // Valo White/Text
      yellow: '#FF4655', // Red again for highlights
      dark: '#0F1923', // Void Black
      gray: '#364954', // Slate
    },
    skewAngle: 0,
    fontDisplay: "'Oswald', sans-serif",
    cardRadius: '0px',
    backgroundImage: '#0F1923',
    previewImage: THEME_PREVIEWS.valorant,
  },
  {
    id: 'club',
    label: 'FC Online / FIFA',
    description:
      'Sporty, competitive, and card-based. Show off your stats and achievements like a pro player.',
    colors: {
      pink: '#32ff7e', // Pitch Green
      cyan: '#38bdf8', // Sky Blue
      yellow: '#d4af37', // Gold
      dark: '#0e1015', // Obsidian
      gray: '#1f2937', // Dark Gray
    },
    skewAngle: 0,
    fontDisplay: "'Oswald', sans-serif",
    cardRadius: '0px',
    backgroundImage:
      'radial-gradient(circle at 50% 0%, #1a202c 0%, #0e1015 80%)',
    previewImage: THEME_PREVIEWS.club,
  },
  {
    id: 'dead-cells',
    label: 'Dead Cells',
    description:
      'Pixel art, dark fantasy, and rogue-like elements. A unique retro style for the adventurous.',
    colors: {
      pink: '#ff2a2a', // Brutality Red
      cyan: '#00d0ff', // Soul Blue
      yellow: '#ffd700', // Legendary Gold
      dark: '#110b29', // Prisoner's Purple (Bg)
      gray: '#4d3e75', // Border color
    },
    skewAngle: 0,
    fontDisplay: "'Press Start 2P', cursive",
    cardRadius: '0px',
    previewImage: THEME_PREVIEWS['dead-cells'],
    backgroundImage:
      'radial-gradient(circle at 50% 50%, #2a1a5e 0%, #110b29 100%)',
  },
  {
    id: 'vice-city',
    label: 'GTA VI / Vice',
    description:
      'Neon lights, retro-wave aesthetics, and 80s vibes. A stylish and nostalgic choice.',
    colors: {
      pink: '#ec4899', // Vice Pink
      cyan: '#8b5cf6', // Vice Purple
      yellow: '#fbbf24', // Gold
      dark: '#2e1065', // Deep Purple Background
      gray: '#4c1d95', // Lighter Purple
    },
    skewAngle: 0,
    fontDisplay: "'Archivo Black', sans-serif",
    cardRadius: '12px',
    backgroundImage: 'linear-gradient(135deg, #2e1065, #db2777, #ea580c)',
    previewImage: THEME_PREVIEWS['vice-city'],
  },
  {
    id: 'neon-city',
    label: 'Neon City',
    description:
      'Cyberpunk aesthetics with glowing neons and futuristic elements.',
    colors: {
      pink: '#D900FF', // Purple
      cyan: '#00FF9D', // Green
      yellow: '#FF0055', // Reddish Pink
      dark: '#050510', // Deep Blue Black
      gray: '#1e1e2e',
    },
    skewAngle: 6,
    fontDisplay: "'Teko', sans-serif",
    cardRadius: '4px',
    backgroundImage:
      'radial-gradient(circle at 50% 50%, #1e1e2e 0%, #050510 100%)',
    previewImage: THEME_PREVIEWS['neon-city'],
  },
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentThemeId, setCurrentThemeId] = useState('professional')
  const [showLoader, setShowLoader] = useState(true)

  // Lock body scroll when loader is active
  useEffect(() => {
    if (showLoader) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      window.scrollTo(0, 0)
    } else {
      document.body.style.overflow = 'unset'
      document.documentElement.style.overflow = 'unset'
      window.scrollTo(0, 0)
    }
    return () => {
      document.body.style.overflow = 'unset'
      document.documentElement.style.overflow = 'unset'
    }
  }, [showLoader])

  // Effect to apply CSS variables when theme changes
  useEffect(() => {
    const theme = THEMES.find((t) => t.id === currentThemeId) || THEMES[0]
    const root = document.documentElement

    // Apply colors
    root.style.setProperty('--color-horizon-pink', theme.colors.pink)
    root.style.setProperty('--color-horizon-cyan', theme.colors.cyan)
    root.style.setProperty('--color-horizon-yellow', theme.colors.yellow)
    root.style.setProperty('--color-horizon-dark', theme.colors.dark)
    root.style.setProperty('--color-horizon-gray', theme.colors.gray)

    // Apply fonts & shapes
    root.style.setProperty('--font-display', theme.fontDisplay)
    root.style.setProperty('--card-radius', theme.cardRadius)

    // Apply skews
    root.style.setProperty('--skew-10', `${theme.skewAngle}deg`)
    root.style.setProperty('--skew-neg-10', `-${theme.skewAngle}deg`)
    root.style.setProperty('--skew-12', `${theme.skewAngle * 1.2}deg`)
    root.style.setProperty('--skew-neg-12', `-${theme.skewAngle * 1.2}deg`)
    root.style.setProperty('--skew-20', `${theme.skewAngle * 2}deg`)
    root.style.setProperty('--skew-neg-20', `-${theme.skewAngle * 2}deg`)

    // Special background handling
    if (theme.backgroundImage) {
      document.body.style.background = theme.backgroundImage
      if (theme.id === 'professional') {
        document.body.style.backgroundColor = '#050505'
        document.body.style.backgroundSize = '40px 40px'
        document.body.style.backgroundPosition = 'center top'
      } else {
        document.body.style.backgroundColor = theme.colors.dark // Fallback
        document.body.style.backgroundSize = 'cover'
        document.body.style.backgroundPosition = 'center'
      }
    } else {
      document.body.style.background = '' // reset
      document.body.style.backgroundColor = 'white'
    }
  }, [currentThemeId])

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentTheme = THEMES.find((t) => t.id === currentThemeId)
  const isLight = currentThemeId === 'festival'

  return (
    <div
      className={`min-h-screen font-sans selection:bg-horizon-pink selection:text-white transition-colors duration-500
        ${
          currentThemeId !== 'festival'
            ? 'bg-transparent text-white'
            : 'bg-white'
        }
    `}
    >
      {/* Theme Loader */}
      {showLoader && (
        <ThemeLoader
          themes={THEMES}
          onSelect={(id) => setCurrentThemeId(id)}
          onComplete={() => setShowLoader(false)}
        />
      )}
      {/* Removed Next.js-specific Analytics to avoid Vite build errors. */}
      {/* Theme Switcher */}
      <ThemeSwitcher
        currentTheme={currentThemeId}
        onThemeChange={setCurrentThemeId}
        themes={THEMES}
      />

      {/* Floating Menu Button (Sticky HUD) */}
      <div className="fixed top-6 right-6 z-40">
        <button
          onClick={() => setIsMenuOpen(true)}
          className={`group flex items-center gap-3 px-6 py-3 backdrop-blur-md transform -skew-x-10 transition-colors shadow-[5px_5px_0px_rgba(0,0,0,0.3)] rounded-card border-2
            ${
              isLight
                ? 'bg-horizon-dark text-white hover:bg-horizon-pink border-transparent'
                : 'bg-white/10 text-white border-white/20 hover:bg-white hover:text-black'
            }
            ${
              currentThemeId === 'professional'
                ? 'bg-[#111] border-[#2a2a2a] skew-x-0 rounded-[8px] hover:border-[#3b82f6]'
                : ''
            }
          `}
        >
          <span
            className={`font-display ${
              currentThemeId === 'dead-cells' ? 'text-xs' : 'text-xl'
            } font-bold italic transform skew-x-10 ${
              currentThemeId === 'professional'
                ? 'not-italic font-mono skew-x-0'
                : ''
            }`}
          >
            MENU
          </span>
          <Menu
            className={`transform skew-x-10 ${
              currentThemeId === 'professional' ? 'skew-x-0' : ''
            }`}
          />
        </button>
      </div>

      {/* Main Sections */}
      <main>
        <div id="hero">
          <Hero
            onStart={() => scrollToSection('about')}
            currentTheme={currentThemeId}
          />
        </div>

        <div id="about">
          <AboutMe currentTheme={currentThemeId} />
        </div>

        <div id="garage">
          <Garage currentTheme={currentThemeId} />
        </div>

        <div id="timeline">
          <Timeline currentTheme={currentThemeId} />
        </div>

        <div id="skills">
          <div className="container mx-auto">
            <TechStack currentTheme={currentThemeId} />
            <DriverStats currentTheme={currentThemeId} />
          </div>
        </div>

        <div id="contact">
          <ContactFooter currentTheme={currentThemeId} />
        </div>
      </main>

      {/* Full Screen Navigation Overlay */}
      <MapMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={scrollToSection}
        currentTheme={currentThemeId}
      />
    </div>
  )
}

export default App
