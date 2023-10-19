"use client"
import { Title } from '@/app/components/Title/Title'
import { DatasFieldWorkMobile, DatasFieldPageDesktop } from '@/app/datas/FieldWork'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion, AnimatePresence  } from 'framer-motion'

import './FieldWork.css'
import { useEffect, useState } from 'react'

export const FieldWork = () => {  
    const [currentItem, setCurrentItem] = useState<number>(0);
    const [previousItem, setPreviousItem] = useState<number | null>(null);
    const [nextItem, setNextItem] = useState<number | null>(1);
    const [directionAnimationCard, setDirectionAnimationCard] = useState({
        right: false,
        left: false
    })
  
    // Atualize os estados quando o índice do item atual mudar
    useEffect(() => {
        setPreviousItem(currentItem > 0 ? currentItem - 1 : null)
        setNextItem(currentItem === DatasFieldPageDesktop.cards.length - 1 ? null : currentItem + 1)
    }, [currentItem, DatasFieldPageDesktop.cards]);
  
    // Função para ir para o próximo item
    const goToNextItem = () => {
      if (currentItem < DatasFieldPageDesktop.cards.length - 1) {
        setDirectionAnimationCard(prev => {
            const newDirections = {
                left: true,
                right: false
            }
            return {...newDirections}
        })

        setCurrentItem(currentItem + 1);
      }
    };
  
    // Função para voltar para o item anterior
    const goToPreviousItem = () => {
      if (currentItem > 0) {
        setDirectionAnimationCard(prev => {
            const newDirections = {
                left: false,
                right: true
            }
            return {...newDirections}
        })

        setCurrentItem(currentItem - 1);
      }
    };
    return (
        <section className='fieldWork'>
            <div className='mobileVersion'> 
                <Title
                    text='Área de atuação'
                    widthSquare='80%'
                />
                
                <article className="allCards">
                    {DatasFieldWorkMobile.map(card => (
                        <div className={`card ${card.nameClass}`}>
                            <div 
                                className="texts"
                                style={{ 
                                    textAlign: card.direction === 'left' ? 'start' : 'end',
                                    paddingInline: card.direction === 'left' ? '2em .4em' : '.4em 2em',
                                }}
                            >
                                <h3>{card.title}</h3>
                                <div 
                                    className='divParagraph'
                                    style={{ flexDirection: card.direction === 'left' ? 'row' : 'row-reverse' }}
                                >
                                    <div 
                                        className="lineParagraph"
                                        style={ card.direction === 'left' ? {
                                            left: '8px'
                                        } : {
                                            right: '8px'
                                        }} 
                                    ></div>
                                    <p>{card.text}</p>
                                </div>
                            </div>
                            <div className="squares">
                                <div className="bgSquare"
                                    style={ card.direction === 'left' ? 
                                    { borderBottomRightRadius: '2em', left: '0' } : 
                                    { borderBottomLeftRadius: '2em', right: '0' } }
                                />

                                <div className="image"
                                    style={ card.direction === 'left' ? 
                                    { borderBottomRightRadius: '2em', borderTopLeftRadius: '1.5em' } : 
                                    { borderTopRightRadius: '1.5em', borderBottomLeftRadius: '2em' } }
                                >
                                    <Image src={card.image} alt='' />
                                </div>
                            </div>
                            <div 
                                className="lines"
                                style={{
                                    justifyContent: card.direction === 'left' ? 'end' : 'start' 
                                }}    
                            >
                                <div className="bottomLine"
                                    style={ card.direction === 'left' ? 
                                    { marginLeft: '2em', borderLeft: '2px solid #fff', borderBottomLeftRadius: '2em' } : 
                                    { marginRight: '2em', borderRight: '2px solid #fff', borderBottomRightRadius: '2em' } }
                                />
                            </div>
                        </div>
                    ))}
                </article>
            </div>

            <div className="desktopVersion">
                <Title
                    text='Área de atuação'
                    widthSquare='80%'
                />

                <article className="containerCards">
                    
                </article>
                
            </div>
        </section>  

    )
}
