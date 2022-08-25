import Head from "next/head";
import { BodyContainer, Header, Footer } from "../src/components/layout";
import { HeaderPaginas } from "../src/components/patterns";
import { HotelsFilter } from "../src/components/patterns/Hoteis/HotelsFilter";
import { HotelsList } from "../src/components/patterns/Hoteis/HotelsList";

export default function Hoteis(props) {

  return (
    <BodyContainer>
      <Head />
      <Header />
      <HeaderPaginas srcImg="/araras-min.png" filter={true} HotelsFilter={HotelsFilter} />
      <HotelsList />
      <Footer />
    </BodyContainer>
  );
}






