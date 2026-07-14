import { FiTrash2 } from "react-icons/fi"
import IconButton from "./IconButton"

export default function ItemCard({ title, onRemove, children }) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-line bg-panel-2/60 p-3.5">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-medium text-white/50">{title}</span>
        <IconButton variant="danger" onClick={onRemove} aria-label={`Remove ${title}`}>
          <FiTrash2 size={13} />
        </IconButton>
      </div>
      {children}
    </div>
  )
}
