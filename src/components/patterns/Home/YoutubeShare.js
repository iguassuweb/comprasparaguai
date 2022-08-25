import { useState, useEffect } from "react";
import { Text, Grid, Box, Button } from "../../core";
import { VideoButton } from "../VideoButton";
import Image from "next/image";
// import api from '../../api'
import Link from "next/link";

export const YoutubeShare = ({ scheduleVideos, playlist }) => {
  const playList = [
    {
      urlVideo: "https://www.youtube.com/embed/pKwQlm-wldA",
      urlThumb: "/main-image.png",
      title: "Loumar Turismo",
    },
    {
      urlVideo: "https://www.youtube.com/embed/Q0oIoR9mLwc",
      urlThumb: "/img-01.png",
      title: "Loumar Turismo",
    },
    {
      urlVideo: "https://www.youtube.com/embed/YlUKcNNmywk",
      urlThumb: "/main-image.png",
      title: "Loumar Turismo",
    },
  ];
  console.log(playlist);

  const [mainVideo, setMainVideo] = useState(playlist[0]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        background:
          "linear-gradient(62.42deg, rgba(0, 162, 174, 0.12) -30%, rgba(0, 162, 174, 0) 80.73%)",
        width: "100%",
        marginBlock: { xs: 8, md: 20 },
        // backgroundImage: "url(/bg-youtube.png)",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <Grid
        container
        justifyContent="center"
        spacing={4}
        sx={{
          paddingInline: { md: "2.5rem", mdlg: "8.5rem", sm: 0 },
          marginBlock: { xs: 2, md: 30 },
        }}
      >
        <Grid item>
          <Box>
            <Box sx={styles.titleContainer}>
              <Text sx={[styles.title, { color: "#00A2AE", marginRight: 1.5 }]}>
                Loumar
              </Text>
              <Text sx={styles.title}> no Youtube!</Text>
            </Box>
            <Box sx={styles.subtitleContainer}>
              <Text sx={styles.subtitle}>
                Conheça nosso canal com conteúdos semanais! Lorem ipsum amet
                dolor
              </Text>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "inherit", whiteSpace: "nowrap" },
              }}
            >
              <Text sx={styles.titleContainerProgramacao}>
                Programação de lives da semana:
              </Text>
              {scheduleVideos.map((item, index) => (
                <Box
                  key={`planning${index}`}
                  sx={styles.programacaoListCotainer}
                >
                  {item.title && (
                    <>
                      <Image
                        src={"/list-pin.svg"}
                        width={20}
                        height={1}
                        minwidth={20}
                        alt="item"
                      />
                      <Text sx={styles.diaProgramacao}>{item.name}:</Text>
                    </>
                  )}

                  <Text sx={styles.titleProgramacao}>{item.title}</Text>
                </Box>
              ))}
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: "#1E3460",
                  textTransform: "none",
                  width: "100%",
                  backgroundColor: "#FFFFFF",
                  bottom: 0,
                }}
              >
                Abrir no Youtube
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ maxWidth: { md: 460, mdlg: 570 } }}>
            <Box sx={styles.mainVideo}>
              <VideoButton
                urlVideo={mainVideo.snippet.resourceId.videoId}
                urlThumb={mainVideo.snippet.thumbnails.standard?.url}
                title={mainVideo.title}
              />
            </Box>
            <Box
              sx={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                marginTop: 2,
              }}
            >
              {playlist.map((video, index) => {
                // console.log(video.snippet.thumbnails.standard?.url);
                console.log(mainVideo);

                return (
                  <Box sx={styles.videos} key={`video${index}`}>
                    <VideoButton
                      urlVideo={video.snippet.resourceId.videoId}
                      urlThumb={video.snippet.thumbnails.standard?.url}
                      title={video.snippet.title}
                      handleClick={() => setMainVideo(video)}
                    />
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box
            sx={{ display: { xs: "inherit", md: "none", textAlign: "center" } }}
          >
            <Text sx={{ fontWeight: "500", marginBlock: "1rem", fontSize: 18 }}>
              Programação de LIVES da semana:
            </Text>
            <Box>
              {scheduleVideos.map((item, index) => (
                <Box
                  key={`planning${index}`}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "1rem",
                    justifyContent: "flex-start",
                  }}
                >
                  <Image
                    src={"/list-pin.svg"}
                    width={20}
                    height={20}
                    alt="item"
                  />
                  <Text
                    sx={{ marginLeft: "1rem", fontWeight: "500", fontSize: 18 }}
                  >
                    {item.name}:
                  </Text>
                  <Text
                    sx={{ marginLeft: "1rem", fontWeight: "400", fontSize: 18 }}
                  >
                    {item.title}
                  </Text>
                </Box>
              ))}
            </Box>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#007A73",
                textTransform: "none",
                width: "100%",
              }}
            >
              Ver no Youtube
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const styles = {
  titleContainer: {
    flexDirection: "row",
    display: "flex",
  },
  title: {
    fontWeight: "500",
    fontSize: 32,
    whiteSpace: "nowrap",
  },
  subtitleContainer: {
    width: 350,
    alignItems: "center",
    marginTop: "1rem",
  },
  subtitle: {
    color: "#1E3460",
    fontWeight: { xs: "400", sm: "400", md: "500" },
    fontSize: 18,
  },
  mainVideo: {
    borderRadius: "1em",
    overflow: "hidden",
    width: { xs: 340, sm: 565, md: "100%", mdlg: "100%", lg: "100%" },
    height: { xs: 190, sm: 320, md: 280, mdlg: 280, lg: 320 },
  },
  videos: {
    borderRadius: "1em",
    overflow: "hidden",
    width: { xs: 100, sm: 180, md: 140, mdlg: 150 },
    height: { xs: 60, sm: 100, md: 80, mdlg: 90 },
  },
  diaProgramacao: {
    marginLeft: "1rem",
    fontWeight: "500",
    fontSize: 18,
  },
  programacaoListCotainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "1rem",
  },
  titleProgramacao: {
    marginLeft: "1rem",
    fontWeight: "400",
    fontSize: 18,
  },
  titleContainerProgramacao: {
    fontWeight: "500",
    marginBlock: "1rem",
  },
};
