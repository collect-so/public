import { Box, Link, Text } from "~/components/ui";
import { styled } from "~/config/stitches.config";

import { Linkedin } from "lucide-react";

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
    <Wrapper as="footer">
      <Box
        as="ul"
        css={{
          display: "flex",
          justifyContent: "space-between",
          gap: "$3",
          px: "$6",
          maxWidth: "$md",
          mx: "auto",
          width: "$full",
        }}
      >
        <Text as="li" align={"center"} color="contentSecondary">
          © Collect Inc.
        </Text>
        <Link
          as="a"
          href="https://www.linkedin.com/company/collect-so/"
          target="__blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </Link>
      </Box>
    </Wrapper>
  );
}
