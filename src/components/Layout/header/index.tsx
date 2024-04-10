import {
  useScroll,
  motion,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { link } from "fs";
import { Github, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button, MainCta } from "~/components/Button";
import { IconButton } from "~/components/IconButton";
import { IconDiscord } from "~/components/Layout/IconDiscord";
import { IconX } from "~/components/Layout/IconX";
import { Logo } from "~/components/Logo";
import { links, socials } from "~/config/urls";

function Nav() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.1) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  });

  return (
    <nav className="flex items-center">
      <div className="flex items-center mr-3">
        <Button variant="primaryText" as={Link} size="small" href={links.docs}>
          Docs
        </Button>
        <Button
          variant="primaryText"
          as={Link}
          size="small"
          href={links.tutorials}
        >
          Tutorials
        </Button>
        <Button
          variant="primaryText"
          as={Link}
          size="small"
          href={socials.blog}
        >
          Blog
        </Button>
        <Button
          variant="primaryText"
          as={Link}
          size="small"
          href={links.pricing}
        >
          Pricing
        </Button>
      </div>

      <AnimatePresence>
        {hasScrolled && (
          <motion.div
            key={"nav-cta"}
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            // exit={{ width: 0 }}
            className="flex items-center overflow-hidden whitespace-nowrap min-w-0"
          >
            <MainCta variant="accent" size="small" />
          </motion.div>
        )}

        {!hasScrolled && (
          <motion.div
            key={"nav-socials"}
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            // exit={{ width: 0 }}
            className="flex items-center gap-3 overflow-hidden whitespace-nowrap min-w-0"
          >
            <IconButton
              variant="secondary"
              size="small"
              as={Link}
              href={socials.discord}
              target="_blank"
              rel="noreferrer noopener"
              title="Discord"
            >
              <IconDiscord />
            </IconButton>
            <IconButton
              variant="secondary"
              size="small"
              as={Link}
              href={socials.x}
              target="_blank"
              rel="noreferrer noopener"
              title="X (Formerly Twitter)"
            >
              <IconX />
            </IconButton>
            <IconButton
              variant="secondary"
              size="small"
              as={Link}
              href={socials.github}
              target="_blank"
              rel="noreferrer noopener"
              title="Github"
            >
              <Github />
            </IconButton>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export const Header = () => {
  return (
    <header
      className={
        "flex flex-row justify-between items-center fixed z-30 w-full top-0 bg-transparent h-[60px]"
      }
    >
      <div className="container flex flex-row justify-between">
        <Link href="/">
          <Logo className="h-[54px] w-[54px]" />
        </Link>

        <Nav />
      </div>
    </header>
  );
};
