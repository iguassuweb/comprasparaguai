import Head from "next/head";
import { useEffect, useState, useRef } from "react";

import Link from "next/link";

import { BodyContainer, Header, Footer } from "../src/components/layout";
import { Card, Text, Box, Grid, Button } from "../src/components/core";
import {
  CustomCard,
  WebStories,
  HeaderPaginas,
} from "../src/components/patterns";
import { VideoButton } from "../src/components/patterns/VideoButton";
import { getTours, getPages, getScheduleVideos } from "../src/api/webservice";
import { MainTour } from "../src/components/patterns/Passeios/MainTour";
import { TourList } from "../src/components/patterns/Passeios/TourList";
import { FeaturedTours } from "../src/components/patterns/Passeios/FeaturedTours";

export default function Passeios({ page, tours }) {
  
  const limitedPasseios = !!tours && tours.filter((item, index) => index < 8);

  return (
    <BodyContainer>
      <Head />
      <Header />
      <HeaderPaginas srcImg="/araras-min.png" />
      <WebStories page={page} />
      <TourList passeios={limitedPasseios} />
      <Box sx={styles.buttonBox}>
        <Link href="/todosospasseios" passHref>
          <Button variant="outlined" sx={styles.button}>
            Exibir todos os passeios
          </Button>
        </Link>
      </Box>
      <MainTour />
      <FeaturedTours passeios={tours}  />
      <Footer />
    </BodyContainer>
  );
}

export const getStaticProps = async () => {
  const pages = await getPages();
  const page = pages.filter((page) => page.name === "Passeios")[0];
  const tours = await getTours();

  return {
    props: { page, tours },
    revalidate: 1200,
  };
};

const styles = {
  buttonBox: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    my: 4,
  },
  button: {
    "&:hover": {
      background:
        "linear-gradient(79.94deg, rgba(0, 162, 174, 0.9) 0%, rgba(4, 148, 164, 0.9) 34.79%, rgba(30, 52, 96, 0.9) 101.2%)",
      color: "#fff",
    },
    transition: ".2s ease-in-out",
  },
};
