import { randomIntFromRange } from "~/common";

function generateBinary(length: number) {
  let result = "";
  const characters = "01";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const generateRotation = () => ({
  default: randomIntFromRange(-5, 5),
  whileHover: randomIntFromRange(-5, 5),
});
// 3475673
export const binaryData = [
  {
    binaryChip: {
      data: 101,
      ...generateRotation(),
    },
    file: {
      ...generateRotation(),
      extension: ".docx",
      variant: "pink",
    },
  },
  {
    binaryChip: {
      data: 1101,
      ...generateRotation(),
    },
    file: {
      ...generateRotation(),
      extension: ".webp",
      variant: "purple",
    },
  },
  {
    binaryChip: {
      data: 1010111,
      ...generateRotation(),
    },
    file: {
      ...generateRotation(),
      extension: ".pptx",
      variant: "orange",
    },
  },
  {
    binaryChip: {
      data: 11001,
      ...generateRotation(),
    },
    file: {
      ...generateRotation(),
      extension: ".zip",
      variant: "blue",
    },
  },
  {
    binaryChip: {
      data: 100111,
      ...generateRotation(),
    },
    file: {
      ...generateRotation(),
      extension: ".yml",
      variant: "green",
    },
  },
  {
    binaryChip: {
      data: 1110100,
      ...generateRotation(),
    },
    file: {
      ...generateRotation(),
      extension: ".wav",
      variant: "yellow",
    },
  },
  {
    binaryChip: {
      data: 110,
      ...generateRotation(),
    },
    file: {
      ...generateRotation(),
      extension: ".tsx",
      variant: "red",
    },
  },
];
