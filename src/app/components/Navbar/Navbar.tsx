import Image from 'next/image'
import './Navbar.css'

import Logo from '../../assets/logo.png'
import { BurguerMenu } from '../BurguerMenu/BurguerMenu'

export const Navbar = () => {
    return (
        <header>
            <Image
                src={Logo}
                alt="Logo da empresa"
            />
            <BurguerMenu />
        </header>
    )
}