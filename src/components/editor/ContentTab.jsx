import { FiUser, FiFileText, FiBriefcase, FiFolder, FiBook, FiAward, FiGlobe } from "react-icons/fi"
import Section from "@/components/ui/Section"
import PersonalInfoForm from "./PersonalInfoForm"
import SummaryForm from "./SummaryForm"
import ExperienceForm from "./ExperienceForm"
import ProjectsForm from "./ProjectsForm"
import EducationForm from "./EducationForm"
import SkillsForm from "./SkillsForm"
import LanguagesForm from "./LanguagesForm"

export default function ContentTab() {
  return (
    <div className="flex flex-col gap-3">
      <Section title="Personal Info" icon={FiUser} defaultOpen>
        <PersonalInfoForm />
      </Section>
      <Section title="Summary" icon={FiFileText}>
        <SummaryForm />
      </Section>
      <Section title="Experience" icon={FiBriefcase}>
        <ExperienceForm />
      </Section>
      <Section title="Projects" icon={FiFolder}>
        <ProjectsForm />
      </Section>
      <Section title="Education" icon={FiBook}>
        <EducationForm />
      </Section>
      <Section title="Skills" icon={FiAward}>
        <SkillsForm />
      </Section>
      <Section title="Languages" icon={FiGlobe}>
        <LanguagesForm />
      </Section>
    </div>
  )
}
