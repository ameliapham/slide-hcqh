import { tss } from "tss-react/mui"
import { ImageCustom } from "shared/ImageCustom";
import kich1 from "assets/images/kich1.png";
import tienNuMua1Mp3 from "assets/sounds/canh1-tienNuMua1.mp3"
import tienNuMua2Mp3 from "assets/sounds/canh1-tienNuMua2.m4a";


export function Kich1() {

    const { classes } = useStyle();

    return (
        <ImageCustom imageSrc={kich1}>
            <audio controls className={classes.audio}>
                <source src={tienNuMua1Mp3} type="audio/mpeg" />
            </audio>
            <audio controls className={classes.audio}>
                <source src={tienNuMua2Mp3} type="audio/mpeg" />
            </audio>
        </ImageCustom>
    );
}

const useStyle = tss
    .withName({Kich1})
    .create(() => ({
        "audio": {
            "position": "absolute",
            "bottom": "0",
            "left": "0",
            "width": "200px",
            "height": "30px",

            "&:nth-of-type(2)": {
                "left": "210px",
            },
        },
    }));