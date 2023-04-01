import { Box, Link, Text } from "~/components/ui";
import { styled } from "~/config/stitches.config";

import { Linkedin } from "lucide-react";
import { Section } from "@common/section";

const Wrapper = styled(Box, {
  gridColumn: "full",
  left: 0,
  paddingTop: "$9",
  paddingBottom: "calc($pagePaddingBottom + $9)",
  bg: "$surface2",
  zIndex: "$footer",
  display: "grid",
  gridTemplateColumns: "1fr",
  alignItems: "start",
  pl: "$pagePaddingLeft",
  pr: "$pagePaddingRight",
});

export function Footer() {
  return (
    <Section
      className="min-h-[30vh] mt-[70px] md:mt-[60px] grid place-content-center"
      data-theme="dark"
    >
      <div className="container grid">
        <div className="basis-1/1 text-center items-center flex flex-col">
          <Text as="li" align={"center"} color="contentSecondary">
            2023 © Collect Software Inc.
          </Text>
          <Link
            as="a"
            href="https://www.linkedin.com/company/collect-so/"
            target="__blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </Link>
        </div>
      </div>
    </Section>
  );
}
