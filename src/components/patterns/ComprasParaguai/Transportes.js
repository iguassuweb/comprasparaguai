import React from "react";
import { Text, Grid, Box, Button } from "../../core/index";

export const Transportes = () => {
  return (
    <>
      <Box
        style={{
          flexGrow: 1,
          width: "100%",
        }}
      >
        <Grid
          alignItems="center"
          justifyContent="center"
          container
          item md={12} xs={12}
          sx={{
            paddingInline: { md: "4rem", sx: 0 },
            maxWidth: "1400px",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={10}
            sx={{
              backgroundColor: "rgba(30, 52, 96, 0.1)",
              border: "1px solid none",
              borderRadius: "16px",
              alignSelf: { xs: "center", md: "center" },
              paddingInline: { xs: 3, md: 0 },
              padding: { xs: 0, md: 4.5 },
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
                sx={{ textAlign: { xs: "center", md: "center" } }}
              >
                <b style={{ fontSize: 28, fontWeight: 500, color: "#1E3460" }}>Transportes exclusivos para compras no Paraguai!</b>{" "}
              </Text>
            </Box>
            <Box display="flex" justifyContent="center">
              <Text
                variant="h5"
                paragraph={true}
                style={{ color: "#1E3460" }}
                sx={{
                  marginBlock: "2rem",
                  textAlign: { xs: "center", md: "center" },
                }}
              >
                As suas compras no Paraguai devem ser completas! Vá e volte de Ciudad del Este com conforto e comodidade. <br/>Reserve o nosso  <strong>Leva</strong> e <strong>Traz</strong>, da Loumar Turismo.{" "}
              </Text>
            </Box>
            <Box
              display="flex"
              sx={{ justifyContent: { xs: "center", md: "center" } }}
            >
              <Button
                size="large"
                sx={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #1E3460",
                  borderRadius: "4px",
                  paddingInline: { md: 6, xs: 2 },
                  textTransform: "none",
                  width: "100%",
                  maxWidth: 400,
                }}
                style={{ fontSize: 18, fontWeight: 500, color: "#1E3460" }}
              >
                Ir para página de transportes
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
