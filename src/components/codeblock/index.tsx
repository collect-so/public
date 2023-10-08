import { CSSProperties, FC, PropsWithoutRef, forwardRef } from "react";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
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
  background: "#1d1d1d",
  fontFamily: '"Roboto Mono", monospace',
  fontSize: "1em",
  hyphens: "none",
  overflow: "auto",
  position: "relative",
};

const override = {
  ...materialDark,
  'code[class*="language-"]': {
    ...materialDark['code[class*="language-"]'],
    background: "inherit",
  },
};

export const CodeBlock = forwardRef<
  HTMLDivElement,
  PropsWithoutRef<{
    code: string;
    className?: string;
    preClassName?: string;
    style?: CSSProperties;
  }>
>(({ code, className, preClassName, style }, ref) => {
  return (
    <div
      className={classNames("max-w-[92vw] sm:text-[14px]", className)}
      ref={ref}
      style={style}
    >
      <SyntaxHighlighter
        language="javascript"
        style={override}
        PreTag={({ children }) => (
          <pre className={cx(preClassName, "p-4 rounded-lg")} style={PreStyles}>
            {children}
          </pre>
        )}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
});

CodeBlock.displayName = "CodeBlock";
