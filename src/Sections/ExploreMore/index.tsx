import Image from "next/image";
import { OutlineButton } from "~/components/button";
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
        {/* <div className="absolute bottom-0 left-0 w-full">
        <Image fill src={wirebox} alt="" className="bg-repeat" />
      </div> */}
        <h2 className="text-4xl font-bold text-content-primary-dark sm:text-xl tracking-tight  sm:leading-[2.5rem]">
          Explore more examples
        </h2>
        <OutlineButton className="absolute bottom-0">
          Read the Docs
        </OutlineButton>
      </div>
    </Section>
  );
}
