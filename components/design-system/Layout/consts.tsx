import { FacebookIcon } from "../Icons/FacebookIcon";
import { InstagramIcon } from "../Icons/InstagramIcon";
import { LinkedinIcon } from "../Icons/LinkedinIcon";
import { TelegramIcon } from "../Icons/TelegramIcon";
import { TwitterIcon } from "../Icons/TwitterIcon";
import { YouTubeIcon } from "../Icons/YouTubeIcon";

export const leftLinks = [
  {
    label: "Про нас",
    href: "#about",
  },
  {
    label: "Строительство",
    href: "#construction",
  },
];
export const rightLinks = [
  {
    label: "Аксессуары",
    href: "#accessories",
  },
  {
    label: "Обучение",
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
