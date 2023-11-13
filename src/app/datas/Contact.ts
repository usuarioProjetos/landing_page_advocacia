import { BsInstagram, BsFacebook, BsWhatsapp, BsEnvelope } from 'react-icons/bs'
import LogoImage from '../assets/logo.png'

interface IDatasInput {
    nameField: string
    type?: string
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
        nameField: 'name',
        type: 'text',
        name: 'Nome'
    },
    {
        nameField: 'e-mail',
        type: 'email',
        name: 'email'
    },
    {
        nameField: 'mensagem',
        name: 'Mensagem'
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
    // {
    //     Icon: BsEnvelope,
    //     name: 'email'
    // },
]