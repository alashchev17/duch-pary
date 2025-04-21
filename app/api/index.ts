import { AllPageData } from "../lib/types";

// Импортируем все отдельные запросы
import { getHero } from "./hero";
import { getSlogan } from "./slogan";
import { getAbout } from "./about";
import { getConstruction } from "./construction";
import { getPortfolio } from "./portfolio";
import { getAccessories } from "./accessories";
import { getTraining } from "./training";
import { getContact } from "./contact";
import { getSettings } from "./settings";

/**
 * Получает все данные сайта с использованием отдельных запросов для каждой секции
 * @returns Все данные для отображения сайта
 */
export async function getAllPageDataWithSeparateQueries(): Promise<AllPageData> {
  // Выполняем все запросы параллельно для оптимизации
  const [
    hero,
    slogan,
    about,
    construction,
    portfolio,
    accessories,
    training,
    contact,
    settings,
  ] = await Promise.all([
    getHero(),
    getSlogan(),
    getAbout(),
    getConstruction(),
    getPortfolio(),
    getAccessories(),
    getTraining(),
    getContact(),
    getSettings(),
  ]);

  return {
    hero,
    slogan,
    about,
    construction,
    portfolio,
    accessories,
    training,
    contact,
    settings,
  };
}
