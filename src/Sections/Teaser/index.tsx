import { Badge } from "~/components/badge";
import Image from "next/image";
import heroApp from "~/images/hero-app.png";
import classNames from "classnames";
import { Logo } from "~/components/logo";
import { Section } from "~/components/section";

export const TeaserSection = () => {
  return (
    <Section
      className="min-h-[50vh] container grid place-content-center text-center  gap-8 items-center"
      data-theme="light"
    >
      <div className="sm:order-2">
        <div className="flex gap-4 hidden sm:flex justify-center w-full  mb-8">
          <Badge className="bg-background-dark">Powered by graphs</Badge>
          <Badge className="bg-background-dark">Enhanced by AI</Badge>
        </div>
        <Image
          src={heroApp}
          alt={"app"}
          className={classNames("rounded-lg")}
          quality={100}
        />
        <p className="w-full text-center">Project Dashboard</p>
      </div>
      <div className="pt-20">
        <Logo className="m-auto" />
        <h2 className="text-2xl font-bold text-content-primary-light sm:text-xl tracking-tight">
          collect
        </h2>

        <h2 className="text-xl font-medium text-content-secondary-light sm:text-base tracking-tight mt-4">
          Easy-to-use low-code toolkit, offering query language-free storage
          engine <br className="sm:hidden" /> with data nesting, file storage,
          lightning-fast search and filtering capabilities
        </h2>
      </div>
    </Section>
  );
};
