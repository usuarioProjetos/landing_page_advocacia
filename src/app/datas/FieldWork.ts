import ImageOne from '../assets/imageFieldWorkMobileOne.png'
import ImageTwo from '../assets/imageFieldWorkMobileTwo.png'
import ImageThree from '../assets/imageFieldWorkMobileThree.png'
import ImageTest from '../assets/bruno-thethe-nxkinK7hhOk-unsplash 2.png'

interface IDatasFirstWork {
    title: string
    text: string
    image: any
    direction: 'left' | 'right' | null
    nameClass: string
}

export const DatasFieldWork: IDatasFirstWork[] = [
    {
        title: 'What is Lorem.',
        text: 'What is Lorem Ipsum?  Lorem Ipsum is simply dummy text of the printing and typesetting industry.What is Lorem Ipsum',
        image: ImageOne,
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
        image: ImageTest,
        direction: 'left',
        nameClass: 'card3'
    },
]
