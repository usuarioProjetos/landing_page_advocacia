import ImageHomeMobile from '../assets/image_home_mobile.png'
import ImageHomeTest from '../assets/city.jpeg'
import ImageTestTwo from '../assets/bruno-thethe-nxkinK7hhOk-unsplash.png'
import ImageTestThree from '../assets/testsCarousel/img_5.jpg'

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
        src: ImageTestTwo
    },
    {
        src: ImageTestThree
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
