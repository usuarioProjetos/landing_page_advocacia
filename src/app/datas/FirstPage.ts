import ImageHomeMobile from '../assets/image_home_mobile.png'
import ImageHomeTest from '../assets/city.jpeg'

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
        src: ImageHomeTest
    },
    {
        src: ''
    },
    {
        src: ''
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
