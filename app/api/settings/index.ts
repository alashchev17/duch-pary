import { fetchSanityData } from "../../lib/sanity-utils";
import { Settings } from "../../lib/types";

/**
 * GROQ запрос для получения данных секции Settings
 */
const settingsQuery = `*[_type == "settings"][0]{
  _type,
  siteName,
  email,
  phone,
  favicon{
    _type,
    asset->{
      _ref,
      url
    },
    crop,
    hotspot,
    alt
  },
  logoHeader{
    _type,
    asset->{
      _ref,
      url
    },
    crop,
    hotspot,
    alt
  },
  logoFooter{
    _type,
    asset->{
      _ref,
      url
    },
    crop,
    hotspot,
    alt
  },
  siteDescription,
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
  }
}`;

/**
 * Получает данные настроек сайта
 * @returns Данные настроек сайта
 */
export async function getSettings(): Promise<Settings> {
  return fetchSanityData<Settings>(settingsQuery);
}
