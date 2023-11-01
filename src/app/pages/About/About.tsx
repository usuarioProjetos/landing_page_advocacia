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
                {DatasProfessionals.map((professional, i) => (
                    <div className={`aggregateContent aggregateContent${i}`}>
                        <div className="cardProfessional">
                            
                                <div className={`spanDivImage spanDivImage${i}`}>
                                    <div className={`divImage divImage${i}`}>
                                        {/* <Image
                                            src={professional.img}
                                            alt='Foto do profissional'
                                        /> */}
                                    </div>
                                </div>
                                <div className="content-text">
                                    <h3>{professional.name}</h3>
                                    <p>{professional.text}</p>
                                    <div className="borderComponent"></div>         
                                </div>
                        </div>
                        <div className={`geometryFormBackground ${i === 0 ? 'firstBgGeometry' : 'globalBgGeometry'} geometryFormBackground${i}`}></div>
                        {i === 0 && (
                            <div className="geometryFormBackground geometryFormBackgroundShadow firstBgGeometry"></div>
                        )}
                    </div>
                ))}
            </article>
        </section>
    )
}











// Backup
// import { Title } from '@/app/components/Title/Title'
// import './About.css'
// import { DatasProfessionals } from '@/app/datas/About'
// import Image from 'next/image'

// export const About = () => {
//     return (
//         <section className="professionalsPage">
//             <Title 
//                 text='Sobre'
//                 widthSquare='80%'
                
//             />

//             <article className="cardProfessionals">
//                 {DatasProfessionals.map((professional, i) => (
//                     <div className={`aggregateContent aggregateContent${i}`}>
//                         <div className="cardProfessional">
                            
                                
//                                 <div className={`divImage divImage${i}`}>
//                                     {/* <Image
//                                         src={professional.img}
//                                         alt='Foto do profissional'
//                                     /> */}
//                                 </div>

//                                 <div className="content-text">
//                                     <h3>{professional.name}</h3>
//                                     <p>{professional.text}</p>
//                                     <div className="borderComponent"></div>         
//                                 </div>
//                         </div>
//                         <div className={`geometryFormBackground ${i === 0 ? 'firstBgGeometry' : 'globalBgGeometry'} geometryFormBackground${i}`}></div>
//                         {i === 0 && (
//                             <div className="geometryFormBackground geometryFormBackgroundShadow firstBgGeometry"></div>
//                         )}
//                     </div>
//                 ))}
//             </article>
//         </section>
//     )
// }