import React from 'react'
import { Project, CarClass } from '../types'

interface ProjectCardProps {
  project: Project
  theme: string
}

const getClassColor = (c: CarClass) => {
  switch (c) {
    case 'X':
      return 'bg-[#00ff00] text-black' // Green
    case 'S2':
      return 'bg-[#00aaff] text-white' // Blue
    case 'S1':
      return 'bg-[#aa00ff] text-white' // Purple
    case 'A':
      return 'bg-[#ff0000] text-white' // Red
    case 'B':
      return 'bg-[#ff7f00] text-black' // Orange
    case 'C':
      return 'bg-[#ffff00] text-black' // Yellow
    case 'D':
      return 'bg-[#808080] text-white' // Grey
    default:
      return 'bg-gray-500'
  }
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, theme }) => {
  const isViceCity = theme === 'vice-city'
  const isClub = theme === 'club'
  const isDeadCells = theme === 'dead-cells'
  const isValorant = theme === 'valorant'
  const isNeon = theme === 'neon-city'

  // NOTE: 'professional' and 'valorant' (Elastic mode) are handled directly in Garage.tsx
  // This component handles the Card-based renderers for Draggable and Marquee modes.

  // --- DEAD CELLS THEME RENDER ---
  if (isDeadCells) {
    // Generate Roman numeral level roughly based on rating
    const level =
      project.rating > 900 ? 'IX-L' : project.rating > 800 ? 'VII-S' : 'IV'
    const dps = project.rating * 10

    return (
      <div className="group relative w-80 h-[32rem] mx-4 cursor-pointer transition-transform duration-100 hover:scale-105 z-10 font-pixel flex flex-col items-center">
        {/* Item Slot (Icon representation) */}
        <div className="relative w-32 h-32 bg-[#222] border-[3px] border-[#bd6eff] shadow-[0_0_20px_rgba(189,110,255,0.4)] mb-4 hover:scale-110 transition-transform duration-200 image-pixelated flex-shrink-0 z-20 group-hover:shadow-[0_0_30px_rgba(189,110,255,0.8)]">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            style={{ filter: 'contrast(1.2) brightness(0.9)' }}
          />

          {/* Level Tag */}
          <div className="absolute -bottom-2 -right-2 bg-[#111] border border-[#bd6eff] px-1.5 py-0.5 text-[#ffd700] text-[10px] leading-none shadow-md z-10">
            {level}
          </div>

          {/* Color Tab (Tactics/Purple) */}
          <div className="absolute top-0 left-0 w-3 h-3 bg-[#bd6eff] shadow-[0_0_5px_#bd6eff]" />
        </div>

        {/* Connector Arrow */}
        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-[#4d3e75] -mb-[2px] relative z-10" />

        {/* Tooltip (The Card) */}
        <div className="w-full flex-1 flex flex-col bg-[#170c32]/95 border-2 border-[#4d3e75] p-4 text-xs leading-relaxed shadow-[0_10px_20px_rgba(0,0,0,0.6)] relative overflow-hidden backdrop-blur-sm">
          {/* Header */}
          <div className="flex justify-between items-start border-b-2 border-[#4d3e75] pb-3 mb-3 flex-shrink-0">
            <div className="flex flex-col max-w-[65%]">
              <span className="text-[#bd6eff] uppercase text-sm tracking-tighter font-bold drop-shadow-sm">
                {project.title}
              </span>
              <span className="text-[#888] text-[9px] uppercase tracking-widest mt-1">
                Tactics Item
              </span>
            </div>
            <div className="text-right flex-shrink-0 bg-[#000]/30 p-1 rounded border border-[#4d3e75]/50">
              <span className="block text-[#ff4d4d] text-lg font-bold drop-shadow-md">
                {dps}
              </span>
              <span className="block text-[7px] text-[#aaa] tracking-widest uppercase">
                DPS (Est.)
              </span>
            </div>
          </div>

          {/* Affixes */}
          <div className="space-y-3 mb-2 flex-1 overflow-y-auto pr-1 custom-scrollbar">
            <div className="flex items-start text-[#ccc] group-hover:text-white transition-colors">
              <span className="text-[#ffd700] mr-2 text-[10px]">◆</span>
              <span>+{project.rating}% logic efficiency against bugs.</span>
            </div>
            <div className="flex items-start text-[#ccc] group-hover:text-white transition-colors">
              <span className="text-[#ffd700] mr-2 text-[10px]">◆</span>
              <span>
                Tech Stack:{' '}
                <span className="text-[#bd6eff]">
                  {project.tech.slice(0, 3).join(', ')}
                </span>
                .
              </span>
            </div>
            <div className="flex items-start text-[#ccc] group-hover:text-white transition-colors">
              <span className="text-[#ffd700] mr-2 text-[10px]">◆</span>
              <span>
                Generates <span className="text-[#ff4d4d]">critical hits</span>{' '}
                when deadline is close.
              </span>
            </div>
          </div>

          {/* Flavor Text */}
          <div className="text-[9px] text-[#666] italic text-center mt-auto pt-3 border-t border-[#4d3e75]/30 flex-shrink-0">
            "A legendary artifact found in the depths of the repository."
          </div>
        </div>
      </div>
    )
  }

  // --- CLUB THEME (FIFA) RENDER ---
  if (isClub) {
    return (
      <div className="group relative w-72 h-[28rem] mx-4 cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 z-10 perspective-1000">
        {/* Card Body */}
        <div className="w-full h-full bg-gradient-to-b from-[#1e293b] to-[#0f172a] border-[3px] border-[#fbbf24] rounded-[20px_20px_40px_40px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_20px_50px_rgba(251,191,36,0.3)] text-[#fbbf24] overflow-hidden relative flex flex-col transition-all duration-500 group-hover:border-[#fcd34d]">
          {/* Background Pattern (Carbon Fiber-ish) */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black pointer-events-none" />
          <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,#fbbf24_5px,#fbbf24_6px)] pointer-events-none" />

          {/* Player Image (Project Image) - Moved behind Shine */}
          <div className="absolute top-2 right-2 w-[75%] h-[55%] overflow-hidden rounded-tr-[16px] border-l-2 border-b-2 border-[#fbbf24]/30 shadow-inner bg-black/20 group-hover:border-[#fbbf24]/60 transition-colors duration-500 z-10">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Gradient Fade to Blend with Bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f172a] opacity-90" />

            {/* Inner Shadow for depth */}
            <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] pointer-events-none" />
            <div
              className="absolute top-2 right-2 w-[75%] h-[55%] overflow-hidden rounded-tr-[16px] border-l-2 border-b-2 border-[#fbbf24]/30 shadow-inner bg-black/20 group-hover:border-[#fbbf24]/60 transition-colors duration-500 z-10">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />

          {/* Top Section */}
          <div className="flex h-[60%] p-4 relative z-30">
            {/* Left Info */}
            <div className="flex flex-col items-center w-1/4 pt-2 relative">
              <span className="text-5xl font-display font-bold leading-none text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {project.rating > 900 ? 99 : Math.floor(project.rating / 10)}
              </span>
              <span className="text-xl font-display font-bold uppercase mt-1 text-[#fbbf24] tracking-wider">
                DEV
              </span>
              <div className="mt-4 flex flex-col gap-3 items-center">
                {/* Flag */}
                <div className="w-8 h-5 bg-gradient-to-r from-red-600 to-red-800 rounded-[2px] shadow-md border border-white/10" />
                {/* Club Logo */}
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#0f172a] font-black text-sm border-2 border-[#fbbf24] shadow-lg">
                  JS
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="h-[40%] bg-gradient-to-b from-[#0f172a]/90 to-black px-5 pb-4 text-center relative z-30 flex flex-col justify-end">
            {/* Divider Line */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#fbbf24] to-transparent opacity-50 mb-3" />

            <h3 className="text-2xl font-display font-bold uppercase tracking-widest truncate text-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)] mb-4 group-hover:text-[#fbbf24] transition-colors">
              {project.title}
            </h3>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-base font-mono font-bold">
              <div className="flex justify-between items-center border-b border-white/5 pb-1">
                <span className="text-white text-lg">99</span>
                <span className="text-[#fbbf24] opacity-80 text-xs tracking-wider">
                  COD
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-1">
                <span className="text-white text-lg">95</span>
                <span className="text-[#fbbf24] opacity-80 text-xs tracking-wider">
                  DES
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-1">
                <span className="text-white text-lg">92</span>
                <span className="text-[#fbbf24] opacity-80 text-xs tracking-wider">
                  LOG
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-1">
                <span className="text-white text-lg">90</span>
                <span className="text-[#fbbf24] opacity-80 text-xs tracking-wider">
                  SPD
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // --- NEON CITY (Marquee Item) ---
  if (isNeon) {
    return (
      <div className="group relative w-80 h-[24rem] mx-4 cursor-pointer transform -skew-x-6 hover:skew-x-0 transition-all duration-300">
        <div className="absolute inset-0 bg-black border-2 border-horizon-cyan shadow-[0_0_15px_#00F0FF] group-hover:shadow-[0_0_30px_#00F0FF] transition-shadow">
          <div className="h-40 w-full relative overflow-hidden border-b border-horizon-cyan">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              style={{ filter: 'hue-rotate(180deg) contrast(1.2)' }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0)_50%,rgba(0,240,255,0.2)_50%)] bg-[length:100%_4px] pointer-events-none" />
          </div>
          <div className="p-4">
            <h3 className="text-3xl font-display text-white mb-2">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-horizon-cyan/20 text-horizon-cyan border border-horizon-cyan px-2 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute bottom-2 right-2 text-xs font-mono text-horizon-pink animate-pulse">
            STATUS: ONLINE
          </div>
        </div>
      </div>
    )
  }

  // --- STANDARD & DRAGGABLE (Festival, Vice City) RENDER ---
  return (
    <div
      className={`group relative w-72 h-96 md:w-80 md:h-[28rem] flex-shrink-0 cursor-pointer transition-all duration-300 ease-out transform -skew-x-10 hover:skew-x-0 hover:scale-105 hover:z-20 mx-4 rounded-card ${
        isViceCity ? 'hover:-translate-y-2' : ''
      }`}
    >
      {/* Shadow/Glow Effect */}
      <div
        className={`absolute inset-0 transition-all duration-300 rounded-card
        ${
          isViceCity
            ? 'bg-black/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]'
            : 'bg-black/20 shadow-[10px_10px_0px_rgba(0,0,0,0.2)] group-hover:shadow-[0px_0px_30px_rgba(0,240,255,0.6)]'
        }`}
      />

      {/* Main Card Content */}
      <div
        className={`absolute inset-0 overflow-hidden transition-colors duration-300 rounded-card
          ${
            isViceCity
              ? 'bg-horizon-dark/80 backdrop-blur-md border border-white/10'
              : 'bg-white border-2 border-transparent group-hover:border-horizon-pink'
          }`}
      >
        {/* Image Background */}
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transform scale-125 skew-x-10 group-hover:skew-x-0 transition-transform duration-500 ease-out"
        />

        {/* Dark Gradient Overlay */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 
            ${
              isViceCity
                ? 'bg-gradient-to-t from-[#2e1065] via-[#2e1065]/40 to-transparent opacity-60' // Lowered opacity for better image visibility
                : 'bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80'
            }`}
        />

        {/* --- VICE CITY SPECIAL: Mission Passed Overlay --- */}
        {isViceCity && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-110 pointer-events-none whitespace-nowrap">
            <h2 className="font-display text-4xl text-horizon-yellow uppercase mission-text-shadow">
              Mission Passed
            </h2>
            <div className="text-center font-mono font-bold text-[#4ade80] text-lg bg-black/50 px-2 rounded mt-1">
              +${project.rating * 10} XP
            </div>
          </div>
        )}

        {/* Content Container */}
        <div className="absolute bottom-0 left-0 w-full p-6 transform skew-x-10 group-hover:skew-x-0 transition-transform duration-300">
          {/* Metadata Row */}
          <div className="flex items-center justify-between mb-2">
            {!isViceCity ? (
              // Standard Forza Class Badge
              <div
                className={`px-3 py-0.5 text-2xl font-bold font-display italic ${getClassColor(
                  project.class
                )} shadow-[2px_2px_0px_rgba(0,0,0,1)]`}
              >
                {project.class} | {project.rating}
              </div>
            ) : (
              // Vice City Badge
              <div className="flex gap-2">
                <span className="text-[#4ade80] font-mono font-bold text-sm bg-black/30 px-2 py-1 rounded border border-[#4ade80]/30">
                  $ {project.rating * 150}
                </span>
              </div>
            )}
          </div>

          {/* Title */}
          <h3
            className={`font-display font-bold uppercase leading-none mb-1 drop-shadow-md
             ${
               isViceCity
                 ? 'text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400'
                 : 'text-4xl text-white italic'
             }`}
          >
            {project.title}
          </h3>

          <p className="text-horizon-cyan font-bold tracking-widest text-sm mb-3 uppercase">
            {project.category}
          </p>

          {/* Tech Stack Icons/List */}
          <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
            {project.tech.map((t) => (
              <span
                key={t}
                className={`text-xs font-semibold px-2 py-1 backdrop-blur-sm
                ${
                  isViceCity
                    ? 'bg-white/10 text-horizon-pink border border-horizon-pink rounded'
                    : 'bg-white/20 text-white'
                }`}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Decorative bar */}
          <div
            className={`h-1 bg-horizon-yellow transition-all duration-500 ease-out 
              ${isViceCity ? 'w-full opacity-50' : 'w-12 group-hover:w-full'}`}
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
