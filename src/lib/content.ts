import { SITE } from "@/consts"
import { getCollection, type CollectionEntry } from "astro:content"

export const pageTitle = (title: string) => `${title} | ${SITE.title}`

export async function getWriting(
  options: { includeDrafts?: boolean } = {},
): Promise<CollectionEntry<"writing">[]> {
  const entries = await getCollection(
    "writing",
    ({ data }) => options.includeDrafts || !data.draft,
  )
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
}

export async function getTags(): Promise<
  Map<string, CollectionEntry<"writing">[]>
> {
  const posts = await getWriting()
  const tags = new Map<string, CollectionEntry<"writing">[]>()
  for (const post of posts) {
    for (const tag of new Set(post.data.tags ?? [])) {
      const tagged = tags.get(tag)
      if (tagged) tagged.push(post)
      else tags.set(tag, [post])
    }
  }
  return new Map(
    [...tags].sort(
      ([a, postsA], [b, postsB]) =>
        postsB.length - postsA.length || a.localeCompare(b),
    ),
  )
}
