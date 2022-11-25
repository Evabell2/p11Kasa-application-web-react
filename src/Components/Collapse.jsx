import { useState } from 'react'
import chevronOpen from "../assets/vector-close.svg"
import chevronClose from "../assets/vector-open.svg"

function Collapse({ i, item, children }) {

    const [selected, setSelected] = useState(null)
  
    const handleClick = (i) => {
      if (selected === i) {
        return setSelected(null)
      }
      setSelected(i)
    }
    return (
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
            <ul className={selected === i ? 'content show' : 'content'}>{children}</ul>
        </li>
    )
}
  export default Collapse
