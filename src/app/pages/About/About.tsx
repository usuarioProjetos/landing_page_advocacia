import { Title } from '@/app/components/Title/Title'
import './About.css'
import { DatasProfessionals } from '@/app/datas/About'
import Image from 'next/image'

export const About = () => {
    return (
        <section className="professionalsPage">
            <Title 
                text='Sobre'
                widthSquare='80%'
                
            />

            <article className="cardProfessionals">
                {DatasProfessionals.map(professional => (
                    <div className='aggregateContent'>
                        <div className="cardProfessional">
                            
                                <div className="divImage">
                                    <Image
                                        src={professional.img}
                                        alt='Foto do profissional'
                                    />
                                </div>

                                <div className="content-text">
                                    <h3>{professional.name}</h3>
                                    <p>{professional.text}</p>
                                    <div className="borderComponent"></div>         
                                </div>
                        </div>
                        <div className="geometryFormBackground"></div>
                    </div>
                ))}
            </article>
        </section>
    )
}

{/* <section>
    <Title />

    <article>
        <div className="card">
            <div className="divImage"></div>

            <div className="content-text">
                <h3></h3>
                <p></p>
            </div>

            <div className="borderComponent"></div>
        </div>
    </article>
</section> */}