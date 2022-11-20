import { ReactElement, FC, useState, useEffect } from "react";
import { Box, Typography, Grid, TextField } from "@mui/material";
import myLocalStorage from "../myLocalStorage";
import userService from "../services/user-service";
import { toast } from "react-toastify";

const Home: FC<any> = (): ReactElement => {

    if (!myLocalStorage.getItem('token') && window.location.pathname !== '/login') {
        window.location.href = '/login';
    }

    const [user, setUser] = useState({
        id: 0,
        username: "",
        name: "",
        dob: "",
        gender: ""
    });

    const getSecureResource = () => {
        userService.superSecureResource().then((response) => {
            setUser({
                id: response.id,
                username: response.username,
                name: response.name,
                dob: response.dob,
                gender: response.gender
            });
        }).catch(err => {
            toast(err.response.data.message);
            console.log(err);
            // if (err.response.data.message === 'Invalid token') {
            //     myLocalStorage.clear();
            // }
        });
    }

    useEffect(() => {
        getSecureResource();
    }, []);

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
                <TextField id="name" label="Name" variant="outlined" disabled fullWidth value={user.name} sx={{ pb: 2, mt: 2 }} />
                <TextField id="dob" label="Date of Birth" variant="outlined" disabled fullWidth value={user.dob} sx={{ pb: 2 }} />
                <TextField id="gender" label="Gender" variant="outlined" disabled fullWidth value={user.gender} sx={{ pb: 2 }} />
            </Grid>
        </Box>
    );
};

export default Home;