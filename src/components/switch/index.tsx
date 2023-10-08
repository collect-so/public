import { Switch as SwitchElement } from "@headlessui/react";

export const Switch = ({
  onChange,
  checked,
}: {
  onChange: (checked: boolean) => void;
  checked: boolean;
}) => {
  return (
    <SwitchElement
      checked={checked}
      onChange={onChange}
      className={`${
        checked ? "bg-accent-brand" : "bg-[#1b1b1b]"
      } relative inline-flex h-8 w-16 items-center rounded-full `}
    >
      <span
        className={`${
          checked ? "translate-x-9 bg-base-black" : "translate-x-1 bg-[#6b6b6b]"
        } inline-block h-6 w-6 transform rounded-full transition`}
      />
    </SwitchElement>
  );
};
