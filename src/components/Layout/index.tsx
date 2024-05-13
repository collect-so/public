import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { Footer } from "./Footer";
import { Header } from "./header";
import { Meta } from "~/components/Meta";
import classNames from "classnames";

export function Layout({
  description,
  title,
  children,
  className,
}: PropsWithChildren<
  Pick<ComponentPropsWithoutRef<typeof Meta>, "title" | "description"> & {
    className?: string;
  }
>) {
  return (
    <>
      <Meta title={title} description={description} />

      <Header />

      <main className={classNames("min-h-screen pt-16", className)}>
        {children}
      </main>

      <Footer />
    </>
  );
}
