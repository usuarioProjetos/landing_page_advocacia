import { IDatasFirstPage } from '../interfaces/FirstPage/FirstPage'

import {
    PrimeiroSlide,
    SegundoSlide,
    TerceiroSlide
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