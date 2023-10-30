import './Title.css'

interface IProps {
    text: string
    square?: boolean
    widthSquare: string
}

export const Title = ({ text, widthSquare, square = true }: IProps) => {
    return (
        <section className="title">
            <div className="content">
                <h2>
                    <span>
                        {text}
                    </span>
                    {square && (
                        <div className='square-detail'
                            style={{
                                width: widthSquare
                            }}
                        ></div>
                    )}
                </h2>
            </div>
        </section>
    )
}