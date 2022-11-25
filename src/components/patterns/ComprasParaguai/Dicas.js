import React from "react"
import { Box, Text, Grid, IconButton } from "../../core"
import Image from "next/image";
// import { Pagination, Stack } from "@mui/material"

export const Dicas = () => {
    return (
        <Box 
            style={{ 
                width: "100%", 
                flexGrow: 1, 
                background: "rgba(0, 162, 174, 0.2)"
            }}
            sx={{ my: 10 }}
        >
            <Grid 
                alignItems="center"
                justifyContent="center"
                container
                sx={{ 
                    paddingInline: { md: "12rem", sx: 0 },
                    marginBlock: { xs: "4rem", md: 2 },
                }}
            >
                <Box sx={{  mx: { xs: 2, sm: 0 }  }}>
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
                                sx={{ display: "flex" }}
                            >
                                <Grid
                                alignItems="center"
                                justifyContent="center"
                                container 
                                item md={7.5} xs={12}
                                sx={{
                                    display: "flex", 
                                    flexDirection: "row", 
                                    alignItems: "flex-start", 
                                    justifyContent: "center", 
                                    my: 6, 
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
                                                style={{ fontSize: 18, fontWeight: 400, color: "#1E3460" }}
                                                sx={{
                                                marginBlock: "1rem",
                                                }}
                                            >
                                                Verifique se o produto que foi adquirido e retirado do pacote é o mesmo que foi escolhido no balcão de vendas. Evite aceitar produtos sem testar pois algumas lojas podem se recusar a trocar, em caso de defeito. é melhor sair do Paraguai sabendo que está funcionando e evitar o transtorno de precisar voltar.
                                            </Text>
                                        </Box>
                                        <Box sx={{ display: "flex" }}>
                                            <Box sx={{ height: 6, width: 45, borderRadius: 1, backgroundColor: '#1E3460', my: 2, marginRight: 1 }} />
                                            <Box sx={{ height: 4, width: 45, borderRadius: 1, backgroundColor: '#1E3460', opacity: "0.15", my: 2, marginRight: 1 }} />
                                            <Box sx={{ height: 4, width: 45, borderRadius: 1, backgroundColor: '#1E3460', opacity: "0.15", my: 2, marginRight: 1 }} />
                                            <Box sx={{ height: 4, width: 45, borderRadius: 1, backgroundColor: '#1E3460', opacity: "0.15", my: 2, marginRight: 1 }} />
                                            <Box sx={{ height: 4, width: 45, borderRadius: 1, backgroundColor: '#1E3460', opacity: "0.15", my: 2, marginRight: 1 }} />
                                            <Box sx={{ height: 4, width: 45, borderRadius: 1, backgroundColor: '#1E3460', opacity: "0.15", my: 2, marginRight: 1 }} />
                                            <Box sx={{ height: 4, width: 45, borderRadius: 1, backgroundColor: '#1E3460', opacity: "0.15", my: 2, marginRight: 1 }} />
                                            <Box sx={{ height: 4, width: 45, borderRadius: 1, backgroundColor: '#1E3460', opacity: "0.15", my: 2, marginRight: 1 }} />
                                            <Box sx={{ height: 4, width: 45, borderRadius: 1, backgroundColor: '#1E3460', opacity: "0.15", my: 2, marginRight: 1 }} />
                                            <Box sx={{ height: 4, width: 45, borderRadius: 1, backgroundColor: '#1E3460', opacity: "0.15", my: 2, marginRight: 1 }} />
                                            <Box sx={{ height: 4, width: 45, borderRadius: 1, backgroundColor: '#1E3460', opacity: "0.15", my: 2, marginRight: 1 }} />
                                            <Box sx={{ height: 4, width: 45, borderRadius: 1, backgroundColor: '#1E3460', opacity: "0.15", my: 2, marginRight: 1 }} />
                                        </Box>
                                        <Box sx={{ display: "flex" }}>
                                            <IconButton sx={{ width: "24px" }}>
                                                <Image
                                                src={`/leftArrowIcon.svg`}
                                                layout='fill'
                                                alt='Voltar'
                                                />
                                            </IconButton>
                                            <Text
                                                variant="h4" 
                                                style={{ 
                                                    fontSize: 14, 
                                                    fontWeight: 400, 
                                                    color: "#323232", 
                                                }}
                                                sx={{
                                                    marginBlock: "1rem", 
                                                    padding: { xs: 0, md: 1.5 }
                                                }}
                                            >
                                                Anterior
                                            </Text>
                                            <Text
                                                variant="h4" 
                                                style={{ 
                                                    fontSize: 14, 
                                                    fontWeight: 400, 
                                                    color: "#323232", 
                                                }}
                                                sx={{
                                                    marginBlock: "1rem", 
                                                    padding: { xs: 0, md: 1.5 }
                                                }}
                                            >
                                                Próxima
                                            </Text>
                                            <IconButton sx={{ width: "24px" }}>
                                                <Image
                                                src={`/rightArrowIcon.svg`}
                                                layout='fill'
                                                alt='Avançar'
                                                />
                                            </IconButton>
                                        </Box>
                                        {/* <Box sx={{ marginTop: 4, width: '100%', padding: 2, display: 'flex', justifyContent: 'center' }}>
                                            <Stack spacing={2}>
                                            <Pagination count={numberOfPages} page={page} onChange={handleChange} />
                                            </Stack>
                                        </Box> */}
                                    </Grid>
                                </Grid>
                                <Grid
                                alignItems="center"
                                justifyContent="center"
                                container 
                                item md={3.5} xs={12}
                                sx={{
                                    display: "flex", 
                                    flexDirection: "row", 
                                    my: 6, 
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
                                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                                        border: "1px solid none",
                                        borderRadius: "16px",
                                        padding: { xs: 0, md: 3 },
                                        }}
                                    >
                                        <Box
                                        textAlign={"center"}
                                        justifyContent="center"
                                        sx={{ flexDirection: "column", my: 5 }}
                                        >
                                            <Image
                                                src="/moeda-icon.png"
                                                alt="Picture of the author"
                                                width={"48px"}
                                                height={"48px"}
                                            />
                                            <Text
                                                paragraph={true}
                                                style={{ fontSize: 20, fontWeight: 500, color: "#1E3460" }}
                                                sx={{
                                                marginBlock: "1rem",
                                                }}
                                            >
                                                Cotação atual do dólar
                                            </Text>
                                            <Text
                                                paragraph={true}
                                                sx={{
                                                marginBlock: "1rem",
                                                }}
                                            >
                                            <b style={{ fontSize: 28, fontWeight: 500, color: "#1E3460" }}>U$ 1,00 = R$ 5,30</b>{" "}
                                                
                                            </Text>
                                        </Box>
                                        <Box 
                                        textAlign={"center"}
                                        justifyContent="center"
                                        sx={{ flexDirection: "column" }}
                                        >
                                            <Text
                                                paragraph={true}
                                                style={{ fontSize: 14, fontWeight: 500, color: "#1E3460" }}
                                                sx={{
                                                marginBlock: "1rem",
                                                }}
                                            >
                                                *Valores aproximados
                                            </Text>
                                            <Text
                                                paragraph={true}
                                                style={{ fontSize: 14, fontWeight: 500, color: "#1E3460" }}
                                                sx={{
                                                marginBlock: "1rem",
                                                }}
                                            >
                                                *As compras podem ser feitas com Real
                                            </Text>
                                        </Box>
                                        {/* <Box sx={{ marginTop: 4, width: '100%', padding: 2, display: 'flex', justifyContent: 'center' }}>
                                            <Stack spacing={2}>
                                            <Pagination count={numberOfPages} page={page} onChange={handleChange} />
                                            </Stack>
                                        </Box> */}
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
                                    my: 2, 
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
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Box>
    )
}
export default Dicas;