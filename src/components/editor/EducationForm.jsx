import { FiPlus } from "react-icons/fi"
import { useResume } from "@/context/ResumeContext"
import TextField from "@/components/ui/TextField"
import TextAreaField from "@/components/ui/TextAreaField"
import ItemCard from "@/components/ui/ItemCard"
import Button from "@/components/ui/Button"

export default function EducationForm() {
  const { document, addEducation, updateEducation, removeEducation } = useResume()
  const { education } = document.content

  return (
    <div className="flex flex-col gap-3">
      {education.length === 0 && (
        <p className="text-xs text-white/40">No education added yet.</p>
      )}
      {education.map((item, index) => (
        <ItemCard
          key={item.id}
          title={item.degree || `Education ${index + 1}`}
          onRemove={() => removeEducation(item.id)}
        >
          <div className="grid grid-cols-2 gap-3">
            <TextField
              label="Degree"
              value={item.degree}
              onChange={(value) => updateEducation(item.id, { degree: value })}
              placeholder="B.F.A. in Graphic Design"
              className="col-span-2"
            />
            <TextField
              label="School"
              value={item.school}
              onChange={(value) => updateEducation(item.id, { school: value })}
              placeholder="University of Texas"
            />
            <TextField
              label="Location"
              value={item.location}
              onChange={(value) => updateEducation(item.id, { location: value })}
              placeholder="Austin, TX"
            />
            <TextField
              label="Start"
              value={item.startDate}
              onChange={(value) => updateEducation(item.id, { startDate: value })}
              placeholder="2015"
            />
            <TextField
              label="End"
              value={item.endDate}
              onChange={(value) => updateEducation(item.id, { endDate: value })}
              placeholder="2019"
            />
          </div>
          <TextAreaField
            label="Details (optional)"
            value={item.detail}
            onChange={(value) => updateEducation(item.id, { detail: value })}
            placeholder="Relevant coursework, honors, GPA..."
            rows={2}
          />
        </ItemCard>
      ))}
      <Button variant="outline" onClick={addEducation} className="self-start">
        <FiPlus size={14} />
        Add Education
      </Button>
    </div>
  )
}
