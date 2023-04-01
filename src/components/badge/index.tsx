import { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex px-2 py-0.5 text-[14px] font-extrabold leading-normal rounded-[4px] bg-accent-brand text-base-white">
      {children}
    </div>
  );
}
