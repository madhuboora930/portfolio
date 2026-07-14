const VARIANTS = {
  default: "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white",
  danger: "bg-white/5 text-white/50 hover:bg-rose-500/10 hover:text-rose-300",
  accent: "bg-indigo/15 text-indigo hover:bg-indigo/25",
}

export default function IconButton({
  children,
  variant = "default",
  className = "",
  ...rest
}) {
  return (
    <button
      type="button"
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-40 ${VARIANTS[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
