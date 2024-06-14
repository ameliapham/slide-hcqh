import { tss } from "tss-react/mui"
import { ImageCustom } from "shared/ImageCustom";
import kich4 from "assets/images/kich4.jpeg";
import nuocChayMp3 from "assets/sounds/canh4-nuocChay.mp3";
import nlcnGapNhauMp3 from "assets/sounds/canh4-nlcnGapNhau.mp3";
import nlcnCaiNhauMp3 from "assets/sounds/canh4-nlcnCaiNhau.mp3";
import anMayHopXuongMp3 from "assets/sounds/canh4-anMayHopXuong.mp3";
import ketThucMp3 from "assets/sounds/canh4-ketThuc.m4a";


export function Kich4() {

    const { classes } = useStyle();

    return (
        <ImageCustom imageSrc={kich4}>
            <div className={classes.audioContainer}>
                <label className={classes.label} htmlFor="audio1">
                    Nước chảy xiết
                </label>
                <audio id="audio1" controls className={classes.audio}>
                    <source src={nuocChayMp3} type="audio/mpeg" />
                </audio>
            </div>
            <div className={classes.audioContainer}>
                <label className={classes.label} htmlFor="audio2">
                    NL CN gặp nhau
                </label>
                <audio id="audio2" controls className={classes.audio}>
                    <source src={nlcnGapNhauMp3} type="audio/mpeg" />
                </audio>
            </div>
            <div className={classes.audioContainer}>
                <label className={classes.label} htmlFor="audio2">
                    NL CN cãi nhau
                </label>
                <audio id="audio2" controls className={classes.audio}>
                    <source src={nlcnCaiNhauMp3} type="audio/mpeg" />
                </audio>
            </div>
            <div className={classes.audioContainer}>
                <label className={classes.label} htmlFor="audio2">
                    Ăn mày chỉ huy hợp xướng
                </label>
                <audio id="audio2" controls className={classes.audio}>
                    <source src={anMayHopXuongMp3} type="audio/mpeg" />
                </audio>
            </div>
            <div className={classes.audioContainer}>
                <label className={classes.label} htmlFor="audio2">
                    Kết thúc
                </label>
                <audio id="audio2" controls className={classes.audio}>
                    <source src={ketThucMp3} type="audio/mpeg" />
                </audio>
            </div>
        </ImageCustom>
    );
}

const useStyle = tss
    .withName({ Kich4 })
    .create(() => ({
        "audioContainer": {
            "position": "absolute",
            "bottom": "30px",
            "left": "0",
            "width": "200px",
            "height": "30px",

            "&:nth-of-type(2)": {
                "left": "210px",
            },
            "&:nth-of-type(3)": {
                "left": "420px",
            },
            "&:nth-of-type(4)": {
                "left": "630px",
            },
            "&:nth-of-type(5)": {
                "left": "840px",
            },
        },
        "audio": {
            "width": "100%",
            "height": "100%",
        },
        "label": {
            "color": "white",
        },
    }));