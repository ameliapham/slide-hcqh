import { tss } from "tss-react/mui";
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import ReactPlayer from 'react-player'
import { alpha } from '@mui/material/styles';
import { slides } from "data/dataSlides";
import { useFullscreen } from 'hooks/FullscreenContext';


type SlideProps = {
    className?: string;
}

export function Slide(props: SlideProps) {
    const { className } = props;
    const [currentSlide, setCurrentSlide] = useState(0);
    const slide = slides[currentSlide];
    const { cx, classes } = useStyles();
    const { enterFullscreen, isFullscreen, exitFullscreen } = useFullscreen();

    const goToNextImage = () => {
        setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
    }

    const goToPreviousImage = () => {
        setCurrentSlide((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    }

    const handleFullscreenToggle = () => {
        if (isFullscreen) {
            exitFullscreen();
        } else {
            enterFullscreen();
        }
    };

    return (
        <>
            <div className={cx(classes.root, className)}>

                <div className={cx(classes.image)}>
                    {(() => {
                        switch (slide.type) {
                            case 'image':
                                return (
                                    <img
                                        src={slide.src}
                                        alt={slide.alt}
                                        className={cx(classes.image)}
                                    />
                                );
                            case 'video':
                                return (
                                    <ReactPlayer
                                        url={slide.src}
                                        controls
                                        width="100%"
                                        height="100%"
                                    />
                                );
                            case 'component':
                                return (
                                    <slide.Component />
                                );
                        }
                    })()}
                </div>

                <IconButton onClick={handleFullscreenToggle} className={classes.fullscreen}>
                    {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
                </IconButton>

                <IconButton
                    className={cx(classes.button)}
                    onClick={goToPreviousImage}
                >
                    <ArrowBackIosNewIcon />
                </IconButton>

                <IconButton
                    className={cx(classes.button)}
                    onClick={goToNextImage}
                >
                    <ArrowForwardIosIcon />
                </IconButton>
            </div>
        </>
    );
}

const useStyles = tss
    .create(({ theme }) => {

        //const left = "0%";

        return {
            "root": {
                "position": "relative",
                "width": "100%",
                "height": "100%",
                "overflow": "hidden",
            },
            "image": {
                "width": "100%",
                "height": "100%",
                "objectFit": "cover",
                "objectPosition": "center center",
                "background": "center center/cover",
                "transition": "opacity .5s ease-in-out",
            },
            "button": {
                "position": "absolute",
                "top": "0",
                //"justifyContent": "center",
                "width": "150px",
                "height": "80%",
                "padding": "0",
                "background": alpha(theme.palette.secondary.light, 0.01),
                "borderRadius": "0",

                "&:first-of-type": {
                    "left": 0,
                    "color": alpha(theme.palette.secondary.light, 0.01),
                },
                "&:last-of-type": {
                    "right": 0,
                    "color": alpha(theme.palette.secondary.light, 0.01),
                },
            },
            "fullscreen": {
                "position": "absolute",
                "bottom": "10px",
                "right": "0",
                "color": "red",
            },
        };
    });
