// Interfaces
import { IDatasInput, IDatasSocialMedia } from '../interfaces/Contact/Contact'

// Logo / icons / images 
import { BsFillTelephoneFill, BsWhatsapp, BsEnvelope } from 'react-icons/bs'
import { FaMapMarkedAlt } from "react-icons/fa";
import { LogoImage } from '../assets/logo/imagesLogo'

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
        Icon: BsWhatsapp,
        name: 'whatsapp',
        to: 'https://api.whatsapp.com/send?phone=5511981086293'
    },
    {
        Icon: BsEnvelope,
        name: 'email',
        to: 'mailto: frederico@cevitherezapaiva.com.br'
    },
    {
        Icon: FaMapMarkedAlt,
        name: 'Localização',
        to: 'https://www.google.com/maps/place/Edif%C3%ADcio+Perdizes+Trade+Center/@-23.5359427,-46.6678303,15z/data=!4m5!3m4!1s0x0:0x69fd101e5fe28d0f!8m2!3d-23.5359558!4d-46.6677995?sa=X&ved=2ahUKEwiZtoPp1-H1AhWOrJUCHU-sDdkQ_BJ6BAgVEAU&shorturl=1'
    },
    {
        Icon: BsFillTelephoneFill,
        name: '(11) 98108-6293',
        to: '#'
    },
]
