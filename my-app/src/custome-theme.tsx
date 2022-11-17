import { createTheme } from "@mui/material/styles";

// define theme
const Theme = createTheme({
    palette: {
        primary: {
            light: "#63b8ff",
            main: "#0989e3",
            dark: "#005db0",
            contrastText: "#000",
        },
        secondary: {
            main: "rgba(0, 0, 0, 0.6)",
            light: "#82e9de",
            dark: "#00867d",
            contrastText: "whitesmoke",
        },
    },
});

export default Theme;