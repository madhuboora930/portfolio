import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiClock } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import { work } from '../../data/portfolioData'
import { fadeInUp, viewportOnce } from '../../lib/motion'

export default function Work() {
  return (
    <section id="work" className="py-20">
      <SectionHeading number="02" title="Selected Work" />

      <div className="space-y-6">
        {work.map((project, index) => (
          <motion.article
            key={project.id}
            custom={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="group rounded-lg border border-slate-800 bg-surface p-6 transition-all duration-300 hover:border-accent/40 hover:bg-surface-2 sm:p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-heading text-lg font-semibold text-white transition-colors group-hover:text-accent sm:text-xl">
                {project.title}
              </h3>
              <span className="font-mono text-xs text-slate-500">{project.period}</span>
            </div>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
              {project.description}
            </p>

            {project.highlights?.length > 0 && (
              <ul className="mt-4 space-y-1.5">
                {project.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="mt-1 text-accent">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="font-mono text-xs text-slate-500">
                  {tech}
                  {tech !== project.tech[project.tech.length - 1] ? ' ·' : ''}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline flex items-center gap-1.5 text-sm text-white"
                >
                  <FiExternalLink size={14} /> Live Site
                </a>
              ) : (
                <span className="flex items-center gap-1.5 text-sm text-slate-600">
                  <FiClock size={14} /> Coming soon
                </span>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline flex items-center gap-1.5 text-sm text-white"
                >
                  <FiGithub size={14} /> Source
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
