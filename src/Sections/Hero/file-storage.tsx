import { ColoredChip } from "~/components/colored-chip";

import { FileIcon, FileIconColors } from "~/Sections/Hero/file-icon";
import { motion } from "framer-motion";
import cx from "classnames";
import { FeatureContainer } from "~/components/feature-container";
import { binaryData } from "~/Sections/Hero/files.data";
import { Fragment } from "react";

export const FileStorage = () => {
  return (
    <FeatureContainer>
      <div className={cx("z-10")}>
        <div className={cx("feature-tag")}>Feature</div>
        <h2 className={cx("typography-3xl mb-4 font-special")}>File storage</h2>
        <p className="typography-lg max-w-2xl ">
          Binary data is welcomed! Store files as records in the database and
          enhance file management like never before
          {/*Create a structured file storage tailored to your requirements .*/}
          {/*Benefit from easily accessible, dependable, and customizable storage*/}
          {/*for binary data.*/}
        </p>
      </div>
      <div className="flex relative flex-wrap justify-center items-center z-10 content-center w-full gap-8 md:gap-4 sm:gap-2 max-w-4xl m-auto">
        {binaryData.map((data) => (
          <Fragment key={data.file.extension}>
            <ColoredChip
              color={"dark"}
              animate={{
                rotate: data.binaryChip.default,
              }}
              whileHover={{
                rotate: data.binaryChip.whileHover,
              }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {data.binaryChip.data}
            </ColoredChip>
            <motion.div
              animate={{
                rotate: data.file.default,
              }}
              whileHover={{
                rotate: data.file.whileHover,
              }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <FileIcon
                extension={data.file.extension}
                variant={data.file.variant as FileIconColors}
              />
            </motion.div>
          </Fragment>
        ))}
      </div>
    </FeatureContainer>
  );
};
