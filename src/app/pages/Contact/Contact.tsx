"use client"
import { Title } from '@/app/components/Title/Title'
import Image from 'next/image'
import { Logo } from '../../datas/Contact'
import './Contact.css'
import { DatasInput, DatasSocialMedia } from '@/app/datas/Contact'

export const Contact = () => {
    const onSubmitForm = (e: any) => {
        e.preventDefault()
    }
    return (
        <footer 
            className="contact"
            id='contact'
        >
            <Title
                text='Contato'
                widthSquare='80%'
            />

            <div className="formContent">
                <form 
                    className="form"
                    action="https://formsubmit.co/diegosouzacruz464@gmail.com"
                    method='POST'    
                >
                    <div className="contextInputs">
                        {DatasInput.map(item => (
                            <label key={item.nameField} className={`labelInput ${item.nameField === 'mensagem' ? 'labelTextarea' : ''}`}>
                                <p>{item.nameField}</p>
                                {item.nameField === 'mensagem' ? (
                                    <textarea 
                                        className='elementForm textarea' 
                                        rows={4}
                                        name={item.name}
                                        required
                                    />
                                        
                                        ) : (
                                    
                                    <input 
                                        className='elementForm input' 
                                        type={item.type} 
                                        name={item.name}
                                        required
                                    />
                                )}
                            </label>
                        ))}
                    </div>

                    <div className="contentSubmit">
                        <label className="labelInput labelInputSubmit">
                            <button type='submit'>
                                Enviar
                            </button>
                        </label>

                    </div>
                </form>
            </div>

            <div className="infosContact">
                <div className="abstractDiv" />
                <div className="abstractDivBg" />

                <div className="logoDiv">
                    <Image
                        src={Logo.src}
                        alt='Logo Chevitereza'
                    />
                </div>

                <div className="infosSocialMedias">
                    {DatasSocialMedia.map(socialMedia => (
                        <div className="socialMedia" key={socialMedia.name}>
                            <div className="contentSocialMedia">
                                <socialMedia.Icon />
                                <p>{socialMedia.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

<form className="form">

</form>