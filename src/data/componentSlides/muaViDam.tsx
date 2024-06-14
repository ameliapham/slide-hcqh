import { tss } from "tss-react/mui"
import { ImageCustom } from "shared/ImageCustom";
import viDam from "assets/images/viDam.jpeg";
import muaViDamMp3 from "assets/sounds/muaViDam.mp3";

export function MuaViDam() {

    const { classes } = useStyle();

    return (
        <ImageCustom imageSrc={viDam}>
            <audio controls className={classes.audio}>
                <source src={muaViDamMp3} type="audio/mpeg" />
            </audio>
        </ImageCustom>
    );
}

const useStyle = tss
    .withName({MuaViDam})
    .create(() => ({
        "audio": {
            "position": "absolute",
            "bottom": "0",
            "left": "0",
            "width": "200px",
            "height": "30px",
        },
    }));