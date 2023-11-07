import ProfessionalExample from '../assets/professionalExample.png'
import ImageFirstProfessionals from '../assets/professionals/image 24.png'
import IconExample from '../assets/professionals/iconExample.png'
import { StaticImageData } from 'next/image'
import { BsInstagram, BsFacebook, BsWhatsapp } from  'react-icons/bs'

interface IDatasAbout {
    id: string | number
    title: string
    text: string
    image: StaticImageData
    socialMedias?: {
        name: string
        icon: StaticImageData
    }[]
}

export const DatasAbout: IDatasAbout[] = [
    {
        id: '0',
        title: 'Lorem Ipsum Sit Amet',
        text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.is simply dummy text of the printing and typesetting industry.',
        image: ProfessionalExample,
        socialMedias: [
            {
                name: 'Instagram',
                icon: BsInstagram
            },
            {
                name: 'Facebook',
                icon: BsFacebook
            },
            {
                name: 'Whatsapp',
                icon: BsWhatsapp
            }
        ]
    },
    {
        id: '1',
        title: 'Lorem Ipsum Sit Amet',
        text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.is simply dummy text of the printing and typesetting industry.',
        image: IconExample
    }
]