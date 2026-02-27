export type BlogType = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  featureImage: any;
  shortDescription: string;
  content: any[];
  author: {
    name: string;
    photo: any;
    title: string;
  };
  date: string;
};
