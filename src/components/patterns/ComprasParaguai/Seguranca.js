import React from "react"
import { Box, Text, Grid, Button } from "../../core"

export const Seguranca = () => {
    return (
        <Box sx={{ maxWidth: "1200px" }}>
            <Box sx={{ flexGrow: 1, mx: { xs: 2, sm: 0 }, my: 10 }}>
                <Grid container spacing={2}>
                    <Grid item md={12} xs={12}>
                        <Text
                            variant="h1" style={{ fontSize: 40, fontWeight: 600, color: "#1E3460", pb: 3 }}
                        >
                            Compras no Paraguai
                        </Text>
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <Text
                            sx={{
                                borderBottom: "1px solid lightgray",
                                color: "#1E3460",
                                maxWidth: "100%",
                            }}
                        >
                        </Text>
                        <Text sx={{ my: 3, fontWeight: 600, fontSize: 20, color: "#1E3460" }}>
                            Assista o vídeo de nosso especialista em Foz sobre como comprar com segurança no Paraguai
                        </Text>
                        <Text sx={{ my: 3, fontWeight: 500, fontSize: 18, color: "#1E3460" }}>
                            Com a Loumar Turismo é muito mais fácil, cômodo e seguro fazer compras em Ciudad del Este. Confira os horários de saída de nossas vans de todos os hotéis de Foz do Iguaçu.
                        </Text>
                        <Box sx={{ width: '100%' }}>
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    my: 3,
                                    backgroundColor: '#007a73',
                                    paddingBlock: 1.5,
                                    '&:hover': { background: 'linear-gradient(79.94deg, rgba(0, 162, 174, 0.9) 0%, rgba(4, 148, 164, 0.9) 34.79%, rgba(30, 52, 96, 0.9) 101.2%)' }, transition: '.2s ease-in-out'
                                }}>Adquirir nosso Guia de Compras</Button>
                        </Box>
                    </Grid>
                    <Grid item md={7} xs={12}>
                        <Box sx={{ borderRadius: 4, overflow: "hidden" }}>
                            <iframe
                                src="https://www.youtube.com/embed/_QmuG3nvTME"
                                frameBorder="0"
                                scrolling="no"

                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ minWidth: "100%", minHeight: "350px", height: "auto", display: "block" }}
                            ></iframe>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
export default Seguranca;