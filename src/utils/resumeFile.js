export function downloadResumeJson(document, filename) {
  const blob = new Blob([JSON.stringify(document, null, 2)], { type: "application/json" })
  const url = URL.createObjectURL(blob)
  const link = window.document.createElement("a")
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}

export function readResumeJsonFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      try {
        resolve(JSON.parse(reader.result))
      } catch {
        reject(new Error("That file isn't a valid ResumeForge backup."))
      }
    }
    reader.onerror = () => reject(reader.error)
    reader.readAsText(file)
  })
}
