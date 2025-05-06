import { fetchSanityData } from "../../lib/sanity-utils";
import { Accessories } from "../../lib/types";

/**
 * GROQ запрос для получения данных секции Accessories
 */
const accessoriesQuery = `*[_type == "accessories"]{
  _type,
  language,
  title,
  description,
  slogan,
  cardImages[]{
    _type,
    asset->{
      _ref,
      url
    },
    crop,
    hotspot,
    alt
  },
  perks
}`;

/**
 * Получает данные для секции Accessories
 * @returns Данные секции Accessories
 */
export async function getAccessories(): Promise<Accessories[]> {
  return fetchSanityData<Accessories[]>(accessoriesQuery);
}
