"use client";

import React, { useState } from "react";

import { ChevronIcon } from "../Icons/ChevronIcon";
import styles from "./LanguageSwitcher.module.css";
import classNames from "classnames";
import { useLanguage } from "./language";
import { useIsMobile } from "@/hooks/useIsMobile";

export const LanguageSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, setLanguage, languages } = useLanguage();
  const { isMobile } = useIsMobile();
  const handleSetLanguage = (language: typeof currentLanguage) => {
    setIsOpen(false);
    setLanguage(language);
  };

  return (
    <div className={styles.switcherContainer}>
      <div
        className={classNames(styles.switcher, { [styles.mobile]: isMobile })}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {currentLanguage.code}
        <ChevronIcon
          className={classNames(styles.switcherChevron, {
            [styles.switcherChevronActive]: isOpen,
          })}
        />
      </div>
      <div
        className={classNames(styles.switcherInner, {
          [styles.switcherInnerOpen]: isOpen,
        })}
      >
        {languages.map((language) => {
          return (
            <div
              key={language.code}
              className={classNames(styles.switcherOption, {
                [styles.switcherOptionActive]:
                  language.code === currentLanguage.code,
              })}
              onClick={() => handleSetLanguage(language)}
            >
              {language.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};
