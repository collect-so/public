import {
  Children,
  cloneElement,
  ComponentProps,
  isValidElement,
  PropsWithChildren,
  CSSProperties,
  useState,
  ReactElement,
  useEffect,
} from "react";
import cx from "classnames";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getIndex } from "~/components/utils";

function CarouselButton({
  className,
  children,
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      className={cx(
        "absolute disabled:hidden bg-base-white text-accent-brand border-0 h-14 w-14 grid place-content-center rounded-full",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function CarouselCard({
  className,
  children,
  ...props
}: ComponentProps<"figure">) {
  return (
    <figure className={cx("py-5 w-full", className)} {...props}>
      {children}
    </figure>
  );
}

export function Carousel({
  children,
  cardWidth = "clamp(65vw, 23.4375rem, 70vw)",
}: PropsWithChildren<{ cardWidth?: string }>) {
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const cardCount = Children.count(children);

  useEffect(() => {
    setCurrentIdx(0);
  }, [children]);

  const next = () => {
    setCurrentIdx((cur) => getIndex(cardCount, cur, +1));
  };

  const prev = () => {
    setCurrentIdx((cur) => getIndex(cardCount, cur, -1));
  };

  return (
    <div
      style={{ ["--cardWidth"]: cardWidth } as CSSProperties}
      className={cx(
        "flex h-full w-full overflow-hidden relative min-h-[70vh]",
        "sm:before:hidden before:absolute before:h-full before:w-[20vw] before:bg-gradient-to-r before:from-background-dark before:pointer-events-none before:z-10 before:left-0 before:top-0",
        "sm:after:hidden after:absolute after:h-full after:w-[20vw] after:bg-gradient-to-l after:from-background-dark after:pointer-events-none after:z-10 after:right-0 after:top-0",
      )}
    >
      <div
        className="relative grid justify-start mx-auto"
        style={
          {
            "--cardCount": cardCount,
            "--transformValue": currentIdx,
            "--colGap": "20px",
            gap: "var(--colGap)",
            transform:
              "translate3d(calc(var(--transformValue) * (-100% - var(--colGap))),0,0)",
            gridTemplateColumns: "repeat(var(--cardCount),var(--cardWidth))",
            maxWidth: "var(--cardWidth)",
            transition: "all 200ms cubic-bezier(.455,.03,.515,.955)",
          } as CSSProperties
        }
      >
        {Children.map(children, (child, idx) => {
          if (isValidElement(child)) {
            return cloneElement(
              child as ReactElement<{ onClick: () => void }>,
              {
                onClick: () => setCurrentIdx(idx % cardCount),
              },
            );
          }

          return null;
        })}
      </div>
      <CarouselButton
        disabled={currentIdx <= 0}
        className="left-10 top-1/2 -translate-y-1/2 z-20"
        onClick={prev}
      >
        <ArrowLeft />
      </CarouselButton>
      <CarouselButton
        disabled={currentIdx >= cardCount - 1}
        onClick={next}
        className="right-10 top-1/2 -translate-y-1/2 z-20"
      >
        <ArrowRight />
      </CarouselButton>
    </div>
  );
}
