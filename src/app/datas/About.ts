import ProfessionalExample from '../assets/professionalExample.png'
import ImageFirstProfessionals from '../assets/professionals/image 24.png'
interface IDatasProfessionals {
    img: string | any
    name: string
    text: string
    socialMedias?: {
        icon: any
    }[]
}

export const DatasProfessionals: IDatasProfessionals[] = [
    {
        img: ImageFirstProfessionals,
        name: 'Lorem Ipsum Sit Amet',
        text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
        socialMedias: [
            {
                icon: 'Icon'
            }
        ]
    },
    {
        img: ImageFirstProfessionals,
        name: 'Nosso time',
        text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    },
    {
        img: ImageFirstProfessionals,
        name: 'Nosso time',
        text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    }
]