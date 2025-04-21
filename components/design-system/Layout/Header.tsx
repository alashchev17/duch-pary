import React from "react";
import { Logo } from "./Logo";
import Link from "next/link";
import Flex from "./Flex";

const leftLinks = [
  {
    label: "Про нас",
    href: "#about",
  },
  {
    label: "Строительство",
    href: "#construction",
  },
];
const rightLinks = [
  {
    label: "Аксессуары",
    href: "#accessories",
  },
  {
    label: "Обучение",
    href: "#training",
  },
];

export const Header: React.FC = () => {
  const linkClasses =
    "font-manrope text-[20px] leading-[18px] uppercase text-primary";
  return (
    <header className="py-[30px]">
      <Flex align="center" justify="between" className="relative">
        <Flex className="gap-[36px]">
          {leftLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClasses}>
              {link.label}
            </Link>
          ))}
        </Flex>

        <Logo className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2" />

        <Flex className="gap-[36px]">
          {rightLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClasses}>
              {link.label}
            </Link>
          ))}
        </Flex>
      </Flex>
    </header>
  );
};
