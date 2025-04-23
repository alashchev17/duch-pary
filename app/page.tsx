import { Container } from "@/components/design-system";
import { Header } from "@/components/design-system/Layout/Header";

import { Hero } from "@/components/sections/Hero";
import { Slogan } from "@/components/sections/Slogan";

import { getAllPageDataWithSeparateQueries } from "@/app/api";
import { About } from "@/components/sections/About";

export default async function Home() {
  const { hero, slogan, about } = await getAllPageDataWithSeparateQueries();
  return (
    <Container>
      <Header />
      <Hero data={hero} />
      <Slogan data={slogan} />
      <About data={about} />
    </Container>
  );
}
