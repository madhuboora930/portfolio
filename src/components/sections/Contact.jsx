import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { contact } from '../../data/portfolioData'
import { fadeInUp, viewportOnce } from '../../lib/motion'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <SectionHeading number="03" title="Contact" />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-xl"
      >
        <p className="leading-relaxed text-slate-400">
          I'm currently open to Frontend Developer roles and always happy to talk about React,
          UI details, or interesting projects. The fastest way to reach me is email.
        </p>

        <a
          href={`mailto:${contact.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-accent/40 px-6 py-3 font-mono text-sm text-accent transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/10"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  )
}
