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

                <form className="formArea">
                    {DatasInput.map(item => (
                        <>
                            {item.name !== 'mensagem' ? (
                                <label className='labelItemForm'>
                                    <p className='textLabel'>
                                        {item.name}
                                    </p>
                                    <input className='inputText' type="text" />
                                </label>
                            ) : (
                                <label className='labelItemForm'>
                                    <p className='textLabel'>
                                        {item.name}
                                    </p>
                                    <textarea className='inputText' rows={4} />
                                </label>
                            )}
                        </>
                    ))}
                    <div className="buttonSubmit">
                        <button type='submit'>Enviar</button>
                        <div className="squareButton"></div>
                    </div>
                    
                </form>

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
