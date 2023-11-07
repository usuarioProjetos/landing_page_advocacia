import ProfessionalExample from '../assets/professionalExample.png'
import ImageFirstProfessionals from '../assets/professionals/image 24.png'
import IconExample from '../assets/professionals/iconExample.png'
import ExampleAbout from '../assets/exampleAbout.png'
import { BsInstagram, BsWhatsapp, BsFacebook } from 'react-icons/bs'
import { StaticImageData } from 'next/image'

interface IDatasProfessionals {
    img: string | any
    name: string
    text: string
    socialMedias?: {
        Icon: any,
        name: string
    }[]
}

export const DatasProfessionals: IDatasProfessionals[] = [
    {
        img: ExampleAbout,
        name: 'Lorem Ipsum Sit Amet',
        text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.is simply dummy text of the printing and typesetting industry.',
        socialMedias: [
            {
                Icon: BsFacebook,
                name: 'Facebook'
            },
            {
                Icon: BsWhatsapp,
                name: 'Whatsapp'
            },
            {
                Icon: BsInstagram,
                name: 'Instagram'
            },
        ]
    },
    {
        img: IconExample,
        name: 'Nosso time',
        text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.is simply dummy text of the printing and typesetting industry.',
    },
    // {
    //     img: ImageFirstProfessionals,
    //     name: 'Nosso time',
    //     text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    // }
]