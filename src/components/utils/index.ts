export const getAbsoluteURL = (path?: string) => {
  if (typeof window === "undefined") {
    return path;
  }
  return `${window.location.origin}${path}`;
};

export const getIndex = (
  itemsCount: number,
  currentIndex: number,
  step: number,
): number => {
  if (step < 0) {
    return (currentIndex + itemsCount + step) % itemsCount;
  } else if (step > 0) {
    return (currentIndex + step) % itemsCount;
  }

  return currentIndex;
};
