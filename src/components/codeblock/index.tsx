import { CSSProperties, PropsWithoutRef, forwardRef } from "react";
import {
  materialDark as codeTheme,
  // atomDark,
  // nightOwl,
  // synthwave84,
  // tomorrow,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
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
  background: "#131313",
  fontSize: "1em",
  hyphens: "none",
  overflow: "auto",
  position: "relative",
  backdropFilter: "blur(4px)",
};

const override = {
  ...codeTheme,
  'code[class*="language-"]': {
    ...codeTheme['code[class*="language-"]'],
    background: "inherit",
    fontFamily: "var(--font-jet-brains-mono) !important",
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
