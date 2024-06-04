import { createTheme, alpha } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        text: {
            primary: "#f6edde",
            secondary: "#ebd8bd",
            disabled: "#373E4F",
        },
        background: {
            default: "#20242E",
            paper: "#2C323F",
        },
        primary: {
            main: "#2C323F",
            light: "#373E4F",
            dark: "#20242E",
        },
        secondary: {
            main: alpha("#debc93", 1),
            light: alpha("#ebd8bd", 0.5),
            dark: alpha("#d4a373", 1),
        },
    },
});