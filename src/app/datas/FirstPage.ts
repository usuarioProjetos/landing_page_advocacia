import {
    PrimeiroSlide,
    SegundoSlide,
    TerceiroSlide
} from '../assets/home/home'

interface IButton {
    text: string;
    nameClass: string
}

interface IDatasFirstPage {
    title: string;
    btns: IButton[];
}
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
            nameClass: 'bgDark'
        },
        {
            text: 'contato',
            nameClass: 'bgLight'
        }
    ]
}