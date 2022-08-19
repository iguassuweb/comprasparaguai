import Head from "next/head";
import {
  getPages
} from "../src/api/webservice";
import { BodyContainer, Header, Footer } from "../src/components/layout";
import {
  WebStories,
  ImageSlider,
  Seguranca,
  Transportes,
  Dicas,
  // Duvidas,
  Bagagem,
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
      <Dicas />
      {/* <Duvidas /> */}
      <Bagagem />
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
