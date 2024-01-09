// Interfaces
import { IDatasDeskPage } from '../interfaces/DeskPage/DeskPage'

// Logo / icons / images 
import { 
    ImgOne,
    ImgTwo,
    ImgThree,
    ImgFour,
    ImgFive,
    ImgSix,
    ImgSeven,
    ImgEight,
    ImgNine,
    ImgTen
} from '../assets/desk/deskImages'

export const DatasDeskPage: IDatasDeskPage = {
    title: 'Escritório',
    items: [ 
        {
            src: ImgFive,
            text: 'Item 5',
            id: 5
        },
        {
            src: ImgOne,
            text: 'Item 1',
            id: 1
        },
        {
            src: ImgEight,
            text: 'Item 8',
            id: 8
        },
        {
            src: ImgFour,
            text: 'Item 4',
            id: 4
        },
        {
            src: ImgSeven,
            text: 'Item 7',
            id: 7
        },
        {
            src: ImgSix,
            text: 'Item 6',
            id: 6
        },
        {
            src: ImgNine,
            text: 'Item 9',
            id: 9
        },
        {
            src: ImgTwo,
            text: 'Item 2',
            id: 2
        },
    ]
}