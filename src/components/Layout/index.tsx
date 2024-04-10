import { PropsWithChildren } from "react";
import { Footer } from "./Footer";
import { Header } from "./header";
import { Meta } from "~/components/Meta";

export function Layout({
  children,
  title,
}: PropsWithChildren<{ title?: string }>) {
  return (
    <>
      <Meta title={title} />

      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
