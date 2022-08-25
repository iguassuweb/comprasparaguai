import SearchIcon from "@mui/icons-material/Search"
import { Box, Button, Divider, Grid, Rating } from "@mui/material"
import { Text } from "../../core"
import { CustomCard } from "../CustomCard"

export const HotelsList = () => {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 1200, width: '100%' }}>
      <Box sx={{ display: 'flex', padding: 2, alignItems: 'center', marginTop: 20 }}>
        <Text variant="h4" sx={{ flex: 1, color: '#1e3460' }}>Hotéis</Text>
        <Button variant="contained" size="large" sx={{ width: '30px' }}><SearchIcon fontSize='large' /></Button>
      </Box>
      <Divider orientation="horizontal" />
      <Box sx={{ marginTop: 4, width: '100%', padding: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3} justifyContent='center' alignItems='center' display='flex'>
            <CustomCard
              cardMaxHeight={styles.cardMaxHeight}
              cardMaxWidth={styles.cardMaxWidth}
              cardSx={styles.cardSx}
              cardContentSx={styles.cardContentSx}
              heightPicture={200}
              title="Hotel Wyndham Golden Foz Suítes"
              titleSx={styles.titleSx}
              badge={true}
              media={true}
              cardMedia={{
                srcMedia: "/araras.png",
                altMedia: "testptp",
              }}
              cardActionSx={styles.cardActionSx}
              priceSx={styles.priceSx}
              price={1200}
              buttonSx={styles.buttonSx}
              actionsContent={true}
              buttonText="Detalhes"
              ContentDetails={ContentDetails}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

const ContentDetails = () => <Rating name="read-only" value={5} readOnly />

const styles = {
  cardMaxHeight: {
    xs: 420, md: 420
  },
  cardMaxWidth: {
    xs: 340, md: 340
  },
  cardSx: {
    borderRadius: '10px',
    filter: 'drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.1))',
  },
  cardContentSx: {
    marginTop: '20px',
    width: '100%'
  },
  cardActionSx: {
    display: 'flex',
    flexDirection: 'column'
  },
  priceSx: {
    color: "#323232",
    fontSize: "18px",
    paddingLeft: 2,
    paddingBottom: 2,
    width: '100%',
    textAlign: 'left',
  },
  titleSx: {
    fontSize: "16px",
    textTransform: "capitalize",
    textAlign: "left",
    fontWeight: 500,
    color: "#1e3460",
  },
  buttonSx: {
    color: "#fff",
    background: "#007A73",
    height: "40px",
    width: "100%",
  }
}