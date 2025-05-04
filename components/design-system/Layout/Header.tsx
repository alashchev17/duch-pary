"use client";
import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";
import Link from "next/link";
import Flex from "./Flex";
import { Button } from "../Buttons";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Settings } from "@/app/lib/types";
import { leftLinks, rightLinks } from "./consts";
import { smoothScrollToAnchor } from "@/utils/smoothScroll";

// Combine all links for mobile menu
const allLinks = [...leftLinks, ...rightLinks];

// Burger menu icon component
const BurgerIcon: React.FC<{ open: boolean; onClick: () => void }> = ({
  open,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-20"
      aria-label={open ? "Закрыть меню" : "Открыть меню"}
    >
      <span
        className={`block w-6 h-0.5 ${open ? "bg-dark-green" : "bg-brand-primary"} transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
      ></span>
      <span
        className={`block w-6 h-0.5 ${open ? "bg-dark-green" : "bg-brand-primary"} transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`}
      ></span>
      <span
        className={`block w-6 h-0.5 ${open ? "bg-dark-green" : "bg-brand-primary"} transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
      ></span>
    </button>
  );
};

export type HeaderProps = {
  externalLogo?: Settings["logoHeader"];
};

export const Header: React.FC<HeaderProps> = ({ externalLogo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobile } = useIsMobile();

  // Close menu when clicking outside
  useEffect(() => {
    if (isMenuOpen) {
      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.closest(".mobile-menu") && !target.closest("button")) {
          setIsMenuOpen(false);
        }
      };

      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [isMenuOpen]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkClasses =
    "font-manrope text-[20px] leading-[18px] uppercase text-brand-primary";
  const mobileLinkClasses =
    "font-nevduplenysh text-h2-mobile text-dark-green py-2";

  return (
    <header className="py-[12px] md:py-[30px]">
      {/* Desktop Header */}
      {!isMobile && (
        <Flex align="center" justify="between" className="relative">
          <Flex className="gap-[36px]">
            {leftLinks.map((link) =>
              link.href.startsWith("#") ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkClasses}
                  onClick={(e) => smoothScrollToAnchor(e, link.href)}
                >
                  {link.label}
                </Link>
              ) : (
                <Link key={link.href} href={link.href} className={linkClasses}>
                  {link.label}
                </Link>
              ),
            )}
          </Flex>

          <Logo
            externalLogo={externalLogo}
            className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
          />

          <Flex className="gap-[36px]">
            {rightLinks.map((link) =>
              link.href.startsWith("#") ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkClasses}
                  onClick={(e) => smoothScrollToAnchor(e, link.href)}
                >
                  {link.label}
                </Link>
              ) : (
                <Link key={link.href} href={link.href} className={linkClasses}>
                  {link.label}
                </Link>
              ),
            )}
          </Flex>
        </Flex>
      )}

      {/* Mobile Header */}
      {isMobile && (
        <Flex align="center" justify="between" className="relative">
          {/* Logo centered for mobile */}
          <Logo
            externalLogo={externalLogo}
            className={`h-8 w-auto max-w-[110px] z-20 ${isMenuOpen ? "[&>path]:fill-dark-green" : ""}`}
          />

          {/* Burger menu icon */}
          <BurgerIcon open={isMenuOpen} onClick={toggleMenu} />

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="mobile-menu fixed inset-0 bg-brand-primary z-10 flex flex-col">
              <div className="container mx-auto px-6 h-full flex flex-col items-center justify-center">
                <nav className="relative flex flex-col items-center">
                  {allLinks.map((link) =>
                    link.href.startsWith("#") ? (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={mobileLinkClasses}
                        onClick={(e) =>
                          smoothScrollToAnchor(e, link.href, () =>
                            setIsMenuOpen(false),
                          )
                        }
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={mobileLinkClasses}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ),
                  )}
                </nav>
                <Link
                  href="#contact"
                  onClick={(e) =>
                    smoothScrollToAnchor(e, "#contact", () =>
                      setIsMenuOpen(false),
                    )
                  }
                >
                  <Button
                    variant="primary"
                    className="absolute bottom-[24px] left-[20px] right-[20px] !text-brand-bg uppercase"
                  >
                    Связаться
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </Flex>
      )}
    </header>
  );
};
