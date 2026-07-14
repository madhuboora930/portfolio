import { colorPresets } from "@/data/colorPresets"
import { useResume } from "@/context/ResumeContext"
import ColorSwatch from "@/components/ui/ColorSwatch"

export default function ColorPicker() {
  const { document, setAccentColor } = useResume()
  const activeColor = document.theme.color
  const isPreset = colorPresets.some((preset) => preset.value === activeColor)

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {colorPresets.map((preset) => (
        <ColorSwatch
          key={preset.id}
          color={preset.value}
          label={preset.label}
          isActive={activeColor === preset.value}
          onClick={() => setAccentColor(preset.value)}
        />
      ))}
      <label
        className={`relative flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-dashed transition-colors ${
          !isPreset ? "border-white ring-2 ring-white ring-offset-2 ring-offset-panel" : "border-white/30"
        }`}
        style={!isPreset ? { backgroundColor: activeColor } : undefined}
        title="Custom color"
      >
        {isPreset && <span className="text-xs text-white/60">+</span>}
        <input
          type="color"
          value={activeColor}
          onChange={(e) => setAccentColor(e.target.value)}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          aria-label="Custom accent color"
        />
      </label>
    </div>
  )
}
