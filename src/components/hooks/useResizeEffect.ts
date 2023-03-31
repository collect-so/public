import { useEffect } from "react";

export const useResizeEffect = (effectCallback: () => void) => {
  useEffect(() => {
    window.addEventListener("resize", effectCallback);
    return () => window.removeEventListener("resize", effectCallback);
  }, [effectCallback]);
};
