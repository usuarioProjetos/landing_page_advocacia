"use client"
// Style
import './FieldWork.css'
// Next/React
import Image from 'next/image'
import { useEffect, useState } from 'react'
// Components
import { Title } from '@/app/components/Title/Title'
import { CarouselDesktop } from './Desktop/CarouselDesktop'
import { MobileFieldWork } from './Mobile/MobileFieldWork'
// Datas
import { DatasFieldPageDesktop } from '@/app/datas/FieldWork'
// Framer-motion
import { motion } from 'framer-motion'

export const FieldWork = () => {  
    const [currentItem, setCurrentItem] = useState<number>(0);
    const [previousItem, setPreviousItem] = useState<number | null>(null);
    const [nextItem, setNextItem] = useState<number | null>(1);
  
    useEffect(() => {
        setPreviousItem(currentItem > 0 ? currentItem - 1 : null)
        setNextItem(currentItem === DatasFieldPageDesktop.cards.length - 1 ? null : currentItem + 1)
    }, [currentItem, DatasFieldPageDesktop.cards]);

    return (
        <section
            className='fieldWork'
            id='fieldWork'
        >
            <div className='mobileVersion'> 
                <MobileFieldWork />
            </div>

            <div className="desktopVersion">
                <div className="bgSvg">
                    <Image src={DatasFieldPageDesktop.bgImage} alt='Fundo do carroussel' />
                </div>

                <Title
                    text='Áreas de atuação'
                    widthSquare='80%'
                />

                <article className="containerCards">
                    <CarouselDesktop />
                </article>
            </div>
        </section>  

    )
}