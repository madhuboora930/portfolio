import SidebarTemplate from "./SidebarTemplate"
import MinimalTemplate from "./MinimalTemplate"
import ModernTemplate from "./ModernTemplate"
import TimelineTemplate from "./TimelineTemplate"
import BoldTemplate from "./BoldTemplate"
import AtsTemplate from "./AtsTemplate"

export const templateComponents = {
  sidebar: SidebarTemplate,
  minimal: MinimalTemplate,
  modern: ModernTemplate,
  timeline: TimelineTemplate,
  bold: BoldTemplate,
  ats: AtsTemplate,
}

export function getTemplateComponent(id) {
  return templateComponents[id] ?? SidebarTemplate
}
