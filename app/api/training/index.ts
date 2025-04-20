import { fetchSanityData } from '../../lib/sanity-utils'
import { Training } from '../../lib/types'

/**
 * GROQ запрос для получения данных секции Training
 */
const trainingQuery = `*[_type == "training"][0]{
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
}`

/**
 * Получает данные для секции Training
 * @returns Данные секции Training
 */
export async function getTraining(): Promise<Training> {
  return fetchSanityData<Training>(trainingQuery)
}
