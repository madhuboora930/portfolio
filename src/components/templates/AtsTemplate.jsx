import { getFontPairById } from "@/data/fontPairs"
import { formatDateRange } from "@/utils/formatDateRange"

export default function AtsTemplate({ content, theme }) {
  const font = getFontPairById(theme.fontPairId)
  const { personal, experience, projects, education, skills, languages } = content
  const isCompact = theme.density === "compact"
  const sectionGap = isCompact ? "mb-4" : "mb-6"
  const itemGap = isCompact ? "gap-2.5" : "gap-4"
  const bulletList = isCompact ? "mt-0.5 space-y-0" : "mt-1 space-y-0.5"

  const contactLine = [personal.email, personal.phone, personal.location, personal.website]
    .filter(Boolean)
    .join("  |  ")

  return (
    <div
      className={isCompact ? "min-h-[1123px] w-[794px] px-12 py-8" : "min-h-[1123px] w-[794px] px-14 py-12"}
      style={{ fontFamily: font.body, color: "#1a1a1a" }}
    >
      <header className={isCompact ? "mb-4" : "mb-6"}>
        <h1 className="text-2xl font-bold" style={{ fontFamily: font.heading }}>
          {personal.fullName || "Your Name"}
        </h1>
        {personal.title && <p className="mt-0.5 text-base text-[#333333]">{personal.title}</p>}
        {contactLine && <p className="mt-1.5 text-xs text-[#333333]">{contactLine}</p>}
      </header>

      {personal.summary && (
        <section className={sectionGap}>
          <h2
            className="mb-1.5 border-b pb-1 text-xs font-bold uppercase tracking-wider"
            style={{ borderColor: theme.color, color: theme.color }}
          >
            Summary
          </h2>
          <p className="text-sm leading-relaxed">{personal.summary}</p>
        </section>
      )}

      {experience.length > 0 && (
        <section className={sectionGap}>
          <h2
            className="mb-2 border-b pb-1 text-xs font-bold uppercase tracking-wider"
            style={{ borderColor: theme.color, color: theme.color }}
          >
            Experience
          </h2>
          <div className={`flex flex-col ${itemGap}`}>
            {experience.map((item) => (
              <div key={item.id}>
                <p className="text-sm font-bold">
                  {item.role}
                  {item.company && ` — ${item.company}`}
                </p>
                <p className="text-xs text-[#4d4d4d]">
                  {[item.location, formatDateRange(item.startDate, item.endDate, item.current)]
                    .filter(Boolean)
                    .join("  |  ")}
                </p>
                {item.bullets.filter(Boolean).length > 0 && (
                  <ul className={`list-disc pl-4 text-sm leading-relaxed ${bulletList}`}>
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
        <section className={sectionGap}>
          <h2
            className="mb-2 border-b pb-1 text-xs font-bold uppercase tracking-wider"
            style={{ borderColor: theme.color, color: theme.color }}
          >
            Projects
          </h2>
          <div className={`flex flex-col ${itemGap}`}>
            {projects.map((item) => (
              <div key={item.id}>
                <p className="text-sm font-bold">{item.name}</p>
                <p className="text-xs text-[#4d4d4d]">
                  {[item.tech, item.link].filter(Boolean).join("  |  ")}
                </p>
                {item.bullets.filter(Boolean).length > 0 && (
                  <ul className={`list-disc pl-4 text-sm leading-relaxed ${bulletList}`}>
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

      {education.length > 0 && (
        <section className={sectionGap}>
          <h2
            className="mb-2 border-b pb-1 text-xs font-bold uppercase tracking-wider"
            style={{ borderColor: theme.color, color: theme.color }}
          >
            Education
          </h2>
          <div className={`flex flex-col ${isCompact ? "gap-2" : "gap-3"}`}>
            {education.map((item) => (
              <div key={item.id}>
                <p className="text-sm font-bold">{item.degree}</p>
                <p className="text-xs text-[#4d4d4d]">
                  {[item.school, item.location, formatDateRange(item.startDate, item.endDate, false)]
                    .filter(Boolean)
                    .join("  |  ")}
                </p>
                {item.detail && <p className="mt-0.5 text-sm leading-relaxed">{item.detail}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {skills.length > 0 && (
        <section className={sectionGap}>
          <h2
            className="mb-1.5 border-b pb-1 text-xs font-bold uppercase tracking-wider"
            style={{ borderColor: theme.color, color: theme.color }}
          >
            Skills
          </h2>
          <p className="text-sm leading-relaxed">{skills.join(", ")}</p>
        </section>
      )}

      {languages.length > 0 && (
        <section>
          <h2
            className="mb-1.5 border-b pb-1 text-xs font-bold uppercase tracking-wider"
            style={{ borderColor: theme.color, color: theme.color }}
          >
            Languages
          </h2>
          <p className="text-sm leading-relaxed">
            {languages.map((lang) => `${lang.name}${lang.level ? ` (${lang.level})` : ""}`).join(", ")}
          </p>
        </section>
      )}
    </div>
  )
}
