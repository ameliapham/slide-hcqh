import { tss } from "tss-react/mui"
import { ImageCustom } from "shared/ImageCustom";
import kich3 from "assets/images/kich3.jpeg";
import cuopMp3 from "assets/sounds/canh3-cuop.mp3";
import tieuThuVsCuopMp3 from "assets/sounds/canh3-tieuThuVsCuop.mp3";
import tieuThuNoiMp3 from "assets/sounds/canh3-tieuThuNoi.mp3";
import noi34Mp3 from "assets/sounds/canh3-noiCanh34.mp3";


export function Kich3() {

    const { classes } = useStyle();

    return (
        <ImageCustom imageSrc={kich3}>
            <div className={classes.audioContainer}>
                <label className={classes.label} htmlFor="audio1">
                    Gặp cướp
                </label>
                <audio id="audio1" controls className={classes.audio}>
                    <source src={cuopMp3} type="audio/mpeg" />
                </audio>
            </div>
            <div className={classes.audioContainer}>
                <label className={classes.label} htmlFor="audio1">
                    Tiểu thư nhận ra cướp
                </label>
                <audio id="audio1" controls className={classes.audio}>
                    <source src={tieuThuVsCuopMp3} type="audio/mpeg" />
                </audio>
            </div>
            <div className={classes.audioContainer}>
                <label className={classes.label} htmlFor="audio2">
                    Tiểu thư nói đi Thái về
                </label>
                <audio id="audio2" controls className={classes.audio}>
                    <source src={tieuThuNoiMp3} type="audio/mpeg" />
                </audio>
            </div>
            <div className={classes.audioContainer}>
                <label className={classes.label} htmlFor="audio2">
                    Nối cảnh 3 4
                </label>
                <audio id="audio2" controls className={classes.audio}>
                    <source src={noi34Mp3} type="audio/mpeg" />
                </audio>
            </div>
        </ImageCustom>
    );
}

const useStyle = tss
    .withName({ Kich3 })
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
        },
        "audio": {
            "width": "100%",
            "height": "100%",
        },
        "label": {
            "color": "white",
        },
    }));