import { ResumeProvider } from "@/context/ResumeContext"
import EditorLayout from "@/components/layout/EditorLayout"

function App() {
  return (
    <ResumeProvider>
      <EditorLayout />
    </ResumeProvider>
  )
}

export default App
