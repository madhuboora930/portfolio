import { getFontPairById } from "@/data/fontPairs"
import { formatDateRange } from "@/utils/formatDateRange"

export default function SidebarTemplate({ content, theme }) {
  const font = getFontPairById(theme.fontPairId)
  const { personal, experience, projects, education, skills, languages } = content

  return (
    <div
      className="flex min-h-[1123px] w-[794px]"
      style={{ fontFamily: font.body, color: "#26262b" }}
    >
      <aside className="flex w-[260px] shrink-0 flex-col gap-7 px-7 py-10 text-white" style={{ backgroundColor: theme.color }}>
        <div>
          <h1 className="text-2xl font-bold leading-tight" style={{ fontFamily: font.heading }}>
            {personal.fullName || "Your Name"}
          </h1>
          <p className="mt-1 text-sm text-white/80">{personal.title}</p>
        </div>

        <div className="flex flex-col gap-1.5 text-xs text-white/85">
          {personal.email && <p>{personal.email}</p>}
          {personal.phone && <p>{personal.phone}</p>}
          {personal.location && <p>{personal.location}</p>}
          {personal.website && <p>{personal.website}</p>}
        </div>

        {skills.length > 0 && (
          <div>
            <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-white/70">
              Skills
            </h2>
            <ul className="flex flex-col gap-1 text-xs text-white/90">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        {languages.length > 0 && (
          <div>
            <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-white/70">
              Languages
            </h2>
            <ul className="flex flex-col gap-1 text-xs text-white/90">
              {languages.map((lang) => (
                <li key={lang.id}>
                  {lang.name}
                  {lang.level && <span className="text-white/60"> — {lang.level}</span>}
                </li>
              ))}
            </ul>
          </div>
        )}
      </aside>

      <main className="flex-1 px-9 py-10">
        {personal.summary && (
          <section className="mb-7">
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
          <section className="mb-7">
            <h2
              className="mb-3 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.color, fontFamily: font.heading }}
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

        {projects.length > 0 && (
          <section className="mb-7">
            <h2
              className="mb-3 text-sm font-bold uppercase tracking-wider"
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
          <section>
            <h2
              className="mb-3 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.color, fontFamily: font.heading }}
            >
              Education
            </h2>
            <div className="flex flex-col gap-4">
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
                  {item.detail && (
                    <p className="mt-1 text-sm leading-relaxed text-[#3a3a40]">{item.detail}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
