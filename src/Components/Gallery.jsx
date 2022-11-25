import { useState } from 'react'
import arrowPrev from '../assets/arrow-prev.svg'
import arrowNext from '../assets/arrow-next.svg'

function Gallery({logement}) {
    const [diapoIndex, setDiapoIndex] = useState(0)
    
    const goNext = () => {
        setDiapoIndex((diapoIndex+1)%logement.pictures.length)
    }
    const goPrev = () => {
        setDiapoIndex(diapoIndex > 0 ? diapoIndex - 1 : logement.pictures.length - 1)
    }

    return (
        <div className='galerie'>
            <button onClick={goPrev} className={logement.pictures.length === 1 ? 'btn_none' : 'btn_prev'}><img src={arrowPrev} alt="" /></button>

                <div className='divImg'>
                    <img src={logement.pictures[diapoIndex]} alt=""/>                        
                    <div className='iteration'>{diapoIndex+1}/{(logement.pictures).length}</div>
                </div>

            <button onClick={goNext} className={logement.pictures.length === 1 ? 'btn_none' : 'btn_next'}><img src={arrowNext} alt="" /></button>
        </div>               
    )
}
  
export default Gallery