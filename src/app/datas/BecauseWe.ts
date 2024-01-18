// Interfaces
import { IDatasBecauseWe } from "../interfaces/BecauseWe/BecauseWe"

// Logo / icons / images 
import { 
    ClockIcon, 
    CertificateIcon,
    SecurityIcon,
    ServicesIcon,
} from "../assets/becauseWe/imagesBecauseWe"


export const DatasBecauseWe: IDatasBecauseWe = {
    titleSection: 'Formas de atuação',
    paragraphSection: 'A atuação integrativa do nosso escritório oferece inúmeras vantagens em diferentes especialidades, incluindo:',
    cards: [
        {
            id: 0,
            icon: CertificateIcon,
            title: 'Experiência e Expertise',
            text: 'Histórico na resolução eficaz de conflitos complexos em diversas áreas do direito, evidenciando sólida competência na abordagem de desafios jurídicos complexos.',
        },
        {
            id: 1,
            icon: ServicesIcon,
            title: 'Atendimento Personalizado',
            text: 'Fornecemos atendimento personalizado, compreendendo suas necessidades específicas e assegurando que você se sinta bem assistido ao longo de todo o processo legal.',
        },
        {
            id: 2,
            icon: SecurityIcon,
            title: 'Compromisso Ético',
            text: 'Valorização da ética e a confidencialidade na relação cliente-advogado.',
        },
        {
            id: 3,
            icon: ClockIcon,
            title: 'Assessoria Jurídica Preventiva',
            text: 'Nosso escritório fornece serviços de consultoria jurídica preventiva, visando a antecipação de potenciais problemas.',
        }
    ]
}