import { StaticImageData } from 'next/image'

import ImageTest from '../assets/bruno-thethe-nxkinK7hhOk-unsplash 2.png'
import BlackHammer from '../assets/desk/blackHammer.png'
import BgImage from '../assets/svg/bgFieldWork.svg'
import ImageCardExample from '../assets/desk/imageCardExample.png'
import WhiteHammer from '../assets/desk/whiteHammer.png'
import ImageOne from '../assets/imageFieldWorkMobileOne.png'
import ImageThree from '../assets/imageFieldWorkMobileThree.png'
import ImageTwo from '../assets/imageFieldWorkMobileTwo.png'

interface IDatasFirstWorkMobile {
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

export const DatasFieldWorkMobile: IDatasFirstWorkMobile[] = [
    {
        title: 'What is Lorem.',
        text: 'What is Lorem Ipsum?  Lorem Ipsum is simply dummy text of the printing and typesetting industry.What is Lorem Ipsum',
        image: ImageTest,
        direction: 'left',
        nameClass: 'card1'
    },
    {
        title: 'What is Lorem Ipsum',
        text: 'What is Lorem Ipsum?  Lorem Ipsum is simply dummy text of the printing and typesetting industry.What is Lorem Ipsum',
        image: ImageTwo,
        direction: 'right',
        nameClass: 'card2'

    }, 
    {
        title: 'What is Lorem', 
        text: 'What is Lorem Ipsum?  Lorem Ipsum is simply dummy text of the printing and typesetting industry.What is Lorem Ipsum',
        image: ImageOne,
        direction: 'left',
        nameClass: 'card3'
    },
]

export const DatasFieldPageDesktop: IDatasFirstWorkDesktop = {
    icon: BlackHammer,
    iconActualItem: WhiteHammer,
    bgImage: BgImage,
    cards: [
        {
            id: 0,
            image: ImageCardExample,
            title: 'Title 1',
            text: 'What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.',
            showContent: false
        },
        {
            id: 1,
            image: ImageCardExample,
            title: 'Title 2',
            text: 'What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.',
            showContent: false
        },
        {
            id: 2,
            image: ImageCardExample,
            title: 'Title 3',
            text: 'What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.',
            showContent: true
        },
        {
            id: 3,
            image: ImageCardExample,
            title: 'Title 4',
            text: 'What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.',
            showContent: false
        },
        {
            id: 4,
            image: ImageCardExample,
            title: 'Title 5',
            text: 'What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.',
            showContent: false
        },
    ]
}