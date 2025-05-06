import { getAllPageDataWithSeparateQueries } from "@/app/api";

import { HomePage } from "@/components/design-system/pages/HomePage/HomePage";

export const revalidate = 60;
export const dynamic = "force-dynamic";

export default async function Home() {
  const multilanguageData = await getAllPageDataWithSeparateQueries();
  return <HomePage multilanguageData={multilanguageData} />;
}
