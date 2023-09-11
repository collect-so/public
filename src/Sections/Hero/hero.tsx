import cx from "classnames";
import { ColoredChip } from "~/components/colored-chip";
import { OutlineButton } from "~/components/button";
import { Book } from "lucide-react";
import { FeatureContainer } from "~/components/feature-container";

export const Hero = () => {
  return (
    <FeatureContainer className={"min-h-[120vh] sm:min-h-[100vh]"}>
      <div className={cx("z-10 relative")}>
        <ColoredChip
          color="purple"
          style={{ rotate: 20 }}
          whileHover={{ rotate: 14 }}
          className={cx(
            "absolute",
            "top-[-50px] right-[300px]",
            "md:top-[-30px] md:right-[20px]",
            "md:hidden",
          )}
        >
          instantly
        </ColoredChip>
        <ColoredChip
          style={{ rotate: 5 }}
          color="purple"
          className={cx("mb-8 md:inline-flex hidden")}
        >
          instantly
        </ColoredChip>
        <h2 className={cx("typography-4xl")}>
          Turn any data
          <br />
          into powerful <span className="text-accent-yellow">API</span>s
        </h2>

        <p className={cx("typography-base mb-8 max-w-2xl ")}>
          <span className="font-bold text-content-primary-dark">
            Zero-code database
          </span>{" "}
          to build apps ridiculously fast. It comes with integrated{" "}
          <span className="font-bold text-content-primary-dark">
            file storage
          </span>
          , limitless{" "}
          <span className="font-bold text-content-primary-dark">
            data nesting
          </span>{" "}
          and enhanced with{" "}
          <span className="font-bold text-content-primary-dark">
            dynamic endpoints
          </span>
          .
        </p>
        <code className="z-10 text-sm inline-flex text-left items-center space-x-4 bg-[#1d1d1d] text-content-secondary-dark rounded-lg py-4 px-6 justify-self-center mb-8 sm:hidden">
          <span className="flex gap-4">
            <span className="shrink-0 text-accent-red">$</span>
            <span className="flex-1">
              <span>npm install </span>
              <span className="text-base-white">
                @collect.so/javascript-sdk
              </span>
              <span> --save</span>
            </span>
          </span>
        </code>

        <OutlineButton className={cx("m-auto")}>
          Read the Docs
          <Book />
        </OutlineButton>
      </div>
    </FeatureContainer>
  );
};
