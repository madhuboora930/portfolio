import { FiPlus } from "react-icons/fi"
import { useResume } from "@/context/ResumeContext"
import TextField from "@/components/ui/TextField"
import TextAreaField from "@/components/ui/TextAreaField"
import ItemCard from "@/components/ui/ItemCard"
import Button from "@/components/ui/Button"

export default function ProjectsForm() {
  const { document, addProject, updateProject, removeProject } = useResume()
  const { projects } = document.content

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-white/40">
        No work experience yet? Add your strongest projects here — they can stand in for (or sit
        alongside) an Experience section.
      </p>
      {projects.length === 0 && (
        <p className="text-xs text-white/40">No projects added yet.</p>
      )}
      {projects.map((item, index) => (
        <ItemCard
          key={item.id}
          title={item.name || `Project ${index + 1}`}
          onRemove={() => removeProject(item.id)}
        >
          <div className="grid grid-cols-2 gap-3">
            <TextField
              label="Project Name"
              value={item.name}
              onChange={(value) => updateProject(item.id, { name: value })}
              placeholder="Palette — Design Token Sync"
              className="col-span-2"
            />
            <TextField
              label="Link (optional)"
              value={item.link}
              onChange={(value) => updateProject(item.id, { link: value })}
              placeholder="github.com/you/project"
              autoComplete="url"
            />
            <TextField
              label="Tech Used"
              value={item.tech}
              onChange={(value) => updateProject(item.id, { tech: value })}
              placeholder="React, Node.js, MongoDB"
            />
          </div>
          <TextAreaField
            label="Highlights (one per line)"
            value={item.bullets.join("\n")}
            onChange={(value) => updateProject(item.id, { bullets: value.split("\n") })}
            placeholder={"Built a tool that syncs design tokens to a component library\nUsed by 3 teams to keep design and code in sync"}
            rows={4}
          />
        </ItemCard>
      ))}
      <Button variant="outline" onClick={addProject} className="self-start">
        <FiPlus size={14} />
        Add Project
      </Button>
    </div>
  )
}
