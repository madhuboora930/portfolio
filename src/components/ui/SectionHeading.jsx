import { motion } from 'framer-motion'
import { fadeInUp, viewportOnce } from '../../lib/motion'

export default function SectionHeading({ number, title }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mb-8 flex items-center gap-3"
    >
      <span className="font-mono text-lg text-accent">{number}.</span>
      <h2 className="font-heading text-2xl font-semibold text-white">{title}</h2>
      <span className="hidden h-px flex-1 bg-slate-800 sm:block" />
    </motion.div>
  )
}
