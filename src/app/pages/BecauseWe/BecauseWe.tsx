"use client"
import { Title } from '@/app/components/Title/Title'
import './BecauseWe.css'
import { DatasBecauseWe as datas } from '@/app/datas/BecauseWe'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const BecauseWe = () => {
    const cardRefs = datas.cards.map(() => {
        const [ref, inView] = useInView({
            triggerOnce: false,
            threshold: 0.6,
        });
        return { ref, inView };
    });

    return (
        <section className="becauseWe">
            <Title 
                text={datas.titleSection}
                widthSquare='85%'
            />

            <div className="contentTexts">
                <div className="componentTexts">
                    <p className='paragraphSection'>{datas.paragraphSection}</p>
                    <div className="topSquare" />
                    <div className="bottomSquare" />
                </div>
            </div>

            <article className="cards">
                {datas.cards.map(card => (
                    <motion.div 
                        ref={cardRefs[card.id].ref}
                        className={`card card${card.id} ${card.id % 2 === 0 ? 'even' : 'odd'}`} key={card.id}
                    >
                        
                        <motion.div 
                            className={`iconDiv iconDiv${card.id}`}
                            initial={{ y: -30, opacity: 0 }}
                            animate={cardRefs[card.id].inView ? { y: 0, opacity: 1 } : {}}
                        >
                            <img src={card.icon.src} alt="" />
                        </motion.div>
                        <motion.div 
                            className="textsCards"
                            initial={{ y: 30, opacity: 0 }}
                            animate={cardRefs[card.id].inView ? { y: 0, opacity: 1 } : {}}
                        >
                            <h3 className='titleCard'>{card.title}</h3>
                            <p className='paragraphCard'>{card.text}</p>
                        </motion.div>
                       
                    </motion.div>
                ))}
            </article>

        </section>
    )
}

{/* <article className="becauseWe">
    <Title>

    </Title>

    <div className="contentTexts">
        <p></p>
        <div></div>
        <div></div>
    </div>

    <div className="cards">
        <div className="card">
            <Icon />
            <h4></h4>
            <p></p>
        </div>
    </div>

</article> */}