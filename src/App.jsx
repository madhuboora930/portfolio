import { ResumeProvider } from "@/context/ResumeContext"
import EditorLayout from "@/components/layout/EditorLayout"
import PrintableResume from "@/components/preview/PrintableResume"

function App() {
  return (
    <ResumeProvider>
      <div className="app-shell">
        <EditorLayout />
      </div>
      <PrintableResume />
    </ResumeProvider>
  )
}

export default App
