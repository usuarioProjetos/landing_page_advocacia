import { IDatasBecauseWe } from "../interfaces/BecauseWe/BecauseWe"

import Icon1 from '../assets/svg/undraw_certificate.svg'
import Icon2 from '../assets/svg/undraw_services.svg'
import Icon3 from '../assets/svg/undraw_security.svg'
import Icon4 from '../assets/svg/undraw_clock.svg'

export const DatasBecauseWe: IDatasBecauseWe = {
    titleSection: 'Porque a Cevithereza?',
    paragraphSection: 'Colaborar com nossa equipe de especialistas oferece inúmeras vantagens, incluindo:',
    cards: [
        {
            id: 0,
            icon: Icon1,
            title: 'Experiência e Expertise',
            text: 'Nossa experiente equipe é especializada em resolver questões legais complexas, comprovando nosso histórico de sucesso.',
        },
        {
            id: 1,
            icon: Icon2,
            title: 'Atendimento Personalizado',
            text: 'Fornecemos atendimento personalizado, compreendendo suas necessidades específicas e assegurando que você se sinta bem assistido ao longo de todo o processo legal.',
        },
        {
            id: 2,
            icon: Icon3,
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
            icon: Icon4,
            title: 'Suporte Pós-Resolução',
            text: 'Nossa assistência não termina na resolução. Estamos aqui para apoiá-lo após o encerramento do caso, garantindo sua satisfação contínua. ',
        }
    ]
}