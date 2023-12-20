import { 
    ProfessionalExample,
    HistoriaCompetencias,
    FormacaoAcademica,
    CriptoMoedas
} from "../assets/about/imagesAbout"

import { 
    BsInstagram, 
    BsFacebook, 
    BsWhatsapp 
} from 'react-icons/bs'

import { ICardAbout } from "../interfaces/About/About"

export const DatasAbout: ICardAbout[] = [
    {
        id: 0,
        image: ProfessionalExample,
        title: 'Frederico Chevithereza Paiva',
        textMobile: 'Frederico Cevithereza Paiva, advogado formado pela Universidade Presbiteriana Mackenzie, com mais de 8 anos de experiência em processos cíveis, recuperação judicial, falência, contratos e pareceres na Cevithereza Paiva Advocacia.',
        textDesktop: 'O sócio do Cevithereza Paiva Advocacia, Frederico Cevithereza Paiva, formou-se em Direito pela Universidade Presbiteriana Mackenzie, atuando em renomados escritórios de advocacia por mais de 8 anos, com experiência na condução de processos cíveis, recuperação judicial e falência, elaboração de contratos e pareceres.',
        firstElement: true,
        socialMedias: [
            {
                Icon: BsInstagram,
                to: 'insta'
            },
            {
                Icon: BsFacebook,
                to: 'face'
            },
            {
                Icon: BsWhatsapp,
                to: 'wpp'
            }
        ]
    },

    {
        id: 1,
        image: HistoriaCompetencias,
        title: 'História e Competências',
        textMobile: 'Em janeiro de 2022, o sócio inaugurou seu próprio escritório de advocacia (Cevithereza Paiva Advocacia), que oferece uma gama de serviços legais em parceria com escritórios especializados em várias áreas do direito. No primeiro ano de operação, o escritório alcançou sucesso significativo',
        textDesktop: 'Em janeiro de 2022 o sócio colocou em prática um projeto profissional que precedia o seu ingresso à faculdade de direito, abrindo seu próprio escritório full service (Cevithereza Paiva Advocacia), contando com a parceria interdisciplinar de escritórios especializados em direito trabalhista, família, consumidor, LGPD, imobiliário e criminal. Já no primeiro ano de atuação o escritório alcançou sucesso significativo',
    },

    {
        id: 2,
        image: FormacaoAcademica,
        title: 'Formação Acadêmica Complementar',
        textMobile: 'Frederico Cevithereza Paiva Advogado é pós graduado em Recuperação Judicial de Empresas e Falência pela PUCSP; pós graduado em Direito Contratual e em Direito societário (Atos e contratos) pela FGVLAW; pós graduado em Teoria Geral do Direito e o Novo Código de Processo Civil pelo Damásio Educacional.',
        textDesktop: 'Frederico Cevithereza Paiva Advogado é pós graduado em Recuperação Judicial de Empresas e Falência pela PUCSP; pós graduado em Direito Contratual e em Direito societário (Atos e contratos) pela FGVLAW; pós graduado em Teoria Geral do Direito e o Novo Código de Processo Civil pelo Damásio Educacional',
    },

    {
        id: 3,
        image: CriptoMoedas,
        title: 'Explorando Criptoativos e a CPI das Pirâmides',
        textMobile: 'O sócio Frederico, em colaboração com Hugo Maciel(criminalista) e Natanael Oliveira Cruz(tributalista), escreveu um artigo no CONJUR sobre a legalidade dos criptoativos e sua relação com a CPI das \'Pirâmides Financeiras\'. Leia o artigo completo em: __ https://www.conjur.com.br/2023-ago-01/opiniao-cpi-piramides-aspectos-legais-criptos',
        textDesktop: 'O sócio Frederico, em colaboração com Hugo Maciel(criminalista) e Natanael Oliveira Cruz(tributalista), escreveu um artigo no CONJUR sobre a legalidade dos criptoativos e sua relação com a CPI das \'Pirâmides Financeiras\'. Leia o artigo completo em: __ https://www.conjur.com.br/2023-ago-01/opiniao-cpi-piramides-aspectos-legais-criptos',
    
    },
]