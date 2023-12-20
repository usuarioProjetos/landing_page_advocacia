import { StaticImageData } from "next/image"

export interface ICardAbout {
    id: number
    image: StaticImageData
    title: string
    textMobile: string
    textDesktop: string
    firstElement?: boolean
    socialMedias?: {
        Icon: any
        to: string
    }[]
}