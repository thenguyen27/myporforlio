export type CarClass = 'X' | 'S2' | 'S1' | 'A' | 'B' | 'C' | 'D'

export interface Project {
  id: string
  title: string
  category: string
  class: CarClass
  rating: number // 100-999
  tech: string[]
  image: string
  description: string
  demoUrl?: string
  repoUrl?: string
}

export interface SkillStat {
  subject: string
  A: number // The value (0-100 or similar scale)
  fullMark: number
}

export interface ThemeConfig {
  id: string
  label: string
  colors: {
    pink: string
    cyan: string
    yellow: string
    dark: string
    gray: string
  }
  skewAngle: number // Base angle, e.g., 10 or 0
  fontDisplay: string
  cardRadius: string
  backgroundImage?: string
  description?: string
  previewImage?: string // New field for theme preview
}
