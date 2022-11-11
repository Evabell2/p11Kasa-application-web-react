import logo from "../assets/logo-blanc.png"
import { Link } from 'react-router-dom'
import '../style/Footer.css'


function Footer() {
    return (
      <div className="footer">
        <Link to="/">
            <img src={logo} alt="logo Kasa" />
        </Link>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    )
  }
  
  export default Footer