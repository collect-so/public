import { Member } from "~/Sections/Team/data";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export const TeamMember = ({ name, linkedinUrl, githubUrl, image }: Member) => (
  <div
    className={"grid grid-rows-3 gap-16content-center items-center max-w-5xl"}
  >
    <div className=" md:block w-[200px] m-auto col-span-3 mb-8">
      <Image src={image} alt={image.src} />
    </div>
    <div className="col-span-2 md:col-span-3">
      <h2 className="text-2xl sm:text-base font-bold mb-8 text-content-primary-light tracking-tight">
        {name}
      </h2>

      <div className="grid gap-4 grid-cols-2">
        <Link href={linkedinUrl} target="__blank" rel="noopener noreferrer">
          <Linkedin className="text-content-primary-light" />
        </Link>
        <Link href={githubUrl} target="__blank" rel="noopener noreferrer">
          <Github className="text-content-primary-light" />
        </Link>
      </div>
    </div>
  </div>
);
