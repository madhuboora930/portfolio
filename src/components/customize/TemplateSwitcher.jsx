import { templates } from "@/data/templates"
import { getTemplateComponent } from "@/components/templates"
import { useResume } from "@/context/ResumeContext"

const THUMB_WIDTH = 794
const THUMB_HEIGHT = 1123
const SCALE = 130 / THUMB_WIDTH

export default function TemplateSwitcher() {
  const { document, setTemplateId } = useResume()

  return (
    <div className="grid grid-cols-2 gap-3">
      {templates.map((template) => {
        const TemplateComponent = getTemplateComponent(template.id)
        const isActive = document.templateId === template.id

        return (
          <button
            key={template.id}
            type="button"
            onClick={() => setTemplateId(template.id)}
            aria-pressed={isActive}
            className={`flex flex-col overflow-hidden rounded-lg border text-left transition-colors ${
              isActive ? "border-indigo" : "border-line hover:border-white/25"
            }`}
          >
            <div
              className="relative overflow-hidden bg-white"
              style={{ height: THUMB_HEIGHT * SCALE }}
            >
              <div
                className="pointer-events-none absolute left-0 top-0 origin-top-left"
                style={{ transform: `scale(${SCALE})` }}
              >
                <TemplateComponent content={document.content} theme={document.theme} />
              </div>
            </div>
            <span
              className={`px-2.5 py-1.5 text-xs font-medium ${
                isActive ? "bg-indigo/15 text-indigo" : "bg-panel-2 text-white/70"
              }`}
            >
              {template.name}
            </span>
          </button>
        )
      })}
    </div>
  )
}
