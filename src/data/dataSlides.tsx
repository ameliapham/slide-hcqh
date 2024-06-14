import waitingBackground from "assets/images/waitingBackground.svg";
import trangChieu from "assets/images/trangChieu.jpeg";
import beoDat from "assets/images/beoDat.jpeg";
import datNuocTY from "assets/images/datNuocTY.png";
import bienThuy from "assets/images/bienThuy.jpeg";
import osole from "assets/images/osole.jpeg";
//import minion from "assets/images/minion.png";
import watw from "assets/images/watw.png";
import programme24 from "assets/images/programme24.png";
import lyKeoChai from "assets/images/lyKeoChai.jpeg";
import tombola from "assets/images/tombola.png";
import veCon from "assets/images/veCon.png";
import imd from "assets/images/imd.jpeg";
import hommageNTK from "assets/images/hommageNTK.png";

import clip15nam from "assets/videos/clip15nam.mp4";
import caNgoiTQ from "assets/videos/caNgoiTQ.mp4";
import coHa from "assets/videos/coHa.mp4";
import giaiDieuTQ from "assets/videos/giaiDieuTQ.mp4";
import bienThuyC4 from "assets/videos/bienThuyC4.mp4";
import claude from "assets/videos/claude.mp4";
import thanhVienCu from "assets/videos/thanhVienCu.mp4";
import interview from "assets/videos/interview.mov";
import daCoHoaiLang from "assets/videos/daCoHoaiLang.mp4";
import quanHo from "assets/images/quanHo.jpeg";
import laurent from "assets/videos/laurent.mp4";

import DNQ from "assets/videos/DNQ.mp4";


import { ChauVan } from "data/componentSlides/ChauVan";
import { GiayKhen } from "data/componentSlides/GiayKhen";
import { HymneLaNuit } from "./componentSlides/HymneLaNuit";
import { Clip15NamMute } from "./componentSlides/Clip15NamMute";
import { HB } from "./componentSlides/HB";
import { MuaViDam } from "./componentSlides/muaViDam";
import { ViNgheTinh } from "./componentSlides/ViNgheTinh";
import { Kich1 } from "./componentSlides/Kich1";
import { Kich2 } from "./componentSlides/Kich2";
import { Kich3 } from "./componentSlides/Kich3";
import { Kich4 } from "./componentSlides/Kich4";
import { Minion } from "./componentSlides/Minion";


type Slide =
    | { type: 'image', src: string, alt: string }
    | { type: 'video', src: string, alt: string }
    | { type: 'component', Component: (params: { className?: string; }) => JSX.Element | null }


export const slides: Slide[] = [
    {
        type: 'image',
        src: waitingBackground,
        alt: 'waitingBackground'
    },
    {
        type: 'video',
        src: clip15nam,
        alt: 'clip15nam'
    },
    {
        type: 'video',
        src: caNgoiTQ,
        alt: 'caNgoiTQ'
    },
    {
        type: 'video',
        src: coHa,
        alt: 'coHa'
    },
    {
        type: 'image',
        src: waitingBackground,
        alt: 'waitingBackground'
    },
    {
        type: 'image',
        src: trangChieu,
        alt: 'trangChieu'
    },
    {
        type: 'image',
        src: beoDat,
        alt: 'beoDat'
    },
    {
        type: 'image',
        src: datNuocTY,
        alt: 'datNuocTY'
    },
    {
        type: 'video',
        src: giaiDieuTQ,
        alt: 'giaiDieuToQuoc'
    },
    {
        type: 'image',
        src: bienThuy,
        alt: 'bienThuy'
    },
    {
        type: 'video',
        src: bienThuyC4,
        alt: 'bienThuyC4',
    },
    {
        type: 'image',
        src: waitingBackground,
        alt: 'waitingBackground'
    },
    {
        type: 'component',
        Component: GiayKhen
    },
    {
        type: 'image',
        src: waitingBackground,
        alt: 'waitingBackground'
    },
    {
        type: 'video',
        src: claude,
        alt: 'claude'
    },
    {
        type: 'video',
        src: laurent,
        alt: 'laurent'
    },
    {
        type: 'image',
        src: osole,
        alt: 'osole'
    },
    {
        type: 'component',
        Component: Minion
    },
    {
        type: 'image',
        src: hommageNTK,
        alt: 'hommageNTK'
    },
    {
        type: 'component',
        Component: HymneLaNuit
    },
    {
        type: 'image',
        src: programme24,
        alt: 'programme24'
    },
    {
        type: 'image',
        src: watw,
        alt: 'watw'
    },
    {
        type: 'component',
        Component: Clip15NamMute
    },
    {
        type: 'component',
        Component: HB
    },
    {
        type: 'image',
        src: tombola,
        alt: 'tombola'
    },
    {
        type: 'video',
        src: thanhVienCu,
        alt: 'thanhvienCu'
    },
    {
        type: 'video',
        src: interview,
        alt: 'interview'
    },
    {
        type: 'component',
        Component: ChauVan
    },
    {
        type: 'video',
        src: daCoHoaiLang,
        alt: 'daCoHoaiLang'
    },
    {
        type: 'component',
        Component: MuaViDam
    },
    {
        type: 'component',
        Component: ViNgheTinh
    },
    {
        type: 'image',
        src: lyKeoChai,
        alt: 'lyKeoChai'
    },
    {
        type: 'component',
        Component: Kich1
    },
    {
        type: 'component',
        Component: Kich2
    },
    {
        type: 'component',
        Component: Kich3
    },
    {
        type: 'component',
        Component: Kich4
    },
    {
        type: 'image',
        src: waitingBackground,
        alt: 'waitingBackground'
    },
    {
        type: 'video',
        src: DNQ,
        alt: 'DNQ'
    },
    {
        type: 'image',
        src: veCon,
        alt: 'veCon'
    },
    {
        type: 'image',
        src: imd,
        alt: 'imd'
    },
    {
        type: 'image',
        src: quanHo,
        alt: 'quanHo'
    },
    {
        type: 'image',
        src: waitingBackground,
        alt: 'waitingBackground'
    },
];