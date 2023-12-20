import { StaticImageData } from "next/image"

export interface IDatasMenu {
    logo: StaticImageData
    items: { 
        itemList: string, 
        to: string
        id: number, 
        delayEnter: number, 
        delayExit: number 
    }[]
}