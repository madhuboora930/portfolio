import { FiArrowLeft, FiDownload, FiRotateCcw } from "react-icons/fi"
import { useResume } from "@/context/ResumeContext"
import Button from "@/components/ui/Button"
import IconButton from "@/components/ui/IconButton"

export default function TopBar({ onDownload }) {
  const { resetToSample } = useResume()

  const handleReset = () => {
    if (window.confirm("Reset the editor back to sample content? This will replace your current resume.")) {
      resetToSample()
    }
  }

  return (
    <header className="panel flex items-center justify-between gap-3 border-b px-4 py-3 sm:px-6">
      <div className="flex items-center gap-4">
        <span className="font-semibold tracking-tight text-white">
          Resume<span className="text-indigo">Forge</span>
        </span>
        <a
          href="https://madhuboora.online"
          className="hidden items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs text-white/60 transition-colors hover:border-indigo/50 hover:text-white sm:flex"
        >
          <FiArrowLeft size={12} />
          Portfolio
        </a>
      </div>

      <div className="flex items-center gap-2">
        <IconButton onClick={handleReset} aria-label="Reset to sample content">
          <FiRotateCcw size={14} />
        </IconButton>
        <Button onClick={onDownload}>
          <FiDownload size={14} />
          Download PDF
        </Button>
      </div>
    </header>
  )
}
