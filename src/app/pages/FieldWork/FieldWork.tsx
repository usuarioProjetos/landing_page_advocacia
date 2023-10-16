import { Title } from '@/app/components/Title/Title'
import './FieldWork.css'
import { DatasFieldWork } from '@/app/datas/FieldWork'
import Image from 'next/image'

export const FieldWork = () => {
    return (
        <section className='fieldWorkMobile'> 
            <Title
                text='Área de atuação'
                widthSquare='80%'
            />
            
            <article className="allCards">
                {DatasFieldWork.map(card => (
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
        </section>  

    )
}
