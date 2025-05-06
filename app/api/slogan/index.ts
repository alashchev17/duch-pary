import { fetchSanityData } from "../../lib/sanity-utils";
import { Slogan } from "../../lib/types";

/**
 * GROQ запрос для получения данных секции Slogan
 */
const sloganQuery = `*[_type == "slogan"]{
  _type,
  language,
  title,
  slogan,
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
}`;

/**
 * Получает данные для секции Slogan
 * @returns Данные секции Slogan
 */
export async function getSlogan(): Promise<Slogan[]> {
  return fetchSanityData<Slogan[]>(sloganQuery);
}
