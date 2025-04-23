/**
 * Базовые типы для Sanity
 */
export type SanityImage = {
  _type: "image";
  asset: {
    _ref: string;
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
export type Hero = {
  _type: "hero";
  title: string;
  subtitle?: string;
  backgroundMedia: BackgroundMedia;
  ctaButton: {
    text: string;
    link: string;
  };
};

/**
 * Типы для секции Slogan
 */
export type Slogan = {
  _type: "slogan";
  slogan: string;
  backgroundMedia: BackgroundMedia;
};

/**
 * Типы для секции About
 */
export type About = {
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
export type Construction = {
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
export type PortfolioMediaItem = SanityImage | SanityFileAsset;

export type Portfolio = {
  _type: "portfolio";
  title: string;
  description?: string;
  mediaItems: PortfolioMediaItem[];
};

/**
 * Типы для секции Accessories
 */
export type Accessories = {
  _type: "accessories";
  title: string;
  description: string;
  slogan?: string;
  cards: Array<{
    image: SanityImage;
    title: string;
  }>;
};

/**
 * Типы для секции Training
 */
export type Training = {
  _type: "training";
  title: string;
  description: string;
  slogan?: string;
  programs: Array<{
    title: string;
    description: string;
    image?: SanityImage;
  }>;
};

/**
 * Типы для секции Contact
 */
export type Contact = {
  _type: "contact";
  title: string;
  description?: string;
  email: string;
  phone?: string;
  address?: string;
  socialMedia?: Array<{
    platform:
      | "facebook"
      | "instagram"
      | "twitter"
      | "youtube"
      | "tiktok"
      | "linkedin"
      | "other";
    url: string;
    icon?: SanityImage;
  }>;
  mapLocation?: {
    latitude?: number;
    longitude?: number;
    zoom?: number;
  };
  contactImage?: SanityImage;
  workingHours?: Array<{
    days: string;
    hours: string;
  }>;
};

/**
 * Типы для секции Settings
 */
export type Settings = {
  _type: "settings";
  siteName: string;
  logo?: SanityImage;
  favicon?: SanityImage;
  siteDescription?: string;
  defaultSocialImage?: SanityImage;
  headerNav?: Array<{
    title: string;
    url: string;
  }>;
  footerNav?: Array<{
    title: string;
    url: string;
  }>;
  footerText?: string;
  googleAnalyticsId?: string;
  metaTags?: Array<{
    name: string;
    content: string;
  }>;
};

/**
 * Тип для всех данных сайта
 */
export type AllPageData = {
  hero: Hero;
  slogan: Slogan;
  about: About;
  construction: Construction;
  portfolio: Portfolio;
  accessories: Accessories;
  training: Training;
  contact: Contact;
  settings: Settings;
};
