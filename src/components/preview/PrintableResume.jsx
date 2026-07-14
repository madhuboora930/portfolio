import { useResume } from "@/context/ResumeContext"
import { getTemplateComponent } from "@/components/templates"

export default function PrintableResume() {
  const { document } = useResume()
  const TemplateComponent = getTemplateComponent(document.templateId)

  return (
    <div className="print-only">
      <div className="paper">
        <TemplateComponent content={document.content} theme={document.theme} />
      </div>
    </div>
  )
}
