import { getFontPairById } from "@/data/fontPairs"
import { formatDateRange } from "@/utils/formatDateRange"

export default function MinimalTemplate({ content, theme }) {
  const font = getFontPairById(theme.fontPairId)
  const { personal, experience, projects, education, skills, languages } = content

  const contactLine = [personal.email, personal.phone, personal.location, personal.website]
    .filter(Boolean)
    .join("   ·   ")

  return (
    <div
      className="min-h-[1123px] w-[794px] px-16 py-14"
      style={{ fontFamily: font.body, color: "#26262b" }}
    >
      <header className="mb-8 text-center">
        <h1
          className="text-3xl font-semibold tracking-tight"
          style={{ fontFamily: font.heading }}
        >
          {personal.fullName || "Your Name"}
        </h1>
        {personal.title && <p className="mt-1 text-sm text-[#6b6b73]">{personal.title}</p>}
        {contactLine && <p className="mt-3 text-xs text-[#6b6b73]">{contactLine}</p>}
      </header>

      <div className="mx-auto mb-8 h-px w-full" style={{ backgroundColor: theme.color }} />

      {personal.summary && (
        <section className="mb-8">
          <p className="text-center text-sm leading-relaxed text-[#3a3a40]">{personal.summary}</p>
        </section>
      )}

      {experience.length > 0 && (
        <section className="mb-8">
          <h2
            className="mb-4 text-center text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: theme.color, fontFamily: font.heading }}
          >
            Experience
          </h2>
          <div className="flex flex-col gap-5">
            {experience.map((item) => (
              <div key={item.id}>
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-sm font-semibold" style={{ fontFamily: font.heading }}>
                    {item.role}{item.company && `, ${item.company}`}
                  </h3>
                  <span className="shrink-0 text-xs text-[#6b6b73]">
                    {formatDateRange(item.startDate, item.endDate, item.current)}
                  </span>
                </div>
                {item.location && <p className="text-xs text-[#6b6b73]">{item.location}</p>}
                {item.bullets.filter(Boolean).length > 0 && (
                  <ul className="mt-1.5 list-disc space-y-1 pl-4 text-sm leading-relaxed text-[#3a3a40]">
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
        <section className="mb-8">
          <h2
            className="mb-4 text-center text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: theme.color, fontFamily: font.heading }}
          >
            Projects
          </h2>
          <div className="flex flex-col gap-5">
            {projects.map((item) => (
              <div key={item.id}>
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-sm font-semibold" style={{ fontFamily: font.heading }}>
                    {item.name}
                  </h3>
                  {item.link && <span className="shrink-0 text-xs text-[#6b6b73]">{item.link}</span>}
                </div>
                {item.tech && <p className="text-xs text-[#6b6b73]">{item.tech}</p>}
                {item.bullets.filter(Boolean).length > 0 && (
                  <ul className="mt-1.5 list-disc space-y-1 pl-4 text-sm leading-relaxed text-[#3a3a40]">
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
        <section className="mb-8">
          <h2
            className="mb-4 text-center text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: theme.color, fontFamily: font.heading }}
          >
            Education
          </h2>
          <div className="flex flex-col gap-3">
            {education.map((item) => (
              <div key={item.id}>
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-sm font-semibold" style={{ fontFamily: font.heading }}>
                    {item.degree}
                  </h3>
                  <span className="shrink-0 text-xs text-[#6b6b73]">
                    {formatDateRange(item.startDate, item.endDate, false)}
                  </span>
                </div>
                <p className="text-xs text-[#6b6b73]">
                  {item.school}
                  {item.location && ` · ${item.location}`}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {(skills.length > 0 || languages.length > 0) && (
        <section className="flex justify-center gap-16 text-center">
          {skills.length > 0 && (
            <div>
              <h2
                className="mb-2 text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: theme.color, fontFamily: font.heading }}
              >
                Skills
              </h2>
              <p className="max-w-xs text-sm text-[#3a3a40]">{skills.join(" · ")}</p>
            </div>
          )}
          {languages.length > 0 && (
            <div>
              <h2
                className="mb-2 text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: theme.color, fontFamily: font.heading }}
              >
                Languages
              </h2>
              <p className="text-sm text-[#3a3a40]">
                {languages.map((lang) => lang.name).join(" · ")}
              </p>
            </div>
          )}
        </section>
      )}
    </div>
  )
}
