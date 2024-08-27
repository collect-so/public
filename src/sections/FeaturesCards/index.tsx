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
  // {
  //   icon: Zap,
  //   title: "Easy Setup",
  //   className: cx("row-span-2 col-span-1"),
  //   description: (
  //     <>
  //       Create an account, obtain an API Token, and hit the ground running. Just
  //       a quick read through{" "}
  //       <Link href={links.getStarted}>Getting Started</Link> guide (2 mins read)
  //       equips you with all you need.
  //     </>
  //   ),
  //
  //   color: "purple",
  // },
  {
    icon: Database,
    title: "Next Generation Database",
    className: cx("row-span-2 col-span-1"),
    description:
      "Every project comes with our next-generation database, allowing you to handle deeply nested, complex data without sacrificing performance or reliability.",
    color: "green",
    points: [
      "ACID Compliant Reliability",
      "No Query Language Required",
      "Lightning-Fast 2ms Writes",
      "Zero Data Modeling Hassles",
      "Instantly Normalize Any JSON/CSV",
    ],
  },
  {
    icon: Zap,
    title: "Kept Simple and Efficient",
    className: cx("row-span-1 col-span-1"),
    description: (
      <>
        Performance is Collect's top priority. Streamlined architecture ensures
        API remains steadfast even in complex scenarios. Always up and running,
        no surprises.
      </>
    ),
    color: "orange",
    points: [],
  },
  {
    icon: Search,
    title: "Ultimate Searching Features",
    className: cx("row-span-1"),
    color: "blue",
    description:
      "Effortlessly navigate through large and complex datasets with Collect. Collect simplifies the creation of feature-rich search engines, handling even the most complex scenarios with ease.",
    // description: (
    //   <>
    //     Navigating through large and complex datasets is always challenging.
    //     Building feature-rich search engines with Collect is not a big deal
    //     anymore. Even for truly complex scenarios.
    //   </>
    // ),
    points: [],
  },
  {
    icon: Code,
    color: "pink",
    title: "Type-Safe by Design",
    className: cx("row-span-1 "),
    description:
      "Enjoy automated type inference and suggestions without writing any types or interfaces. This ensures your code remains clean, efficient, and error-free.",
    points: [],
  },
  {
    icon: Layers,
    color: "red",
    title: "Framework Agnostic",
    className: cx("row-span-1 col-span-1"),
    description:
      "Collect seamlessly integrates with any tech stack or programming language through its robust REST API and SDK, maintaining simplicity while offering powerful functionality.",
    points: [],
  },
] as const

const Feat = ({
  title,
  description,
  icon: Icon,
  color = "orange",
  className,
  idx,
  points,
}: {
  title: ReactNode
  description: ReactNode
  icon: FunctionComponent<{ className?: string }>
  color: keyof typeof colors
  className: string
  points: ReadonlyArray<string>
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
          {points.length ? (
            <div className="flex flex-col mt-8 gap-2">
              {points?.map((p) => (
                <div className="flex items-center" key={p}>
                  <CheckIcon size={16} className="text-green-500" />
                  <span className="text-base">{p}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </GridItem>
  )
}

export function FeaturesCards() {
  return (
    <Section className="container">
      <Grid
        className="grid-rows-2  gap-5"
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
              points={feat.points}
              idx={idx}
            />
          )
        })}
      </Grid>
    </Section>
  )
}
