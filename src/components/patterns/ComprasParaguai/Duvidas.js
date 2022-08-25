import React from "react"
import { Box, Text, Grid, IconButton } from "../../core"
import Image from "next/image";
// import { Pagination, Stack } from "@mui/material"

export const Duvidas = () => {
    return (
        <Box 
            style={{ 
                width: "100%", 
                flexGrow: 1, 
            }}
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
                    <Grid container spacing={2} sx={{ my: 0 }}>
                        <Grid item md={12} xs={12}>
                            <Text
                                variant="h1" style={{ fontSize: 32, fontWeight: 500, color: "#1E3460", pb: 3 }}
                            >
                                Dúvidas frequentes
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
                                item md={12} xs={12}
                                sx={{
                                    display: "flex", 
                                    flexDirection: "row", 
                                    alignItems: "flex-start", 
                                    justifyContent: "center", 
                                    my: 6, 
                                    minWidth: "765px",
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
                                        border: "1px solid rgba(94, 94, 96, 0.1)",
                                        borderLeft: "10px solid #007A73",
                                        borderRadius: "4px",
                                        filter: 'drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.1))',
                                        padding: { xs: 0, md: 3 },
                                        }}
                                    >
                                        <Box
                                        display="flex"
                                        justifyContent="center"
                                        sx={{ flexDirection: "column" }}
                                        >
                                            <Text
                                            >
                                                <b style={{ fontSize: 20, fontWeight: 500, color: "#1E3460", paddingLeft: "2%" }}
                                                >
                                                    Qual o valor da cota para as compras no paraguai?
                                                </b>{" "}
                                            </Text>
                                        </Box>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={12}
                                        md={12}
                                        lg={12}
                                        sx={{
                                        backgroundColor: "white",
                                        border: "1px solid rgba(94, 94, 96, 0.1)",
                                        borderRadius: "4px",
                                        filter: 'drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.1))',
                                        padding: { xs: 0, md: 3 },
                                        my: 1,
                                        }}
                                    >
                                        <Box
                                        display="flex"
                                        justifyContent="center"
                                        sx={{ flexDirection: "column" }}
                                        >
                                            <Text
                                            >
                                                U$ 500 (limite pessoal e intransferível)
                                            </Text>
                                            <Text
                                            >
                                                Recolhe-se o imposto de 50% sobre o valor que ultrapassar os U$500.
                                            </Text>
                                            <Text
                                            >
                                                A fim de facilitar o cálculo do imposto, o viajante deve apresentar a fatura ou nota de compra, constando o valor de aquisição dos bens no exterior. Na falta desse documento ou no caso da sua inexatidão, o valor dos bens é determinado pela fiscalização aduaneira.
                                            </Text>
                                            <Text
                                            >
                                                É aplicável apenas uma vez a cada mês, mesmo que o limite do valor global tenha sido utilizado parcialmente.
                                            </Text>
                                            <Text
                                            >
                                                Quem necessitar pagar a cota deve se apresentar voluntariamente para o pagamento dos tributos, junto à fiscalização aduaneira dos postos de fronteira, na Ponte Internacional da Amizade. Não é possível pagar o imposto em outra localidade, sendo passível de retenção da mercadoria.
                                            </Text>
                                            <Text
                                            >
                                                Pessoas físicas somente podem importar mercadorias para uso próprio.
                                            </Text>
                                        </Box>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={12}
                                        md={12}
                                        lg={12}
                                        sx={{
                                        backgroundColor: "white",
                                        border: "1px solid rgba(94, 94, 96, 0.1)",
                                        borderLeft: "10px solid #007A73",
                                        borderRadius: "4px",
                                        padding: { xs: 0, md: 3 },
                                        my: 1,
                                        }}
                                    >
                                        <Box
                                        display="flex"
                                        justifyContent="center"
                                        sx={{ flexDirection: "column" }}
                                        >
                                            <Text
                                            >
                                                <b style={{ fontSize: 20, fontWeight: 500, color: "#1E3460", paddingLeft: "2%" }}
                                                >
                                                    Quais Bens são isentos?
                                                </b>{" "}
                                            </Text>
                                        </Box>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={12}
                                        md={12}
                                        lg={12}
                                        sx={{
                                        backgroundColor: "white",
                                        border: "1px solid rgba(94, 94, 96, 0.1)",
                                        borderLeft: "10px solid #007A73",
                                        borderRadius: "4px",
                                        padding: { xs: 0, md: 3 },
                                        my: 1,
                                        }}
                                    >
                                        <Box
                                        display="flex"
                                        justifyContent="center"
                                        sx={{ flexDirection: "column" }}
                                        >
                                            <Text
                                            >
                                                <b style={{ fontSize: 20, fontWeight: 500, color: "#1E3460", paddingLeft: "2%" }}
                                                >
                                                    Quais Bens não são isentos?
                                                </b>{" "}
                                            </Text>
                                        </Box>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={12}
                                        md={12}
                                        lg={12}
                                        sx={{
                                        backgroundColor: "white",
                                        border: "1px solid rgba(94, 94, 96, 0.1)",
                                        borderLeft: "10px solid #007A73",
                                        borderRadius: "4px",
                                        padding: { xs: 0, md: 3 },
                                        my: 1,
                                        }}
                                    >
                                        <Box
                                        display="flex"
                                        justifyContent="center"
                                        sx={{ flexDirection: "column" }}
                                        >
                                            <Text
                                            >
                                                <b style={{ fontSize: 20, fontWeight: 500, color: "#1E3460", paddingLeft: "2%" }}
                                                >
                                                    Qual a cota para menores de idade?
                                                </b>{" "}
                                            </Text>
                                        </Box>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={12}
                                        md={12}
                                        lg={12}
                                        sx={{
                                        backgroundColor: "white",
                                        border: "1px solid rgba(94, 94, 96, 0.1)",
                                        borderLeft: "10px solid #007A73",
                                        borderRadius: "4px",
                                        padding: { xs: 0, md: 3 },
                                        my: 1,
                                        }}
                                    >
                                        <Box
                                        display="flex"
                                        justifyContent="center"
                                        sx={{ flexDirection: "column" }}
                                        >
                                            <Text
                                            >
                                                <b style={{ fontSize: 20, fontWeight: 500, color: "#1E3460", paddingLeft: "2%" }}
                                                >
                                                    Quais documentos são necessários?
                                                </b>{" "}
                                            </Text>
                                        </Box>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={12}
                                        md={12}
                                        lg={12}
                                        sx={{
                                        backgroundColor: "white",
                                        border: "1px solid rgba(94, 94, 96, 0.1)",
                                        borderLeft: "10px solid #007A73",
                                        borderRadius: "4px",
                                        padding: { xs: 0, md: 3 },
                                        my: 1,
                                        }}
                                    >
                                        <Box
                                        display="flex"
                                        justifyContent="center"
                                        sx={{ flexDirection: "column" }}
                                        >
                                            <Text
                                            >
                                                <b style={{ fontSize: 20, fontWeight: 500, color: "#1E3460", paddingLeft: "2%" }}
                                                >
                                                    O que é proibido trazer ao Brasil?
                                                </b>{" "}
                                            </Text>
                                        </Box>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={12}
                                        md={12}
                                        lg={12}
                                        sx={{
                                        backgroundColor: "white",
                                        border: "1px solid rgba(94, 94, 96, 0.1)",
                                        borderLeft: "10px solid #007A73",
                                        borderRadius: "4px",
                                        padding: { xs: 0, md: 3 },
                                        my: 1,
                                        }}
                                    >
                                        <Box
                                        display="flex"
                                        justifyContent="center"
                                        sx={{ flexDirection: "column" }}
                                        >
                                            <Text
                                            >
                                                <b style={{ fontSize: 20, fontWeight: 500, color: "#1E3460", paddingLeft: "2%" }}
                                                >
                                                    Qual a quantidade permitida?
                                                </b>{" "}
                                            </Text>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid
                                alignItems="center"
                                justifyContent="center"
                                container 
                                item md={3} xs={12}
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
                                        backgroundColor: "#EFEFEF",
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
                                            <Text
                                                paragraph={true}
                                                sx={{
                                                marginBlock: "8.5rem",
                                                }}
                                            >
                                            <b style={{ fontSize: 28, fontWeight: 500, color: "#1E3460" }}>Anúncio</b>{" "}
                                                
                                            </Text>
                                        </Box>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={12}
                                        md={12}
                                        lg={12}
                                        sx={{
                                        backgroundColor: "#EFEFEF",
                                        border: "1px solid none",
                                        borderRadius: "16px",
                                        padding: { xs: 0, md: 3 },
                                        my: 1,
                                        }}
                                    >
                                        <Box
                                        textAlign={"center"}
                                        justifyContent="center"
                                        sx={{ flexDirection: "column", my: 5 }}
                                        >
                                            <Text
                                                paragraph={true}
                                                sx={{
                                                marginBlock: "8.5rem",
                                                }}
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
export default Duvidas;