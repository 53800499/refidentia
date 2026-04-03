/** @format */

"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";
// import { Logo } from "@/assets";
import Button from "../ui/button";
import ButtonArrow from "../ui/buttonArrow";
import { Logo, LogoWhite } from "@/lib/icons";
import MobileNavigation from "./mobileNavigation";
import { MoveRight } from "lucide-react";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <section>
      <header
        className={`header top-0 left-0 z-30 flex w-full items-center ${
          sticky ?
            "shadow-sticky fixed z-50 bg-white/80 backdrop-blur-xs transition"
          : "absolute bg-transparent"
        }`}>
        <div className="container">
          <div className="relative flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <Link
                href="/"
                className={`header-logo block w-full  ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}>
                <Logo className="h-10 w-auto" />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <nav
                id="navbarCollapse"
                className={`navbar border-body-color/50 dark:border-body-color/20 absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 invisible top-[120%] opacity-0"
                  }`}>
                <ul className="block lg:flex lg:space-x-12">
                  {menuData.map((menuItem, index) => (
                    <li key={index} className="group relative">
                      {menuItem.path ?
                        <Link
                          href={menuItem.path}
                          className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                            usePathName === menuItem.path ?
                              "text-blue-500"
                            : "text-dark hover:text-blue-500"
                          }`}>
                          {menuItem.title}
                        </Link>
                      : <>
                          <p
                            onClick={() => handleSubmenu(index)}
                            className="text-dark group-hover:text-blue-500 flex cursor-pointer items-center justify-between py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 dark:group-hover:text-white">
                            {menuItem.title}
                            <span className="pl-3">
                              <svg width="25" height="24" viewBox="0 0 25 24">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </p>
                          <div
                            className={`submenu absolute -left-80 top-full w-[900px] rounded-xl bg-white p-6 shadow-xl transition-all
                              ${openIndex === index ? "block" : "hidden"}
                              lg:group-hover:block`}>
                            <div className="grid grid-cols-4 gap-6">
                              {menuItem.submenu?.map((column, colIndex) => (
                                <div key={colIndex} className="border-r border-gray-200 pr-6 last:border-none">
                                  <h4 className="mb-3 text-sm font-semibold text-gray-500">
                                    {column.title}
                                  </h4>

                                  <div className="space-y-3">
                                    {column.items.map((item, i) => (
                                      <Link
                                        key={i}
                                        href={item.path || "#"}
                                        className="block rounded-md p-2">
                                        <p className="font-medium text-blue-500  hover:text-blue-900">
                                          {item.title}<MoveRight className="hidden hover:block"/>
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
                          </div>
                        </>
                      }
                    </li>
                  ))}
                </ul>
              </nav>
              <div></div>
              <div className="flex items-center justify-end lg:pr-0">
                <div className="lg:hidden">
                  <MobileNavigation data={menuData} />
                </div>
                <Link
                  href="/signin"
                  className="text-dark hidden px-7 py-3 text-base font-bold hover:opacity-70 md:block">
                  Connexion
                </Link>
                <Button
                  asChild
                  className="hidden h-12 justify-between gap-2.5 py-1.5 pr-1.5 pl-6 text-base tracking-base lg:flex">
                  <Link href={"/signup_option"}>
                    Créer mon portefeuille
                    <ButtonArrow />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
