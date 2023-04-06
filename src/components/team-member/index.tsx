import { Member } from "~/Sections/Team/data";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { Badge } from "~/components/badge";

export const TeamMember = ({
  name,
  linkedinUrl,
  githubUrl,
  image,
  role,
}: Member) => (
  <div className={"grid gap-4 items-center text-center place-content-center"}>
    <div
      className="w-[250px] h-[250px] bg-no-repeat bg-center bg-cover rounded-full relative"
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <div className="m-auto absolute bottom-2 w-full">
        <div className="w-full flex text-center items-center place-content-center">
          <Badge>{role}</Badge>
        </div>
      </div>
    </div>
    <h2 className="text-base sm:text-sm font-bold  text-content-primary-light tracking-tight">
      {name}
    </h2>

    <div className="flex gap-4 items-center text-center justify-center">
      <Link aria-label="LinkedIn" href={linkedinUrl} target="__blank">
        <Linkedin className="text-content-primary-light" />
      </Link>
      <Link aria-label="Github" href={githubUrl} target="__blank">
        <Github className="text-content-primary-light" />
      </Link>
    </div>
  </div>
);
