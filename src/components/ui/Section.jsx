import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FiChevronDown } from "react-icons/fi"

export default function Section({ title, icon: Icon, defaultOpen = false, children }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="panel rounded-xl">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex w-full items-center justify-between gap-2 px-4 py-3.5 text-left"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2.5 text-sm font-semibold text-white">
          {Icon && <Icon size={16} className="text-indigo" />}
          {title}
        </span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <FiChevronDown size={16} className="text-white/40" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-4 border-t border-line px-4 py-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
