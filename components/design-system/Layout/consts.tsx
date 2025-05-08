import { FacebookIcon } from "../Icons/FacebookIcon";
import { InstagramIcon } from "../Icons/InstagramIcon";
import { LinkedinIcon } from "../Icons/LinkedinIcon";
import { TelegramIcon } from "../Icons/TelegramIcon";
import { TwitterIcon } from "../Icons/TwitterIcon";
import { YouTubeIcon } from "../Icons/YouTubeIcon";

export const leftLinks = [
  {
    label: {
      ru: "Про нас",
      en: "About us",
      pl: "O nas",
    },
    href: "#about",
  },
  {
    label: {
      ru: "Строительство",
      en: "Construction",
      pl: "Budowa",
    },
    href: "#construction",
  },
];
export const rightLinks = [
  {
    label: {
      ru: "Аксессуары",
      en: "Accessories",
      pl: "Akcesoria",
    },
    href: "#accessories",
  },
  {
    label: {
      ru: "Обучение",
      en: "Training",
      pl: "Szkolenie",
    },
    href: "#training",
  },
];

export const iconMapByPlatform: Record<string, React.ReactNode> = {
  linkedin: <LinkedinIcon />,
  facebook: <FacebookIcon />,
  twitter: <TwitterIcon />,
  instagram: <InstagramIcon />,
  youtube: <YouTubeIcon />,
  telegram: <TelegramIcon />,
};
