import wallet from "~/images/wallet.png";
import target from "~/images/target.png";
import dashboard from "~/images/dashboard.png";

export const cards = [
  {
    title: (
      <>
        Reduce development <strong>costs</strong>
      </>
    ),
    imageSrc: wallet,
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
    imageSrc: target,
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
    imageSrc: dashboard,
    subtitle:
      "Test your ideas, rapidly incorporating feedback and improve your product at blazingly fast speeds. With Collect, you can stay ahead of the competition and achieve your goals with speed and agility.",
    variant: "primary" as const,
  },
];