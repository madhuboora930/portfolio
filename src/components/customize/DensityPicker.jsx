import { useResume } from "@/context/ResumeContext"

const OPTIONS = [
  { id: "standard", label: "Standard", hint: "Comfortable spacing" },
  { id: "compact", label: "Compact", hint: "Fits more on one page" },
]

export default function DensityPicker() {
  const { document, setDensity } = useResume()

  return (
    <div className="flex flex-col gap-2">
      {OPTIONS.map((option) => {
        const isActive = document.theme.density === option.id
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => setDensity(option.id)}
            aria-pressed={isActive}
            className={`flex items-center justify-between rounded-lg border px-3.5 py-2.5 text-left transition-colors ${
              isActive ? "border-indigo bg-indigo/10" : "border-line hover:border-white/25"
            }`}
          >
            <span className="text-sm text-white">{option.label}</span>
            <span className="text-xs text-white/50">{option.hint}</span>
          </button>
        )
      })}
    </div>
  )
}
