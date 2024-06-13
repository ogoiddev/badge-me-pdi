"use client";
import { FC } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface HeaderDefaultHomeProps {
  style?: any;
}

const HeaderDefaultHome: FC<HeaderDefaultHomeProps> = () => {
  const { theme, toggleTheme } = useTheme();
  const currentPath = usePathname().split("/")?.pop();

  return (
    <header className={`flex w-[100%] justify-between px-6 py-8`}>
      <div className="flex gap-8 min-w-[15%] items-center justify-center px-4">
        <div className="m-0 min-w-14 h-fit rounded-lg dark:backdrop-invert overflow-hidden">
          <Image src="/logos/logo.png" alt="logo" width={60} height={60} />
        </div>
        <button
          onClick={toggleTheme}
          className="flex items-center transition-all ease-in-out justify-center h-full w-40 gap-2 p-2 rounded bg-dark-gradient dark:font-bold dark:bg-light-gradient text-dark-text dark:text-light-text"
        >
          Alternar Tema
          {theme === "dark" ? (
            <MdOutlineLightMode size={24} />
          ) : (
            <MdLightMode size={24} />
          )}
        </button>
      </div>
      <nav className="flex max-w-[100%] justify-between gap-4 px-4 text-nowrap [font-size:_clamp(14px,2vw,18px)]">
        <h1
          className={`flex items-center transition-all ease-in-out justify-center w-fit gap-2 px-1 rounded text-2xl text-light-text dark:text-dark-text`}
        >
          {"OPÇÕES: "}
        </h1>
        <div className={`flex justify-evenly gap-4 `}>
          <Link
            href="/pages/barcode-layout"
            className={`flex items-center border-4 border-light-text dark:border-dark-text transition-all ease-in-out justify-center w-64 gap-2 p-2 rounded ${
              currentPath === "barcode-layout"
                ? "bg-gray-900 dark:bg-white text-dark-text dark:text-light-text"
                : "bg-transparent text-light-text dark:text-dark-text"
            }`}
          >
            <span>BARCODE LAYOUT</span>
          </Link>

          <Link
            href="/pages/qr-code-layout"
            className={`flex items-center border-4 border-light-text dark:border-dark-text transition-all ease-in-out justify-center w-64 gap-2 p-2 rounded ${
              currentPath === "qr-code-layout"
                ? "bg-gray-900 dark:bg-white text-dark-text dark:text-light-text"
                : "bg-transparent text-light-text dark:text-dark-text"
            }`}
          >
            <span>QR CODE LAYOUT</span>
          </Link>

          <Link
            href="/pages/qr-barcode-layout"
            className={`flex items-center border-4 border-light-text dark:border-dark-text transition-all ease-in-out justify-center w-64 gap-2 p-2 rounded ${
              currentPath === "qr-barcode-layout"
                ? "bg-gray-900 dark:bg-white text-dark-text dark:text-light-text"
                : "bg-transparent text-light-text dark:text-dark-text"
            }`}
          >
            <span>QR & BARCODE LAYOUT</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default HeaderDefaultHome;
