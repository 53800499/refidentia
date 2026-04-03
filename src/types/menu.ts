type Item = {
  id: number;
  title: string;
  path?: string;
  description?: string;
  newTab: boolean;
};

type Column = {
  id: number;
  title: string;
  items: Item[];
  newTab: boolean;
};

export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  description?: string;
  submenu?: Column[];
};