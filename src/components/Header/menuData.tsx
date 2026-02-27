import { Menu } from "@/types/menu";
import { HEADER } from "@/constants/wording";

const menuData: Menu[] = HEADER.MENU_ITEMS.map((item, index) => ({
  id: index + 1,
  title: item.LABEL,
  path: item.HREF,
  newTab: false,
}));

export default menuData;
