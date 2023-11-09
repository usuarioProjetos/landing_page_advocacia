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
                text='Área de atuação'
                widthSquare='80%'
                square={false}
            />
            
            <article className="allCards">
                {datas.map((card, i) => (
                    <motion.div 
                        ref={cardRefs[i].ref}
                        key={card.title} 
                        className={`card ${card.nameClass}`}
                        initial={card.direction === 'left' ? 
                            { x: 200, opacity: 0.05 } : 
                            { x: -200, opacity: 0.05 }
                        }
                        animate={cardRefs[i].inView ? 
                            { x: 0, opacity: 1, type: 'tween' } : 
                            {}
                        }
                    >
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