import { tss } from "tss-react/mui"
import chauVanBG from "assets/images/chauVan.jpg";
import coDoiThuongNgan from "assets/sounds/coDoiThuongNganKar.mp3";

export function ChauVan() {

    const { classes } = useStyle();

    return (
        <div className={classes.root}>
            <audio controls className={classes.audio}>
                <source src={coDoiThuongNgan} type="audio/mpeg" />
            </audio>
        </div>
    );
}

const useStyle = tss

    .create(() => ({
        "root": {
            "position": "relative",
            "width": "100%",
            "height": "100%",
            "background": `url(${chauVanBG}) center center/cover no-repeat`,
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
        },
        "audio": {
            "position": "absolute",
            "bottom": "0",
            "left": "0",
            "width": "200px",
        },
    }));