import type { ReactNode } from "react";
import { StaticImageData } from "next/image";

import complexdata from "~/images/complexdata.png";
import files from "~/images/files.png";
import retrieve from "~/images/retrieve.png";
import ownership from "~/images/ownership.png";

export type TBenefit = {
  title: ReactNode;
  subtitle: ReactNode;
  image: StaticImageData;
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
    image: complexdata,
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
    image: files,
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
    image: retrieve,
  },
  {
    title: "Full data ownership",
    subtitle:
      "Collect can be hosted on your premises, allowing you to secure sensitive data within your own network. By doing so, you retain full control of your data and avoid storing it on third-party clouds or servers. We believe this is crucial for protecting your valuable information.",
    image: ownership,
  },
];
