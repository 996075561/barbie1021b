import './Header.css'
import { Link } from 'react-router-dom'
function Header(){
    
    return(
             <>
        <header>
            <div>
            <Link to= "/"><img src="logo.png" alt="" /></Link>
            </div>
            <nav>
                <ul>
                   
                    <li>
        
                        <Link to= "/">PAGINA INICIAL</Link>
                    </li>
                    <li>
                        <Link to= "/sobre">SOBRE</Link>
                    </li>
                    <li>
                        <Link to= "/noticias">NOTICIAS</Link>
                    </li>
                    <li>
                        <Link to= "/contato">CONTATO</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <div>
     
        </div>
        </>
    )
}
export default Header