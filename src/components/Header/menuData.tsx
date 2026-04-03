import { Menu } from "@/types/menu";
import { HEADER } from "@/constants/wording";

const menuData: Menu[] = HEADER.MENU_ITEMS.map((item, index) => ({
  id: index + 1,
  title: item.LABEL,
  path: item.HREF,
  newTab: false,

  submenu: item.SUBMENU
    ? item.SUBMENU.map((subItem, subIndex) => ({
        id: subIndex + 1,
        title: subItem.LABEL,
        newTab: false,

        items: subItem.ITEMS.map((i, itemIndex) => ({
          id: itemIndex + 1,
          title: i.LABEL,
          description: i.DESCRIPTION,
          path: i.HREF,
          newTab: false,
        })),
      }))
    : [],
}));
export default menuData;
