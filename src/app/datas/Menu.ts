import { StaticImageData } from 'next/image'
import Logo from '../assets/logo2.png'

interface IDatasMenu {
    logo: StaticImageData
    items: { 
        itemList: string, 
        to: string
        id: number, 
        delayEnter: number, 
        delayExit: number 
    }[]
}

export const delayAnimationEnter = .3
export const delayAnimationExit = .1

export const DatasMenu: IDatasMenu = {
    logo: Logo,
    items: [
        {
            itemList: 'home',
            to: 'home',
            id: 1,
            delayEnter: delayAnimationEnter,
            delayExit: (delayAnimationExit + .4)
        },
        {
            itemList: 'atuação',
            to: 'home',
            id: 2,
            delayEnter: (delayAnimationEnter + .1),
            delayExit: (delayAnimationExit + .3)
        },
        {
            itemList: 'escritório',
            to: 'home',
            id: 3,
            delayEnter: (delayAnimationEnter + .2),
            delayExit: (delayAnimationExit + .2)
        },
        {
            itemList: 'profissionais',
            to: 'home',
            id: 4,
            delayEnter: (delayAnimationEnter + .3),
            delayExit: (delayAnimationExit + .1)
        },
        {
            itemList: 'contato',
            to: 'home',
            id: 5,
            delayEnter: (delayAnimationEnter + .4),
            delayExit: delayAnimationExit
        }
    ]
}