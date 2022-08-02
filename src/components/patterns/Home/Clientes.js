import React from "react";
import { Box, Grid, Text } from "../../core";
import Image from "next/image";

export const Clientes = () => {
  return (
    <>
      <Box sx={{marginTop: 2, marginBottom: { xs: 0, md: 14}}}>
        <Text
          variation="h4"
          sx={{ fontSize: 36, textAlign: "center ", color: "tertiary.main", paddingBlock: 4 }}
        >
          Nossos clientes
        </Text>
        <Grid container spacing={5} sx={{paddingInline:{ xs: 2, md: 0}}}>
          <Grid item xs={3} md={3}>
            <Image
              src="/disney.svg"
              alt="Picture of the author"
              width={100}
              height={100}
            />
          </Grid>
          <Grid item xs={3} md={3}>
            <Image
              src="/espn.svg"
              alt="Picture of the author"
              width={100}
              height={100}
            />
          </Grid>
          <Grid item xs={3} md={3}>
            <Image
              src="/itaipu.svg"
              alt="Picture of the author"
              width={100}
              height={100}
            />
          </Grid>

          <Grid item xs={3} md={3}>
            <Image
              src="/furnas.svg"
              alt="Picture of the author"
              width={100}
              height={100}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
