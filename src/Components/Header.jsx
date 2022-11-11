import { Link } from 'react-router-dom'
import logo from '../assets/logo-couleur.png'
import '../style/Header.css'

function Header() {
    return (
      <header>
        <Link to="/">
            <img src={logo} alt="logo Kasa" />
        </Link>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/a-propos">A Propos</Link>
        </nav>
      </header>
    )
  }
  
  export default Header