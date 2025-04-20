import { fetchSanityData } from '../../lib/sanity-utils'
import { Hero } from '../../lib/types'

/**
 * GROQ запрос для получения данных секции Hero
 */
const heroQuery = `*[_type == "hero"][0]{
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
}`

/**
 * Получает данные для секции Hero
 * @returns Данные секции Hero
 */
export async function getHero(): Promise<Hero> {
  return fetchSanityData<Hero>(heroQuery)
}
