import { motion } from 'framer-motion'
import { FiArrowLeft } from 'react-icons/fi'
import { personal, navItems } from '../../data/portfolioData'
import useActiveSection from '../../hooks/useActiveSection'
import SocialLinks from '../ui/SocialLinks'

const SECTION_IDS = navItems.map((item) => item.id)

export default function Sidebar() {
  const activeId = useActiveSection(SECTION_IDS)

  const handleNavigate = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <aside className="relative flex flex-col justify-between overflow-hidden px-6 py-10 sm:px-10 lg:fixed lg:h-screen lg:w-2/5 lg:py-16 xl:w-1/3">
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent/10 blur-[100px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <a
          href="https://madhuboora.online"
          className="mb-4 flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-white"
        >
          <FiArrowLeft size={14} /> Back to Resume
        </a>
        <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">{personal.name}</h1>
        <p className="mt-2 text-lg text-slate-300">{personal.title}</p>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">{personal.tagline}</p>

        <nav aria-label="Section navigation" className="mt-10 hidden lg:block">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavigate(item.id)}
                  className="group flex items-center gap-3"
                >
                  <span
                    className={`h-px transition-all duration-300 ${
                      activeId === item.id ? 'w-12 bg-white' : 'w-6 bg-slate-600 group-hover:w-10 group-hover:bg-slate-400'
                    }`}
                  />
                  <span
                    className={`font-mono text-xs tracking-widest uppercase transition-colors ${
                      activeId === item.id ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'
                    }`}
                  >
                    {item.number} {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>

      <SocialLinks className="relative mt-10 lg:mt-0" />
    </aside>
  )
}
