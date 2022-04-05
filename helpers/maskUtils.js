export function cleanNumber(value) {
  return value.replace(/\D+/gi, '').slice(1)
}
