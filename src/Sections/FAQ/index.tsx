import { AnimatePresence, motion, useCycle } from "framer-motion";
import { Section } from "~/components/section";

import Dawn from "~/images/svg/Dawn.svg";
import SoftStar from "~/images/svg/Soft Star.svg";
import Direction from "~/images/svg/Direction.svg";
import Star from "~/images/svg/Star.svg";
import Lightning from "~/images/svg/Lightning 2.svg";
import Explosion from "~/images/svg/Explosion.svg";

import { useState } from "react";
import cx from "classnames";
import { AutoRotationWrapper } from "~/components/autoroatation-wrapper";
import { randomIntFromRange } from "~/common";
import { ChevronDown, ChevronUp } from "lucide-react";

const imgMap = {
  Dawn: Dawn,
  SoftStar: SoftStar,
  Direction: Direction,
  Star: Star,
  Lightning: Lightning,
  Explosion: Explosion,
};

const faqData: Array<{
  question: string;
  answer: string;
}> = [
  {
    question: "Is it like MongoDB?",
    answer:
      "Collect utilizes a multi-tenant architecture, ensuring that each customer has a dedicated database for data isolation. This means that your data is kept separate from other users, providing enhanced privacy and security. In addition, Collect employs industry-standard encryption techniques to safeguard your data both during transit and when it is at rest. These security measures ensure that your information is protected according to established industry practices.",
  },
  {
    question: "How does Collect differ from Firebase or Supabase?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "How secure is Collect API?",
    answer:
      "Collect utilizes a multi-tenant architecture, ensuring that each customer has a dedicated database for data isolation. This means that your data is kept separate from other users, providing enhanced privacy and security. In addition, Collect employs industry-standard encryption techniques to safeguard your data both during transit and when it is at rest. These security measures ensure that your information is protected according to established industry practices.",
  },
  {
    question: "Which platforms do you support?",
    answer:
      "Collect is designed to be platform-agnostic, allowing it to be utilized on various platforms and with any programming language that supports network requests and the JSON format. This flexibility enables developers to integrate Collect seamlessly into their existing systems and leverage its capabilities regardless of the technology stack they are using. Whether you're working with web applications, mobile apps, or even IoT devices, Collect can be seamlessly incorporated into your project, making it highly adaptable and compatible with different development environments.",
  },
  {
    question: "Can I host Collect on-premises?",
    answer:
      "We offer you the flexibility to host Collect on-premises by providing a range of options tailored to your specific needs. With our custom payment options, you can customize your payment processes to align with your business requirements. Additionally, we provide white-labeling capabilities, allowing you to brand Collect with your own company logo and design, providing a seamless and cohesive experience for your users. To ensure a smooth experience, we also offer dedicated support throughout your hosting journey. Our team of experts is available to assist you with any technical or operational questions, providing personalized assistance and guidance. Furthermore, we're excited to announce that we're currently working on developing the Community Edition of Collect. This edition will bring even more features and functionalities to our platform, catering to the diverse needs of our users. We encourage you to stay tuned for updates on the progress of the Community Edition as we continue to enhance Collect and deliver a comprehensive solution for your needs.",
  },
  {
    question: "Is it suitable for building highly demanding applications?",
    answer:
      "Collect utilizes a multi-tenant architecture, ensuring that each customer has a dedicated database for data isolation. This means that your data is kept separate from other users, providing enhanced privacy and security. In addition, Collect employs industry-standard encryption techniques to safeguard your data both during transit and when it is at rest. These security measures ensure that your information is protected according to established industry practices.",
  },
  {
    question: "How to deal with migrations?",
    answer:
      "Collect utilizes a multi-tenant architecture, ensuring that each customer has a dedicated database for data isolation. This means that your data is kept separate from other users, providing enhanced privacy and security. In addition, Collect employs industry-standard encryption techniques to safeguard your data both during transit and when it is at rest. These security measures ensure that your information is protected according to established industry practices.",
  },
  {
    question: "How does Collect differ from Bubble, Tilda or Wix?",
    answer:
      "While Bubble, Tilda and Wix are popular platforms for website creation and app prototyping, they have certain limitations when it comes to the range of components and scenarios available for building. Collect, on the other hand, offers maximum flexibility in building APIs from your data with minimal constraints. We strongly believe that user interfaces (UIs) should not be generic and basic because every product possesses its unique genes and individuality. These characteristics cannot be fully expressed through a set of pre-built components. At Collect, our primary focus is to provide an exceptional API creation experience and streamlined data workflow. Instead of attempting to address multiple objectives simultaneously, we concentrate solely on empowering you to build robust APIs that perfectly align with your specific requirements.",
  },
];

const Accordion = ({
  question,
  answer,
  img,
}: {
  question: string;
  answer: string;
  img?: keyof typeof imgMap;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  // const Img = imgMap[img];
  return (
    <>
      <motion.div
        initial={false}
        key="question"
        className="related rounded-tr-md relative z-20  rounded-br-md shadow-sm px-1 py-2  cursor-pointer font-open border-l-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div className="flex typography-xl items-center justify-between">
          {question}
          {/*<AutoRotationWrapper baseVelocity={randomIntFromRange(-10, 10)}>*/}
          {/*  <Img className="w-[60px] h-[60px] md:w-[40px] md:h-[40px]" />*/}
          {/*</AutoRotationWrapper>*/}
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </motion.div>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            className={cx("typography-base w-full")}
            variants={{
              open: { height: "auto", opacity: 1 },
              collapsed: { height: 0, opacity: 0 },
            }}
            transition={{ duration: 0.3, damping: 100 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export function FAQSection() {
  const [mode, cycleMode] = useCycle<"monthly" | "annually">(
    "annually",
    "monthly",
  );
  return (
    <Section className="" data-theme="dark">
      <div className="container text-center mb-16 py-[25vh]">
        <h2 className="typography-3xl mb-16">Frequently Asked Questions</h2>
        <div className="px-5 max-w-4xl m-auto grid grid-cols-1 gap-5 text-left">
          {faqData.map((data) => (
            <Accordion {...data} key={data.question} />
          ))}
        </div>
      </div>
    </Section>
  );
}
