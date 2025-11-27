import { Project, SkillStat } from './types'

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'COSMETIC E-COM',
    category: 'Full Stack',
    class: 'S1',
    rating: 950,
    tech: ['Laravel', 'Livewire', 'Docker', 'Elasticsearch'],
    image:
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description:
      'Scalable beauty platform with Influencer reviews and complex Bagisto integration.',
  },
  {
    id: '2',
    title: 'LMS PLATFORM',
    category: 'Education',
    class: 'A',
    rating: 880,
    tech: ['Laravel', 'VueJS', 'RESTful API', 'MySQL'],
    image:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description:
      'Class management system for Japanese centers focusing on student performance tracking.',
  },
  {
    id: '3',
    title: 'LAUNDRY BOOKING',
    category: 'Service',
    class: 'B',
    rating: 820,
    tech: ['PHP', 'Laravel', 'Bootstrap', 'MySQL'],
    image: './Assets/images/projects/img-laudry-project.png',
    description:
      'B2B Laundry service booking system optimized for operational efficiency.',
  },
  {
    id: '4',
    title: 'PORTFOLIO V2',
    category: 'Frontend',
    class: 'C',
    rating: 750,
    tech: ['React', 'Tailwind', 'TypeScript'],
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description:
      'My personal showcase. Clean code, high performance, and fluid animations.',
  },
]

export const SKILLS_STATS: SkillStat[] = [
  { subject: 'Backend (Logic)', A: 95, fullMark: 100 },
  { subject: 'Database (SQL)', A: 90, fullMark: 100 },
  { subject: 'DevOps (Docker)', A: 85, fullMark: 100 },
  { subject: 'Frontend (Vue)', A: 80, fullMark: 100 },
  { subject: 'Clean Code', A: 98, fullMark: 100 },
]

export const EXPERIENCE = [
  {
    id: 1,
    role: 'Fresher Web Developer',
    company: 'HOPEE SOLUTIONS',
    period: '02/2024 - 07/2025',
    description:
      'Developed and maintained web applications (E-commerce, Education, Service Booking). Worked on both Frontend and Backend tasks using Laravel, Livewire, VueJS, and Docker.',
    type: 'Full-time',
  },
  {
    id: 2,
    role: 'Intern Web Developer',
    company: 'HOPEE SOLUTIONS',
    period: '11/2023 - 01/2024',
    description:
      'Researched Laravel Framework, built foundation in PHP, practiced teamwork and learned new technologies like VueJS and Tailwind.',
    type: 'Internship',
  },
  {
    id: 3,
    role: 'Student',
    company: 'NGUYEN TAT THANH UNIVERSITY',
    period: '09/2019 - 04/2023',
    description:
      'Major in Information Technology. Focused on Data Structures, Algorithms, and Web Development.',
    type: 'Education',
  },
]

export const TECH_STACK = {
  backend: ['PHP', 'Laravel', 'Node.js', 'RESTful APIs', 'Authentication'],
  frontend: [
    'VueJS',
    'React',
    'JavaScript (ES6+)',
    'Tailwind CSS',
    'Bootstrap',
  ],
  database: ['MySQL', 'Schema Design', 'Query Optimization', 'Indexing'],
  devops: ['Docker', 'CI/CD', 'Git Flow', 'Linux'],
  tools: ['Figma', 'Postman', 'VS Code', 'Jira/Trello'],
}

export const NAV_ITEMS = [
  { id: 'about', label: 'ABOUT ME', color: 'bg-horizon-pink' },
  { id: 'garage', label: 'PROJECTS', color: 'bg-horizon-dark' },
  { id: 'timeline', label: 'CAREER PATH', color: 'bg-horizon-cyan' },
  { id: 'skills', label: 'SKILLS & TECH', color: 'bg-horizon-yellow' },
  { id: 'contact', label: 'CONTACT', color: 'bg-black' },
]

// Centralized social/contact links for easy editing and reuse across components
export const SOCIALS = [
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:t.thenguyen27@gmail.com',
  },
  {
    id: 'phone',
    label: 'Call',
    href: 'tel:+84848386884',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/thenguyen27', // <- replace with your GitHub URL
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://vn.linkedin.com/in/thenguyennn', // <- replace with your LinkedIn URL
  },
]

// Centralized hero background images per theme for easy modification
export const HERO_BACKGROUNDS: Record<string, string> = {
  'dead-cells': './Assets/images/themes/theme-cell.png',
  valorant: './Assets/images/themes/theme-valo.png',
  club: './Assets/images/themes/theme-club.png',
  'vice-city': './Assets/images/themes/theme-vicedev.png',
  'neon-city': './Assets/images/themes/theme-neon.png',
  festival: './Assets/images/themes/theme-horizon.png',
  professional: '',
}

// Centralized theme preview images (displayed in the loading screen)
export const THEME_PREVIEWS: Record<string, string> = {
  professional: './Assets/images/theme-preview/pre-theme-pro.png',
  festival: './Assets/images/theme-preview/pre-theme-horizon.png',
  valorant: './Assets/images/theme-preview/pre-theme-valo.png',
  club: './Assets/images/theme-preview/pre-theme-fc.png',
  'dead-cells': './Assets/images/theme-preview/pre-theme-cell.png',
  'vice-city': './Assets/images/theme-preview/pre-theme-vicedev.png',
  'neon-city': './Assets/images/theme-preview/pre-theme-neon.png',
}
