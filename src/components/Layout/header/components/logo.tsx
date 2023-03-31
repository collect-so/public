import { Logo as Logotype } from "@common/logo";

export const Logo = () => {
  return (
    <div className="flex items-center cursor-pointer">
      <div className="next-image-center flex items-center grow w-[36px] h-[36px] md:w-[32px] md:h-[32px]">
        <Logotype />
      </div>
    </div>
  );
};
