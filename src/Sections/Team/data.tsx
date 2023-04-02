import artemiyvereshchinskiy from "~/images/team/artemiyvereshchinskiy.jpg";
import andrewstrogov from "~/images/team/andrewstrogov.jpg";
import erikfarukshin from "~/images/team/erikfarukshin.jpg";
import { StaticImageData } from "next/image";

export type Member = {
  name: string;
  githubUrl: string;
  linkedinUrl: string;
  image: StaticImageData;
};
export const team = [
  {
    name: "Artemiy Vereshchinskiy",
    githubUrl: "https://github.com/1pxone",
    linkedinUrl: "https://www.linkedin.com/in/artemiy-vereshchinskiy/",
    image: artemiyvereshchinskiy,
  },
  {
    name: "Andrey Strogov",
    githubUrl: "https://github.com/h3yAlias",
    linkedinUrl: "https://www.linkedin.com/in/andrey-strogov-a3479a1a6/",
    image: andrewstrogov,
  },
  {
    name: "Erik Farukshin",
    githubUrl: "https://github.com/kumomiX",
    linkedinUrl: "https://www.linkedin.com/in/erik-farukshin-779979187/",
    image: erikfarukshin,
  },
];
