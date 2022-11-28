import { ReactElement, FC, useState } from "react";
import { Box, Typography, TextField, Grid, InputAdornment, IconButton } from "@mui/material";
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import PasswordRoundedIcon from '@mui/icons-material/PasswordRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import LoadingButton from '@mui/lab/LoadingButton';
import authService from "../services/auth-service";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import myLocalStorage from "../myLocalStorage";

const Home: FC<any> = (): ReactElement => {
    const [username, setUsername] = useState('');
    // const required = (value: any) => {
    //     if (!value) {
    //         return (
    //             <div className="alert alert-danger" role="alert">
    //                 This field is required!
    //             </div>
    //         );
    //     }
    // };
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    if (myLocalStorage.getItem('token') && window.location.pathname !== '/') {
        window.location.href = '/';
    }

    const onChangeUsername = (e: any) => {
        setUsername(e.target.value);
    }

    const onChangePassword = (e: any) => {
        setPassword(e.target.value);
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = () => {
        setLoading(!loading);
        if (username && password) {
            authService.login(username, password).then(() => {
                setLoading(!loading);
                window.location.href = '/';
            })
                .catch((err: any) => {
                    console.log(err);
                    toast.error(err.response.data.message);
                    setLoading(false);
                    console.log(loading);
                });
        } else {
            toast.error("Please enter username and password");
            console.log("Please enter username and password");
            setLoading(false);
        }
    }

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
                <TextField id="username" label="Username" variant="outlined" value={username} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircleRoundedIcon />
                        </InputAdornment>
                    ),
                }} sx={{ pb: 2, mt: 2 }} onChange={onChangeUsername} />
                <TextField id="password" label="Password" variant="outlined" value={password} InputProps={{
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
                                {showPassword ? <VisibilityOffRoundedIcon /> : <VisibilityRoundedIcon />}
                            </IconButton>
                        </InputAdornment>
                    )
                }} type={showPassword ? 'text' : 'password'} onClick={handleClickShowPassword}
                    sx={{ pb: 2 }} onChange={onChangePassword} />

                <LoadingButton
                    color="secondary"
                    size="large"
                    onClick={handleLogin}
                    endIcon={<LoginRoundedIcon />}
                    loading={loading}
                    loadingPosition="end"
                    variant="contained"
                >
                    Login
                </LoadingButton>
            </Grid>
        </Box>
    );
};

export default Home;