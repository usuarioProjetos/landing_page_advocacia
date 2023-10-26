import { BsInstagram, BsFacebook, BsWhatsapp, BsEnvelope } from 'react-icons/bs'
import LogoImage from '../assets/logo.png'

interface IDatasInput {
    name: string
    type?: string
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
        name: 'nome',
        type: 'text'
    },
    {
        name: 'e-mail',
        type: 'text'
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
    {
        Icon: BsEnvelope,
        name: 'email'
    },
]