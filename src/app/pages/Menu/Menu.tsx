"use client"
import Image from 'next/image'
import './Menu.css'
import { DatasMenu } from '@/app/datas/Menu'
import { SetStateAction } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { variantsAnimationLogoMenu, variantsAnimationMenu } from '@/app/animations/Menu'

interface Props {
    showMenu: boolean,
    setShowMenu: React.Dispatch<SetStateAction<boolean>>
}

export const Menu = ({ showMenu = false, setShowMenu }: Props) => {

    const handleClick = (e: React.MouseEvent, targetId: string) => {
        e.preventDefault();
    
        setTimeout(() => {
          const targetElement = document.getElementById(targetId);
    
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 100,
              behavior: 'smooth',
            });
          }
        }, 800);
      };
    
    return (
        <>
            
                <motion.section 
                    className='menu'
                    variants={variantsAnimationMenu}
                    animate={showMenu ? "animate" : "exit"}
                >
                    <article className="contentMenu">
                        <ul className="listMenu">
                            {DatasMenu.items.map(itemMenu => (
                                <motion.li 
                                    className={`itemMenu itemMenu${itemMenu.id}`} 
                                    key={itemMenu.id}
                                    animate={showMenu ? {
                                        opacity: 1,
                                        x: 0, 
                                        type: 'tween',
                                        transition: {
                                            delay: itemMenu.delayEnter,
                                            duration: .3
                                        }
                                    } : {
                                        opacity: 0,
                                        x: -50, 
                                        type: 'tween',
                                        transition: {
                                            delay: itemMenu.delayExit,
                                            duration: .3
                                        }
                                    }}
                                >
                                    <Link 
                                        href={`#${itemMenu.to}`}
                                        onClick={(e) => {
                                            setShowMenu(false)
                                           handleClick(e, itemMenu.to)
                                        }}
                                    >
                                        {itemMenu.itemList}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </article>
                    <motion.div 
                        className="contentLogo"
                        variants={variantsAnimationLogoMenu}
                        initial={"initial"}
                        animate={showMenu ? "animate" : "exit"}
                    >
                        <Image 
                            src={DatasMenu.logo}
                            alt='Logo Cevithereza Paiva'
                        />
                        <p className='companyName'>cevithereza paiva <br /> advocacia</p>
                    </motion.div>
                </motion.section>
            
        </>
    )
}
