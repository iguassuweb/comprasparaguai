import React from "react"
import { Box, Text, Grid } from "../../core"

export const Dicas = () => {
    return (
        <Box sx={{ width: "100%", flexGrow: 1, background: "rgba(0, 162, 174, 0.2)", my: 10 }}>
            <Box sx={{  mx: { xs: 12, sm: 24 }  }}>
                <Grid container spacing={2} sx={{ my: 4 }}>
                    <Grid item md={12} xs={12}>
                        <Text
                            variant="h1" style={{ fontSize: 32, fontWeight: 500, color: "#1E3460", pb: 3 }}
                        >
                            Confira as 13 Dicas Loumar de Compras no Paraguai
                        </Text>
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
                                display: "flex", 
                                flexDirection: "column", 
                                alignItems: "flex-start", 
                                justifyContent: "center", 
                                my: 5, 
                                maxWidth: "1400px",
                            }}
                            >
                                <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={12}
                                    lg={7.5}
                                    sx={{
                                    backgroundColor: "white",
                                    border: "1px solid none",
                                    borderRadius: "16px",
                                    padding: { xs: 0, md: 3 },
                                    }}
                                >
                                    <Box
                                    display="flex"
                                    justifyContent="center"
                                    sx={{ flexDirection: "column" }}
                                    >
                                        <Text
                                            variant="h4"
                                        >
                                            <b style={{ fontSize: 28, fontWeight: 500, color: "#1E3460" }}>Dica 1</b>{" "}
                                        </Text>
                                    </Box>
                                    <Box display="flex" justifyContent="center">
                                        <Text
                                            variant="h5"
                                            paragraph={true}
                                            style={{ color: "#1E3460" }}
                                            sx={{
                                            marginBlock: "1rem",
                                            }}
                                        >
                                            Verifique se o produto que foi adquirido e retirado do pacote é o mesmo que foi escolhido no balcão de vendas. Evite aceitar produtos sem testar pois algumas lojas podem se recusar a trocar, em caso de defeito. é melhor sair do Paraguai sabendo que está funcionando e evitar o transtorno de precisar voltar.
                                        </Text>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
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
                                display: "flex", 
                                flexDirection: "column", 
                                alignItems: "center", 
                                justifyContent: "center", 
                                my: 5, 
                                maxWidth: "1400px",
                            }}
                            >
                                <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={12}
                                    lg={12}
                                    sx={{
                                    backgroundColor: "#EFEFEF",
                                    border: "1px solid none",
                                    borderRadius: "8px",
                                    padding: { xs: 0, md: 6 },
                                    width: "100%",
                                    }}
                                >
                                    <Box
                                    display="flex"
                                    textAlign={ "center" }
                                    sx={{ flexDirection: "column" }}
                                    >
                                        <Text
                                            variant="h4"
                                        >
                                            <b style={{ fontSize: 28, fontWeight: 500, color: "#1E3460" }}>Anúncio</b>{" "}
                                        </Text>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        {/* <Text sx={{ my: 3, fontWeight: 600, fontSize: 20, color: "#1E3460" }}>
                            Assista o vídeo de nosso especialista em Foz sobre como comprar com segurança no Paraguai
                        </Text>
                        <Text sx={{ my: 2, fontWeight: 500, fontSize: 18, color: "#1E3460" }}>
                            Com a Loumar Turismo é muito mais fácil, cômodo e seguro fazer compras em Ciudad del Este. Confira os horários de saída de nossas vans de todos os hotéis de Foz do Iguaçu.
                        </Text>
                        <Box sx={{ width: '100%' }}>
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    backgroundColor: '#007a73',
                                    paddingBlock: 1.5,
                                    '&:hover': { background: 'linear-gradient(79.94deg, rgba(0, 162, 174, 0.9) 0%, rgba(4, 148, 164, 0.9) 34.79%, rgba(30, 52, 96, 0.9) 101.2%)' }, transition: '.2s ease-in-out'
                                }}>Adquirir nosso Guia de Compras</Button>
                        </Box> */}
                    </Grid>
                    {/* <Grid item md={7} xs={12}>
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
                    </Grid> */}
                </Grid>
            </Box>
        </Box>
    )
}
export default Dicas;