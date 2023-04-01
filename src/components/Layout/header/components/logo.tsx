import { Logo as Logotype } from "@common/logo";

export const Logo = () => {
  return (
    <div className="flex items-center cursor-pointer min-w-[152px]">
      <div className="next-image-center flex items-center grow w-[60px] h-[60px] md:w-[40px] md:h-[40px]">
        <Logotype />
      </div>
    </div>
  );
};
