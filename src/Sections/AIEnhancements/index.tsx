import { Section } from "~/components/section";
import { ChatGPTBlock } from "~/Sections/Devs/gpt/chatgpt-block";

export function AIEnhancements() {
  return (
    <Section data-theme="dark" className="py-16 flex items-center">
      <div
        style={{
          // backgroundImage: "url(/images/WireBox.svg)",
          backgroundSize: "100% 100%",
          backgroundPositionY: "50%",
        }}
        className="min-h-[50vh] w-full flex flex-col items-center relative justify-center bg-repeat-x text-center"
      >
        <div>
          <h2 className="typography-4xl">
            Supercharge your workflow with integrated Database AI Copilot
          </h2>
          <p className="typography-base max-w-2xl">
            Bypass the boring part. Collect API with ChatGPT utilize all the
            work:
          </p>
          <ChatGPTBlock />
        </div>
        {/*<OutlineLink*/}
        {/*  href="https://docs.collect.so/"*/}
        {/*  className="absolute bottom-0 sm:static sm:mt-10"*/}
        {/*>*/}
        {/*  Read the Docs*/}
        {/*</OutlineLink>*/}
      </div>
    </Section>
  );
}
