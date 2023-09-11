import cx from "classnames";

export const FeaturesTitle = () => {
  return (
    <div
      id="features"
      className={
        "container z-10 grid items-center content-center gap-16 text-center relative"
      }
    >
      <h2
        className={cx(
          "typography-4xl pb-60 ",
          // "underline decoration-accent-brand decoration-wavy decoration-[8px] underline-offset-[24px]",
        )}
      >
        Features
      </h2>
    </div>
  );
};
