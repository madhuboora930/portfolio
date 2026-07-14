import { useRef, useState } from "react"
import { FiArrowLeft, FiDownload, FiRotateCcw, FiSave, FiUpload } from "react-icons/fi"
import { useResume } from "@/context/ResumeContext"
import { downloadResumeJson, readResumeJsonFile } from "@/utils/resumeFile"
import Button from "@/components/ui/Button"
import IconButton from "@/components/ui/IconButton"

export default function TopBar({ onDownload }) {
  const { document: resumeDocument, resetToSample, loadDocument } = useResume()
  const fileInputRef = useRef(null)
  const [feedback, setFeedback] = useState("")

  const flashFeedback = (message) => {
    setFeedback(message)
    setTimeout(() => setFeedback(""), 2500)
  }

  const handleReset = () => {
    if (window.confirm("Reset the editor back to sample content? This will replace your current resume.")) {
      resetToSample()
    }
  }

  const handleSave = () => {
    const name = resumeDocument.content.personal.fullName || "resume"
    const filename = `${name.trim().toLowerCase().replace(/\s+/g, "-")}-resumeforge.json`
    downloadResumeJson(resumeDocument, filename)
    flashFeedback("Saved!")
  }

  const handleLoadClick = () => fileInputRef.current?.click()

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0]
    event.target.value = ""
    if (!file) return

    try {
      const loaded = await readResumeJsonFile(file)
      loadDocument(loaded)
      flashFeedback("Loaded!")
    } catch {
      window.alert("Couldn't read that file. Please pick a ResumeForge backup (.json) file.")
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
        {feedback && <span className="text-xs text-indigo">{feedback}</span>}
        <IconButton
          onClick={handleReset}
          aria-label="Reset to sample content"
          title="Reset to sample content"
        >
          <FiRotateCcw size={14} />
        </IconButton>
        <IconButton
          onClick={handleSave}
          aria-label="Save a backup file of your resume data"
          title="Save a backup file"
        >
          <FiSave size={14} />
        </IconButton>
        <IconButton
          onClick={handleLoadClick}
          aria-label="Load your resume data from a backup file"
          title="Load a backup file"
        >
          <FiUpload size={14} />
        </IconButton>
        <input
          ref={fileInputRef}
          type="file"
          accept="application/json"
          onChange={handleFileChange}
          className="hidden"
        />
        <Button onClick={onDownload}>
          <FiDownload size={14} />
          Download PDF
        </Button>
      </div>
    </header>
  )
}
