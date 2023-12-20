"use client"
import Image from 'next/image'
import './Navbar.css'
import { BurguerMenu } from '../BurguerMenu/BurguerMenu'
import { useState, useEffect } from 'react'
import { Menu } from '@/app/pages/Menu/Menu'
import { LogoImage } from '@/app/assets/logo/imagesLogo'

export const Navbar = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    useEffect(() => { 
        setShowMenu(false)
    }, [])

    return (
        <header>
            <a
                href='#home'
            >
                <Image
                    src={LogoImage}
                    alt="Logo da empresa"
                />
            </a>
            <BurguerMenu 
                showMenu={showMenu}
                setShowMenu={setShowMenu}
            />
            
            <Menu 
                showMenu={showMenu}
                setShowMenu={setShowMenu}
            />
            
        </header>
    )
}