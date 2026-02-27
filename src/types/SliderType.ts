import { StaticImageData } from "next/image";

export type SliderType = {
  title: string;
  highlight: string;
  description: string;
  image: string | StaticImageData; 
};