import Head from "next/head";
import {
  getPages
} from "../src/api/webservice";
import { BodyContainer, Header, Footer } from "../src/components/layout";
import {
  WebStories,
  ImageSlider,
  Clientes,
  Seguranca,
  Transportes
} from "../src/components/patterns";

export default function comprasParaguai({ page }) {
  return (
    <BodyContainer>
      <Head />
      <Header />
      <ImageSlider slider={page.slider} />
      <WebStories page={page} />
      <Seguranca />
      <Transportes />
      <Clientes />
      <Footer />
    </BodyContainer>
  );
}

export const getStaticProps = async () => {
  const pages = await getPages();
  const page = pages.filter((page) => page.name === "Home")[0];

  return {
    props: {
      page
    },
    revalidate: 1200,
  };
};
