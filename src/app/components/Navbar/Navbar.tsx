"use client"
import Image from 'next/image'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import { BurguerMenu } from '../BurguerMenu/BurguerMenu'
import { useState, useEffect, useRef } from 'react'
import { Menu } from '@/app/pages/Menu/Menu'
import Link from 'next/link'

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
                    src={Logo}
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