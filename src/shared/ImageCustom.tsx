import { tss } from "tss-react/mui"

type Props = {
    className?: string;
    children?: React.ReactNode;
    imageSrc: string;
}

export function ImageCustom( props: Props ) {

    const { className, children, imageSrc } = props;
    const { cx, classes } = useStyle({imageSrc});

    return (
        <div className={cx(classes.root, className)}>
            {children}
        </div>
    );
}

const useStyle = tss
    .withParams<{imageSrc: string}>()
    .create(({imageSrc}) => ({
        "root": {
            "position": "relative",
            "width": "100%",
            "height": "100%",
            "background": `url(${imageSrc}) center center/cover no-repeat`,
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
        },
    }));