import React from "react";
import { Divider } from "@mui/material";
import { Text, Grid, Box, Image, Button } from "../../core/index";

export const InstaHome = () => {
  return (
    <>
      <Box
        style={{
          flexGrow: 1,
          background:
            "linear-gradient(290deg, rgba(0, 162, 174, 0.12) 0%, rgba(0, 162, 174, 0) 80.73%)",
          width: "100%",
        }}
      >
        <Grid
          alignItems="center"
          justifyContent="center"
          container
          sx={{
            paddingInline: { md: "16rem", sx: 0 },
            marginBlock: { xs: "4rem", md: 2 },
            maxWidth: "1400px",
          }}
        >
          <Grid item xs={12} sm={12} md={12} lg={5}>
            <Text
              variant="h4"
              sx={{
                paddingLeft: 0,
                display: { xs: "block", md: "none" },
                textAlign: "center",
                marginBlock: 2,
              }}
            >
              <b style={{ color: "#007A73" }}>Lorem Ipsum Sit</b>
              <b style={{ color: "#1E3460" }}>Amet</b>,<br />
              <b style={{ color: "#1E3460" }}>Aconsec</b>
              <b style={{ color: "#007A73" }}>tetur</b>
            </Text>
            <Box display="flex" justifyContent="center">
              <Box
                sx={{
                  width: { xs: 200, md: 400 },
                  height: { xs: 400, md: 600 },
                  position: "relative",
                }}
              >
                <Image
                  src="/iphone-home.svg"
                  objectPosition="center"
                  layout="fill"
                  alt="Loumar Intagram"
                />
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={7}
            sx={{
              alignSelf: { xs: "center", md: "start" },
              paddingInline: { xs: 3, md: 0 },
              marginBlock: { xs: 4, md: 12 },
              justifyContent: "center",
            }}
          >
            <Box
              display="flex"
              justifyContent="center"
              sx={{ flexDirection: "column" }}
            >
              <Text
                variant="h4"
                sx={{ paddingLeft: 0, display: { xs: "none", md: "block" } }}
              >
                <b style={{ color: "#007A73" }}>Lorem Ipsum Sit</b>{" "}
                <b style={{ color: "#1E3460" }}>Amet</b>,<br />{" "}
                <b style={{ color: "#1E3460" }}>Aconsec</b>{" "}
                <b style={{ color: "#007A73" }}>tetur</b>
              </Text>
              <Divider
                sx={{
                  marginBlock: "1rem",
                  width: "60%",
                  display: { xs: "none", md: "block" },
                }}
              />
            </Box>
            <Box display="flex" justifyContent="center">
              <Text
                variant="h5"
                paragraph={true}
                sx={{
                  marginBlock: "2rem",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Quis tellus eget elit morbi tempor ac ac hendrerit amet. Id quis
                neque cras non sed pellentesque. Eu pharetra, eu viverra egestas
                amet. Malesuada malesuada sit posuere ipsum amet, consequat.{" "}
              </Text>
            </Box>
            <Box
              display="flex"
              sx={{ justifyContent: { xs: "center", md: "start" } }}
            >
              <ul>
                <li style={{ color: "#007A73" }}>
                  Lives toda{" "}
                  <span style={{ fontWeight: 600 }}>Terça-Feira</span> e{" "}
                  <span style={{ fontWeight: 600 }}>Quinta-Feira!</span>
                </li>
              </ul>
            </Box>
            <Box
              display="flex"
              sx={{ justifyContent: { xs: "center", md: "start" } }}
            >
              <Button
                size="large"
                sx={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #1E3460",
                  borderRadius: "4px",
                  paddingInline: { md: 10, xs: 2 },
                  textTransform: "none",
                  width: "100%",
                  maxWidth: 300,
                }}
              >
                Conferir Instragram
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
