import React from "react";
import cx from "classnames";

interface ContainerProps {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({
  className,
  children,
}) => {
  return <div className={cx("container", className)}>{children}</div>;
};
