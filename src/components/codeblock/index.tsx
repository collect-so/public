import { FC, PropsWithoutRef } from "react";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export const CodeBlock: FC<
  PropsWithoutRef<{ code: string; darkModeTrigger?: boolean }>
> = ({ code, darkModeTrigger = true }) => {
  const darkModeTriggerProps = darkModeTrigger
    ? { "data-theme": "dark" }
    : undefined;

  return (
    <div className="max-w-[90vw]" {...darkModeTriggerProps}>
      <SyntaxHighlighter language="javascript" style={materialOceanic}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
