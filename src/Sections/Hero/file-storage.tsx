import { randomIntFromRange } from "~/common";
import { ColoredChip } from "~/components/colored-chip";

import { FileIcon } from "~/Sections/Hero/file-icon";
import { motion } from "framer-motion";

function generateBinary(length: number) {
  let result = "";
  const characters = "01";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export const FileStorage = () => {
  return (
    <div className="flex relative flex-wrap justify-center items-center z-10 content-center w-full gap-8 md:gap-4 sm:gap-2 max-w-4xl m-auto">
      <ColoredChip
        color={"dark"}
        animate={{
          rotate: randomIntFromRange(-5, 5),
        }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {generateBinary(3)}
      </ColoredChip>
      <motion.div
        animate={{
          rotate: randomIntFromRange(-5, 5),
        }}
        whileHover={{
          rotate: randomIntFromRange(-5, 5),
        }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <FileIcon extension={".docx"} variant={"pink"} />
      </motion.div>

      <ColoredChip
        color={"dark"}
        animate={{
          rotate: randomIntFromRange(-5, 5),
        }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {generateBinary(4)}
      </ColoredChip>
      <motion.div
        animate={{
          rotate: randomIntFromRange(-5, 5),
        }}
        whileHover={{
          rotate: randomIntFromRange(-5, 5),
        }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <FileIcon extension={".webp"} variant={"purple"} />
      </motion.div>

      <ColoredChip
        color={"dark"}
        animate={{
          rotate: randomIntFromRange(-5, 5),
        }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {generateBinary(7)}
      </ColoredChip>
      <motion.div
        animate={{
          rotate: randomIntFromRange(-5, 5),
        }}
        whileHover={{
          rotate: randomIntFromRange(-5, 5),
        }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <FileIcon extension={".pptx"} variant={"orange"} />
      </motion.div>

      <ColoredChip
        color={"dark"}
        animate={{
          rotate: randomIntFromRange(-5, 5),
        }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {generateBinary(5)}
      </ColoredChip>
      <motion.div
        animate={{
          rotate: randomIntFromRange(-5, 5),
        }}
        whileHover={{
          rotate: randomIntFromRange(-5, 5),
        }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <FileIcon extension={".zip"} variant={"blue"} />
      </motion.div>

      <ColoredChip
        color={"dark"}
        animate={{
          rotate: randomIntFromRange(-5, 5),
        }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {generateBinary(6)}
      </ColoredChip>
      <motion.div
        animate={{
          rotate: randomIntFromRange(-5, 5),
        }}
        whileHover={{
          rotate: randomIntFromRange(-5, 5),
        }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <FileIcon extension={".yml"} variant={"green"} />
      </motion.div>

      <ColoredChip
        color={"dark"}
        animate={{
          rotate: randomIntFromRange(-5, 5),
        }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {generateBinary(7)}
      </ColoredChip>
      <motion.div
        animate={{
          rotate: randomIntFromRange(-5, 5),
        }}
        whileHover={{
          rotate: randomIntFromRange(-5, 5),
        }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <FileIcon extension={".wav"} variant={"yellow"} />
      </motion.div>
      <ColoredChip
        color={"dark"}
        animate={{
          rotate: randomIntFromRange(-5, 5),
        }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {generateBinary(3)}
      </ColoredChip>
      <motion.div
        animate={{
          rotate: randomIntFromRange(-5, 5),
        }}
        whileHover={{
          rotate: randomIntFromRange(-5, 5),
        }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <FileIcon extension={".tsx"} variant={"red"} />
      </motion.div>
    </div>
  );
};
