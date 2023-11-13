// Next/React
import Image from "next/image"
// Style
import './MobileFieldWork.css'
// Components
import { Title } from "@/app/components/Title/Title"
// Datas
import { DatasFieldWorkMobile as datas } from "@/app/datas/FieldWork"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

export const MobileFieldWork = () => {
    const cardRefs = datas.map(() => {
        const [ref, inView] = useInView({
            triggerOnce: false,
            threshold: 0.4,
        });
        return { ref, inView };
    });

    return (
        <>
            <Title
                text='Áreas de atuação'
                widthSquare='80%'
                square={false}
            />
            
            <article className="allCards">
                {datas.map((card, i) => (
                    <motion.div 
                        ref={cardRefs[i].ref}
                        key={card.title} 
                        className={`card ${card.nameClass}`}
                        
                    >
                        <div 
                            className="texts"
                            style={{ 
                                textAlign: card.direction === 'left' ? 'start' : 'end',
                                paddingInline: card.direction === 'left' ? '2em .4em' : '.4em 2em',
                            }}
                        >
                            <motion.h3
                                initial={{ y: -40, opacity: 0 } }
                                animate={cardRefs[i].inView ? 
                                    { y: 0, opacity: 1, transition: { ease: 'easeOut' } } : 
                                    {}
                                }
                            >
                                {card.title}
                            </motion.h3>
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
                                <motion.p
                                    initial={card.direction === 'left' ? 
                                        { x: 40, opacity: 0 } : 
                                        { x: -40, opacity: 0 }
                                    }
                                    animate={cardRefs[i].inView ? 
                                        { x: 0, opacity: 1, type: 'tween', transition: { ease: 'easeOut' } } : 
                                        {}
                                    }
                                >
                                    {card.text}
                                </motion.p>
                            </div>
                        </div>
                        <div className="squares">
                            <div 
                                className={`bgSquare bgSquare${i}`}
                                style={ card.direction === 'left' ? 
                                { 
                                    clipPath: 'polygon(22% 2%, 50% 6%, 100% 6%, 100% 91%, 24% 91%, 0 94%, 0 8%)',
                                    WebkitClipPath: 'polygon(22% 2%, 50% 6%, 100% 6%, 100% 91%, 24% 91%, 0 94%, 0 8%)'
                                } : 
                                {  
                                    clipPath: 'polygon(46% 6%, 78% 2%, 100% 13%, 100% 91%, 24% 91%, 0 94%, 0 6%)',
                                    WebkitClipPath: 'polygon(46% 6%, 78% 2%, 100% 13%, 100% 91%, 24% 91%, 0 94%, 0 6%)'
                                }}
                            />
                            <div 
                                className={`bgSquare bgSquareShadow bgSquareShadow${i}`}
                                style={ card.direction === 'left' ? 
                                { 
                                    clipPath: 'polygon(22% 2%, 50% 6%, 100% 6%, 100% 91%, 24% 91%, 0 94%, 0 8%)',
                                    WebkitClipPath: 'polygon(22% 2%, 50% 6%, 100% 6%, 100% 91%, 24% 91%, 0 94%, 0 8%)'
                                } : 
                                {  
                                    clipPath: 'polygon(46% 6%, 78% 2%, 100% 13%, 100% 91%, 24% 91%, 0 94%, 0 6%)',
                                    WebkitClipPath: 'polygon(46% 6%, 78% 2%, 100% 13%, 100% 91%, 24% 91%, 0 94%, 0 6%)'
                                }}
                            />

                            <motion.div
                                initial={{ opacity: 0.1 }}
                                animate={cardRefs[i].inView ? 
                                    { opacity: 1, type: 'tween' } : 
                                    {}
                                }
                                className="image"
                                style={ card.direction === 'left' ? 
                                { borderBottomRightRadius: '2em', borderTopLeftRadius: '1.5em' } : 
                                { borderTopRightRadius: '1.5em', borderBottomLeftRadius: '2em' } }
                            >
                                <Image src={card.image} alt='' />
                            </motion.div>
                        </div>
                        <div 
                            className="lines"
                            style={{
                                justifyContent: card.direction === 'left' ? 'end' : 'start' 
                            }}    
                        >
                            <div className="bottomLine"
                                style={ card.direction === 'left' ? 
                                { marginLeft: '3rem', borderLeft: '2px solid #022521', borderBottomLeftRadius: '2em' } : 
                                { marginRight: '3rem', borderRight: '2px solid #022521', borderBottomRightRadius: '2em' } }
                            />
                        </div>
                    </motion.div>
                ))}
            </article>
        </>
    )
}