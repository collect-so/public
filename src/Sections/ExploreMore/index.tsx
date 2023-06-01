import Image from "next/image";
import { OutlineButton, OutlineLink } from "~/components/button";
import { Section } from "~/components/section";
import wirebox from "~/images/WireBox.png";

export function ExploreMoreSection() {
  return (
    <Section data-theme="dark" className="py-16 flex items-center">
      <div
        style={{
          backgroundImage: "url(/images/WireBox.svg)",
          backgroundSize: "100% 100%",
          backgroundPositionY: "50%",
        }}
        className="min-h-[80vh] w-full flex flex-col items-center relative justify-center bg-repeat-x"
      >
        <h2 className="text-4xl font-bold text-content-primary-dark sm:text-xl tracking-tight  sm:leading-[2.5rem]">
          Explore more examples
        </h2>
        <OutlineLink
          href="https://docs.collect.so/"
          className="absolute bottom-0"
        >
          Read the Docs
        </OutlineLink>
      </div>
    </Section>
  );
}
