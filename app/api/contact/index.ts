import { fetchSanityData } from "../../lib/sanity-utils";
import { Contact } from "../../lib/types";

/**
 * GROQ запрос для получения данных секции Contact
 */
const contactQuery = `*[_type == "contact"]{
  _type,
  language,
  title,
  description,
  contactImage{
    _type,
    asset->{
      _ref,
      url
    },
    crop,
    hotspot,
    alt
  }
}`;

/**
 * Получает данные для секции Contact
 * @returns Данные секции Contact
 */
export async function getContact(): Promise<Contact[]> {
  return fetchSanityData<Contact[]>(contactQuery);
}
