import React, { useState, useEffect, useRef } from "react";
const _ = require("lodash");
import { motion, useAnimation } from "framer-motion";
import { Text, Grid, Box, Button, Paper, Card, CardActionArea, CardMedia, CardContent } from "../../core";


export const FazerEmFoz = () => {
  const data = [
    { title: " Lorem ipsum", thumbUrl: "parque.jpg" },
    { title: " Lorem ipsum", thumbUrl: "parque.jpg" },
    { title: " Lorem ipsum", thumbUrl: "parque.jpg" },
    { title: " Lorem ipsum", thumbUrl: "parque.jpg" },
    { title: " Lorem ipsum", thumbUrl: "parque.jpg" },
    { title: " Lorem ipsum", thumbUrl: "parque.jpg" },
  ];

  const dataDesk = [
    { title: " Lorem ipsum dolor", thumbUrl: "parque.jpg" },
    { title: " Lorem ipsum dolor", thumbUrl: "parque.jpg" },
    { title: " Lorem ipsum dolor", thumbUrl: "parque.jpg" },
  ];

  const [carouselWidth, setCarouselWidth] = useState(0);
  const carousel = useRef();
  const xPos = useRef(0);
  const animation = useAnimation();

  useEffect(() => {
    setCarouselWidth(
      carousel.current.scrollWidth - carousel.current.offsetWidth
    );
    // loadStories()
  }, []);

  // const loadStories = () => {
  //   api.get
  //   setStories(response.data)
  // }

  const [chunk, setChunk] = useState(0);
  const [chunkSize, setChunkSize] = useState(6);
  const [storyUrl, setStoryUrl] = useState(null);
  const chunkedStories = _.chunk(data, chunkSize);

  function onLeftClick() {
    const newXPosition = xPos.current + 900;

    animation.start({
      x: newXPosition > 0 ? 0 : newXPosition,
    });
  }

  function onRightClick() {
    const newXPosition = xPos.current - 900;

    animation.start({
      x: newXPosition < -carouselWidth ? -carouselWidth : newXPosition,
    });
  }

  function onUpdate(latest) {
    xPos.current = latest.x;
  }
  return (
    <>
      <Box
        style={{
          background: " rgba(0, 162, 174, 0.2)",
          width: "100%",
          backgroundImage: "url(/bg-2.png)",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          marginBlock: {xs: 8, md: 0},
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          sx={{
            paddingInline: { md: 22, xs: 2 },
            marginBlock: { xs: 0, md: 0},
            height: 760,
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{ marginBlock: { xs: 0, md: 14 } }}
          >
            <Text
              variant="h5"
              sx={{
                display: { xs: "block", md: "block" },
                color: "primary.main",
                fontSize: { xs: 30, md: 28 },
                paddingBlock: { xs: 4, md: 4 },
                marginBlock: { xs: 0, md: 2 },
              }}
            >
              O que fazer em <b>Foz do Iguaçu</b>
            </Text>
            <Text
              variant="h5"
              paragraph={true}
              sx={{ color: "primary.main", fontSize: 20, paddingRight: {xs: 0, md: 8} }}
            >
              Foz do iguaçu oferece uma série de atrações para você curtir! Eu
              pharetra, eu viverra egestas amet. Malesuada malesuada sit posuere
              ipsum amet, consequat. Regestas amet. Malesuada malesuada sit posuere
              ipsum amet, consequat.
            </Text>
            <Button
              sx={{
                backgroundColor: "primary.main",
                color: "secondary.contrastText",
                width: "86%",
                fontSize: 16,
                fontWeight: 400,
                textTransform: "capitalize",
                marginBlock: { sx: 2, md: 5 },
                display: { xs: "none", md: "block" },
              }}
            >
              Conhecer Foz
            </Button>
          </Grid>
          {/* desktop cards */}
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            sx={{
              marginBlock: { xs: 0, md: -16 },
              display: { xs: "none", md: "block" },
            }}
          >
            {dataDesk.map((data, index) => (
              <Cards key={index} {...data} />
            ))}
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            sx={{
              zIndex: 1,
              display: { xs: "none", md: "block" },
            }}
          >
            {dataDesk.map((data, index) => (
              <Cards key={index} {...data} />
            ))}
          </Grid>

          <Box sx={styles.mobileStoriesContainer} ref={carousel}>
            <motion.div
              drag="x"
              animate={animation}
              onUpdate={onUpdate}
              dragDirectionLock
              dragConstraints={{ right: 0, left: -carouselWidth }}
              whileTap={{ cursor: "grabbing" }}
              style={{
                display: "flex",
                "&:active": {
                  cursor: "grabbing",
                },
              }}
            >
              {data.map((data, index) => (
                <Paper
                  elevation={4}
                  sx={styles.paperContainer}
                  key={`story${index}`}
                >
                  <CardMedia
                    component="img"
                    height="auto"
                    image={`/${data.thumbUrl}`}
                    alt={`${data.thumbUrl}`}
                    sx={styles.image}
                  />
                  <Box sx={styles.textContainer}>
                    <Text style={{ fontSize: 16, fontWeight: "500" }}>
                      {data.title}
                    </Text>
                  </Box>
                </Paper>
              ))}
            </motion.div>
          </Box>
          <Grid item xs={12} sx={{display: {xs: 'flex', md: 'none'}, justifyContent: 'center'}}>
            <Button sx={styles.buttonMobile}>Descubrir mais</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

const Cards = ({ title, thumbUrl }) => {
  return (
    <Card
      sx={{
        textAlign: "center",
        width: { xs: "auto", md: 275 },
        borderRadius: { xs: 4 },
        boxShadow: "2px 2px 30px -8px rgba(0, 0, 0, 0.15)",
        marginBlock: 2,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image={`/${thumbUrl}`}
          alt={thumbUrl}
          sx={{
            borderRadius: { xs: 8, md: 0 },
            height: { xs: "auto", md: 200 },
          }}
        />
        <CardContent>
          <Text gutterBottom variant="h5" component="div">
            {title}
          </Text>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const styles = {
  mobileStoriesContainer: {
    display: { xs: "flex", sm: "flex", md: "none", lg: "none", xl: "none" },
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    cursor: "grab",
  },
  paperContainer: {
    marginInline: "0.8rem",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: "230px",
    width: "300px",
    borderRadius: "10px 10px",
  },
  textContainer: {
    textAlign: "center",
    padding: 2,
  },
  image: {
    padding: 0,
    borderRadius: "10px 10px 0 0",
  },
  buttonMobile: {
    background: "#fff",
    boxSizing: "border-box",
    padding: "0 20px",
    height: 40,
    border: "1px solid #1E3460",
    width: '328px',
    justifyContent: 'center'
  },
};
