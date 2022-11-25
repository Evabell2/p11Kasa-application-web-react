import { useParams } from 'react-router-dom'
import { useState } from 'react'
import '../style/Lodging.css'
import "../style/collapse.css"
import { FaStar } from "react-icons/fa"
import Gallery from "../Components/Gallery"
import Collapse from '../Components/Collapse'


function Lodging({logements}) {
    const param = useParams()
    const [logement] = useState(logements.find((item) => item.id === param.id))

    const starColor = {
        grey: "#E3E3E3",
        pink: "#FF6060"
    }
    const stars = Array(5).fill(0)
        
    return (
        <div>
            {logement != null && (
                <div className='body_logement'>

                    <Gallery logement={logement}/>

                    <div className='presentation'>
                        <div className='title'>
                            <h1>{logement.title}</h1>
                            <span>{logement.location}</span>
                        </div>
                        <ul className='list_tags'>
                            {(logement.tags).map(tag => (
                                <li key={tag.toString()}>{tag}</li>
                            ))}
                        </ul>
                    </div>

                    <div className='portrait_star'>
                        <div className='portrait'>
                            <span>{(logement.host).name}</span>
                            <img src={(logement.host).picture} alt="portrait" />
                        </div>
                        <ul className='list_start'>
                            {stars.map((_, index) => (
                                <li key={index}>
                                    <FaStar color={logement.rating > index ? starColor.pink : starColor.grey}/>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='les_collapses'>

                        <div className='collapse_desc_description'>
                            <ul className='collapse collapse_logement'>
                                <Collapse
                                    item={{Sujet:"Description", descriptif:logement.description}}
                                    i={1}
                                    key={1}
                                />
                            </ul>
                        </div>

                        <div className='collapse_desc_equip'>
                            <ul className='collapse collapse_logement'>
                                <Collapse
                                    item={{Sujet:"Équipements", descriptif:""}}
                                    i={2}
                                    key={2}
                                >
                                    {(logement.equipments).map((equip, i) => (
                                        <li key={i}>{equip}</li>
                                    ))}
                                </Collapse>
                            </ul>
                           
                        </div>
                    </div>
                </div>
            )}
        </div>    
    )
}

export default Lodging




