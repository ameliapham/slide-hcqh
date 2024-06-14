import { tss } from "tss-react/mui"
import { ImageCustom } from "shared/ImageCustom";
import viNgheTinh from "assets/images/viNgheTinh.jpeg";
import viNgheTinhMp3 from "assets/sounds/viNgheTinh.mp3";

export function ViNgheTinh() {

    const { classes } = useStyle();

    return (
        <ImageCustom imageSrc={viNgheTinh}>
            <audio controls className={classes.audio}>
                <source src={viNgheTinhMp3} type="audio/mpeg" />
            </audio>
        </ImageCustom>
    );
}

const useStyle = tss
    .withName({ViNgheTinh})
    .create(() => ({
        "audio": {
            "position": "absolute",
            "bottom": "0",
            "left": "0",
            "width": "200px",
            "height": "30px",
        },
    }));