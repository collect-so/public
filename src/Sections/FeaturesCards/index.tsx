import {
  ArrowUpRight,
  Code,
  Cpu,
  FileText,
  GitBranch,
  Layers,
  Search,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";
import { Section } from "~/components/Section";
import { links } from "~/config/urls";

const Feat = ({
  title,
  description,
  icon: Icon,
}: {
  title: ReactNode;
  description: ReactNode;
  icon: FunctionComponent<{ className?: string }>;
}) => {
  return (
    <div className="border-2 flex flex-col p-7 bg-fill rounded-2xl gap-4 relative group">
      <Icon className="w-12 h-12" />

      <h3 className="typography-lg font-semibold text-content">
        {title}
        <Link href="">
          <ArrowUpRight className="transition translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ml-1 mb-0.5 text-accent" />
        </Link>
      </h3>
      <p className="typography-base text-content2">{description}</p>
    </div>
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
      {/* <Feat
        title="Get started in minutes"
        description="Create account and API key (2 min)
        Install package and copy-paste initial code from getting-started page. (2 min)
        And that's all you need.
        "
      />
      <Feat
        title="Extend and customize your stack."
        description="Add endpoints, business logic, and database entities; build automations."
      /> */}
      <div className="grid grid-cols-3 sm:grid-cols-1 gap-7">
        <Feat
          icon={Cpu}
          title="Kept Simple, Stupid"
          description="No AI, just streamlined logic that ensures our system remains steadfast and error-free. It’s the backbone of Collect, ensuring your backend is always up and running, no surprises."
        />
        <Feat
          icon={Zap}
          title="Easy Setup"
          description={
            <>
              Create your account, secure an API key, and hit the ground
              running. Just a quick read through our{" "}
              <CardLink href={links.getStarted}>Getting Started</CardLink> page
              (2 min) equips you with all you need. Further actions and
              integrations are detailed within our comprehensive docs, guiding
              your seamless start.
            </>
          }
        />
        {/* <Feat
          icon={Plug}
          title="Automated Endpoint Generation"
          description="The moment your data hits Collect, it's ready to go. Automatically generated endpoints keep your projects moving fast, ensuring your data is always accessible, always up to date."
        /> */}
        <Feat
          icon={Search}
          title="Advanced Search & Insights"
          description={
            <>
              {/* Find exactly what you need—think{" "}
              <span className="italic">'red leather shoes size 44'</span>
              —without complex queries. Our advanced search transforms how you
              interact with data, making intricate filters as easy as a simple
              conversation. */}
              {/* Effortlessly find records by properties, such as finding shoes by{" "}
              <i>color: red</i> and <i>size: 44</i>. Collect's search allows
              detailed queries using values and types—filter, match, or exclude
              with precision. */}
              Effortlessly find records by properties like 'color: red' or
              'size: &gt;41'. Plus, easily create your own search or
              autocomplete by tapping into /properties and /values endpoints,
              employing our robust filtering system for dynamic, user-driven
              queries.
            </>
          }
        />
        <Feat
          icon={Code}
          title="TypeScript SDK"
          description="Enjoy auto-generated types that ensure your code is clean, efficient, and error-free."
        />
        <Feat
          icon={FileText}
          title="File Storage"
          description="Access, share, and manage files. And for those who prefer their own S3 solutions, integration is seamless."
        />
        <Feat
          icon={Layers}
          title="Framework Agnostic"
          description="Collect seamlessly integrates with any development framework, enabling you to incorporate its powerful data management capabilities into your projects, regardless of the tech stack."
        />
      </div>
    </Section>
  );
}
