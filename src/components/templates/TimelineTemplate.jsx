import { getFontPairById } from "@/data/fontPairs"
import { formatDateRange } from "@/utils/formatDateRange"

function TimelineItem({ title, subtitle, date, children, color, isLast }) {
  return (
    <div className="relative flex gap-4 pb-6 pl-1">
      {!isLast && (
        <span
          className="absolute left-[5px] top-3 bottom-0 w-px"
          style={{ backgroundColor: `${color}33` }}
        />
      )}
      <span
        className="relative mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
        style={{ backgroundColor: color }}
      />
      <div className="flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-sm font-semibold text-[#26262b]">{title}</h3>
          <span className="shrink-0 text-xs text-[#6b6b73]">{date}</span>
        </div>
        {subtitle && <p className="text-xs text-[#6b6b73]">{subtitle}</p>}
        {children}
      </div>
    </div>
  )
}

export default function TimelineTemplate({ content, theme }) {
  const font = getFontPairById(theme.fontPairId)
  const { personal, experience, education, skills, languages } = content

  return (
    <div
      className="min-h-[1123px] w-[794px] px-12 py-10"
      style={{ fontFamily: font.body, color: "#26262b" }}
    >
      <header className="mb-8 border-b pb-6" style={{ borderColor: `${theme.color}33` }}>
        <h1 className="text-3xl font-bold" style={{ fontFamily: font.heading, color: theme.color }}>
          {personal.fullName || "Your Name"}
        </h1>
        {personal.title && <p className="mt-1 text-base text-[#3a3a40]">{personal.title}</p>}
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#6b6b73]">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
          {personal.website && <span>{personal.website}</span>}
        </div>
      </header>

      {personal.summary && (
        <section className="mb-8">
          <p className="text-sm leading-relaxed text-[#3a3a40]">{personal.summary}</p>
        </section>
      )}

      {experience.length > 0 && (
        <section className="mb-8">
          <h2
            className="mb-3 text-sm font-bold uppercase tracking-wider"
            style={{ color: theme.color, fontFamily: font.heading }}
          >
            Experience
          </h2>
          <div>
            {experience.map((item, index) => (
              <TimelineItem
                key={item.id}
                title={item.role}
                subtitle={[item.company, item.location].filter(Boolean).join(" · ")}
                date={formatDateRange(item.startDate, item.endDate, item.current)}
                color={theme.color}
                isLast={index === experience.length - 1 && education.length === 0}
              >
                {item.bullets.filter(Boolean).length > 0 && (
                  <ul className="mt-1.5 list-disc space-y-1 pl-4 text-sm leading-relaxed text-[#3a3a40]">
                    {item.bullets.filter(Boolean).map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </TimelineItem>
            ))}
          </div>
        </section>
      )}

      {education.length > 0 && (
        <section className="mb-8">
          <h2
            className="mb-3 text-sm font-bold uppercase tracking-wider"
            style={{ color: theme.color, fontFamily: font.heading }}
          >
            Education
          </h2>
          <div>
            {education.map((item, index) => (
              <TimelineItem
                key={item.id}
                title={item.degree}
                subtitle={[item.school, item.location].filter(Boolean).join(" · ")}
                date={formatDateRange(item.startDate, item.endDate, false)}
                color={theme.color}
                isLast={index === education.length - 1}
              >
                {item.detail && (
                  <p className="mt-1 text-sm leading-relaxed text-[#3a3a40]">{item.detail}</p>
                )}
              </TimelineItem>
            ))}
          </div>
        </section>
      )}

      {(skills.length > 0 || languages.length > 0) && (
        <div className="grid grid-cols-2 gap-8">
          {skills.length > 0 && (
            <section>
              <h2
                className="mb-2 text-sm font-bold uppercase tracking-wider"
                style={{ color: theme.color, fontFamily: font.heading }}
              >
                Skills
              </h2>
              <p className="text-sm leading-relaxed text-[#3a3a40]">{skills.join(" · ")}</p>
            </section>
          )}
          {languages.length > 0 && (
            <section>
              <h2
                className="mb-2 text-sm font-bold uppercase tracking-wider"
                style={{ color: theme.color, fontFamily: font.heading }}
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
      )}
    </div>
  )
}
