import { StaticImageData } from "next/image"

export interface IDatasBecauseWe {
    titleSection: string
    paragraphSection: string
    cards: {
        id: number
        icon: StaticImageData
        title: string
        text: string
    }[]
}