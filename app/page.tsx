import { Container } from "@/components/design-system";
import { Header } from "@/components/design-system/Layout/Header";

import { Hero } from "@/components/sections/Hero";
import { Slogan } from "@/components/sections/Slogan";

import { getAllPageDataWithSeparateQueries } from "@/app/api";

export default async function Home() {
  const { hero, slogan } = await getAllPageDataWithSeparateQueries();
  return (
    <Container fullWidth>
      <Header />
      <Hero data={hero} />
      <Slogan data={slogan} />
    </Container>
  );
}
