import { Box, Grid, Text, Button } from "../../core"
import { VideoButton } from "../VideoButton";

export const MainTour = () => {
    return (
        <Box
            sx={{
                backgroundImage: "url(/bg-ful.png)",
                width: "100%",
                my: 3,
                backgroundRepeat: "repeat",
                backgroundPosition: "right center",
                backgroundSize: "auto"
            }}
        >
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', height: '100%' }}>
                        <Box sx={{ maxWidth: { xs: 330, sm: 330, md: 380 }, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Text variant="h4" sx={{ fontWeight: 500, fontSize: 24 }}>Culpa labore enim deserunt laboris non in commodo.</Text>
                            <Text sx={{ my: 4, fontSize: 18 }}>Conheça a usina assim como no vídeo do nosso canal</Text>
                            <Box sx={{ width: '100%' }}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        backgroundColor: '#007a73',
                                        paddingBlock: 1.5,
                                        '&:hover': { background: 'linear-gradient(79.94deg, rgba(0, 162, 174, 0.9) 0%, rgba(4, 148, 164, 0.9) 34.79%, rgba(30, 52, 96, 0.9) 101.2%)' }, transition: '.2s ease-in-out'
                                    }}>Comprar passeio para Itaipu</Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', paddingInline: 2 }}>
                        <VideoButton
                            urlVideo="https://www.youtube.com/watch?v=6aDyQCOvH1w"
                            urlThumb="/main-image.png"
                            title="Chora negada"
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};