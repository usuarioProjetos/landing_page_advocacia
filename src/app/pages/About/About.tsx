// Style
import './About.css'
// Next / React
import Image from "next/image"
// Datas
import { DatasAbout as datas } from "@/app/datas/About"
// Components
import { Title } from "@/app/components/Title/Title"

export const About = () => {
    return (
        <section className="about">
            <Title
                text="Sobre"
                widthSquare="80%"
            />

            <article className="allInfosAbout">
                {datas.map(item => (
                    <div className={`infoAboutCard ${item.id % 2 === 0 ? 'even' : 'odd'}`} key={item.id}>
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

                        <div className={`divContentImage divContentImage${item.id}`}>
                            <div className="divImage">
                                <Image 
                                    src={item.image}
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="contentTexts">
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
                                        <div className="media" key={media.to}>
                                            <media.Icon />
                                        </div>
                                    ))}
                                </div>
                            )}
                            <div className="borderComponent" />
                        </div>

                    </div>
                ))}
            </article>
        </section>
    )
}
