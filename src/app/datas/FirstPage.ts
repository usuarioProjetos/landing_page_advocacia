// Interfaces
import { IDatasFirstPage } from '../interfaces/FirstPage/FirstPage'

// Logo / icons / images 
import {
    PrimeiroSlide,
    SegundoSlide,
    TerceiroSlide,
    Arrow,
} from '../assets/home/home'

export const ImagesFirstPage = [
    {
        path: PrimeiroSlide
    },
    {
        path: SegundoSlide
    },
    {
        path: TerceiroSlide
    }
]

export const DatasFirstPage: IDatasFirstPage = {
    title: 'Cevithereza Paiva Advocacia',
    arrow: Arrow,
    btns: [
        {
            text: 'atuação',
            nameClass: 'bgDark',
            to: 'fieldWork'
        },
        {
            text: 'contato',
            nameClass: 'bgLight',
            to: 'contact'
        }
    ]
}