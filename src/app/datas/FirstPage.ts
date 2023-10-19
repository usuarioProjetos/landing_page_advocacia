import ImageHomeTwo from '../assets/home/bruno-thethe-nxkinK7hhOk-unsplash.png'
import ImageHomeThree from '../assets/home/ottr-dan-ctEbk8AXXI8-unsplash.png'
import ImageHomeOne from '../assets/home/ottr-dan-ef8zTtwqclk-unsplash.png'

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
        path: ImageHomeOne
    },
    {
        path: ImageHomeTwo
    },
    {
        path: ImageHomeThree
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