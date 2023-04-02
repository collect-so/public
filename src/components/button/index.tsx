import React, { FC, ReactNode } from "react";
import cx from "classnames";

type Props = {
  children: ReactNode;
  className?: string;
  size?: "medium" | "small";
  icon?: boolean;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: FC<Props> = ({ children, className, icon, ...props }) => {
  return (
    <button
      className={cx(
        className,
        "gap-2 flex items-center justify-center bg-accent-brand rounded-[8px] text-base-white  font-semibold duration-300",
        "py-[12px] px-[16px] text-base",
        "md:py-[8px] md:px-[12px] md:text-sm",
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const OutlineButton: FC<Props> = ({
  children,
  className,
  icon,
  ...props
}) => {
  return (
    <button
      className={cx(
        className,
        "gap-2 flex font-medium items-center border-2 bg-transparent border-accent-brand  text-accent-brand rounded-[8px] duration-300",
        "py-[8px] px-[12px] text-base",
        "md:py-[8px] md:px-[12px] md:text-sm",
      )}
      {...props}
    >
      {children}
    </button>
  );
};
