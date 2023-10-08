import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cx from "classnames";

export const Accordion = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={false}
        key="question"
        className="rounded-tr-md relative z-20  rounded-br-md shadow-sm px-1 py-2  cursor-pointer font-open border-l-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div className="typography-2xl font-bold ml-1">
          {question}
        </motion.div>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            className={cx("typography-base max-w-2xl ")}
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {answer}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};
