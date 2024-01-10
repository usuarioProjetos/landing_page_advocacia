"use client"
// CSS
import './FirstPage.css'
// Datas
import { DatasFirstPage, ImagesFirstPage } from '@/app/datas/FirstPage'
// Next / React
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// Framer-motion
import { AnimatePresence, motion } from 'framer-motion'

export const FirstPage = () => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [loadingPage, setLoadingPage] = useState(true)

    useEffect(() => {
        setLoadingPage(false)
    }, [])

    useEffect(() => {

        const interval = setInterval(() => {
          const nextIndex = (activeImageIndex + 1) % ImagesFirstPage.length;
          setActiveImageIndex(nextIndex);
        }, 5000);
    
        return () => {
          clearInterval(interval);
        };
      }, [activeImageIndex]);

    return (
        <section className="firstPage" id='home'>

            <AnimatePresence>
                <motion.div 
                    key={activeImageIndex}
                    className="divImageBg"
                >
                    <motion.img 
                        initial={loadingPage ? { opacity: 1 } : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        
                        src={ImagesFirstPage[activeImageIndex].path.src}
                        alt='Imagem de fundo'
                    />
                </motion.div>
            </AnimatePresence>

            <div className="content">

                <h1>{DatasFirstPage.title}</h1>
                <div className="btns">
                    {DatasFirstPage.btns.map((btn, i) => (
                        <div key={i} className={`btn ${btn.nameClass}`}>
                            <a href={`#${btn.to}`}>
                                <button>
                                    {btn.text}
                                </button>
                            </a>
                        </div>
                    ))}
                </div>

            </div>

            <div className="scroll-arrow">
                <Link href="#fieldWork">
                    <Image 
                        src={DatasFirstPage.arrow}
                        alt='Seta de scroll'
                    />
                </Link>
            </div>

        </section>
    )
}