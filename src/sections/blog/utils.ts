import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { Post } from "~/sections/blog/types"

const filePathToFileName = (path: string) =>
  path
    .split("/")
    .pop()
    ?.replace(/\.mdx?$/, "") ?? ""

// POSTS_PATH is useful when you want to get the path to a specific file
const POSTS_PATH =
  // path.resolve("../../posts")
  path.join(process.cwd(), "./src/posts")

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
})

export const getPost = (slug: string): Post => {
  const filePath = path.join(POSTS_PATH, `${slug}.mdx`)

  const source = fs.readFileSync(filePath)

  const { content, data } = matter(source)

  const fileName = filePathToFileName(filePath)

  // Get file stats
  const fileStats = fs.statSync(filePath)

  return {
    content,
    data: { ...data, date: dateFormatter.format(fileStats.birthtime) },
    slug: fileName,
  }
}

export const getPosts = (): Post[] => {
  return postFilePaths
    .map((filePath) => getPost(filePathToFileName(filePath)))
    .sort(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
    )
}
