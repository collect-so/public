import localFont from "next/font/local";
import { Manrope } from "next/font/google";

export const kyivTypeSans = localFont({
  src: "./kyiv-sans/KyivTypeSans-VarGX.ttf",
  variable: "--font-kyiv-sans",
});

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});
