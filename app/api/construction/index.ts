import { fetchSanityData } from '../../lib/sanity-utils'
import { Construction } from '../../lib/types'

/**
 * GROQ запрос для получения данных секции Construction
 */
const constructionQuery = `*[_type == "construction"][0]{
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
}`

/**
 * Получает данные для секции Construction
 * @returns Данные секции Construction
 */
export async function getConstruction(): Promise<Construction> {
  return fetchSanityData<Construction>(constructionQuery)
}
