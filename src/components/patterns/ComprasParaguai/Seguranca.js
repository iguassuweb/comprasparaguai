import { Box, Grid, Text, Button } from "../../core"
import { VideoButton } from "../VideoButton";

export const Seguranca = () => {
    return (
        <Box
            sx={{
                // backgroundImage: "url(/bg-ful.png)",
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
                        <Box sx={{ maxWidth: { xs: 330, sm: 330, md: 480 }, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Text variant="h1" sx={{ fontWeight: 500, fontSize: 42 }}>Shopping in Paraguay</Text>
                            <Text sx={{ my: 2, fontSize: 21 }}>Assista o vídeo de nosso especialista em Foz sobre como comprar com segurança no Paraguai</Text>
                            <Text sx={{ my: 2, fontSize: 21 }}>Com a Loumar Turismo é muito mais fácil, cômodo e seguro fazer compras em Ciudad del Este. Confira os horários de saída de nossas vans de todos os hotéis de Foz do Iguaçu. </Text>
                            <Box sx={{ width: '100%' }}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        backgroundColor: '#007a73',
                                        paddingBlock: 1.5,
                                        '&:hover': { background: 'linear-gradient(79.94deg, rgba(0, 162, 174, 0.9) 0%, rgba(4, 148, 164, 0.9) 34.79%, rgba(30, 52, 96, 0.9) 101.2%)' }, transition: '.2s ease-in-out'
                                    }}>Adquirir nosso Guia de Compras</Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box sx={{ width: '70%', display: 'flex', justifyContent: 'center', paddingInline: 2 }}>
                        <VideoButton
                            urlVideo="https://www.youtube.com/watch?v=_QmuG3nvTME"
                            urlThumb="/main-image.png"
                            title="Segurança na compra de bagagens"
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};