export type Testimonial = {
  id: number;
  name: string;
  designation: string;
  content: string;
  image: string;
  star: number;
};
export type testimonialType = {
  id: number;
  user: {
    name: string;
    position: string;
    image: any;
  };
  review?: string;
  videoThumb?: any;
  videoUrl?: string;
  isVideoReview: boolean;
};