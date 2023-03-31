import type { ReactNode } from "react";

export type TBenefit = {
  title: ReactNode;
  subtitle: ReactNode;
  imageSrc: string;
};

export const benefits: TBenefit[] = [
  {
    title: (
      <>
        Store complex data <br /> with ease
      </>
    ),
    subtitle:
      "Collect engine simplifies the storage process for even the most complex data. With our advanced tools and features, you can store and manage large volumes of intricate data with ease.",
    imageSrc: "/images/Sketchy/ShiftedStructure.svg",
  },
  {
    title: (
      <>
        File storage just for <br />
        your needs
      </>
    ),
    subtitle:
      "Get organized file storage to meet your needs with Collect Platform. Our API seamlessly connects with your other data, allowing for easy access and secure, reliable storage of your files.",
    imageSrc: "/images/Sketchy/Folder.svg",
  },
  {
    title: (
      <>
        Retrieve data matching <br />
        your requirements
      </>
    ),
    subtitle:
      "Our advanced search features allow you to define your criteria and retrieve accurate information quickly. Collect enables you to integrate and utilize your data in new and innovative ways.",
    imageSrc: "/images/Sketchy/Funnel.svg",
  },
  {
    title: "Full data ownership",
    subtitle:
      "Collect can be hosted on your premises, allowing you to secure sensitive data within your own network. By doing so, you retain full control of your data and avoid storing it on third-party clouds or servers. We believe this is crucial for protecting your valuable information.",
    imageSrc: "/images/Sketchy/Download.svg",
  },
];
