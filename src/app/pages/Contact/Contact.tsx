import { Title } from '@/app/components/Title/Title'
import Image from 'next/image'
import { Logo } from '../../datas/Contact'
import './Contact.css'
import { DatasInput, DatasSocialMedia } from '@/app/datas/Contact'

export const Contact = () => {
    return (
        <section className="contact">
            <Title
                text='contato'
                widthSquare='80%'
            />

            <div className="contentArea">

                <div className="formArea">
                    {DatasInput.map(item => (
                        <label className='labelItemForm'>
                            <p className='textLabel'>
                                {item.name}
                            </p>
                            <input className='inputText' type="text" />
                        </label>
                    ))}
                </div>

                <div className="followArea">
                    <div className="socialMedias">
                        {DatasSocialMedia.map(item => (
                            <a href="#">
                                <div className="socialNetwork">
                                    <div className="icon">
                                        <item.Icon />
                                    </div>

                                    <p>{item.name}</p>
                                </div>
                            </a>
                        ))}
                    </div>


                    <div className="logo">
                        <Image alt='Logo Chevitereza Paica' src={Logo.src} />
                    </div>
                </div>

            </div>
        </section>
    )
}

{/* <section>
    <Title />

    <div className="contentArea">
        <div className="formArea">
            <label htmlFor="">
                <input type="text" />
            </label>

            <label htmlFor="">
                <input type="text" />
            </label>

            <label htmlFor="">
                <input type="text" />
            </label>
        </div>

        <div className="followArea">
            <div className="socialMedias">
                <div className="insta"></div>
                <div className="wpp"></div>
                <div className="face"></div>
            </div>

            <div className="logo">
                <Image alt='' src='' />
            </div>
        </div>
    </div>
</section> */}