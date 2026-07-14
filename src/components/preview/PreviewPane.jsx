import { forwardRef, useEffect, useRef, useState } from "react"
import { FiMinus, FiPlus } from "react-icons/fi"
import { useResume } from "@/context/ResumeContext"
import { getTemplateComponent } from "@/components/templates"
import IconButton from "@/components/ui/IconButton"

const PAPER_WIDTH = 794
const MIN_ZOOM = 0.25
const MAX_ZOOM = 1.3
const DEFAULT_ZOOM = 0.75
const CONTAINER_PADDING = 48

const PreviewPane = forwardRef(function PreviewPane(_props, ref) {
  const { document } = useResume()
  const TemplateComponent = getTemplateComponent(document.templateId)
  const containerRef = useRef(null)
  const [zoom, setZoom] = useState(DEFAULT_ZOOM)
  const [paperHeight, setPaperHeight] = useState(1123)
  const fitZoomRef = useRef(DEFAULT_ZOOM)

  const computeFitZoom = () => {
    const available = containerRef.current?.clientWidth ?? PAPER_WIDTH
    return Math.min(DEFAULT_ZOOM, Math.max(MIN_ZOOM, (available - CONTAINER_PADDING) / PAPER_WIDTH))
  }

  useEffect(() => {
    const fit = computeFitZoom()
    fitZoomRef.current = fit
    setZoom(fit)

    const handleResize = () => {
      fitZoomRef.current = computeFitZoom()
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const node = ref && "current" in ref ? ref.current : null
    if (!node) return undefined

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setPaperHeight(entry.contentRect.height)
      }
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [ref, document.templateId])

  const zoomIn = () => setZoom((z) => Math.min(MAX_ZOOM, +(z + 0.1).toFixed(2)))
  const zoomOut = () => setZoom((z) => Math.max(MIN_ZOOM, +(z - 0.1).toFixed(2)))
  const resetZoom = () => setZoom(computeFitZoom())

  return (
    <div className="relative flex h-full flex-col">
      <div
        ref={containerRef}
        className="scrollbar-none flex-1 overflow-auto px-6 py-10 sm:px-10"
      >
        <div
          className="print-frame mx-auto"
          style={{ width: PAPER_WIDTH * zoom, height: paperHeight * zoom }}
        >
          <div
            className="print-scale"
            style={{ transform: `scale(${zoom})`, transformOrigin: "top left", width: PAPER_WIDTH }}
          >
            <div ref={ref} className="paper">
              <TemplateComponent content={document.content} theme={document.theme} />
            </div>
          </div>
        </div>
      </div>

      <div className="panel absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full px-2 py-1.5 shadow-xl">
        <IconButton onClick={zoomOut} aria-label="Zoom out">
          <FiMinus size={14} />
        </IconButton>
        <button
          type="button"
          onClick={resetZoom}
          className="w-12 text-center text-xs text-white/60"
        >
          {Math.round(zoom * 100)}%
        </button>
        <IconButton onClick={zoomIn} aria-label="Zoom in">
          <FiPlus size={14} />
        </IconButton>
      </div>
    </div>
  )
})

export default PreviewPane
