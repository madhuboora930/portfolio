export default function TextField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  disabled = false,
  autoComplete = "off",
  className = "",
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className}`}>
      {label && <span className="text-xs font-medium text-white/60">{label}</span>}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete={autoComplete}
        className="rounded-lg border border-line bg-panel-2 px-3 py-2 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-indigo/60 disabled:cursor-not-allowed disabled:opacity-50"
      />
    </label>
  )
}
