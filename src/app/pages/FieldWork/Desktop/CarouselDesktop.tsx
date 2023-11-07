"use client"
// Style
import './CarouselDesktop.css'
// Next/React
import Image from 'next/image'
import { useEffect, useState } from 'react'
// Datas
import { DatasFieldPageDesktop } from '@/app/datas/FieldWork'
// Interfaces
import { ICardFieldWork } from '@/app/interfaces/FieldWork/FieldWork'
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
// Framer-motion
import { motion, AnimatePresence } from 'framer-motion'
// Animations
import { 
    variantsTitleItem, 
    variantsContentTexts,
    variantsParagraphContentText,
    variantsTitleContentText
} from '@/app/animations/FieldWork'

export const CarouselDesktop = () => {
        const [cards, setCards] = useState(DatasFieldPageDesktop.cards)
        
        const onMouseEnterCard = (card: ICardFieldWork) => {
            setCards(() => {
                const newValuesCards = [...cards]
                newValuesCards.map(item => {
                    if(item.id === card.id) {
                        item.showContent = true
                    } else {
                        item.showContent = false
                    }
                })
                return newValuesCards
            })
            console.log('Hover')
            
        }

        return (
        <section className="containerCarousel">
            <Swiper
                className='swiperSlider'
                slidesPerView={'auto'}
                spaceBetween={10}
                initialSlide={1}
                centeredSlides={false}
            >
                
                <SwiperSlide style={{ display: 'none' }} className='swiperSliderItem spareElement' />
                
                <AnimatePresence>
                    {cards && cards.map(item => (
                        <article className="card" key={item.id}>
                            <SwiperSlide
                                className='swiperSliderItem'
                                onMouseEnter={() => onMouseEnterCard(item)}
                            >
                                <div className={`imageDiv ${item.showContent === false ? 'opacityImage' : ''}`}>
                                    <Image
                                        src={item.image}
                                        alt=''
                                    />
                                    {item.showContent === false && (
                                        <motion.h4
                                            variants={variantsTitleItem}
                                            initial={"initial"}
                                            animate={item.showContent ? "exit" : "animate"}
                                            transition={{
                                                duration: .5
                                            }}
                                        >
                                            {item.title}
                                        </motion.h4>
                                    )}
                                </div>

                                <div className="iconImageDiv"
                                    style={{
                                        backgroundColor: item.showContent ? '#fff' : '#007163'
                                    }}
                                >
                                    <Image 
                                        src={DatasFieldPageDesktop.icon}
                                        alt='Ícone de Martelo'
                                    />
                                </div>
                                

                                <motion.div 
                                    key={item.id}
                                    variants={variantsContentTexts}
                                    className="contentTexts" 
                                    initial={"initial"}
                                    animate={item.showContent ? "animate" : "exit"}
                                    transition={{
                                        type:' tween'
                                    }}
                                >
                                    <motion.h3
                                        variants={variantsTitleContentText}
                                        initial={"initial"}
                                        animate={item.showContent ? "animate" : "exit"}
                                        transition={{
                                            type:' tween',
                                            duration: .7
                                        }}
                                    >{item.title}</motion.h3>
                                    <motion.p
                                        variants={variantsParagraphContentText}
                                        // initial={"initial"}
                                        animate={item.showContent ? "animate" : "exit"}
                                        transition={{
                                            type:' tween',
                                            duration: .7
                                        }}
                                    >{item.text}</motion.p>
                                </motion.div>
                                
                            </SwiperSlide>
                        </article>
                    ))}
                </AnimatePresence>
                <SwiperSlide style={{ display: 'none' }} className='swiperSliderItem spareElement' />
            </Swiper>
        </section>
    )
}
