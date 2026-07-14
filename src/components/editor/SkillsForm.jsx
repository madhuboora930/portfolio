import { useState } from "react"
import { FiX } from "react-icons/fi"
import { useResume } from "@/context/ResumeContext"

export default function SkillsForm() {
  const { document, setSkills } = useResume()
  const { skills } = document.content
  const [draft, setDraft] = useState("")

  const addSkill = () => {
    const trimmed = draft.trim()
    if (!trimmed || skills.includes(trimmed)) {
      setDraft("")
      return
    }
    setSkills([...skills, trimmed])
    setDraft("")
  }

  const removeSkill = (skill) => {
    setSkills(skills.filter((item) => item !== skill))
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="flex items-center gap-1.5 rounded-full border border-line bg-panel-2 px-3 py-1.5 text-xs text-white/80"
          >
            {skill}
            <button
              type="button"
              onClick={() => removeSkill(skill)}
              aria-label={`Remove ${skill}`}
              className="text-white/40 hover:text-rose-300"
            >
              <FiX size={12} />
            </button>
          </span>
        ))}
        {skills.length === 0 && <p className="text-xs text-white/40">No skills added yet.</p>}
      </div>
      <input
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault()
            addSkill()
          }
        }}
        placeholder="Type a skill and press Enter"
        className="rounded-lg border border-line bg-panel-2 px-3 py-2 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-indigo/60"
      />
    </div>
  )
}
