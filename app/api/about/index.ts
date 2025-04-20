import { fetchSanityData } from '../../lib/sanity-utils'
import { About } from '../../lib/types'

/**
 * GROQ запрос для получения данных секции About
 */
const aboutQuery = `*[_type == "about"][0]{
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
}`

/**
 * Получает данные для секции About
 * @returns Данные секции About
 */
export async function getAbout(): Promise<About> {
  return fetchSanityData<About>(aboutQuery)
}
