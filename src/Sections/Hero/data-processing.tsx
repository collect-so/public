import cx from "classnames";
import { FeatureContainer } from "~/components/feature-container";

export const DataProcessing = () => {
  return (
    <FeatureContainer>
      <div className={cx("z-10")}>
        <div className={cx("feature-tag")}>Feature</div>
        <h2 className={cx("typography-3xl mb-4")}>Data processing</h2>
      </div>
      <div className={cx("grid grid-cols-3 z-10 gap-16", "md:grid-cols-1")}>
        <div>
          <h2 className={cx("typography-2xl mb-4")}>Importing</h2>
          <p className="typography-base max-w-2xl ">
            Import your data with lightning speed. Up to 3000 records in less
            than 1 second.
          </p>
        </div>

        <div>
          <h2 className={cx("typography-2xl mb-4")}>Bulk operations</h2>
          <p className="typography-base max-w-2xl ">
            Process and normalize your data without writing a single line of
            code with dashboard.
          </p>
        </div>

        <div>
          <h2 className={cx("typography-2xl mb-4")}>Exporting</h2>
          <p className="typography-base max-w-2xl ">
            Need your data elsewhere? Export it all.
          </p>
        </div>
      </div>
    </FeatureContainer>
  );
};
