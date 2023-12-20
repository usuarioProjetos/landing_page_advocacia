// Interfaces
import { 
    IDatasFirstWorkDesktop, 
    IDatasFirstWorkMobile 
} from '../interfaces/FieldWork/FieldWork'

// Logo / icons / images 
import {
    DireitoCivilImg,
    DireitoConsumidorImg,
    DireitoFamiliaImg,
    DireitoTrabalhistaImg,
    FullServiceImg,
    RecJudicialFalenciaImg,
    BgImage,
    BlackHammer,
    WhiteHammer
} from '../assets/fieldWork/imagesFieldWork'


export const DatasFieldWorkMobile: IDatasFirstWorkMobile[] = [
    {
        image: FullServiceImg,
        title: 'Full Service',
        text: 'Oferecemos uma variedade abrangente de serviços jurídicos para atender às diversas necessidades de nossos clientes em diversas áreas do direito',
        direction: 'left',
        nameClass: 'card1'
    },
    {
        image: DireitoTrabalhistaImg,
        title: 'Direito trabalhista',
        text: 'Oferecemos serviços jurídicos abrangentes para empregadores e empregados, protegendo seus direitos e interesses por meio de soluções especializadas e eficazes.',
        direction: 'right',
        nameClass: 'card2'

    }, 
    {
        image: DireitoFamiliaImg,
        title: 'Direito da família',
        text: 'Fornecemos assistência jurídica em questões de direito da família, incluindo divórcio e custódia de filhos, para apoiar você em momentos delicados.', 
        direction: 'left',
        nameClass: 'card3'
    },
    {
        image: DireitoConsumidorImg,
        title: 'Direito do consumidor',
        text: 'Priorizamos a proteção dos interesses dos consumidores em diversas situações, garantindo que suas necessidades sejam devidamente atendidas.',
        direction: 'right',
        nameClass: 'card4'
    },
    {
        image: RecJudicialFalenciaImg,
        title: 'Recuperação judicial e falência',
        text: 'Fornecemos suporte a empresas em dificuldades financeiras, auxiliando na recuperação e buscando soluções práticas.',
        direction: 'left',
        nameClass: 'card5'
    },
    {
        image: DireitoCivilImg,
        title: 'Direito civil',
        text: 'No Direito Civil, oferecemos orientação especializada e soluções abrangentes para proteger os interesses de nossos clientes.',
        direction: 'right',
        nameClass: 'card6'
    },
]

export const DatasFieldPageDesktop: IDatasFirstWorkDesktop = {
    icon: BlackHammer,
    iconActualItem: WhiteHammer,
    bgImage: BgImage,
    cards: [
        {
            id: 0,
            image: DireitoTrabalhistaImg,
            title: 'Direito trabalhista',
            text: 'Oferecemos serviços jurídicos abrangentes para empregadores e empregados, protegendo seus direitos e interesses por meio de soluções especializadas e eficazes.',
            showContent: false
        },
        {
            id: 1,
            image: FullServiceImg,
            title: 'Full Service',
            text: 'Oferecemos uma variedade abrangente de serviços jurídicos para atender às diversas necessidades de nossos clientes em diversas áreas do direito',
            showContent: true
        },
        {
            id: 2,
            image: DireitoFamiliaImg,
            title: 'Direito da família',
            text: 'Fornecemos assistência jurídica em questões de direito da família, incluindo divórcio e custódia de filhos, para apoiar você em momentos delicados.',
            showContent: false
        },
        {
            id: 3,
            image: DireitoConsumidorImg,
            title: 'Direito do consumidor',
            // text: 'Priorizamos a proteção dos interesses dos consumidores em várias situações, assegurando que suas necessidades sejam atendidas.',
            text: 'Nosso foco é proteger os interesses dos consumidores em várias situações, garantindo atendimento eficaz.',
            showContent: false
        },
        {
            id: 4,
            image: RecJudicialFalenciaImg,
            title: 'Recuperação judicial e falência',
            text: 'Fornecemos suporte a empresas em dificuldades financeiras, auxiliando na recuperação e buscando soluções práticas.',
            showContent: false
        },
        {
            id: 5,
            image: DireitoCivilImg,
            title: 'Direito civil',
            text: 'No Direito Civil, oferecemos orientação especializada e soluções abrangentes para proteger os interesses de nossos clientes.',
            showContent: false
        },
    ]
}