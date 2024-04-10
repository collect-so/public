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
import { CSSProperties, FunctionComponent, ReactNode } from "react";
import { Section } from "~/components/Section";
import { WireBox } from "~/components/WireBox";
import { links } from "~/config/urls";
import { useMediaQuery } from "~/hooks/useMediaQuery";

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
    icon: Cpu,
    title: "Kept Simple, Stupid",
    description:
      "No AI, just streamlined logic that ensures our system remains steadfast and error-free. It’s the backbone of Collect, ensuring your backend is always up and running, no surprises.",
    color: "orange",
  },
  {
    icon: Zap,
    title: "Easy Setup",
    description: (
      <>
        Create your account, secure an API key, and hit the ground running. Just
        a quick read through our{" "}
        <CardLink href={links.getStarted}>Getting Started</CardLink> page (2
        min) equips you with all you need. Further actions and integrations are
        detailed within our comprehensive docs, guiding your seamless start.
      </>
    ),

    color: "purple",
  },
  {
    icon: Search,
    title: "Advanced Search & Insights",
    color: "blue",
    description: (
      <>
        Effortlessly find records by properties like 'color: red' or 'size:
        &gt;41'. Plus, easily create your own search or autocomplete by tapping
        into /properties and /values endpoints, employing our robust filtering
        system for dynamic, user-driven queries.
      </>
    ),
  },
  {
    icon: Code,
    color: "pink",
    title: "TypeScript SDK",
    description:
      "Enjoy auto-generated types that ensure your code is clean, efficient, and error-free.",
  },
  {
    icon: FileText,
    color: "green",
    title: "File Storage",
    description:
      "Access, share, and manage files. And for those who prefer their own S3 solutions, integration is seamless.",
  },
  {
    icon: Layers,
    color: "red",
    title: "Framework Agnostic",
    description:
      "Collect seamlessly integrates with any development framework, enabling you to incorporate its powerful data management capabilities into your projects, regardless of the tech stack.",
  },
] as const;

const Feat = ({
  title,
  description,
  icon: Icon,
  color = "orange",
  firstOfLastRow,
  firstRow,
  lastOfFirstRow,
  lastRow,
  firstOfMiddleRow,
  lastOfMiddleRow,
}: {
  title: ReactNode;
  description: ReactNode;
  icon: FunctionComponent<{ className?: string }>;
  color: keyof typeof colors;
  firstOfLastRow?: boolean;
  lastRow?: boolean;
  firstRow?: boolean;
  lastOfFirstRow?: boolean;
  middleRow?: boolean;
  firstOfMiddleRow?: boolean;
  lastOfMiddleRow?: boolean;
}) => {
  return (
    <article
      className={classNames(
        "p-0.5 rounded-xl relative group grid to-stroke",
        colorsBorder[color],
        "first:bg-gradient-to-br first:rounded-tl-3xl",
        "last:bg-gradient-to-tl last:rounded-br-3xl",
        {
          "bg-gradient-to-b": firstRow && !lastOfFirstRow,
          "bg-gradient-to-bl rounded-tr-3xl": lastOfFirstRow,
          "bg-gradient-to-t": lastRow && !firstOfLastRow,
          "bg-gradient-to-tr rounded-bl-3xl": firstOfLastRow,
          "bg-gradient-to-r": firstOfMiddleRow,
          "bg-gradient-to-l": lastOfMiddleRow,
        },
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
    </article>
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
  const desktop = useMediaQuery("(min-width: 1200px)");
  const tablet = useMediaQuery("(min-width: 768px)");

  const totalItems = feats.length;
  const columns = desktop ? 3 : tablet ? 2 : 1;
  const rows = Math.ceil(totalItems / columns);
  const firstOfLastRow = (rows - 1) * columns;

  return (
    <Section className="container">
      <div
        className={classNames(
          "grid gap-7 grid-cols-[repeat(var(--columns),_minmax(0,_1fr))]",
        )}
        style={
          {
            "--columns": columns,
          } as CSSProperties
        }
      >
        {feats.map((feat, idx) => {
          const firstRow = idx < columns - 1;
          const lastRow = idx > firstOfLastRow;
          const middleRow = !firstRow && !lastRow;
          const firstOfRow = idx % columns === 0;
          const lastOfRow = idx % columns === columns - 1;

          return (
            <Feat
              key={feat.title}
              icon={feat.icon}
              title={feat.title}
              description={feat.description}
              color={feat.color}
              firstOfLastRow={idx === firstOfLastRow}
              lastOfFirstRow={idx === columns - 1}
              firstRow={firstRow}
              lastRow={lastRow}
              middleRow={middleRow}
              firstOfMiddleRow={middleRow && firstOfRow}
              lastOfMiddleRow={middleRow && lastOfRow}
            />
          );
        })}
      </div>
    </Section>
  );
}
