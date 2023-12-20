import { BsInstagram, BsFacebook, BsWhatsapp, BsEnvelope } from 'react-icons/bs'
import LogoImage from '../assets/logo.png' 
import { IDatasInput, IDatasSocialMedia } from '../interfaces/Contact/Contact'

export const Logo = {
    src: LogoImage
}

export const DatasInput: IDatasInput[] = [
    {
        nameField: 'nome',
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