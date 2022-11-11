import "../style/collapse.css"
import "../style/Apropos.css"
import chevronOpen from "../assets/vector-close.svg"
import chevronClose from "../assets/vector-open.svg"
import { useState } from 'react'


function Apropos() {

  const [selected, setSelected] = useState(null)

  const handleClick = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }
  
  return (
    <section>
      <div className='banner-a-propos'></div>

      <ul className="collapse">

        {dataCollapse.map((item, i) => (
          <li>

            <div onClick={() => handleClick(i)}>
              <h2>{item.Sujet}</h2>
              <div>
                {selected === i ? (
                  <img src={chevronOpen} alt="chevron" />
                  ) : (
                    <img src={chevronClose} alt="chevron" />
                  )}
              </div>
            </div>

            <p className={selected === i ? 'content show' : 'content'}>{item.descriptif}</p>

          </li>
        ))}

      </ul>
    </section>
  )
}
  
export default Apropos

const dataCollapse = [
  {
    Sujet: 'Fiabilité',
    descriptif:'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
  },
  {
    Sujet: 'Respect',
    descriptif:'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
  },
  {
    Sujet: 'Service',
    descriptif:"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
  },
  {
    Sujet: 'Sécurité',
    descriptif:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  }
]