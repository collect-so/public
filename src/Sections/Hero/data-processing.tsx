import cx from "classnames";
import { FeatureContainer } from "~/components/feature-container";
import dashboard0 from "./img/dashboard0.png";
import dashboard1 from "./img/dashboard1.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/button";
import { ArrowRight } from "lucide-react";

export const DataProcessing = () => {
  return (
    <>
      <FeatureContainer>
        <div className={cx("z-10  mb-4 ")}>
          <div className={cx("feature-tag")}>Feature</div>
          <h2 className={cx("typography-3xl font-special")}>Data processing</h2>
        </div>
        <div
          className={cx(
            "grid grid-cols-3 z-10 gap-16",
            "md:grid-cols-1 md:gap-8",
          )}
        >
          <div>
            <h2 className={cx("typography-2xl mb-4 font-special")}>
              Importing
            </h2>
            <p className="typography-lg max-w-2xl ">
              Import your data with lightning speed. Up to 3000 records in less
              than 1 second.
            </p>
          </div>

          <div>
            <h2 className={cx("typography-2xl mb-4 font-special")}>
              Bulk operations
            </h2>
            <p className="typography-lg max-w-2xl ">
              Merge, cleanup and normalize your data without writing a single
              line of code with Dashboard.
            </p>
          </div>

          <div>
            <h2 className={cx("typography-2xl mb-4 font-special")}>
              Exporting
            </h2>
            <p className="typography-lg max-w-2xl ">
              Need your data elsewhere? You can export the entire dataset with a
              single click.
            </p>
          </div>
        </div>

        <div className={"m-auto z-10 py-8"}>
          <Link href="https://app.collect.so/signup">
            <Button>
              Explore Dashboard
              <div className="md:hidden">
                <ArrowRight />
              </div>
            </Button>
          </Link>
        </div>
      </FeatureContainer>

      <div
        className={cx(
          "h-[100vh] xl:h-[60vh] lg:h-[45vh] md:h-[30vh] sm:h-[15vh] ",
          " z-9 grid grid-cols-2 gap-8 relative ",
        )}
      >
        <Image
          src={dashboard1}
          alt={"dashboard record"}
          className={cx(
            "absolute w-[60vw] bottom-[-5vh] left-[40%]",
            "sm:bottom-[-2vh]",
            "rounded-md skew-y-6 w-60vw border-accent-purple border-2 shadow-[0_0_90px_-20px] shadow-accent-purple",
          )}
        />
        <Image
          src={dashboard0}
          alt={"dashboard records"}
          className={cx(
            "absolute w-[60vw] bottom-[-10vh] right-[40%]",
            "sm:bottom-[-5vh]",
            "rounded-md skew-y-6 w-60vw border-accent-yellow border-2 shadow-[0_0_70px_-20px] shadow-accent-yellow",
          )}
        />
      </div>
    </>
  );
};
