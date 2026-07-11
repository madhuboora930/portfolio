import { personal } from '../../data/portfolioData'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 text-center font-mono text-xs text-slate-600">
      <p>
        Designed &amp; built by {personal.name} · {new Date().getFullYear()}
      </p>
    </footer>
  )
}
