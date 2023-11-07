import { StaticImageData } from "next/image"

export interface IDatasFirstWorkMobile {
    title: string
    text: string
    image: any
    direction: 'left' | 'right' | null
    nameClass: string
}

export interface ICardFieldWork {
    title: string
    text: string
    image: StaticImageData
    id: number
    showContent: boolean
}

export interface IDatasFirstWorkDesktop {
    bgImage: StaticImageData
    icon: StaticImageData
    iconActualItem: StaticImageData
    cards: ICardFieldWork[]
}