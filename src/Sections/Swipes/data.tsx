import First from "~/images/svg/firstcard.svg";
import Second from "~/images/svg/secondcard.svg";
import Third from "~/images/svg/thirdcard.svg";

export const cards = [
  {
    title: "Store complex data with ease",
    imageSrc: <First />,
    subtitle:
      "Collect API simplifies the storage process even for the most complex, linked and nested data",
    variant: "red" as const,
  },
  {
    title: "Scalable file storage for scalable needs",
    imageSrc: <Second />,
    subtitle:
      "Collect API seamlessly links Files with other Data, enabling you to build more complex applications",
    variant: "purple" as const,
  },
  {
    title: "Retrieve data matching your requirements",
    imageSrc: <Third />,
    subtitle:
      "Collect API allows to define your criteria and retrieve accurate information in new and innovative ways",
    variant: "orange" as const,
  },
];
