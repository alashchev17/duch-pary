import { fetchSanityData } from '../../lib/sanity-utils'
import { Settings } from '../../lib/types'

/**
 * GROQ запрос для получения данных секции Settings
 */
const settingsQuery = `*[_type == "settings"][0]{
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
}`

/**
 * Получает данные настроек сайта
 * @returns Данные настроек сайта
 */
export async function getSettings(): Promise<Settings> {
  return fetchSanityData<Settings>(settingsQuery)
}
