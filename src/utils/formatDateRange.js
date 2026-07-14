export function formatDateRange(startDate, endDate, current) {
  const end = current ? "Present" : endDate
  if (!startDate && !end) return ""
  if (!end) return startDate
  return `${startDate} — ${end}`
}
