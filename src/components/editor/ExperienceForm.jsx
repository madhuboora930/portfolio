import { FiPlus } from "react-icons/fi"
import { useResume } from "@/context/ResumeContext"
import TextField from "@/components/ui/TextField"
import TextAreaField from "@/components/ui/TextAreaField"
import ItemCard from "@/components/ui/ItemCard"
import Button from "@/components/ui/Button"

export default function ExperienceForm() {
  const { document, addExperience, updateExperience, removeExperience } = useResume()
  const { experience } = document.content

  return (
    <div className="flex flex-col gap-3">
      {experience.length === 0 && (
        <p className="text-xs text-white/40">No experience added yet.</p>
      )}
      {experience.map((item, index) => (
        <ItemCard
          key={item.id}
          title={item.role || `Experience ${index + 1}`}
          onRemove={() => removeExperience(item.id)}
        >
          <div className="grid grid-cols-2 gap-3">
            <TextField
              label="Role"
              value={item.role}
              onChange={(value) => updateExperience(item.id, { role: value })}
              placeholder="Senior Product Designer"
              className="col-span-2"
            />
            <TextField
              label="Company"
              value={item.company}
              onChange={(value) => updateExperience(item.id, { company: value })}
              placeholder="Northwind Labs"
            />
            <TextField
              label="Location"
              value={item.location}
              onChange={(value) => updateExperience(item.id, { location: value })}
              placeholder="Austin, TX"
            />
            <TextField
              label="Start"
              value={item.startDate}
              onChange={(value) => updateExperience(item.id, { startDate: value })}
              placeholder="2022"
            />
            <TextField
              label="End"
              value={item.current ? "Present" : item.endDate}
              onChange={(value) => updateExperience(item.id, { endDate: value })}
              placeholder="2024"
              disabled={item.current}
            />
          </div>
          <label className="flex items-center gap-2 text-xs text-white/60">
            <input
              type="checkbox"
              checked={item.current}
              onChange={(e) => updateExperience(item.id, { current: e.target.checked })}
              className="h-3.5 w-3.5 accent-indigo"
            />
            I currently work here
          </label>
          <TextAreaField
            label="Highlights (one per line)"
            value={item.bullets.join("\n")}
            onChange={(value) => updateExperience(item.id, { bullets: value.split("\n") })}
            placeholder={"Led design for a dashboard used by 40,000+ users\nBuilt a component library adopted by 5 teams"}
            rows={4}
          />
        </ItemCard>
      ))}
      <Button variant="outline" onClick={addExperience} className="self-start">
        <FiPlus size={14} />
        Add Experience
      </Button>
    </div>
  )
}
