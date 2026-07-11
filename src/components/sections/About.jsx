import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { personal, skills, currentlyLearning } from '../../data/portfolioData'
import { fadeInUp, staggerContainer, viewportOnce } from '../../lib/motion'

export default function About() {
  return (
    <section id="about" className="py-20">
      <SectionHeading number="01" title="About" />

      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-xl leading-relaxed text-slate-400"
      >
        {personal.about}
      </motion.p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-8 grid max-w-xl grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3"
      >
        {skills.map((skill) => (
          <motion.div key={skill} variants={fadeInUp} className="flex items-center gap-2 text-sm text-slate-300">
            <span className="text-accent">▹</span>
            {skill}
          </motion.div>
        ))}
      </motion.div>

      {currentlyLearning.length > 0 && (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-8 max-w-xl"
        >
          <p className="font-mono text-xs tracking-widest text-slate-500 uppercase">Currently learning</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {currentlyLearning.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  )
}
