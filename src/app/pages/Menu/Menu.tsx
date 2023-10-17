"use client"
import Image from 'next/image'
import './Menu.css'
import { DatasMenu } from '@/app/datas/Menu'
import { useRef, useEffect, useLayoutEffect } from 'react'

interface Props {
    showMenu: boolean
}

export const Menu = ({ showMenu }: Props) => {
    console.log(showMenu);
    
    return (
        <>
            {showMenu && (
                <section className='menu'>
                    <article className="contentMenu">
                        <ul className="listMenu">
                            {DatasMenu.items.map((itemMenu, i) => (
                                <li className={`itemMenu itemMenu${itemMenu.id}`} key={i}>
                                    <a href="#">
                                        {itemMenu.itemList}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </article>
                    <div className="contentLogo">
                        <Image 
                            src={DatasMenu.logo}
                            alt='Logo Chevitereza Paiva'
                        />
                        <p className='companyName'>chevitereza paiva <br /> advocacia</p>
                    </div>
                </section>
            )}
        </>
    )
}

{/* <article className="contentMenu">
    <div className="optionsNavigation">
        <ul>
            <li></li>
            ...
        </ul>
    </div>

    <div className="contentLogo">
        <img src="" alt="" />
        <p></p>
    </div>
</article> */}