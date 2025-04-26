import { Container } from "@/components/design-system";
import { Header } from "@/components/design-system/Layout/Header";

import { Hero } from "@/components/sections/Hero";
import { Slogan } from "@/components/sections/Slogan";

import { getAllPageDataWithSeparateQueries } from "@/app/api";
import { About } from "@/components/sections/About";
import { Construction } from "@/components/sections/Construction";
import { Portfolio } from "@/components/sections/Portfolio";
import { Accessories } from "@/components/sections/Accessories";
import { Training } from "@/components/sections/Training";

export default async function Home() {
  const {
    hero,
    slogan,
    about,
    construction,
    portfolio,
    accessories,
    training,
  } = await getAllPageDataWithSeparateQueries();
  return (
    <>
      <Container>
        <Header />
        <Hero data={hero} />
        <Slogan data={slogan} />
        <About data={about} />
        <Construction data={construction} />
      </Container>
      <Portfolio data={portfolio} />
      <Container>
        <Accessories data={accessories} />
        <Training data={training} />
      </Container>
    </>
  );
}
