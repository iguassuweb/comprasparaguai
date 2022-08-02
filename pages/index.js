import Head from "next/head";
import {
  getCategories,
  getPages,
  getScheduleVideos,
  // getYoutubePlaylist,
} from "../src/api/webservice";
import { BodyContainer, Header, Footer } from "../src/components/layout";
import {
  WebStories,
  ImageSlider,
  InstaHome,
  // YoutubeShare,
  FazerEmFoz,
  Clientes,
  TempoMercado,
  Categories,
} from "../src/components/patterns";

export default function Home({ page, scheduleVideos, categories, playlist }) {
  return (
    <BodyContainer>
      <Head />
      <Header />
      <ImageSlider slider={page.slider} />
      <WebStories page={page} />
      <Categories categories={categories} />
      <InstaHome />
      {/* <YoutubeShare scheduleVideos={scheduleVideos} playlist={playlist} /> */}
      <FazerEmFoz />
      <TempoMercado />
      <Clientes />
      <Footer />
    </BodyContainer>
  );
}

export const getStaticProps = async () => {
  const pages = await getPages();
  const page = pages.filter((page) => page.name === "Home")[0];
  const scheduleVideos = await getScheduleVideos();
  const categories = await getCategories();
  // const playlist = await getYoutubePlaylist();

  return {
    props: {
      page,
      scheduleVideos,
      categories,
      // playlist: playlist.items,
    },
    revalidate: 1200,
  };
};
