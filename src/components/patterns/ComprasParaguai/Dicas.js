import React from "react"
import { Box, Text, Grid, Button } from "../../core"

export const Dicas = () => {
    return (
        <Box sx={{ maxWidth: "800px" }}>
            <Box sx={{ flexGrow: 1, mx: { xs: 2, sm: 0 }, my: 10 }}>
                <Grid container spacing={2} sx={{ my: 4 }}>
                    <Grid item md={12} xs={12}>
                        <Text sx={{ my: 2, textAlign: "center", fontWeight: 500, fontSize: 24, color: "#1E3460" }}>
                        Confira as regras apresentadas pela Receita Federal sobre a Bagagem em viagens para o exterior 
                        </Text>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Box sx={{ borderRadius: 2, overflow: "hidden", my:2}}>
                            <iframe
                                src="https://www.youtube.com/embed/5zlGYWSFG2E"
                                frameBorder="0"
                                scrolling="no"

                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ minWidth: "100%", minHeight: "400px", height: "auto", display: "block" }}
                            ></iframe>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
export default Dicas;