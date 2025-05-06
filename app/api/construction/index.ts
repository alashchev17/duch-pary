import { fetchSanityData } from "../../lib/sanity-utils";
import { Construction } from "../../lib/types";

/**
 * GROQ запрос для получения данных секции Construction
 */
const constructionQuery = `*[_type == "construction"]{
  _type,
  language,
  title,
  description,
  process[]{
    title,
    description,
    backgroundMedia{
    type,
    alt,
    image{
      _type,
      asset->{
        _ref,
        url
      },
      crop,
      hotspot
    },
    video{
      _type,
      asset->{
        _ref,
        url
      }
    }
  },
  }
}`;

/**
 * Получает данные для секции Construction
 * @returns Данные секции Construction
 */
export async function getConstruction(): Promise<Construction[]> {
  return fetchSanityData<Construction[]>(constructionQuery);
}
