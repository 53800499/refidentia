import { StaticImageData } from "next/image";
import type { JSX } from "react";
export type Challenge = {
  id: number;
  icon: JSX.Element;
  title: string;
  paragraph?: string;
  description: string;
  thumbnail: StaticImageData;
};
