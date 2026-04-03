"use client";

import { MouseEvent, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, CloseIcon, MenuIcon, PlusIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import Button from "../ui/button";
import { usePathname } from "next/navigation";
import ButtonArrow from "../ui/buttonArrow";
import { createPortal } from "react-dom";
import { Menu } from "@/types/menu";

const MobileNavigation = ({ data }: { data: Menu[] }) => {
  const pathName = usePathname();

  const [navbarShow, setNavbarShow] = useState(false);
  const [activeMenu, setActiveMenu] = useState<Menu | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setNavbarShow(false);
    setActiveMenu(null);
  }, [pathName]);

  useEffect(() => {
    document.body.style.overflow = navbarShow ? "hidden" : "auto";
  }, [navbarShow]);

  const handleOpenSubmenu = (
    e: MouseEvent,
    menu: Menu
  ) => {
    if (menu.submenu && menu.submenu.length) {
      e.preventDefault();
      setActiveMenu(menu);
    }
  };

  const handleBack = () => {
    setActiveMenu(null);
  };

  return (
    <div className="relative z-50 block xl:hidden">
      {/* bouton menu */}
      <button onClick={() => setNavbarShow(true)}>
        <MenuIcon />
      </button>

      {mounted &&
        createPortal(
          <>
            {/* overlay */}
            <div
              onClick={() => setNavbarShow(false)}
              className={cn(
                "fixed inset-0 z-[9998] bg-gray-700/90 backdrop-blur-md transition-all duration-300",
                navbarShow ? "visible opacity-100" : "invisible opacity-0"
              )}
            />

            {/* drawer */}
            <nav
              className={cn(
                "fixed top-0 right-0 z-[9999] flex h-full w-full max-w-[320px] flex-col justify-between overflow-y-auto bg-primary px-3 pt-7 pb-3 shadow-lg transition-all duration-500",
                navbarShow ? "translate-x-0" : "translate-x-full"
              )}
            >
              {/* close */}
              <button
                onClick={() => setNavbarShow(false)}
                className="absolute top-2 right-2"
              >
                <CloseIcon />
              </button>

              {/* contenu */}
              <div>
                {/* 🔹 LEVEL 1 : MENU */}
                {!activeMenu && (
                  <ul className="flex flex-col">
                    {data.map((menu) => {
                      const isActive =
                        pathName === menu.path ||
                        menu.submenu?.some((col) =>
                          col.items.some(
                            (item) => item.path === pathName
                          )
                        );

                      return (
                        <li key={menu.id}>
                          <Link
                            href={menu.path || "#"}
                            onClick={(e) =>
                              handleOpenSubmenu(e, menu)
                            }
                            className={cn(
                              "flex w-full items-center justify-between rounded-xl px-5 py-3 font-medium",
                              isActive
                                ? "text-blue-500"
                                : "text-secondary"
                            )}
                          >
                            {menu.title}
                            {menu.submenu?.length ? <PlusIcon /> : null}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* 🔹 LEVEL 2 : SUBMENU */}
                {activeMenu && (
                  <div>
                    {/* header retour */}
                    <button
                      onClick={handleBack}
                      className="mb-4 flex items-center gap-2 px-4 text-sm font-medium"
                    >
                      <ArrowLeft />
                      {activeMenu.title}
                    </button>

                    {/* colonnes */}
                    {activeMenu.submenu?.map((column) => (
                      <div key={column.id} className="mb-6">
                        <h4 className="px-4 mb-2 text-sm font-semibold text-gray-400">
                          {column.title}
                        </h4>

                        <div className="space-y-2">
                          {column.items.map((item) => (
                            <Link
                              key={item.id}
                              href={item.path || "#"}
                              onClick={() => setNavbarShow(false)}
                              className="block rounded-md px-4 py-2 hover:bg-gray-100"
                            >
                              <p className="font-medium">
                                {item.title}
                              </p>
                              <p className="text-xs text-gray-500">
                                {item.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* auth */}
              <div>
                <Link href="/signin" className="px-7 py-3 my-8 text-base block">
                  Connexion
                </Link>

                <Button asChild className="h-12">
                  <Link href="/signup">
                    Créer mon portefeuille
                    <ButtonArrow />
                  </Link>
                </Button>
              </div>
            </nav>
          </>,
          document.body
        )}
    </div>
  );
};

export default MobileNavigation;