import {
  Text,
  Grid,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "../../core";

export const Categories = ({ categories }) => {
  return (
    <Box
      className="container-cards--categorias"
      sx={{ marginBlock: { xs: 0, md: 4 }, width: "100%" }}
    >
      <Text variant="h1" sx={styles.containerTitle}>
        Categorias
      </Text>
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{
            paddingInline: { xs: 0, md: 10 },
            marginBottom: { xs: 0, md: 10 },
            marginTop: { xs: 0, md: 0 },
            maxWidth: "1400px",
          }}
        >
          {categories.map((category, index) => (
            <CategoryItem key={index} {...category} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const CategoryItem = ({
  name,
  thumb,
  xs = 6,
  sm = 6,
  md = 6,
  mdlg = 4,
  xl = 3,
  index,
}) => {
  return (
    <Grid
      item
      xs={xs}
      md={md}
      sm={sm}
      mdlg={mdlg}
      xl={xl}
      key={`itemCategorie_idx${index}`}
      sx={{
        transition: "0.3s ease-in-out",
        "&:hover": {
          "& .cardImage": {
            padding: 0,
            borderRadius: 5,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            transition: "0.3s ease-in-out",
          },
          "& .cardTitle": { fontWeight: "500", transition: "0.3s ease-in-out" },
        },
      }}
    >
      <Box display="flex" justifyContent="center">
        <Card
          sx={{
            textAlign: "center",
            width: { xs: "auto", md: 258 },
            borderRadius: { xs: 4 },
            boxShadow: "2px 2px 30px -8px rgba(0, 0, 0, 0.15)",
            marginBlock: "0",
          }}
        >
          <CardActionArea>
            <CardMedia
              className="cardImage"
              component="img"
              height="auto"
              image={thumb}
              alt="green iguana"
              sx={{
                padding: "1em",
                borderRadius: { xs: 8, md: 8 },
                height: { xs: "auto", md: 200 },
              }}
            />
            <CardContent>
              <Text
                className="cardTitle"
                sx={{ fontSize: { xs: 14, sm: 15, md: 20 }, fontWeight: "400" }}
              >
                {name}
              </Text>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Grid>
  );
};

const styles = {
  containerTitle: {
    color: "#1E3460",
    alignSelf: "start",
    marginInline: { xs: "1.5rem", sm: "3.5rem", md: "12rem" },
    marginTop: 2,
    marginBottom: 4,
    fontSize: 30,
  },
  // gridItem: {
  //   width: 250,
  //   height: 250,
  //   borderRadius: "10%",
  // },
  gridItemButton: {
    display: "flex",
    flexDirection: "column",
  },
};
