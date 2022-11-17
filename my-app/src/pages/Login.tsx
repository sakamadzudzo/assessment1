import React, { ReactElement, FC } from "react";
import { Box, Typography, TextField, Grid, Button, InputAdornment, IconButton } from "@mui/material";
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import PasswordRoundedIcon from '@mui/icons-material/PasswordRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import State from './../State';

const Home: FC<any> = (): ReactElement => {
    const [values, setValues] = React.useState<State>({
        id: 0,
        tokenTimer: 0,
        showPassword: false
    })

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

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
                flexDirection: "column"
            }}>
                <Typography color="secondary.main" variant="h3">Login</Typography>
                <TextField id="username" label="Username" variant="outlined" InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircleRoundedIcon />
                        </InputAdornment>
                    ),
                }} sx={{ pb: 2, mt: 2 }} />
                <TextField id="password" label="Password" variant="outlined" InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PasswordRoundedIcon />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {values.showPassword ? <VisibilityOffRoundedIcon /> : <VisibilityRoundedIcon />}
                            </IconButton>
                        </InputAdornment>
                    )
                }} type={values.showPassword ? 'text' : 'password'} onClick={handleClickShowPassword}
                    sx={{ pb: 2 }} />
                <Button sx={{ color: "secondary.dark" }} size="large">Login <LoginRoundedIcon></LoginRoundedIcon></Button>
            </Grid>
        </Box>
    );
};

export default Home;