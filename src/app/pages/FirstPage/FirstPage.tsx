"use client"
import { DatasFirstPage, ImagesFirstPage } from '@/app/datas/FirstPage'
import Arrow from '../../assets/arrow.png'
import { IoIosArrowDown } from 'react-icons/io'
import './FirstPage.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export const FirstPage = () => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

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
        <section className="firstPage">

            <AnimatePresence>
                <motion.div 
                    // key={activeImageIndex}
                    // initial={{ opacity: 0, x: '-100%' }}
                    // animate={{ opacity: 1, x: '0%' }}
                    // exit={{ opacity: 0, x: '100%' }}
                    // transition={{ duration: 1 }}
                    className="divImageBg"
                >
                    <Image 
                        src={ImagesFirstPage[activeImageIndex].path}
                        alt='Imagem de fundo'
                    />
                </motion.div>
            </AnimatePresence>

            <div className="content">

                <h1>{DatasFirstPage.title}</h1>
                <div className="btns">
                    {DatasFirstPage.btns.map((btn, i) => (
                        <div key={i} className={`btn ${btn.nameClass}`}>
                            <button>
                                {btn.text}
                            </button>
                        </div>
                    ))}
                </div>

            </div>

            <div className="scroll-arrow">
                <a href="#">
                    <Image 
                        src={Arrow}
                        alt='Seta de scroll'
                    />
                </a>
            </div>

        </section>
    )
}