const VARIANTS = {
  primary: "bg-indigo text-white shadow-lg shadow-indigo/25 hover:bg-indigo-dim",
  ghost: "bg-white/5 text-white/80 hover:bg-white/10 hover:text-white",
  outline: "border border-line text-white/70 hover:border-indigo/50 hover:text-white",
  danger: "bg-white/5 text-rose-300 hover:bg-rose-500/10",
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  as: Component = "button",
  ...rest
}) {
  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-40 ${VARIANTS[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  )
}
