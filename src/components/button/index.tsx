import { FC, ReactNode } from "react";
import cx from "classnames";

interface Props {
  children: ReactNode;
  className?: string;
  size?: "medium" | "small";
  icon?: boolean;
}

export const Button: FC<Props> = ({ children, className, icon, ...props }) => {
  return (
    <button
      className={cx(
        className,
        "bg-accent-brand rounded-[8px] text-base-white  font-bold duration-300",
        "py-[16px] px-[20px] text-base",
        "md:py-[12px] md:px-[16px] md:text-sm",
      )}
      {...props}
    >
      {children}
    </button>
  );
};
