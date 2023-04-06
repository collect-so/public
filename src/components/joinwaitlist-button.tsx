import { useContext } from "react";
import { ModalContext } from "~/components/Layout";
import { Button } from "~/components/button";
import { Bell } from "lucide-react";

export const JoinWaitlistButton = ({ className }: { className?: string }) => {
  const { open } = useContext(ModalContext);

  return (
    <Button onClick={open} className={className}>
      Join Waitlist <Bell />
    </Button>
  );
};
