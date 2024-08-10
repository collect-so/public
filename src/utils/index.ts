export const getAbsoluteURL = (path: string = "/") => {
  if (typeof window === "undefined") {
    return path
  }
  return `${window.location.origin}${path}`
}
