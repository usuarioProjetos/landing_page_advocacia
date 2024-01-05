// Interfaces
import { IDatasDeskPage } from '../interfaces/DeskPage/DeskPage'

// Logo / icons / images 
import { 
    ImgOne,
    ImgTwo,
    ImgThree,
    ImgFour,
} from '../assets/desk/deskImages'

export const DatasDeskPage: IDatasDeskPage = {
    title: 'Escritório',
    items: [ 
        {
            src: ImgOne,
            text: 'Item 0',
            id: 0
        },
        {
            src: ImgTwo,
            text: 'Item 1',
            id: 1
        },
        {
            src: ImgThree,
            text: 'Item 2',
            id: 2
        },
        {
            src: ImgFour,
            text: 'Item 3',
            id: 3
        },
        
    ]
}