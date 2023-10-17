"use client"
import Image from 'next/image'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import { BurguerMenu } from '../BurguerMenu/BurguerMenu'
import { useState, useEffect, useRef } from 'react'
import { Menu } from '@/app/pages/Menu/Menu'

export const Navbar = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    useEffect(() => { 
        setShowMenu(false)
    }, [])

    return (
        <header>
            <Image
                src={Logo}
                alt="Logo da empresa"
            />
            <BurguerMenu 
                showMenu={showMenu}
                setShowMenu={setShowMenu}
            />
            
            <Menu 
                showMenu={showMenu}
            />
            
        </header>
    )
}