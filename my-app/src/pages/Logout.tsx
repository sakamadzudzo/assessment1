import { Box } from "@mui/material";
import { FC, ReactElement } from "react";
import myLocalStorage from "../myLocalStorage";

const Logout: FC<any> = (): ReactElement => {

    myLocalStorage.clear();
    window.location.href = '/login';

    return (<Box sx={{
        flexGrow: 1,
        backgroundColor: 'whitesmoke',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}></Box>);
}

export default Logout;