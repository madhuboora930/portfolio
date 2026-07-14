export const templates = [
  {
    id: "sidebar",
    name: "Sidebar",
    description: "Dark accent sidebar with contact details and skills alongside the main content.",
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "A clean single-column layout with generous whitespace.",
  },
  {
    id: "modern",
    name: "Modern",
    description: "A two-column split with a bold header band.",
  },
  {
    id: "timeline",
    name: "Timeline",
    description: "An accent timeline rail runs through experience and education.",
  },
  {
    id: "bold",
    name: "Bold",
    description: "A colorful header block for a confident, standout first impression.",
  },
  {
    id: "ats",
    name: "ATS-Friendly",
    description: "Strict single-column, no graphics — built to parse cleanly in applicant tracking systems.",
  },
]

export function getTemplateById(id) {
  return templates.find((template) => template.id === id) ?? templates[0]
}
