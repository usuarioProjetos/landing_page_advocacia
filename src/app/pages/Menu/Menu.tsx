"use client"
import Image from 'next/image'
import './Menu.css'
import { DatasMenu, delayAnimationExit } from '@/app/datas/Menu'
import { useRef, useEffect, useLayoutEffect, SetStateAction } from 'react'
import { Variants, motion } from 'framer-motion'
import Link from 'next/link'

interface Props {
    showMenu: boolean,
    setShowMenu: React.Dispatch<SetStateAction<boolean>>
}

export const Menu = ({ showMenu = false, setShowMenu }: Props) => {
    console.log(showMenu);

    const variantsAnimationMenu: Variants = {
        animate: {
            opacity: 1,
            height: "100vh",
            borderBottomLeftRadius: 0, 
            borderBottomRightRadius: 0,
            transition: {
                duration: .5
            }
        },
        exit: {
            height: 0,
            opacity: 0,
            borderBottomLeftRadius: "10%",
            borderBottomRightRadius: "10%",
            transition: {
                delay: parseFloat(`0.${DatasMenu.items.length}`) + .1,
                duration: .5,
            },
        }
    }

    const variantsAnimationLogoMenu: Variants = {
        initial: {
            y: 50, 
            opacity: 0,
        },
        animate: {
            y: 0, 
            opacity: 1, 
            type: 'tween',
            transition: {
                delay: 1
            }
        },
        exit: {
            y: 50, 
            opacity: 0, 
            type: 'tween',
            transition: {
                delay: 0
            },
        }
    }

    const handleClick = (e: React.MouseEvent, targetId: string) => {
        e.preventDefault();
    
        // Aguarda o tempo de delay antes de rolar para a seção desejada
        setTimeout(() => {
          const targetElement = document.getElementById(targetId);
    
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop,
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
                    // style={showMenu ? { minHeight: '500px' } : {}}
                >
                    <article className="contentMenu">
                        <ul className="listMenu"
                            // style={showMenu ? { minHeight: '400px' } : {}}
                        >
                            {DatasMenu.items.map(itemMenu => (
                                <motion.li 
                                    className={`itemMenu itemMenu${itemMenu.id}`} 
                                    key={itemMenu.id}
                                    // variants={variantsAnimationTexts}
                                    // initial={{
                                    //     x: -50
                                    // }}
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
                        // style={showMenu ? { minHeight: '100px' } : {}}
                    >
                        <Image 
                            src={DatasMenu.logo}
                            alt='Logo Chevitereza Paiva'
                        />
                        <p className='companyName'>chevitereza paiva <br /> advocacia</p>
                    </motion.div>
                </motion.section>
            
        </>
    )
}
