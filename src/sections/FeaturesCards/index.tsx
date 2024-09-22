import classNames from "classnames"
import {
  ArrowUpRight,
  CheckIcon,
  Code,
  Cpu,
  Database,
  FileText,
  Layers,
  Search,
  Zap,
} from "lucide-react"
import NextLink from "next/link"
import { FunctionComponent, ReactNode } from "react"
import { Grid, GridItem } from "~/components/Grid"
import { Link } from "~/components/Link"

import { Section } from "~/components/Section"
import { WireBox } from "~/components/WireBox"
import { links } from "~/config/urls"
import cx from "classnames"

const colors = {
  orange: "text-accent-orange",
  green: "text-accent-green",
  red: "text-accent-red",
  pink: "text-accent-pink",
  blue: "text-accent-blue",
  purple: "text-accent-purple",
}

const colorsBorder = {
  orange: "from-accent-orange/30",
  green: "from-accent-green/30",
  red: "from-accent-red/30",
  pink: "from-accent-pink/30",
  blue: "from-accent-blue/30",
  purple: "from-accent-purple/30",
}

const feats = [
  {
    icon: Database,
    title: "Next Generation Database",
    className: cx("row-span-1 col-span-1"),
    description:
      "Collect is a graph-based Firebase alternative, built for modern apps of any scale. ACID compliant and can handle billions of nodes and relationships.",
    color: "green",
  },

  {
    icon: Search,
    title: "Ultimate Querying",
    className: cx("row-span-1"),
    color: "blue",
    description:
      "Handle complex datasets effortlessly and fast, without needing a query language—just use simple declarative descriptions.",
  },

  {
    icon: Layers,
    color: "red",
    title: "Framework Agnostic",
    className: cx("row-span-1 col-span-1"),
    description:
      "Collect integrates easily with any tech stack or language using its REST API and SDK, offering simple yet powerful functionality.",
  },
] as const

const Feat = ({
  title,
  description,
  icon: Icon,
  color = "orange",
  className,
  idx,
}: {
  title: ReactNode
  description: ReactNode
  icon: FunctionComponent<{ className?: string }>
  color: keyof typeof colors
  className: string
  idx: number
}) => {
  return (
    <GridItem
      idx={idx}
      lastOfFirstRow="!bg-gradient-to-bl"
      firstOfLastRow="!bg-gradient-to-tr"
      firstOfMiddleRow="bg-gradient-to-r"
      lastOfMiddleRow="bg-gradient-to-l"
      middleOfFirstRow="bg-gradient-to-b"
      middleOfLastRow="bg-gradient-to-t"
      className={classNames(
        colorsBorder[color],
        className,
        "p-0.5 rounded-xl relative group grid to-stroke",
        "first:bg-gradient-to-br",
        "last:bg-gradient-to-tl",
      )}
    >
      <div
        className={classNames(
          "p-7 bg-fill rounded-3xl relative overflow-hidden flex",
          "rounded-[inherit]",
        )}
      >
        <div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent to-fill pointer-events-none"
          aria-hidden
        >
          <WireBox
            className={classNames("w-full left-0 top-0", colors[color])}
            wireColor="currentColor"
          />
          <div className="absolute inset-0 h-full w-full to-60% bg-gradient-to-b from-transparent to-fill pointer-events-none" />
        </div>

        <div className="self-center relative z-10 flex flex-col gap-4 ">
          <Icon className={classNames("w-12 h-12", colors[color])} />

          <h3 className="typography-lg font-semibold text-content">
            {title}
            <NextLink href="">
              <ArrowUpRight
                className={classNames(
                  "transition translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ml-1 mb-0.5",
                  colors[color],
                )}
              />
            </NextLink>
          </h3>

          <p className="typography-base text-content2">{description}</p>
        </div>
      </div>
    </GridItem>
  )
}

export function FeaturesCards() {
  return (
    <Section className="container">
      <Grid
        className="grid-rows-1 gap-5"
        desktopCols={3}
        tabletCols={2}
        mobileCols={1}
      >
        {feats.map((feat, idx) => {
          return (
            <Feat
              key={feat.title}
              icon={feat.icon}
              className={feat.className}
              title={feat.title}
              description={feat.description}
              color={feat.color}
              idx={idx}
            />
          )
        })}
      </Grid>
    </Section>
  )
}
