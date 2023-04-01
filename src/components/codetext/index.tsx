import { FC, PropsWithChildren } from "react";

export const CodeText: FC<PropsWithChildren> = ({ children }) => {
  return (
    <b>
      <code>{children}</code>
    </b>
  );
};
