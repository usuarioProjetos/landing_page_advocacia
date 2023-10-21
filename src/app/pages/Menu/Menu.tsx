"use client"
import Image from 'next/image'
import './Menu.css'
import { DatasMenu } from '@/app/datas/Menu'
import { useRef, useEffect, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'

interface Props {
    showMenu: boolean
}

export const Menu = ({ showMenu }: Props) => {
    console.log(showMenu);
    
    return (
        <>
            {showMenu && (
                <motion.section 
                    className='menu'
                    // initial={{ display: 'none', height: 0, opacity: 1, borderBottomLeftRadius: "30%", borderBottomRightRadius: "30%",  }}
                    animate={{  display: 'block', height: "100vh", opacity: 1, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
                    transition={{ duration: .5 }}
                    exit={{
                        height: 0,
                        // width: 0,
                        opacity: 0.2,
                        borderBottomLeftRadius: "10%",
                        borderBottomRightRadius: "10%",
                        transition: {
                            ease: "easeInOut",
                            duration: .5,
                            delay: .5
                        }
                    }}
                >
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
                </motion.section>
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