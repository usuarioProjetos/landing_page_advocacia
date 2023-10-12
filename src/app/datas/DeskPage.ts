import Image1 from '../assets/testsCarousel/img_1.jpg'
import Image2 from '../assets/testsCarousel/img_2.jpg'
import Image3 from '../assets/testsCarousel/img_3.jpg'
import Image4 from '../assets/testsCarousel/img_4.jpg'
import Image5 from '../assets/testsCarousel/img_5.jpg'
import Image6 from '../assets/testsCarousel/img_6.jpg'
import Image7 from '../assets/testsCarousel/img_7.jpg'
interface IDatasDeskPage {
    title: string
    items: { src: any, id: string | number, text: string }[]
}

export const DatasDeskPage: IDatasDeskPage = {
    title: 'escritório',
    items: [
        {
            src: Image1,
            text: 'Item 0',
            id: 0
        },
        {
            src: Image2,
            text: 'Item 1',
            id: 1
        },
        {
            src: Image3,
            text: 'Item 2',
            id: 2
        },
        {
            src: Image4,
            text: 'Item 3',
            id: 3
        },
        
    ]
}