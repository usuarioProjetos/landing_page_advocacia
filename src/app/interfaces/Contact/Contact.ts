import LogoImage from '../../assets/logo.png'

export interface IDatasInput {
    nameField: string
    type?: string
    name: string
}

export interface IDatasSocialMedia {
    Icon: any
    name: string
    to: string
}
export const Logo = {
    src: LogoImage
}