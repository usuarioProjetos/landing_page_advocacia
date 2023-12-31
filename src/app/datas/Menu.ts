// Interfaces
import { IDatasMenu } from '../interfaces/Menu/Menu'

// Logo / icons / images 
import { LogoImageTwo } from '../assets/logo/imagesLogo'

export const delayAnimationEnter = .3
export const delayAnimationExit = .1

export const DatasMenu: IDatasMenu = {
    logo: LogoImageTwo,
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
            to: 'fieldWork',
            id: 2,
            delayEnter: (delayAnimationEnter + .1),
            delayExit: (delayAnimationExit + .3)
        },
        {
            itemList: 'sobre',
            to: 'about',
            id: 3,
            delayEnter: (delayAnimationEnter + .2),
            delayExit: (delayAnimationExit + .2)
        },
        {
            itemList: 'escritório',
            to: 'deskPage',
            id: 4,
            delayEnter: (delayAnimationEnter + .3),
            delayExit: (delayAnimationExit + .1)
        },
        {
            itemList: 'contato',
            to: 'contact',
            id: 5,
            delayEnter: (delayAnimationEnter + .4),
            delayExit: delayAnimationExit
        }
    ]
}