export const mapDate = (date) => {
  if (!date) return null
  const parseDate = new Date(date)
  return `${parseDate.getDate()}-${parseDate.getMonth()}-${parseDate.getFullYear()}`
}
