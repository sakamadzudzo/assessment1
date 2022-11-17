import React, { ReactElement, FC } from "react";
import { Box, Typography, Grid, TextField } from "@mui/material";
import { users } from './../entities/user';

const Home: FC<any> = (): ReactElement => {
    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Grid sx={{
                display: "flex",
                flexDirection: "column",
            }}>
                <Typography color="secondary.main" variant="h3">Welcome</Typography>
                <TextField id="name" label="Name" variant="outlined" disabled fullWidth value={users[0].name} sx={{ pb: 2, mt: 2 }} />
                <TextField id="dob" label="Date of Birth" variant="outlined" disabled fullWidth value={users[0].dob} sx={{ pb: 2 }} />
                <TextField id="gender" label="Gender" variant="outlined" disabled fullWidth value={users[0].gender} sx={{ pb: 2 }} />
            </Grid>
        </Box>
    );
};

export default Home;