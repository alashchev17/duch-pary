import { fetchSanityData } from '../lib/sanity-utils'
import { AllPageData } from '../lib/types'

// Импортируем все отдельные запросы
import { getHero } from './hero'
import { getSlogan } from './slogan'
import { getAbout } from './about'
import { getConstruction } from './construction'
import { getPortfolio } from './portfolio'
import { getAccessories } from './accessories'
import { getTraining } from './training'
import { getContact } from './contact'
import { getSettings } from './settings'

/**
 * GROQ запрос для получения всех данных сайта за один раз
 */
const allDataQuery = `{
  "hero": *[_type == "hero"][0]{
    _type,
    title,
    subtitle,
    backgroundImage{
      _type,
      asset->{
        _ref,
        url
      },
      crop,
      hotspot,
      alt
    },
    ctaButton{
      text,
      link
    }
  },
  "slogan": *[_type == "slogan"][0]{
    _type,
    title,
    slogan,
    backgroundImage{
      _type,
      asset->{
        _ref,
        url
      },
      crop,
      hotspot,
      alt
    }
  },
  "about": *[_type == "about"][0]{
    _type,
    title,
    description,
    images{
      _type,
      asset->{
        _ref,
        url
      },
      crop,
      hotspot,
      alt
    },
    features[]{
      title,
      description
    }
  },
  "construction": *[_type == "construction"][0]{
    _type,
    title,
    description,
    process[]{
      title,
      description,
      image{
        _type,
        asset->{
          _ref,
          url
        },
        crop,
        hotspot,
        alt
      }
    }
  },
  "portfolio": *[_type == "portfolio"][0]{
    _type,
    title,
    description,
    mediaItems[]{
      _type,
      asset->{
        _ref,
        url
      },
      // Для изображений
      crop,
      hotspot,
      alt,
      // Для видео файлов
      ...((_type == "file") => {
        "url": asset->url
      })
    }
  },
  "accessories": *[_type == "accessories"][0]{
    _type,
    title,
    description,
    slogan,
    cards[]{
      image{
        _type,
        asset->{
          _ref,
          url
        },
        crop,
        hotspot,
        alt
      },
      title
    }
  },
  "training": *[_type == "training"][0]{
    _type,
    title,
    description,
    slogan,
    programs[]{
      title,
      description,
      image{
        _type,
        asset->{
          _ref,
          url
        },
        crop,
        hotspot,
        alt
      }
    }
  },
  "contact": *[_type == "contact"][0]{
    _type,
    title,
    description,
    email,
    phone,
    address,
    socialMedia[]{
      platform,
      url,
      icon{
        _type,
        asset->{
          _ref,
          url
        },
        crop,
        hotspot,
        alt
      }
    },
    mapLocation{
      latitude,
      longitude,
      zoom
    },
    contactImage{
      _type,
      asset->{
        _ref,
        url
      },
      crop,
      hotspot,
      alt
    },
    workingHours[]{
      days,
      hours
    }
  },
  "settings": *[_type == "settings"][0]{
    _type,
    siteName,
    logo{
      _type,
      asset->{
        _ref,
        url
      },
      crop,
      hotspot,
      alt
    },
    favicon{
      _type,
      asset->{
        _ref,
        url
      }
    },
    siteDescription,
    defaultSocialImage{
      _type,
      asset->{
        _ref,
        url
      },
      crop,
      hotspot,
      alt
    },
    headerNav[]{
      title,
      url
    },
    footerNav[]{
      title,
      url
    },
    footerText,
    googleAnalyticsId,
    metaTags[]{
      name,
      content
    }
  }
}`

/**
 * Получает все данные сайта с использованием отдельных запросов для каждой секции
 * @returns Все данные для отображения сайта
 */
export async function getAllPageDataWithSeparateQueries(): Promise<AllPageData> {
  // Выполняем все запросы параллельно для оптимизации
  const [hero, slogan, about, construction, portfolio, accessories, training, contact, settings] = await Promise.all([
    getHero(),
    getSlogan(),
    getAbout(),
    getConstruction(),
    getPortfolio(),
    getAccessories(),
    getTraining(),
    getContact(),
    getSettings(),
  ])

  return {
    hero,
    slogan,
    about,
    construction,
    portfolio,
    accessories,
    training,
    contact,
    settings,
  }
}
