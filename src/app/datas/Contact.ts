import { BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs'
import LogoImage from '../assets/logo.png'

interface IDatasInput {
    name: string
}

interface IDatasSocialMedia {
    Icon: any
    name: string
}
export const Logo = {
    src: LogoImage
}

export const DatasInput: IDatasInput[] = [
    {
        name: 'nome'
    },
    {
        name: 'e-mail'
    },
    {
        name: 'mensagem'
    }
]

export const DatasSocialMedia: IDatasSocialMedia[] = [
    {
        Icon: BsInstagram,
        name: 'instagram'
    },
    {
        Icon: BsWhatsapp,
        name: 'whatsapp'
    },
    {
        Icon: BsFacebook,
        name: 'facebook'
    },
]