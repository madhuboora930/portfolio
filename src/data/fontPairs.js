export const fontPairs = [
  { id: "modern", label: "Modern", heading: "'Poppins', sans-serif", body: "'Inter', sans-serif" },
  {
    id: "classic",
    label: "Classic",
    heading: "'Merriweather', serif",
    body: "'Source Sans 3', sans-serif",
  },
  {
    id: "elegant",
    label: "Elegant",
    heading: "'Playfair Display', serif",
    body: "'Lora', serif",
  },
  { id: "minimal", label: "Minimal", heading: "'Inter', sans-serif", body: "'Inter', sans-serif" },
  {
    id: "bold",
    label: "Bold",
    heading: "'Montserrat', sans-serif",
    body: "'Roboto', sans-serif",
  },
]

export function getFontPairById(id) {
  return fontPairs.find((pair) => pair.id === id) ?? fontPairs[0]
}
