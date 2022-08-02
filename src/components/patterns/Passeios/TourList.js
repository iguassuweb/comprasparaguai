import { useState } from 'react'
import { Box, Button, Grid, Text } from '../../core'
import { CustomCard } from '../CustomCard'
import SearchIcon from '@mui/icons-material/Search'

export const TourList = ({ passeios }) => {

    return (
        <Box sx={{ flexGrow: 1, maxWidth: 1200 }}>
            <Box sx={{ display: 'flex', padding: 2, alignItems: 'center' }}>
                <Text variant="h4" sx={{ flex: 1 }}>Indicação Loumar</Text>
                <Button variant="contained" size="large" sx={{ width: '30px' }}><SearchIcon fontSize='large' /></Button>
            </Box>
            <hr style={{ width: '98%', backgroundColor: 'lightgray', height: '1px', border: 'none', marginBottom: 30 }} />
            <Grid container spacing={2} sx={{ marginBottom: 4 }}>
                {!!passeios &&
                    passeios.map((passeio) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} justifyContent='center' alignItems='center' display='flex' key={`Passeio ${passeio.dsTitulo}`}>
                            <CustomCard
                                cardMaxHeight={styles.cardMaxHeight}
                                cardMaxWidth={styles.cardMaxWidth}
                                cardSx={styles.cardSx}
                                cardActionSx={styles.cardActionSx}
                                cardContentSx={styles.cardContentSx}
                                title={passeio.dsTitulo}
                                titleSx={styles.titleSx}
                                badge={true}
                                media={true}
                                priceSx={styles.priceSx}
                                price={passeio.vlVenda}
                                buttonSx={styles.buttonSx}
                                actionsContent={true}
                                buttonText="Detalhes"
                                cardMedia={{
                                    srcMedia: 'https://loumarturismo.com.br/' + passeio.Fotos[0].Foto.dsremotepath,
                                    altMedia: passeio.dsTitulo,
                                    widthMedia: "255px",
                                    heightMedia: 160,
                                }}
                                heightPicture={160}
                                description={passeio.dsSubTitulo}
                                descriptionSx={styles.descriptionSx}
                                handleHover={true}
                            />
                        </Grid>
                    ))}
            </Grid>

        </Box>
    )
}

const styles = {
    cardMaxHeight: {
        xs: 320, md: 280
    },
    cardMaxWidth: {
        xs: 340, md: 260
    },
    cardSx: {
        borderRadius: '10px',
        filter: 'drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.1))',
    },
    cardActionSx: {
        justifyContent: 'space-around',
        margin: { xs: '5em 0', md: '3em 0' }
    },
    cardContentSx: {
        background: '#fff',
        position: 'absolute',
        borderRadius: '8px',
        width: '100%',
        transition: '.2s cubic-bezier(0, 0, 0.03, 1.01)',
    },
    titleSx: {
        fontSize: "16px",
        textTransform: "capitalize",
        textAlign: "left",
        fontWeight: 500,
        color: "#323232",
    },
    priceSx: {
        fontSize: "20px",
        color: "#323232",
        fontSize: "18px",
    },
    buttonSx: {
        color: "#fff",
        background: "#007A73",
        height: "40px",
        width: "102px",
    },
    descriptionSx: {
        opacity: 0,
        "&:hover": {
            opacity: 1,
        },
    }
}