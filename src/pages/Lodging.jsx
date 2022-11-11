import { useParams } from 'react-router-dom'
import { useState } from 'react'
import logements from "../data/logements.json"
import '../style/Lodging.css'
import "../style/collapse.css"
import chevronOpen from "../assets/vector-close.svg"
import chevronClose from "../assets/vector-open.svg"
import { FaStar } from "react-icons/fa"


function Lodging() {

    const param = useParams()
    const [logement] = useState(logements.find((item) => item.id === param.id))
    const [selected, setSelected] = useState(false)
    const [selected2, setSelected2] = useState(false)

    const starColor = {
        grey: "#E3E3E3",
        pink: "#FF6060"
    }
    const stars = Array(5).fill(0)
        
    return (
        <div>
            {logement != null && (
                <div className='body_logement'>

                    <div className='galerie'>
                        {(logement.pictures).map(i => (
                            <img src={i} alt="photos" />
                        ))}
                    </div>

                    <div className='presentation'>
                        <div className='title'>
                            <h1>{logement.title}</h1>
                            <span>{logement.location}</span>
                        </div>
                        <div className='portrait'>
                            <span>{(logement.host).name}</span>
                            <img src={(logement.host).picture} alt="portrait" />
                        </div>
                    </div>

                    <div className='tag_and_start'>
                        <ul className='list_tags'>
                            {(logement.tags).map(tag => (
                                <li>{tag}</li>
                            ))}
                        </ul>
                        <ul className='list_start'>
                            {stars.map((_, index) => (
                                <li >
                                    <FaStar key={index} color={logement.rating > index ? starColor.pink : starColor.grey} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='les_collapses'>

                        <div className='collapse_desc_description'>
                            <ul className='collapse collapse_logement'>
                                <li>
                                    <div onClick={() => setSelected2(true) } className="collapseOpen">
                                        <h2>Description</h2>
                                        {selected2 ? (
                                            <img src={chevronOpen} alt="chevron" />
                                            ) : (
                                            <img src={chevronClose} alt="chevron" />
                                        )}
                                    </div>
                                    <div onClick={() => setSelected2(false) } className={selected2 ? 'collapseClose zindex' : 'collapseClose'}>
                                        <h2>Description</h2>
                                        {selected2 ? (
                                            <img src={chevronOpen} alt="chevron" />
                                            ) : (
                                            <img src={chevronClose} alt="chevron" />
                                        )}
                                    </div>

                                    <ul className={selected2 ? 'content show' : 'content'}>
                                        <li>{logement.description}</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className='collapse_desc_equip'>
                            <ul className='collapse collapse_logement'>
                                <li>
                                    <div onClick={() => setSelected(true) } className="collapseOpen">
                                        <h2>Équipements</h2>
                                        {selected ? (
                                            <img src={chevronOpen} alt="chevron" />
                                            ) : (
                                            <img src={chevronClose} alt="chevron" />
                                        )}
                                    </div>
                                    <div onClick={() => setSelected(false) } className={selected ? 'collapseClose zindex' : 'collapseClose'}>
                                        <h2>Équipements</h2>
                                        {selected ? (
                                            <img src={chevronOpen} alt="chevron" />
                                            ) : (
                                            <img src={chevronClose} alt="chevron" />
                                        )}
                                    </div>

                                    <ul className={selected ? 'content show' : 'content'}>
                                        {(logement.equipments).map(equip => (
                                            <li>{equip}</li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            )}
        </div>    
    )
}

export default Lodging




