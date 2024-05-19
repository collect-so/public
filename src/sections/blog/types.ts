export type Post = {
  content: string
  data: {
    title?: string
    description?: string
    date: string
    image?: string
    tags?: string[]
  }
  slug: string
}
