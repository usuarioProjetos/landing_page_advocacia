import { Title } from '@/app/components/Title/Title'
import './BecauseWe.css'
import { DatasBecauseWe as datas } from '@/app/datas/BecauseWe'

export const BecauseWe = () => {
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
                    <div className={`card card${card.id} ${card.id % 2 === 0 ? 'even' : 'odd'}`} key={card.id}>
                        
                        <div className={`iconDiv iconDiv${card.id}`}>
                            <img src={card.icon.src} alt="" />
                        </div>
                        <div className="textsCards">
                            <h3 className='titleCard'>{card.title}</h3>
                            <p className='paragraphCard'>{card.text}</p>
                        </div>
                       
                    </div>
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