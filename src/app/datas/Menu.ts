import { StaticImageData } from 'next/image'
import Logo from '../assets/logo.png'

interface IDatasMenu {
    logo: StaticImageData
    items: { itemList: string, id: number }[]
}

export const DatasMenu: IDatasMenu = {
    logo: Logo,
    items: [
        {
            itemList: 'home',
            id: 1
        },
        {
            itemList: 'atuação',
            id: 2
        },
        {
            itemList: 'escritório',
            id: 3
        },
        {
            itemList: 'profissionais',
            id: 4
        },
        {
            itemList: 'contato',
            id: 5
        }
    ]
}