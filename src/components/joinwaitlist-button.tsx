import { ReactNode, useContext } from "react";
import { ModalContext } from "~/components/Layout";
import { Button, OutlineButton } from "~/components/button";
import { ArrowRight } from "lucide-react";

const Icon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 12L22 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 5L22 12L15 19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const JoinWaitlistButton = ({
  children,
  className,
  outline,
}: {
  className?: string;
  outline?: boolean;
  children?: ReactNode;
}) => {
  const { open } = useContext(ModalContext);

  const Component = outline ? OutlineButton : Button;

  return (
    <Component onClick={open} className={className}>
      {children ?? "Join Waitlist"}
      <div className="md:hidden">
        <ArrowRight />
      </div>
    </Component>
  );
};
