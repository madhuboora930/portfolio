import { getFontPairById } from "@/data/fontPairs"
import { formatDateRange } from "@/utils/formatDateRange"

export default function ModernTemplate({ content, theme }) {
  const font = getFontPairById(theme.fontPairId)
  const { personal, experience, projects, education, skills, languages } = content
  const isCompact = theme.density === "compact"
  const colGap = isCompact ? "gap-4" : "gap-7"
  const itemGap = isCompact ? "gap-3" : "gap-5"
  const bulletList = isCompact ? "mt-1 space-y-0.5" : "mt-1.5 space-y-1"

  return (
    <div
      className="min-h-[1123px] w-[794px]"
      style={{ fontFamily: font.body, color: "#26262b" }}
    >
      <header
        className={isCompact ? "px-10 py-6 text-white" : "px-12 py-9 text-white"}
        style={{ backgroundColor: theme.color }}
      >
        <h1 className="text-3xl font-bold" style={{ fontFamily: font.heading }}>
          {personal.fullName || "Your Name"}
        </h1>
        {personal.title && <p className="mt-1 text-base text-white/85">{personal.title}</p>}
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/80">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
          {personal.website && <span>{personal.website}</span>}
        </div>
      </header>

      <div className={`grid grid-cols-[1fr_260px] gap-8 ${isCompact ? "px-10 py-6" : "px-12 py-9"}`}>
        <main className={`flex flex-col ${colGap}`}>
          {personal.summary && (
            <section>
              <h2
                className="mb-2 text-sm font-bold uppercase tracking-wider"
                style={{ color: theme.color, fontFamily: font.heading }}
              >
                Summary
              </h2>
              <p className="text-sm leading-relaxed text-[#3a3a40]">{personal.summary}</p>
            </section>
          )}

          {experience.length > 0 && (
            <section>
              <h2
                className="mb-3 text-sm font-bold uppercase tracking-wider"
                style={{ color: theme.color, fontFamily: font.heading }}
              >
                Experience
              </h2>
              <div className={`flex flex-col ${itemGap}`}>
                {experience.map((item) => (
                  <div key={item.id}>
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-sm font-semibold" style={{ fontFamily: font.heading }}>
                        {item.role}
                      </h3>
                      <span className="shrink-0 text-xs text-[#6b6b73]">
                        {formatDateRange(item.startDate, item.endDate, item.current)}
                      </span>
                    </div>
                    <p className="text-xs text-[#6b6b73]">
                      {item.company}
                      {item.location && ` · ${item.location}`}
                    </p>
                    {item.bullets.filter(Boolean).length > 0 && (
                      <ul className={`list-disc pl-4 text-sm leading-relaxed text-[#3a3a40] ${bulletList}`}>
                        {item.bullets.filter(Boolean).map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {projects.length > 0 && (
            <section>
              <h2
                className="mb-3 text-sm font-bold uppercase tracking-wider"
                style={{ color: theme.color, fontFamily: font.heading }}
              >
                Projects
              </h2>
              <div className={`flex flex-col ${itemGap}`}>
                {projects.map((item) => (
                  <div key={item.id}>
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-sm font-semibold" style={{ fontFamily: font.heading }}>
                        {item.name}
                      </h3>
                      {item.link && (
                        <span className="shrink-0 text-xs text-[#6b6b73]">{item.link}</span>
                      )}
                    </div>
                    {item.tech && <p className="text-xs text-[#6b6b73]">{item.tech}</p>}
                    {item.bullets.filter(Boolean).length > 0 && (
                      <ul className={`list-disc pl-4 text-sm leading-relaxed text-[#3a3a40] ${bulletList}`}>
                        {item.bullets.filter(Boolean).map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>

        <aside className={`flex flex-col ${colGap}`}>
          {education.length > 0 && (
            <section>
              <h2
                className="mb-3 text-xs font-bold uppercase tracking-wider"
                style={{ color: theme.color, fontFamily: font.heading }}
              >
                Education
              </h2>
              <div className="flex flex-col gap-3">
                {education.map((item) => (
                  <div key={item.id}>
                    <h3 className="text-xs font-semibold" style={{ fontFamily: font.heading }}>
                      {item.degree}
                    </h3>
                    <p className="text-xs text-[#6b6b73]">{item.school}</p>
                    <p className="text-xs text-[#6b6b73]">
                      {formatDateRange(item.startDate, item.endDate, false)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {skills.length > 0 && (
            <section>
              <h2
                className="mb-2 text-xs font-bold uppercase tracking-wider"
                style={{ color: theme.color, fontFamily: font.heading }}
              >
                Skills
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full px-2.5 py-1 text-[11px]"
                    style={{ backgroundColor: `${theme.color}1a`, color: theme.color }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {languages.length > 0 && (
            <section>
              <h2
                className="mb-2 text-xs font-bold uppercase tracking-wider"
                style={{ color: theme.color, fontFamily: font.heading }}
              >
                Languages
              </h2>
              <ul className="flex flex-col gap-1 text-xs text-[#3a3a40]">
                {languages.map((lang) => (
                  <li key={lang.id}>
                    {lang.name}
                    {lang.level && <span className="text-[#6b6b73]"> — {lang.level}</span>}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </aside>
      </div>
    </div>
  )
}
