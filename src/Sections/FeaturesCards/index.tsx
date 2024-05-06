import classNames from "classnames";
import {
  ArrowUpRight,
  Code,
  Cpu,
  FileText,
  Layers,
  Search,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";
import { Grid, GridItem } from "~/components/Grid";

import { Section } from "~/components/Section";
import { WireBox } from "~/components/WireBox";
import { links } from "~/config/urls";

const colors = {
  orange: "text-accent-orange",
  green: "text-accent-green",
  red: "text-accent-red",
  pink: "text-accent-pink",
  blue: "text-accent-blue",
  purple: "text-accent-purple",
};

const colorsBorder = {
  orange: "from-accent-orange/30",
  green: "from-accent-green/30",
  red: "from-accent-red/30",
  pink: "from-accent-pink/30",
  blue: "from-accent-blue/30",
  purple: "from-accent-purple/30",
};

const feats = [
  {
    icon: Zap,
    title: "Easy Setup",
    description: (
      <>
        Create an account, obtain an API Token, and hit the ground running. Just
        a quick read through{" "}
        <CardLink href={links.getStarted}>Getting Started</CardLink> guide (2
        mins read) equips you with all you need.
      </>
    ),

    color: "purple",
  },
  {
    icon: Cpu,
    title: "Kept Simple and Efficient",
    description: (
      <>
        Performance is Collect's top priority. Streamlined architecture ensures
        API remains steadfast even in complex scenarios. Always up and running,
        no surprises.
      </>
    ),
    color: "orange",
  },
  {
    icon: Search,
    title: "Ultimate Searching Features",
    color: "blue",
    description: (
      <>
        Navigating through large and complex datasets is always challenging.
        Building feature-rich search engines with Collect is not a big deal
        anymore. Even for truly complex scenarios.
      </>
    ),
  },
  {
    icon: Code,
    color: "pink",
    title: "Type Safe by Design",
    description:
      "Enjoy automated type inference and suggestions without writing any types or interfaces. This ensures your code remains clean, efficient, and error-free.",
  },
  {
    icon: FileText,
    color: "green",
    title: "File Storage",
    description:
      "Binary data is crucial. Collect allows you to store and manage files. It is seamlessly integrated into data storage, enabling everyone to build comprehensive solutions.",
  },
  {
    icon: Layers,
    color: "red",
    title: "Framework Agnostic",
    description:
      "Collect could be easily integrated into any stack and any programming language through robust and powerful REST API and SDK, while keeping things simple.",
  },
] as const;

const Feat = ({
  title,
  description,
  icon: Icon,
  color = "orange",
  idx,
}: {
  title: ReactNode;
  description: ReactNode;
  icon: FunctionComponent<{ className?: string }>;
  color: keyof typeof colors;
  idx: number;
}) => {
  return (
    <GridItem
      idx={idx}
      lastOfFirstRow="!bg-gradient-to-bl !rounded-tr-3xl"
      firstOfLastRow="!bg-gradient-to-tr !rounded-bl-3xl"
      firstOfMiddleRow="bg-gradient-to-r"
      lastOfMiddleRow="bg-gradient-to-l"
      middleOfFirstRow="bg-gradient-to-b"
      middleOfLastRow="bg-gradient-to-t"
      className={classNames(
        colorsBorder[color],
        "p-0.5 rounded-xl relative group grid to-stroke",
        "first:bg-gradient-to-br first:rounded-tl-3xl",
        "last:bg-gradient-to-tl last:rounded-br-3xl",
      )}
    >
      <div
        className={classNames(
          "p-7 bg-fill rounded-3xl relative overflow-hidden",
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

        <div className="relative z-10 flex flex-col gap-4">
          <Icon className={classNames("w-12 h-12", colors[color])} />

          <h3 className="typography-lg font-semibold text-content">
            {title}
            <Link href="">
              <ArrowUpRight
                className={classNames(
                  "transition translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ml-1 mb-0.5",
                  colors[color],
                )}
              />
            </Link>
          </h3>

          <p className="typography-base text-content2">{description}</p>
        </div>
      </div>
    </GridItem>
  );
};

function CardLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      className="transition italic underline text-content2 hover:text-accent underline-offset-4"
      href={href}
    >
      {children}
    </Link>
  );
}

export function FeaturesCards() {
  return (
    <Section className="container">
      <Grid className="gap-5" desktopCols={3} tabletCols={2} mobileCols={1}>
        {feats.map((feat, idx) => {
          return (
            <Feat
              key={feat.title}
              icon={feat.icon}
              title={feat.title}
              description={feat.description}
              color={feat.color}
              idx={idx}
            />
          );
        })}
      </Grid>
    </Section>
  );
}
