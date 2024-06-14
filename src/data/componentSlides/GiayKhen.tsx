import { tss } from "tss-react/mui"
import { ImageCustom } from "shared/ImageCustom";
import giayKhen from "assets/images/giayKhen.png";
import { Typography } from "@mui/material";

export function GiayKhen() {

    const { classes } = useStyle();

    return (
        <ImageCustom imageSrc={giayKhen}>
            <div className={classes.textZone}>
                <Typography
                    variant="h2"
                    className={classes.text}
                >
                    Certificat de mérite
                </Typography>
                <Typography
                    variant="h5"
                    className={classes.text2}
                >
                    de la part de l'Embassade du Vietnam en France.
                </Typography>
                <Typography
                    variant="h5"
                    className={classes.text2}
                >
                    Honorer la contribution de HCQH dans la conservation et la promotion culturelle du Vietnam.
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
            "left": "75%",
            "display": "flex",
            "gap": "40px",
            "flexDirection": "column",
        },
        "text": {
            "transform": "translate(-50%, -50%)",
            "color": "black",
            "width": "500px",
            "textAlign": "center",
            "fontFamily": "Playfair Display",
            "fontWeight": "500",
        },
        "text2": {
            "transform": "translate(-50%, -50%)",
            "color": "black",
            "width": "500px",
            "textAlign": "center",
            "fontWeight": "demi-bold",
            "fontFamily": "Poppins",
        },
    }));