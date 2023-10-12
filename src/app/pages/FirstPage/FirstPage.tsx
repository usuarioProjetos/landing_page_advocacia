import { DatasFirstPage, ImagesFirstPage } from '@/app/datas/FirstPage'
import Arrow from '../../assets/arrow.png'
import { IoIosArrowDown } from 'react-icons/io'
import './FirstPage.css'
import Image from 'next/image'

export const FirstPage = () => {
    return (
        <section className="firstPage">

            <div className="divImageBg">
                <Image 
                    src={ImagesFirstPage[0].src}
                    alt='Imagem de fundo'
                />
            </div>

            <div className="content">

                <h1>{DatasFirstPage.title}</h1>
                <div className="btns">
                    {DatasFirstPage.btns.map(btn => (
                        <div className={`btn ${btn.nameClass}`}>
                            <button>
                                {btn.text}
                            </button>
                        </div>
                    ))}
                </div>

            </div>

            <div className="scroll-arrow">
                <a href="#">
                    <Image 
                        src={Arrow}
                        alt='Seta de scroll'
                    />
                </a>
            </div>

        </section>
    )
}
