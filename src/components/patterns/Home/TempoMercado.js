import React from "react";
import { Text, Grid, Box, Button, Divider } from "../../core";
import Image from "next/image";

export const TempoMercado = () => {
  return (
    <>
      <Box sx={{ marginBlock: { xs: 8, md: 30 } }}>
        <Box
          sx={{
            position: "relative",
            display: { xs: "block", md: " none" },
            bottom: 0,
            width: "100%",
            height: 300,
            padding: 0,
            margin: 0,
          }}
        >
          <Image
            src="/30-anos-mercado-mobile.png"
            alt="Picture of the author"
            layout="fill"
          />
        </Box>

        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              paddingInline: { xs: 2, md: 14 },
              paddingBlock: { xs: 0, md: 10 },
            }}
          >
            <Text
              variation="h5"
              sx={{
                fontSize: { xs: 22, md: 32 },
                display: { xs: "none", md: "block" },
              }}
            >
              Mais de <b>30 anos de experiência</b> em Foz do Iguaçu
            </Text>
            <Divider
              sx={{
                marginBlock: "1rem",
                width: "60%",
                display: { xs: "none", md: "block" },
              }}
            />

            <Text
              variation="h5"
              paragraph={true}
              sx={{
                fontSize: { xs: 16, md: 18 },
                textAlign: { xs: "center", md: "left" },
                marginBlock: { xs: 2, md: 0 },
              }}
            >
              Quis tellus eget elit morbi tempor ac ac hendrerit amet. Id quis
              neque cras non sed pellentesque. Eu pharetra, eu viverra egestas
              amet. Malesuada malesuada sit posuere ipsum amet, consequat.
            </Text>
            <Text
              variation="h5"
              paragraph={true}
              sx={{
                fontSize: { xs: 16, md: 18 },
                textAlign: { xs: "center", md: "left" },
                fontWeight: 500,
              }}
            >
              Entre em contato com nosso time de especialistas:
            </Text>

            <Text
              variation="h5"
              paragraph={true}
              sx={{
                fontSize: { xs: 16, md: 18 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Image
                src="/phone-icon.svg"
                alt="Picture of the author"
                width={20}
                height={20}
                sx={{ marginInline: 20 }}
              />
              &nbsp;&nbsp;(45) 3521-4000 - Telefone
            </Text>

            <Text
              variation="h5"
              paragraph={true}
              sx={{
                fontSize: { xs: 16, md: 18 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Image
                src="/whatsapp-icon.svg"
                alt="Picture of the author"
                width={20}
                height={20}
              />
              &nbsp;&nbsp;(45) 3521-4000 - WhatsApp
            </Text>

            <Button
              variant="outlined"
              size="large"
              sx={{
                color: "#007A73",
                textTransform: "none",
                width: "100%",
                backgroundColor: "#FFFFFF",
                bottom: 0,
                marginInline: { xs: 0, md: 0 },
              }}
            >
              Sobre a Loumar
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "right",
            }}
          >
            <Image
              src="/empresa.png"
              alt="Picture of the author"
              width={726}
              height={512}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
