import TemplateSwitcher from "./TemplateSwitcher"
import ColorPicker from "./ColorPicker"
import FontPicker from "./FontPicker"

export default function DesignTab() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-white/50">
          Template
        </h3>
        <TemplateSwitcher />
      </div>
      <div>
        <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-white/50">
          Accent Color
        </h3>
        <ColorPicker />
      </div>
      <div>
        <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-white/50">
          Font Pair
        </h3>
        <FontPicker />
      </div>
    </div>
  )
}
