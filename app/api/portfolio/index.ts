import { fetchSanityData } from '../../lib/sanity-utils'
import { Portfolio } from '../../lib/types'

/**
 * GROQ запрос для получения данных секции Portfolio
 */
const portfolioQuery = `*[_type == "portfolio"][0]{
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
}`

/**
 * Получает данные для секции Portfolio
 * @returns Данные секции Portfolio
 */
export async function getPortfolio(): Promise<Portfolio> {
  return fetchSanityData<Portfolio>(portfolioQuery)
}
