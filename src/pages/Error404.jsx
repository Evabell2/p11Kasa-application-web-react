import { Link } from 'react-router-dom'
import '../style/error.css'


function Error404() {
    return (
        <div className='error_404'>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/">Retournez sur la page d'accueil</Link>
        </div>
    )
  }
  
  export default Error404