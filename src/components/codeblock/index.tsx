import { CSSProperties, FC, PropsWithoutRef } from "react";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import classNames from "classnames";
import cx from "classnames";

const PreStyles: CSSProperties = {
  textAlign: "left",
  whiteSpace: "pre",
  wordSpacing: "normal",
  wordBreak: "normal",
  overflowWrap: "normal",
  color: "rgb(195, 206, 227)",
  background: "black",
  fontFamily: '"Roboto Mono", monospace',
  fontSize: "1em",
  lineHeight: "1.5em",
  tabSize: 4,
  hyphens: "none",
  overflow: "auto",
  position: "relative",
  margin: "0",
  padding: ".325em",
};

const override = {
  ...materialOceanic,
  'code[class*="language-"]': {
    ...materialOceanic['code[class*="language-"]'],
    background: "inherit",
  },
};

export const CodeBlock: FC<
  PropsWithoutRef<{
    code: string;
    className?: string;
    preClassName?: string;
  }>
> = ({ code, className, preClassName }) => {
  return (
    <div className={classNames("max-w-[92vw]", className)}>
      <SyntaxHighlighter
        language="javascript"
        style={override}
        PreTag={({ children }) => (
          <pre className={cx(preClassName, "p-2 rounded-lg")} style={PreStyles}>
            {children}
          </pre>
        )}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
