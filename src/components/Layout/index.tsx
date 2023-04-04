import { createContext, PropsWithChildren, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Modal } from "~/components/modal";

export const ModalContext = createContext({
  open: () => {},
  close: () => {},
  isOpen: false,
});

export function Layout({ children }: PropsWithChildren<{}>) {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return (
    <ModalContext.Provider
      value={{
        isOpen,
        open,
        close,
      }}
    >
      <Header />
      {children}
      <Modal />
      <Footer />
    </ModalContext.Provider>
  );
}
