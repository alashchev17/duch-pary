import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Создаем клиент Sanity
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-05-03",
  useCdn: process.env.NODE_ENV === "production",
});

// Создаем builder для работы с изображениями
const builder = imageUrlBuilder(client);

/**
 * Получает URL изображения из Sanity
 * @param source Источник изображения из Sanity
 * @returns URL изображения
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

/**
 * Базовая функция для выполнения GROQ запросов к Sanity
 * @param query GROQ запрос
 * @param params Параметры запроса
 * @returns Результат запроса
 */
export async function fetchSanityData<T>(
  query: string,
  params = {},
): Promise<T> {
  return client.fetch<T>(query, params);
}
