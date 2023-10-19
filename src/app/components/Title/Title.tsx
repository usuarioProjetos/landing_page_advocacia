import './Title.css'

interface IProps {
    text: string
    widthSquare: string
}

export const Title = ({ text, widthSquare }: IProps) => {
    return (
        <section className="title">
            <div className="content">
                <h2>
                    <span>
                        {text}
                    </span>
                    <div className='square-detail'
                        style={{
                            width: widthSquare
                        }}
                    ></div>
                </h2>
            </div>
        </section>
    )
}