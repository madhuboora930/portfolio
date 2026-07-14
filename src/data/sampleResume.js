let seed = 0
const nextId = (prefix) => `${prefix}-${(seed += 1)}`

export function createEmptyResume() {
  return {
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
  }
}

export function createSampleResume() {
  return {
    personal: {
      fullName: "Alex Morgan",
      title: "Product Designer",
      email: "alex.morgan@email.com",
      phone: "+1 (555) 123-4567",
      location: "Austin, TX",
      website: "alexmorgan.design",
      summary:
        "Product designer with 6 years of experience shipping user-centered interfaces for SaaS and mobile products. Skilled at translating research into clear, elegant design systems.",
    },
    experience: [
      {
        id: nextId("exp"),
        role: "Senior Product Designer",
        company: "Northwind Labs",
        location: "Austin, TX",
        startDate: "2022",
        endDate: "",
        current: true,
        bullets: [
          "Led end-to-end design for a B2B analytics dashboard used by 40,000+ monthly users",
          "Built and maintained a component library adopted across 5 product teams",
          "Ran quarterly usability studies that informed the mobile redesign roadmap",
        ],
      },
      {
        id: nextId("exp"),
        role: "Product Designer",
        company: "Carden Studio",
        location: "Remote",
        startDate: "2019",
        endDate: "2022",
        current: false,
        bullets: [
          "Designed onboarding flows that reduced drop-off by 28%",
          "Partnered with engineering to ship a responsive design system in React",
        ],
      },
    ],
    projects: [
      {
        id: nextId("proj"),
        name: "Palette — Design Token Sync",
        link: "github.com/alexmorgan/palette",
        tech: "React, Figma API, Node.js",
        bullets: [
          "Built a tool that syncs Figma design tokens to a shared React component library",
          "Used by 3 teams to keep design and code in sync without manual handoff",
        ],
      },
    ],
    education: [
      {
        id: nextId("edu"),
        degree: "B.F.A. in Graphic Design",
        school: "University of Texas at Austin",
        location: "Austin, TX",
        startDate: "2015",
        endDate: "2019",
        detail: "",
      },
    ],
    skills: [
      "Figma",
      "Design Systems",
      "User Research",
      "Prototyping",
      "HTML/CSS",
      "Accessibility",
    ],
    languages: [
      { id: nextId("lang"), name: "English", level: "Native" },
      { id: nextId("lang"), name: "Spanish", level: "Conversational" },
    ],
  }
}

export function createId(prefix) {
  return nextId(prefix)
}
