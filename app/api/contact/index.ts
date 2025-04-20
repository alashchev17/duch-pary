import { fetchSanityData } from '../../lib/sanity-utils'
import { Contact } from '../../lib/types'

/**
 * GROQ запрос для получения данных секции Contact
 */
const contactQuery = `*[_type == "contact"][0]{
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
}`

/**
 * Получает данные для секции Contact
 * @returns Данные секции Contact
 */
export async function getContact(): Promise<Contact> {
  return fetchSanityData<Contact>(contactQuery)
}
