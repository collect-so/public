import { Logo as Logotype } from "~/components/logo";

export const Logo = () => {
  return (
    <div className="flex items-center cursor-pointer min-w-[152px] md:min-w-[40px]">
      <div className="next-image-center flex items-center grow w-[60px] h-[60px] md:w-[40px] md:h-[40px]">
        <Logotype />
      </div>
    </div>
  );
};
