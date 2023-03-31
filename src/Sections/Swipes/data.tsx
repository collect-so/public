import reducecost from "~/images/reducecost.png";
import deliverfeatures from "~/images/deliverfeatures.png";
import iteratefast from "~/images/iteratefast.png";
export const cards = [
  {
    title: (
      <>
        Reduce development <strong>costs</strong>
      </>
    ),
    image: reducecost,
    subtitle:
      "Software development can often result in budgetary challenges. Collect Platform offers a comprehensive suite of tools that can help you build complex, production-ready applications with significantly fewer resources.",
    variant: "primary" as const,
  },
  {
    title: (
      <>
        Deliver features <strong>not bugs</strong>
      </>
    ),
    image: deliverfeatures,
    subtitle:
      "Collect helps you to deliver features without the pain and frustration of dealing with unnecessary downtime and database migrations, allows you to create product features with confidence.",
    variant: "primary" as const,
  },
  {
    title: (
      <>
        Iterate blazingly <strong>fast</strong>
      </>
    ),
    image: iteratefast,
    subtitle:
      "Test your ideas, rapidly incorporating feedback and improve your product at blazingly fast speeds. With Collect, you can stay ahead of the competition and achieve your goals with speed and agility.",
    variant: "primary" as const,
  },
];
