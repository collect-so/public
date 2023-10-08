const width = 60;
const height = 103;

const colorSchema = {
  yellow: { main: "#CBEE4C", complementary: "#219653", content: "#000" },
  orange: { main: "#F2994A", complementary: "#9B51E0", content: "#000" },
  green: { main: "#219653", complementary: "#F0C3D2", content: "#fff" },
  red: { main: "#FF6B6B", complementary: "#CBEE4C", content: "#fff" },
  pink: { main: "#F0C3D2", complementary: "#219653", content: "#000" },
  blue: { main: "#56CCF2", complementary: "#9B51E0", content: "#000" },
  purple: { main: "#9B51E0", complementary: "#CBEE4C", content: "#fff" },
};
export type FileIconColors = keyof typeof colorSchema;
export const FileIcon = ({
  extension = ".png",
  variant = "yellow",
}: {
  extension: string;
  variant: FileIconColors;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 159 202"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_890_6054)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M132.198 30L158.996 60V2.62268e-06L158.999 6.43738e-06V194C158.999 198.418 155.418 202 150.999 202H7.99999C3.58171 202 0 198.418 0 194V8C0 3.58173 3.58172 6.43738e-06 8 6.43738e-06L105.401 0L132.198 30Z"
          fill={colorSchema[variant].main}
        />
        <text
          x={extension.length > 4 ? 22 : 35}
          y={140}
          fill={colorSchema[variant].content}
          className={"font-special text-2xl text-base-black font-medium"}
        >
          {extension}
        </text>
        <path
          d="M113.406 60C108.988 60 105.406 56.4183 105.406 52L105.406 -4.05312e-06L132.204 30L159.002 60L113.406 60Z"
          fill={colorSchema[variant].complementary}
        />
      </g>

      <defs>
        <clipPath id="clip0_890_6054">
          <rect width="159" height="202" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
