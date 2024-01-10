"use client"
// Style
import './About.css'
// Next / React
import Image from "next/image"
// Datas
import { DatasAbout as datas } from "@/app/datas/About"
// Components
import { Title } from "@/app/components/Title/Title"
// Framer-motion
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export const About = () => {
    const cardRefs = datas.cardsAbout.map(() => {
        const [ref, inView] = useInView({
            triggerOnce: false,
            threshold: 0.6,
        });
        return { ref, inView };
    });

    return (
        <section 
            className="about" 
            id='about'
        >
            <div className="divTitleMobile">
                <Title
                    text={datas.title}
                    square={false}
                    widthSquare='0'
                    key={datas.title}
                />
            </div>
            <div className="divTitleDesktop">
                <Title
                    text={datas.title}
                    widthSquare="80%"
                    key={datas.title}
                />
            </div>
            
            <article className="allInfosAbout">
                {datas.cardsAbout.map(item => (
                    <div
                        ref={cardRefs[item.id].ref} 
                        className={`infoAboutCard ${item.id % 2 === 0 ? 'even' : 'odd'}`} 
                        key={item.id}
                    >
                        {item.firstElement ? (
                            <>
                                <div className="bgItemAbout firstElementAbout" />
                                <div className="bgItemAbout firstElementAboutShadow" />
                            </>
                        ) : (
                            <>
                                <div className="bgItemAbout globalElements" />
                            </>
                        )}

                        <motion.div 
                            className={`divContentImage divContentImage${item.id}`}
                            initial={item.id % 2 === 0 ? 
                                { x: -40, opacity: 0 } : 
                                { x: 40, opacity: 0 }
                            }
                            animate={cardRefs[item.id].inView ? 
                                { x: 0, opacity: 1, transition: { ease: 'easeOut' } } : 
                                {}
                            }
                        >
                            <div className="divImage">
                                <Image 
                                    src={item.image}
                                    alt=""
                                />
                            </div>
                        </motion.div>

                        <motion.div 
                            className="contentTexts"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={cardRefs[item.id].inView ? 
                                { scale: 1, opacity: 1, transition: { ease: 'easeOut' } } : 
                                {}
                            }
                        >
                            <h3>{item.title}</h3>
                            {item.id === 3 ? (
                                <> 
                                    <p className="textMobile">
                                        {item.textMobile.split('__')[0]}
                                        <a target="_blank" href={item.textMobile.split('__')[1]}>
                                            {item.textMobile.split('__')[1]}
                                        </a>
                                    </p>
                                    <p className="textDesktop">
                                        {item.textDesktop.split('__')[0]}
                                        <a target="_blank" href={item.textDesktop.split('__')[1]}>
                                            {item.textDesktop.split('__')[1]}
                                        </a>
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p className="textMobile">{item.textMobile}</p>
                                    <p className="textDesktop">{item.textDesktop}</p>
                                </>
                            )}
                            {item.socialMedias && (
                                <div className="socialMedias">
                                    {item.socialMedias.map(media => (
                                        <a href={media.to} target='_blank' className="media" key={media.to}>
                                            <media.Icon />
                                        </a>
                                    ))}
                                </div>
                            )}
                            <div className="borderComponent" />
                        </motion.div>

                    </div>
                ))}
            </article>
        </section>
    )
}

