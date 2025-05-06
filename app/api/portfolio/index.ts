import { fetchSanityData } from "../../lib/sanity-utils";
import { Portfolio } from "../../lib/types";

/**
 * GROQ запрос для получения данных секции Portfolio
 */
const portfolioQuery = `*[_type == "portfolio"]{
  _type,
  language,
  title,
  description,
  mediaItems[]{
    // Для изображений
    _type == "image" => {
      "type": "image",
      "alt": coalesce(@.alt, ""),
      "image": asset->{
        _ref,
        url
      },
      crop,
      hotspot
    },
    // Для видео
    _type == "video" || _type == "file" => {
      "type": "video",
      "video": asset->{
        _ref,
        url
      }
    }
  }
}`;

/**
 * Получает данные для секции Portfolio
 * @returns Данные секции Portfolio
 */
export async function getPortfolio(): Promise<Portfolio[]> {
  return fetchSanityData<Portfolio[]>(portfolioQuery);
}
