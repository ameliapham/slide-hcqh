import { tss } from "tss-react/mui"
import { ImageCustom } from "shared/ImageCustom";
import hommageNTK from "assets/images/hommageNTK.png";
import { Typography } from "@mui/material";

export function HommageNTK() {

    const { classes } = useStyle();

    return (
        <ImageCustom imageSrc={hommageNTK}>
            <div className={classes.textZone}>
                <Typography
                    variant="h5"
                    className={classes.text}
                >
                    Thương nhớ
                </Typography>
                <Typography
                    variant="h5"
                    className={classes.text}
                >
                    Hommage à
                </Typography>
                <Typography
                    variant="h2"
                    className={classes.text}
                >
                    Chú Nguyễn Tích Kỳ
                </Typography>
            </div>
        </ImageCustom>
    );
}

const useStyle = tss

    .create(() => ({
        "textZone": {
            "position": "absolute",
            "top": "35%",
            "right": "75%",
            "transform": "translate(50%, -50%)",
            "display": "flex",
            "gap": "40px",
            "flexDirection": "column",
        },
        "text": {
            "color": "white",
            "width": "500px",
            "textAlign": "center",
            "fontFamily": "Playfair Display",
            "fontWeight": "bold",
        },
    }));