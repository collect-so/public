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
        "py-[12px] px-[16px] text-base",
        "md:py-[8px] md:px-[12px] md:text-sm",
      )}
      {...props}
    >
      {children}
    </button>
  );
};
