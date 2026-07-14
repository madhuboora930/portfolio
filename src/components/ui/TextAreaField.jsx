export default function TextAreaField({
  label,
  value,
  onChange,
  placeholder,
  rows = 3,
  className = "",
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className}`}>
      {label && <span className="text-xs font-medium text-white/60">{label}</span>}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="resize-none rounded-lg border border-line bg-panel-2 px-3 py-2 text-sm leading-relaxed text-white outline-none transition-colors placeholder:text-white/30 focus:border-indigo/60"
      />
    </label>
  )
}
