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
    titleSection: 'Porque a Cevithereza?',
    paragraphSection: 'Colaborar com nossa equipe de especialistas oferece inúmeras vantagens, incluindo:',
    cards: [
        {
            id: 0,
            icon: CertificateIcon,
            title: 'Experiência e Expertise',
            text: 'Nossa experiente equipe é especializada em resolver questões legais complexas, comprovando nosso histórico de sucesso.',
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
            text: 'Nossa firma jurídica valoriza ética, integridade e confidencialidade na relação cliente-advogado',
        },
        // {
        //     id: 0,
        //     icon: Icon1,
        //     title: 'Experiência e Expertise',
        //     text: 'Nossa experiente equipe é especializada em resolver questões legais complexas, comprovando nosso histórico de sucesso.',
        // },
        {
            id: 3,
            icon: ClockIcon,
            title: 'Suporte Pós-Resolução',
            text: 'Nossa assistência não termina na resolução. Estamos aqui para apoiá-lo após o encerramento do caso, garantindo sua satisfação contínua. ',
        }
    ]
}