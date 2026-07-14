import { FiPlus } from "react-icons/fi"
import { useResume } from "@/context/ResumeContext"
import TextField from "@/components/ui/TextField"
import ItemCard from "@/components/ui/ItemCard"
import Button from "@/components/ui/Button"

export default function LanguagesForm() {
  const { document, addLanguage, updateLanguage, removeLanguage } = useResume()
  const { languages } = document.content

  return (
    <div className="flex flex-col gap-3">
      {languages.length === 0 && (
        <p className="text-xs text-white/40">No languages added yet.</p>
      )}
      {languages.map((item, index) => (
        <ItemCard
          key={item.id}
          title={item.name || `Language ${index + 1}`}
          onRemove={() => removeLanguage(item.id)}
        >
          <div className="grid grid-cols-2 gap-3">
            <TextField
              label="Language"
              value={item.name}
              onChange={(value) => updateLanguage(item.id, { name: value })}
              placeholder="Spanish"
            />
            <TextField
              label="Level"
              value={item.level}
              onChange={(value) => updateLanguage(item.id, { level: value })}
              placeholder="Conversational"
            />
          </div>
        </ItemCard>
      ))}
      <Button variant="outline" onClick={addLanguage} className="self-start">
        <FiPlus size={14} />
        Add Language
      </Button>
    </div>
  )
}
