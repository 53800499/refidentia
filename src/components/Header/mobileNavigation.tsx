/**
 * eslint-disable react-hooks/set-state-in-effect
 *
 * @format
 */

/**
 * eslint-disable react-hooks/set-state-in-effect
 *
 * @format
 */

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
  const [dropdownOpen, setDropdownOpen] = useState<null | number>(null);
  const [selectLabel, setSelectLabel] = useState("");

  const handleDropdownLinkClick = (
    e: MouseEvent,
    id: number,
    title: string,
    submenu?: Menu[]
  ) => {
    if (submenu && submenu.length) {
      e.preventDefault();
      setDropdownOpen(id);
      setSelectLabel(title);
    }
  };

  const handleBackClick = () => {
    setDropdownOpen(null);
    setSelectLabel("");
  };

  useEffect(() => {
    setNavbarShow(false);
  }, [pathName]);

  useEffect(() => {
    document.body.style.overflow = navbarShow ? "hidden" : "auto";
  }, [navbarShow]);

  return (
    <div className="relative z-50 block xl:hidden">
      <button onClick={() => setNavbarShow(true)}>
        <MenuIcon />
      </button>

      {typeof window !== "undefined" &&
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

            {/* modal */}
            <nav
              className={cn(
                "fixed top-0 right-0 z-[9999] flex h-full w-full max-w-[320px] flex-col justify-between overflow-y-auto bg-primary px-3 pt-7 pb-3 shadow-lg transition-all duration-500",
                navbarShow ? "translate-x-0" : "translate-x-full"
              )}>
              {/* close */}
              <button
                onClick={() => setNavbarShow(false)}
                className="absolute top-2 right-2">
                <CloseIcon />
              </button>

              {/* 👉 TON CONTENU EXISTANT (menu + auth) */}
              <ul className="flex flex-col">
                {data.map(({ id, title, path, submenu }) => {
                  const isActive =
                    pathName === path ||
                    submenu?.some((item) => pathName === item.path);

                  return (
                    <li key={id}>
                      <Link
                        href={path || "#"}
                        onClick={(e) =>
                          handleDropdownLinkClick(e, id, title, submenu)
                        }
                        className={cn(
                          "flex w-full items-center justify-between rounded-xl px-5 py-2 font-medium transition-all duration-300",
                          isActive ? "text-blue-500" : "text-secondary"
                        )}>
                        {title}
                        {submenu?.length ?
                          <PlusIcon />
                        : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* auth */}
              <div>
                <Link href="/signin" className="px-7 py-3 my-8 text-base">
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
