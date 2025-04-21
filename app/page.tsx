import { Container } from "@/components/design-system";
import { Header } from "@/components/design-system/Layout/Header";
import { getAllPageDataWithSeparateQueries } from "./api";
import { Hero } from "@/components/sections/Hero/Hero";

export default async function Home() {
  const { hero } = await getAllPageDataWithSeparateQueries();
  return (
    <Container fullWidth>
      <Header />
      <Hero data={hero} />
    </Container>
  );
}
