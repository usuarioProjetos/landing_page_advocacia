import { StaticImageData } from "next/image";

export interface IButton {
    text: string
    nameClass: string
    to: string
}

export interface IDatasFirstPage {
    title: string;
    arrow: StaticImageData;
    btns: IButton[];
}