import { createContext, useContext, useMemo } from "react"
import useLocalStorage from "@/hooks/useLocalStorage"
import { createSampleResume, createId } from "@/data/sampleResume"
import { colorPresets } from "@/data/colorPresets"
import { fontPairs } from "@/data/fontPairs"

const ResumeContext = createContext(null)

const STORAGE_KEY = "resumeforge:document"

function createDefaultDocument() {
  return {
    content: createSampleResume(),
    templateId: "sidebar",
    theme: {
      color: colorPresets[0].value,
      fontPairId: fontPairs[0].id,
      density: "standard",
    },
  }
}

export function ResumeProvider({ children }) {
  const [document, setDocument] = useLocalStorage(STORAGE_KEY, createDefaultDocument())

  const updatePersonal = (partial) => {
    setDocument((prev) => ({
      ...prev,
      content: { ...prev.content, personal: { ...prev.content.personal, ...partial } },
    }))
  }

  const addExperience = () => {
    setDocument((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        experience: [
          ...prev.content.experience,
          {
            id: createId("exp"),
            role: "",
            company: "",
            location: "",
            startDate: "",
            endDate: "",
            current: false,
            bullets: [""],
          },
        ],
      },
    }))
  }

  const updateExperience = (id, partial) => {
    setDocument((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        experience: prev.content.experience.map((item) =>
          item.id === id ? { ...item, ...partial } : item,
        ),
      },
    }))
  }

  const removeExperience = (id) => {
    setDocument((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        experience: prev.content.experience.filter((item) => item.id !== id),
      },
    }))
  }

  const addProject = () => {
    setDocument((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        projects: [
          ...(prev.content.projects ?? []),
          {
            id: createId("proj"),
            name: "",
            link: "",
            tech: "",
            bullets: [""],
          },
        ],
      },
    }))
  }

  const updateProject = (id, partial) => {
    setDocument((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        projects: (prev.content.projects ?? []).map((item) =>
          item.id === id ? { ...item, ...partial } : item,
        ),
      },
    }))
  }

  const removeProject = (id) => {
    setDocument((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        projects: (prev.content.projects ?? []).filter((item) => item.id !== id),
      },
    }))
  }

  const addEducation = () => {
    setDocument((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        education: [
          ...prev.content.education,
          {
            id: createId("edu"),
            degree: "",
            school: "",
            location: "",
            startDate: "",
            endDate: "",
            detail: "",
          },
        ],
      },
    }))
  }

  const updateEducation = (id, partial) => {
    setDocument((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        education: prev.content.education.map((item) =>
          item.id === id ? { ...item, ...partial } : item,
        ),
      },
    }))
  }

  const removeEducation = (id) => {
    setDocument((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        education: prev.content.education.filter((item) => item.id !== id),
      },
    }))
  }

  const setSkills = (skills) => {
    setDocument((prev) => ({ ...prev, content: { ...prev.content, skills } }))
  }

  const addLanguage = () => {
    setDocument((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        languages: [
          ...prev.content.languages,
          { id: createId("lang"), name: "", level: "" },
        ],
      },
    }))
  }

  const updateLanguage = (id, partial) => {
    setDocument((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        languages: prev.content.languages.map((item) =>
          item.id === id ? { ...item, ...partial } : item,
        ),
      },
    }))
  }

  const removeLanguage = (id) => {
    setDocument((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        languages: prev.content.languages.filter((item) => item.id !== id),
      },
    }))
  }

  const setTemplateId = (templateId) => {
    setDocument((prev) => ({ ...prev, templateId }))
  }

  const setAccentColor = (color) => {
    setDocument((prev) => ({ ...prev, theme: { ...prev.theme, color } }))
  }

  const setFontPairId = (fontPairId) => {
    setDocument((prev) => ({ ...prev, theme: { ...prev.theme, fontPairId } }))
  }

  const setDensity = (density) => {
    setDocument((prev) => ({ ...prev, theme: { ...prev.theme, density } }))
  }

  const resetToSample = () => setDocument(createDefaultDocument())

  const loadDocument = (loaded) => {
    const fallback = createDefaultDocument()
    setDocument({
      content: {
        personal: { ...fallback.content.personal, ...loaded?.content?.personal },
        experience: Array.isArray(loaded?.content?.experience) ? loaded.content.experience : [],
        projects: Array.isArray(loaded?.content?.projects) ? loaded.content.projects : [],
        education: Array.isArray(loaded?.content?.education) ? loaded.content.education : [],
        skills: Array.isArray(loaded?.content?.skills) ? loaded.content.skills : [],
        languages: Array.isArray(loaded?.content?.languages) ? loaded.content.languages : [],
      },
      templateId: typeof loaded?.templateId === "string" ? loaded.templateId : fallback.templateId,
      theme: {
        color: loaded?.theme?.color ?? fallback.theme.color,
        fontPairId: loaded?.theme?.fontPairId ?? fallback.theme.fontPairId,
        density: loaded?.theme?.density ?? fallback.theme.density,
      },
    })
  }

  const clearAll = () => {
    setDocument((prev) => ({
      ...prev,
      content: {
        personal: {
          fullName: "",
          title: "",
          email: "",
          phone: "",
          location: "",
          website: "",
          summary: "",
        },
        experience: [],
        projects: [],
        education: [],
        skills: [],
        languages: [],
      },
    }))
  }

  const safeDocument = useMemo(
    () => ({
      ...document,
      content: { ...document.content, projects: document.content.projects ?? [] },
      theme: { ...document.theme, density: document.theme.density ?? "standard" },
    }),
    [document],
  )

  const value = useMemo(
    () => ({
      document: safeDocument,
      updatePersonal,
      addExperience,
      updateExperience,
      removeExperience,
      addProject,
      updateProject,
      removeProject,
      addEducation,
      updateEducation,
      removeEducation,
      setSkills,
      addLanguage,
      updateLanguage,
      removeLanguage,
      setTemplateId,
      setAccentColor,
      setFontPairId,
      setDensity,
      resetToSample,
      clearAll,
      loadDocument,
    }),
    [safeDocument],
  )

  return <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
}

export function useResume() {
  const context = useContext(ResumeContext)
  if (!context) {
    throw new Error("useResume must be used within a ResumeProvider")
  }
  return context
}
