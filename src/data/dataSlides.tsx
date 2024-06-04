import photo1 from "assets/images/slide1.png";
import photo2 from "assets/images/slide2.png";
import photo3 from "assets/images/slide3.png";
import giaiDieuTQ from "assets/videos/giaiDieuToQuoc.mp4";
import { ChauVan } from "data/DataSlides/ChauVan";


type Slide =
    | {type: 'image', src: string, alt: string}
    | {type: 'video', src: string, alt: string}
    | {type: 'component', Component: (params: {className?: string;}) => JSX.Element | null}


export const slides: Slide[] = [
    { 
        type: 'image', 
        src: photo1, 
        alt: 'photo1' 
    }, { 
        type: 'image', 
        src: photo2, 
        alt: 'photo2' 
    }, { 
        type: 'image', 
        src: photo3, 
        alt: 'photo3' 
    }, { 
        type: 'video', 
        src: giaiDieuTQ, 
        alt: 'giaiDieuToQuoc' 
    }, { 
        type: 'component', 
        Component: ChauVan 
    },
];