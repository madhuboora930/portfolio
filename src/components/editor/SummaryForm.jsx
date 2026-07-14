import { useResume } from "@/context/ResumeContext"
import TextAreaField from "@/components/ui/TextAreaField"

export default function SummaryForm() {
  const { document, updatePersonal } = useResume()

  return (
    <TextAreaField
      label="Professional Summary"
      value={document.content.personal.summary}
      onChange={(value) => updatePersonal({ summary: value })}
      placeholder="A short pitch about your experience and strengths..."
      rows={4}
    />
  )
}
