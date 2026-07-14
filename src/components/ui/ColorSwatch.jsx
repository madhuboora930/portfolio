import { FiCheck } from "react-icons/fi"

export default function ColorSwatch({ color, isActive, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label ?? color}
      aria-pressed={isActive}
      className={`flex h-9 w-9 items-center justify-center rounded-full ring-offset-2 ring-offset-panel transition-all ${
        isActive ? "ring-2 ring-white" : "hover:scale-110"
      }`}
      style={{ backgroundColor: color }}
    >
      {isActive && <FiCheck size={14} className="text-white drop-shadow" />}
    </button>
  )
}
