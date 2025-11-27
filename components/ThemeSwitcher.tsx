import React, { useState } from 'react'
import { Palette, Check } from 'lucide-react'
import { ThemeConfig } from '../types'

interface ThemeSwitcherProps {
  currentTheme: string
  onThemeChange: (themeId: string) => void
  themes: ThemeConfig[]
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  currentTheme,
  onThemeChange,
  themes,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const isLight = currentTheme === 'festival'

  return (
    <div className="fixed top-6 left-6 z-50">
      <div className="relative">
        {/* Main Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative px-5 py-3 outline-none"
        >
          {/* Skewed Background Layer */}
          <div
            className={`absolute inset-0 transform -skew-x-12 border-2 transition-all shadow-[5px_5px_0px_rgba(0,0,0,0.3)] backdrop-blur-md
            ${
              isLight
                ? 'bg-horizon-dark border-transparent group-hover:bg-horizon-cyan'
                : 'bg-white/10 border-white/20 group-hover:bg-white'
            }`}
          />

          {/* Flat Content Layer (Sharp Text) */}
          <div
            className={`relative z-10 flex items-center gap-3 transition-colors
            ${
              isLight
                ? 'text-white group-hover:text-black'
                : 'text-white group-hover:text-black'
            }`}
          >
            <Palette size={20} />
            <span
              className={`font-display ${
                currentTheme === 'dead-cells' ? 'text-xs' : 'text-xl'
              } font-bold italic hidden md:inline`}
            >
              THEMES
            </span>
          </div>
        </button>

        {isOpen && (
          <div className="absolute top-16 left-8 w-96 animate-in fade-in zoom-in-95 duration-200 origin-top-left z-50">
            {/* Dropdown Background Layer */}
            <div
              className="absolute inset-0 backdrop-blur-xl border-2 border-horizon-cyan transform -skew-x-12 shadow-2xl origin-top-left"
              style={{ backgroundColor: 'var(--color-horizon-dark)' }}
            />

            {/* Dropdown Content Layer */}
            <div className="relative z-10 py-6 pr-6 pl-14 transform -skew-x-12 origin-top-left">
              <h3 className="text-horizon-yellow font-display text-2xl uppercase mb-4 italic border-b border-gray-700 pb-2 ml-2 transform skew-x-12">
                Select Style
              </h3>

              <div className="space-y-1">
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => {
                      onThemeChange(theme.id)
                      setIsOpen(false)
                    }}
                    className="relative w-full text-left group p-2 transition-all hover:pl-4 overflow-visible outline-none"
                  >
                    {/* Item Highlight Layer (Skewed) */}
                    <div
                      className={`absolute inset-0 transition-colors duration-200
                       ${
                         currentTheme === theme.id
                           ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.3)]'
                           : 'bg-transparent group-hover:bg-white/10'
                       }
                    `}
                    />

                    {/* Item Content Layer (Flat) */}
                    <div className="relative z-10 flex items-center justify-between px-2 transform skew-x-12">
                      <span
                        className={`font-display ${
                          currentTheme === 'dead-cells' ? 'text-xs' : 'text-xl'
                        } uppercase italic tracking-wide whitespace-nowrap transition-colors
                        ${
                          currentTheme === theme.id
                            ? 'text-horizon-dark font-bold'
                            : 'text-white group-hover:text-white'
                        }
                      `}
                      >
                        {theme.label}
                      </span>
                      {currentTheme === theme.id && (
                        <Check
                          size={16}
                          className="text-horizon-pink flex-shrink-0 ml-2"
                        />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay to close when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[-1]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

export default ThemeSwitcher
