import { FC, PropsWithoutRef } from "react";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export const CodeBlock: FC<PropsWithoutRef<{ code: string }>> = ({ code }) => {
  return (
    <div data-theme="dark" className="max-w-[90vw]">
      <SyntaxHighlighter language="javascript" style={materialOceanic}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
