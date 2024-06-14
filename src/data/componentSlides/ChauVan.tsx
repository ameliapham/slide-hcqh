import { tss } from "tss-react/mui"
import { ImageCustom } from "shared/ImageCustom";
import chauVanBG from "assets/images/chauVan.jpg";
import coDoiThuongNganMp3 from "assets/sounds/coDoiThuongNganKar.mp3";

export function ChauVan() {

    const { classes } = useStyle();

    return (
        <ImageCustom imageSrc={chauVanBG}>
            <audio controls className={classes.audio}>
                <source src={coDoiThuongNganMp3} type="audio/mpeg" />
            </audio>
        </ImageCustom>
    );
}

const useStyle = tss
    .withName({ChauVan})
    .create(() => ({
        "audio": {
            "position": "absolute",
            "bottom": "0",
            "left": "0",
            "width": "200px",
            "height": "30px",
        },
    }));