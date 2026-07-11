// Centralized portfolio content. Update contact details and links here.
export const personal = {
  name: 'Madhu Boora',
  title: 'Frontend Developer',
  tagline: 'I build clean, fast, and thoughtful interfaces.',
  about:
    "I'm a Frontend Developer from India who enjoys turning ideas into polished, responsive web applications. I work mainly with React, JavaScript, and Tailwind CSS, and I care a lot about the details — smooth interactions, sensible component structure, and interfaces that feel good to use. Currently building real projects to sharpen those skills further and looking for opportunities to contribute to a product team.",
  resumeSite: 'https://madhuboora.online',
}

export const contact = {
  email: 'your.email@example.com',
  linkedin: 'https://linkedin.com/in/madhu-boora-8b256725b',
  github: '', // add once ready
}

export const skills = [
  'HTML5',
  'CSS3',
  'JavaScript (ES6)',
  'React.js',
  'Tailwind CSS',
  'Bootstrap',
  'Git & GitHub',
  'Responsive Design',
]

export const currentlyLearning = ['Advanced JavaScript', 'API Integration', 'Modern UI Design']

export const work = [
  {
    id: 'resume-builder',
    title: 'Resume Builder & Portfolio Site',
    period: '2026',
    description:
      'A futuristic, glassmorphic resume/portfolio website with a full Resume Builder concept as the flagship project — live preview, theme and font selection, dynamic forms, and a fully responsive layout.',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://madhuboora.online',
    githubUrl: '',
    highlights: [
      'Component-driven architecture with a single centralized content/data file',
      'Scroll-spy navigation and stagger/fade scroll animations',
      'Accessibility pass: focus states, contrast, reduced-motion support',
    ],
  },
  {
    id: 'skycast',
    title: 'Skycast — Weather App',
    period: '2026',
    description:
      'A production-ready weather forecast app with city search, hourly and 5-day forecasts, and live weather highlights — built on a completely free, key-less API stack.',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://weather.madhuboora.online',
    githubUrl: 'https://github.com/madhuboora930/weather-app',
    highlights: [
      'Custom hooks for debounced search, geolocation, and localStorage-backed state',
      'Instant client-side °C/°F conversion via React Context — no re-fetching on toggle',
      'Cancels stale requests with AbortController to avoid race conditions',
    ],
  },
  {
    id: 'this-portfolio',
    title: 'This Portfolio',
    period: '2026',
    description:
      'The site you\'re looking at right now — a distinct, case-study-style portfolio with a sticky sidebar layout, built separately from the main resume site to explore a different visual language.',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '',
    githubUrl: '',
    highlights: [
      'Sticky sidebar + scrollable case-study content, distinct from the resume site\'s layout',
      'Single-accent, editorial-style design system',
    ],
  },
]

export const navItems = [
  { id: 'about', label: 'About', number: '01' },
  { id: 'work', label: 'Work', number: '02' },
  { id: 'contact', label: 'Contact', number: '03' },
]
