import { tss } from "tss-react/mui"
import { ImageCustom } from "shared/ImageCustom";
import minion from "assets/images/minion.png";
import minionMp3 from "assets/sounds/minion.mp3";

export function Minion() {

    const { classes } = useStyle();

    return (
        <ImageCustom imageSrc={minion}>
            <audio controls className={classes.audio}>
                <source src={minionMp3} type="audio/mpeg" />
            </audio>
        </ImageCustom>
    );
}

const useStyle = tss
    .withName({Minion})
    .create(() => ({
        "audio": {
            "position": "absolute",
            "bottom": "0",
            "left": "0",
            "width": "200px",
            "height": "30px",
        },
    }));