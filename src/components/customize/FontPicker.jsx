import { fontPairs } from "@/data/fontPairs"
import { useResume } from "@/context/ResumeContext"

export default function FontPicker() {
  const { document, setFontPairId } = useResume()

  return (
    <div className="flex flex-col gap-2">
      {fontPairs.map((pair) => {
        const isActive = document.theme.fontPairId === pair.id
        return (
          <button
            key={pair.id}
            type="button"
            onClick={() => setFontPairId(pair.id)}
            aria-pressed={isActive}
            className={`flex items-center justify-between rounded-lg border px-3.5 py-2.5 text-left transition-colors ${
              isActive ? "border-indigo bg-indigo/10" : "border-line hover:border-white/25"
            }`}
          >
            <span style={{ fontFamily: pair.heading }} className="text-sm text-white">
              {pair.label}
            </span>
            <span style={{ fontFamily: pair.body }} className="text-xs text-white/50">
              Aa Bb Cc
            </span>
          </button>
        )
      })}
    </div>
  )
}
