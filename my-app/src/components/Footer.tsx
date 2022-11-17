import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer: FC = (): ReactElement => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "secondary.main",
                paddingTop: "1rem",
                paddingBottom: "1rem",
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Typography color="secondary.main" variant="h5" sx={{ opacity: "80%" }}>
                            Assessment Application
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="secondary.main" variant="subtitle1" sx={{ opacity: "80%" }}>
                            {`${new Date().getFullYear()} | Saka Shingirai Madzudzo`}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;