import { tss } from "tss-react/mui"
import ReactPlayer from 'react-player'

type Props = {
    className?: string;
    children?: React.ReactNode;
    videoSrc: string;
}

export function VideoCustom(props: Props) {

    const { className, videoSrc } = props;
    const { cx, classes } = useStyle();

    return (
        <>
            <ReactPlayer
                className={cx(classes.root, className)}
                url={videoSrc}
                playing
                muted
                loop
                width="100%"
                height="100%"
            />
        </>
    );
}

const useStyle = tss
    .create(() => ({
        "root": {
            "position": "relative",
            "width": "100%",
            "height": "100%",
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
        },
    }));