/**
 * Базовые типы для Sanity
 */

import { SanityLanguage } from "../api";

export type BaseDocument = {
  language: SanityLanguage;
};

export type SanityImage = {
  _type: "image";
  asset: {
    _ref: string;
    url: string;
    _type: "reference";
  };
  crop?: {
    _type: "sanity.imageCrop";
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  hotspot?: {
    _type: "sanity.imageHotspot";
    height: number;
    width: number;
    x: number;
    y: number;
  };
  alt?: string;
};

export type BackgroundMedia =
  | {
      type: "image";
      image: SanityImage;
      alt?: string;
    }
  | {
      type: "video";
      video: SanityFileAsset;
      alt?: string;
    };

export type SanityFileAsset = {
  _type: "file";
  asset: {
    _ref: string;
    _type: "reference";
    url: string;
  };
};

/**
 * Типы для секции Hero
 */
export type Hero = BaseDocument & {
  _type: "hero";
  title: string;
  subtitle: string;
  backgroundMedia: BackgroundMedia;
  ctaButton: {
    text: string;
    link: string;
  };
};

/**
 * Типы для секции Slogan
 */
export type Slogan = BaseDocument & {
  _type: "slogan";
  slogan: string;
  backgroundMedia: BackgroundMedia;
};

/**
 * Типы для секции About
 */
export type About = BaseDocument & {
  _type: "about";
  title: string;
  description: string;
  image: SanityImage;
  features?: Array<{
    title: string;
    description?: string;
  }>;
};

/**
 * Типы для секции Construction
 */
export type Construction = BaseDocument & {
  _type: "construction";
  title: string;
  description: string;
  process: Array<{
    title: string;
    description: string;
    backgroundMedia?: BackgroundMedia;
  }>;
};

/**
 * Типы для секции Portfolio
 */

export type PortfolioMedia =
  | {
      type: "image";
      image: {
        url: string;
      };
      alt?: string;
    }
  | {
      type: "video";
      video: {
        url: string;
      };
      alt?: string;
    };

export type Portfolio = BaseDocument & {
  _type: "portfolio";
  title: string;
  description?: string;
  mediaItems: PortfolioMedia[];
};

/**
 * Типы для секции Accessories
 */
export type Accessories = BaseDocument & {
  _type: "accessories";
  title: string;
  description: string;
  slogan?: string;
  cardImages: Array<SanityImage>;
  perks?: {
    visible: boolean;
    first: string;
    second: string;
    third: string;
  };
};

/**
 * Типы для секции Training
 */
export type Training = BaseDocument & {
  _type: "training";
  title: string;
  description: string;
  slogan?: string;
  programs: Array<{
    title: string;
    description: string;
    image: SanityImage;
  }>;
};

/**
 * Типы для секции Contact
 */
export type Contact = BaseDocument & {
  _type: "contact";
  title: string;
  description: string;
  contactImage: SanityImage;
};

/**
 * Типы для секции Settings
 */
export type Settings = BaseDocument & {
  _type: "settings";
  siteName: string;
  email: string;
  phone: string;
  favicon?: SanityImage;
  logoHeader?: SanityImage;
  logoFooter?: SanityImage;
  siteDescription?: string;
  socialMedia?: Array<{
    platform: string;
    url: string;
    icon?: SanityImage;
  }>;
};

/**
 * Тип для всех данных сайта
 */
export type AllPageData = {
  hero: Hero[];
  slogan: Slogan[];
  about: About[];
  construction: Construction[];
  portfolio: Portfolio[];
  accessories: Accessories[];
  training: Training[];
  contact: Contact[];
  settings: Settings[];
};
