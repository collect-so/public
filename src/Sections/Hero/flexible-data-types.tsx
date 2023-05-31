import { AutoRotationWrapper } from "~/components/autoroatation-wrapper";
import Dawn from "~/images/svg/Dawn.svg";
import { ColoredChip } from "~/components/colored-chip";
import cx from "classnames";
import SoftStar from "~/images/svg/Soft Star.svg";
import Direction from "~/images/svg/Direction.svg";
import Star from "~/images/svg/Star.svg";
import Lightning from "~/images/svg/Lightning 2.svg";
import Explosion from "~/images/svg/Explosion.svg";

export const FlexibleDataTypes = () => {
  return (
    <div className=" flex relative flex-wrap justify-center items-center z-10 min-h-[50vh] content-center w-full gap-8">
      <AutoRotationWrapper baseVelocity={-10}>
        <Dawn className="w-[133px] h-[133px] md:w-[60px] md:h-[60px]" />
      </AutoRotationWrapper>
      <ColoredChip
        color="yellow"
        className={cx("")}
        whileHover={{ rotate: -10 }}
        style={{ rotate: -5 }}
      >
        boolean
      </ColoredChip>
      <AutoRotationWrapper baseVelocity={-25}>
        <SoftStar className="w-[95px] h-[95px] md:w-[60px] md:h-[60px]" />
      </AutoRotationWrapper>
      <ColoredChip
        color="blue"
        className={cx(" ")}
        whileHover={{ rotate: 12 }}
        style={{ rotate: 6 }}
      >
        number
      </ColoredChip>
      <AutoRotationWrapper baseVelocity={15}>
        <Direction className="w-[134px] h-[67px] md:w-[60px] md:h-[60px]" />
      </AutoRotationWrapper>
      <ColoredChip
        color="red"
        className={cx(" ")}
        whileHover={{ rotate: -8 }}
        style={{ rotate: -4 }}
      >
        datetime
      </ColoredChip>
      <AutoRotationWrapper baseVelocity={25}>
        <Star className="w-[85px] h-[85px] md:w-[60px] md:h-[60px]" />
      </AutoRotationWrapper>{" "}
      <ColoredChip
        color="green"
        className={cx("")}
        whileHover={{ rotate: 10 }}
        style={{ rotate: 5 }}
      >
        point
      </ColoredChip>
      <AutoRotationWrapper baseVelocity={-15}>
        <Lightning className="w-[62px] h-[109px] md:w-[60px] md:h-[60px]" />
      </AutoRotationWrapper>
      <ColoredChip
        color="pink"
        className={cx("")}
        whileHover={{ rotate: -14 }}
        style={{ rotate: -7 }}
      >
        string
      </ColoredChip>
      <AutoRotationWrapper baseVelocity={-10}>
        <Explosion className="w-[95px] h-[95px] md:w-[60px] md:h-[60px]" />
      </AutoRotationWrapper>
      <ColoredChip
        color="purple"
        className={cx(" ")}
        whileHover={{ rotate: 8 }}
        style={{ rotate: 4 }}
      >
        file
      </ColoredChip>
    </div>
  );
};
