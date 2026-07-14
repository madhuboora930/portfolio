import { getFontPairById } from "@/data/fontPairs"
import { formatDateRange } from "@/utils/formatDateRange"

export default function BoldTemplate({ content, theme }) {
  const font = getFontPairById(theme.fontPairId)
  const { personal, experience, education, skills, languages } = content

  return (
    <div
      className="min-h-[1123px] w-[794px]"
      style={{ fontFamily: font.body, color: "#26262b" }}
    >
      <header
        className="flex flex-col justify-center px-12 py-16 text-white"
        style={{ backgroundColor: theme.color }}
      >
        <h1 className="text-5xl font-bold leading-tight" style={{ fontFamily: font.heading }}>
          {personal.fullName || "Your Name"}
        </h1>
        {personal.title && (
          <p className="mt-2 text-lg font-medium text-white/85">{personal.title}</p>
        )}
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-white/80">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
          {personal.website && <span>{personal.website}</span>}
        </div>
      </header>

      <div className="px-12 py-10">
        {personal.summary && (
          <section className="mb-8">
            <p className="text-sm leading-relaxed text-[#3a3a40]">{personal.summary}</p>
          </section>
        )}

        {experience.length > 0 && (
          <section className="mb-8">
            <h2
              className="mb-4 inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-white"
              style={{ backgroundColor: theme.color, fontFamily: font.heading }}
            >
              Experience
            </h2>
            <div className="flex flex-col gap-5">
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

        <div className="grid grid-cols-2 gap-8">
          {education.length > 0 && (
            <section>
              <h2
                className="mb-3 inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-white"
                style={{ backgroundColor: theme.color, fontFamily: font.heading }}
              >
                Education
              </h2>
              <div className="flex flex-col gap-3">
                {education.map((item) => (
                  <div key={item.id}>
                    <h3 className="text-sm font-semibold" style={{ fontFamily: font.heading }}>
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

          <div className="flex flex-col gap-6">
            {skills.length > 0 && (
              <section>
                <h2
                  className="mb-3 inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-white"
                  style={{ backgroundColor: theme.color, fontFamily: font.heading }}
                >
                  Skills
                </h2>
                <p className="text-sm leading-relaxed text-[#3a3a40]">{skills.join(" · ")}</p>
              </section>
            )}

            {languages.length > 0 && (
              <section>
                <h2
                  className="mb-3 inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-white"
                  style={{ backgroundColor: theme.color, fontFamily: font.heading }}
                >
                  Languages
                </h2>
                <ul className="flex flex-col gap-1 text-sm text-[#3a3a40]">
                  {languages.map((lang) => (
                    <li key={lang.id}>
                      {lang.name}
                      {lang.level && <span className="text-[#6b6b73]"> — {lang.level}</span>}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
