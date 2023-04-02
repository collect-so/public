import { useContext } from "react";
import { ModalContext } from "~/components/Layout";
import { Button } from "~/components/button";
import { Bell } from "lucide-react";

export const JoinWaitlistButton = () => {
  const { close, isOpen, open } = useContext(ModalContext);

  return (
    <Button onClick={open}>
      Join Waitlist <Bell />
    </Button>
  );
};
