import { fetchSanityData } from '../../lib/sanity-utils'
import { Slogan } from '../../lib/types'

/**
 * GROQ запрос для получения данных секции Slogan
 */
const sloganQuery = `*[_type == "slogan"][0]{
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
}`

/**
 * Получает данные для секции Slogan
 * @returns Данные секции Slogan
 */
export async function getSlogan(): Promise<Slogan> {
  return fetchSanityData<Slogan>(sloganQuery)
}
