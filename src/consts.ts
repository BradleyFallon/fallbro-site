import type { SvgComponent } from "astro/types"
import Email from "@/assets/icons/email.svg"
import GitHub from "@/assets/icons/github.svg"
import RSS from "@/assets/icons/rss.svg"
import Twitter from "@/assets/icons/twitter.svg"

export const SITE = {
  title: "FALLBRO",
  description:
    "Bradley Fallon's software, experiments, writing, and strange useful things.",
  locale: "en-US",
  dir: "ltr",
  defaultPageImage: "/og.png",
  defaultPostImage: "/og.png",
} as const

export const NAVIGATION = [
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/toys", label: "Toys" },
  { href: "/about", label: "About" },
]

export const SOCIALS: { href: string; label: string; icon: SvgComponent }[] = [
  { href: "https://github.com/BradleyFallon", label: "GitHub", icon: GitHub },
  { href: "https://twitter.com/fallbro", label: "X / Twitter", icon: Twitter },
  { href: "mailto:bradley.fallon@gmail.com", label: "Email", icon: Email },
  { href: "/rss.xml", label: "RSS", icon: RSS },
]
