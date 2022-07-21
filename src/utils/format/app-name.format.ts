export const formatAppName = (name: string) => {
  const src = name.split('-')
  const f = src[0].slice(0, 1).toUpperCase()
  const s = src[1].slice(0, 1).toUpperCase()
  const result = `${f}${src[0].slice(1)} ${s}${src[1].slice(1)}`

  return result
}
