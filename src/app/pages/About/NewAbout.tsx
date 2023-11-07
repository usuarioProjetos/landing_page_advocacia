"use client"
import { Title } from '@/app/components/Title/Title'
import './NewAbout.css'
import Image from 'next/image'
import { DatasAbout as datas } from '@/app/datas/NewAbout'

export const NewAbout = () => {
    return (
        <section className="newAbout">
            <Title
                text='Sobre'
                widthSquare='90%'
            />

            <article className="allCards">
                {datas.map(card => (
                    <div key={card.id} className={`card card${card.id}`}>
                        <div 
                            className={`bgCardAbout bgCardAbout${card.id}`} 
                        />

                        <div className="contentImage">
                            <div className="divImage">
                                {/* <Image
                                    src={card.image}
                                    alt=''
                                /> */}
                            </div>
                        </div>

                        <div className="contentTexts">
                            <h4>{card.title}</h4>
                            <p>{card.text}</p>
                            {card.socialMedias && (
                                <div className="socialMedias">
                                    {card.socialMedias.map(media => (
                                        <div className="socialMedia" key={card.id}>
                                            <Image 
                                                src={media.icon}
                                                alt=''
                                            />
                                            <p>{media.name}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </article>

        </section>
    )
}

{/* <section className="newAbout">
    <Title>

    </Title>

    <div className="allCards">
        <div className="card">
            <div className="contentImage">
                <Image>

                </Image>
            </div>
            <div className="contentTexts">
                <h4></h4>
                <p></p>
                <div className="socialMedias">
                    <div className="socialMedia">
                        <Icon></Icon>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section> */}