import { Box, Text, Button, Paper } from "../core";
import Image from "next/image";
import { WhatsApp } from "@mui/icons-material";

export const HeaderPaginas = (props) => {
  const { srcImg = "", filter = false, HotelsFilter } = props;
  return (
    <>
      <Box
        sx={[styles.boxContact, { backgroundImage: `url(${srcImg})`}]}
      >
        <Box
          sx={styles.blurBox}
        >
          <Text
            variant="paragraph"
            sx={styles.textContact}
          >
            Entre em contato com um agente e tenha um passeio personalizado!
          </Text>

          <Button
            startIcon={<WhatsApp />}
            sx={styles.button}
          >
            Falar com um especialista
          </Button>
        </Box>
        {filter && (
          <Box sx={styles.filterBox}>
            <Paper
              sx={styles.filterPaper}
              elevation={12}
            >
              <HotelsFilter />
            </Paper>
          </Box>
        )}
      </Box>
    </>
  );
};

const styles = {
  filterPaper : {
    position: "absolute",
    maxWidth: { xs: "380px", md: "1200px" },
    width: '100%',
    height: { xs: "200px", md: "214px" },
    marginInline: "auto",
    display: "flex",
    alignItems: "center",
    bottom: "-140px",
    borderRadius: "16px",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  filterBox: {
    display: "flex", justifyContent: "center"
  },
  boxContact: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    height: 500,
    width: "100%",
  },
  blurBox: {
    backdropFilter: "blur(4px)",
    background: "rgba(255, 255, 255, 0.15)",
    position: "absolute",
    width: { xs: "380px", md: "394px" },
    height: { xs: "200px", md: "214px" },
    display: "flex",
    alignItems: "center",
    left: { xs: "4px", md: "164px" },
    top: "80px",
    borderRadius: "16px",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  textContact: {
    color: "white",
    fontSize: "24px",
    fontFamily: "Montserrat",
    lineHeight: "130%",
    fontWeight: "500",
  },
  button: {
    color: "#00A2AE",
    background: "#FFF",
    border: "1px solid #00A2AE",
    fontFamily: "Montserrat",
    fontWeight: "500",
    textTransform: "inherit",
    fontSize: "16px",
    padding: "8px 16px",
    "&:hover": {
      color: "#fff",
      background:
        "linear-gradient(79.94deg, rgba(0, 162, 174, 0.6) 0%, rgba(4, 148, 164, 0.6) 34.79%, rgba(30, 52, 96, 0.6) 101.2%)",
    },
  }
}