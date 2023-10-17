import './BurguerMenu.css'

interface Props {
    showMenu: boolean
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const BurguerMenu = ({ showMenu, setShowMenu }: Props) => {
    return (
        <div 
            className="burguerMenu"
            onClick={() => {
                setShowMenu(prev => !prev)
            }}
        >
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
        </div>
    )
}

