import './AttractivePhrase.css'
import { DatasAttractivePhrase as datas } from '@/app/datas/AttractivePhrase'

export const AttractivePhrase = () => {
    return (
        <div className="attractivePhrase">
            <p className='phrase'>
                "{datas.text}"
                - {datas.author}
            </p>
        </div>
    )
}