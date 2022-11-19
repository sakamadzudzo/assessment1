import React, { ReactElement, FC, useState } from "react";
import { Box, Typography, TextField, Grid, Button, InputAdornment, IconButton } from "@mui/material";
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import PasswordRoundedIcon from '@mui/icons-material/PasswordRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import State from './../State';
import authService from "../services/auth-service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Home: FC<any> = (): ReactElement => {
    const [username, setUsername] = useState('');
    const required = (value: any) => {
        if (!value) {
            return (
                <div className="alert alert-danger" role="alert">
                    This field is required!
                </div>
            );
        }
    };
    const [password, setPassword] = useState('');
    const [values, setValues] = React.useState<State>({
        tokenTimer: 0,
        showPassword: false,
        user: {
            id: 0, username: '',
            name: '',
            dob: '',
            gender: ''
        },
        token: ''
    })

    let navigate = useNavigate;

    if (values.token && window.location.pathname !== '/') {
        window.location.href = '/login';
    }

    const onChangeUsername = (e: any) => {
        setUsername(e.target.value);
    }

    const onChangePassword = (e: any) => {
        setPassword(e.target.value);
    }

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleLogin = () => {
        if (username && password) {
            authService.login(username, password).then((response) => {
                setValues({ user: response.data.data, tokenTimer: 300, showPassword: false, token: response.data.token })
            })
        } else {
            toast("Please enter username and password");
            console.log("Please enter username and password");
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
                                {values.showPassword ? <VisibilityOffRoundedIcon /> : <VisibilityRoundedIcon />}
                            </IconButton>
                        </InputAdornment>
                    )
                }} type={values.showPassword ? 'text' : 'password'} onClick={handleClickShowPassword}
                    sx={{ pb: 2 }} onChange={onChangePassword} />
                <Button sx={{ color: "secondary.dark" }} size="large" onClick={handleLogin}>Login <LoginRoundedIcon></LoginRoundedIcon></Button>
            </Grid>
        </Box>
    );
};

export default Home;