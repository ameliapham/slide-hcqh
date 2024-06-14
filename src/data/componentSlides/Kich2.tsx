import { tss } from "tss-react/mui"
import { ImageCustom } from "shared/ImageCustom";
import kich2 from "assets/images/kich2.jpeg";
import tiengMayBayMp3 from "assets/sounds/canh2-tiengMayBay.mp3";
import coGaiHaiRauMp3 from "assets/sounds/canh2-coGaiHaiRau.mp3";
import hoaGiaiLoiNguyenMp3 from "assets/sounds/canh2-hoaGiaiLoiNguyen.mp3";
import chiaTayCanhCuoiMp3 from "assets/sounds/canh2-chiaTayCanhCuoi.mp3";


export function Kich2() {

    const { classes } = useStyle();

    return (
        <ImageCustom imageSrc={kich2}>
            <div className={classes.audioContainer}>
                <label className={classes.label} htmlFor="audio1">
                    Tiếng máy bay
                </label>
                <audio id="audio1" controls className={classes.audio}>
                    <source src={tiengMayBayMp3} type="audio/mpeg" />
                </audio>
            </div>
            <div className={classes.audioContainer}>
                <label className={classes.label} htmlFor="audio2">
                    Cô gái hái rau
                </label>
                <audio id="audio2" controls className={classes.audio}>
                    <source src={coGaiHaiRauMp3} type="audio/mpeg" />
                </audio>
            </div>
            <div className={classes.audioContainer}>
                <label className={classes.label} htmlFor="audio2">
                    Hoá giải lời nguyền
                </label>
                <audio id="audio2" controls className={classes.audio}>
                    <source src={hoaGiaiLoiNguyenMp3} type="audio/mpeg" />
                </audio>
            </div>
            <div className={classes.audioContainer}>
                <label className={classes.label} htmlFor="audio2">
                    Chia tay cảnh cuối
                </label>
                <audio id="audio2" controls className={classes.audio}>
                    <source src={chiaTayCanhCuoiMp3} type="audio/mpeg" />
                </audio>
            </div>
           
        </ImageCustom>
    );
}

const useStyle = tss
    .withName({Kich2})
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