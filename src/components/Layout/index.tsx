import { PropsWithChildren } from "react";
import { Footer } from "./Footer";
import { Header } from "./header";
import { Meta } from "~/components/Meta";
import classNames from "classnames";

export function Layout({
  children,
  title,
  className,
}: PropsWithChildren<{ title?: string; className?: string }>) {
  return (
    <>
      <Meta title={title} />

      <Header />

      <main className={classNames("min-h-screen", className)}>{children}</main>

      <Footer />
    </>
  );
}
