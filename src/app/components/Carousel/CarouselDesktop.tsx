"use client"
import { Title } from '../Title/Title'
import { useEffect, useRef, useState } from 'react'
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti'
import './CarouselDesktop.css'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { SliderCard } from './SliderCard/SliderCard'
import { register } from 'swiper/element/bundle'
register()
import ImageExample from '../../assets/imageExampleFieldWork.png'
import BlackHammer from '../../assets/desk/blackHammer.png'
import WhiteHammer from '../../assets/desk/whiteHammer.png'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import { EffectFade, EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { DatasFieldPageDesktop, ICardFieldWork } from '@/app/datas/FieldWork'
import Vector from '../../assets/svg/Vector 20 (1).svg'

export const CarouselDesktop = () => {
        const [cards, setCards] = useState(DatasFieldPageDesktop.cards)
        const [windowWidth, setWindowWidth] = useState(window.innerWidth);

        useEffect(() => {
            if (typeof window !== 'undefined') {
                setWindowWidth(window.innerWidth);
                const handleResize = () => {
                    setWindowWidth(window.innerWidth);
                };
    
                window.addEventListener('resize', handleResize);
    
                return () => {
                    window.removeEventListener('resize', handleResize);
                };
            }
        }, []);
        const variantsContentTexts: Variants = {
            initial: { opacity: 0, y: -400 },
            animate: {  opacity: 1, y: 0 },
            exit : {
                opacity: 0,
                // display:'none',
                y: -200,
            }
        }
        const variantsTitleItem: Variants = {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
        }

        const variantsTitleContentText: Variants = {
            initial: { opacity: 0, x: -200 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -200 },
        }

        const variantsParagraphContentText: Variants = {
            initial: { opacity: 0, x: 100 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: 100 },
        }
        
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
                {windowWidth > 1200 && (
                    <SwiperSlide className='swiperSliderItem spareElement' />
                )}
                <AnimatePresence>
                    {cards && cards.map(item => (
                        <article className="card" key={item.id}>
                            <SwiperSlide
                                className='swiperSliderItem'
                                onMouseEnter={() => onMouseEnterCard(item)}
                            >
                                <div className="imageDiv">
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
                                    {/* {item.showContent ? (
                                        <Image 
                                            src={DatasFieldPageDesktop.iconActualItem}
                                            alt='Ícone de Martelo'
                                        />
                                    ) : (
                                        <Image 
                                            src={DatasFieldPageDesktop.icon}
                                            alt='Ícone de Martelo'
                                        />
                                    )} */}
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
                                    // exit={"exit"}
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
                                        initial={"initial"}
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
                {windowWidth > 1200 && (
                    <SwiperSlide className='swiperSliderItem spareElement' />
                )}
            </Swiper>
        </section>
    )
}
