import { fetchSanityData } from "../../lib/sanity-utils";
import { Hero } from "../../lib/types";

/**
 * GROQ запрос для получения данных секции Hero
 */
const heroQuery = `*[_type == "hero"]{
  _type,
  language,
  title,
  subtitle,
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
  ctaButton{
    text,
    link
  }
}`;

/**
 * Получает данные для секции Hero
 * @returns Данные секции Hero
 */
export async function getHero(): Promise<Hero[]> {
  return fetchSanityData<Hero[]>(heroQuery);
}
