import { useRef, useState } from "react"
import { FiEdit3, FiEye } from "react-icons/fi"
import TopBar from "./TopBar"
import ContentTab from "@/components/editor/ContentTab"
import DesignTab from "@/components/customize/DesignTab"
import PreviewPane from "@/components/preview/PreviewPane"

const TABS = [
  { id: "content", label: "Content" },
  { id: "design", label: "Design" },
]

export default function EditorLayout() {
  const paperRef = useRef(null)
  const [tab, setTab] = useState("content")
  const [mobileView, setMobileView] = useState("edit")

  return (
    <div className="flex h-svh flex-col">
      <TopBar onDownload={() => window.print()} />

      <div className="flex flex-1 overflow-hidden">
        <div
          className={`w-full flex-col overflow-hidden border-r border-line md:flex md:w-[400px] ${
            mobileView === "edit" ? "flex" : "hidden"
          }`}
        >
          <div className="flex gap-1 border-b border-line px-4 pt-3">
            {TABS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className={`rounded-t-lg px-4 py-2 text-sm font-medium transition-colors ${
                  tab === item.id
                    ? "bg-panel-2 text-white"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="scrollbar-none flex-1 overflow-y-auto p-4">
            {tab === "content" ? <ContentTab /> : <DesignTab />}
          </div>
        </div>

        <div
          className={`flex-1 bg-ink ${mobileView === "preview" ? "flex" : "hidden"} md:flex`}
        >
          <PreviewPane ref={paperRef} />
        </div>
      </div>

      <div className="panel flex border-t md:hidden">
        <button
          type="button"
          onClick={() => setMobileView("edit")}
          className={`flex flex-1 items-center justify-center gap-1.5 py-3 text-sm font-medium ${
            mobileView === "edit" ? "text-indigo" : "text-white/50"
          }`}
        >
          <FiEdit3 size={15} />
          Edit
        </button>
        <button
          type="button"
          onClick={() => setMobileView("preview")}
          className={`flex flex-1 items-center justify-center gap-1.5 py-3 text-sm font-medium ${
            mobileView === "preview" ? "text-indigo" : "text-white/50"
          }`}
        >
          <FiEye size={15} />
          Preview
        </button>
      </div>
    </div>
  )
}
