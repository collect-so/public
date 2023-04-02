import { FC, PropsWithoutRef } from "react";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import classNames from "classnames";

export const CodeBlock: FC<
  PropsWithoutRef<{
    code: string;
    darkModeTrigger?: boolean;
    className?: string;
  }>
> = ({ code, darkModeTrigger = true, className }) => {
  const darkModeTriggerProps = darkModeTrigger
    ? { "data-theme": "dark" }
    : undefined;

  return (
    <div
      className={classNames("max-w-[90vw]", className)}
      {...darkModeTriggerProps}
    >
      <SyntaxHighlighter language="javascript" style={materialOceanic}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
