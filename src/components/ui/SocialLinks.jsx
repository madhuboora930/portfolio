import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { contact } from '../../data/portfolioData'

export default function SocialLinks({ className = '' }) {
  const links = [
    { key: 'email', label: 'Email', icon: FiMail, href: `mailto:${contact.email}` },
    { key: 'linkedin', label: 'LinkedIn', icon: FiLinkedin, href: contact.linkedin },
    { key: 'github', label: 'GitHub', icon: FiGithub, href: contact.github },
  ]

  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {links.map(({ key, label, icon: Icon, href }) => {
        if (!href) {
          return (
            <span key={key} title={`${label} coming soon`} className="text-slate-600">
              <Icon size={19} />
            </span>
          )
        }
        return (
          <a
            key={key}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            aria-label={label}
            title={label}
            className="text-slate-400 transition-colors duration-200 hover:text-accent"
          >
            <Icon size={19} />
          </a>
        )
      })}
    </div>
  )
}
