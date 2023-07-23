import CartWidget from '../CartWidget/CartWidget'
import './Navegation.css'
import { Link, NavLink } from 'react-router-dom'

const Navegation = () => {
  return (
    <header>
      <Link to={"/"} >
        <h1>Coclé</h1>
      </Link>

        <nav>
            <ul>
                <li>
                  <NavLink to={"/categoria/2"}>Cocina</NavLink>
                </li>
                <li>
                  <NavLink to={"/categoria/3"}>Jardin</NavLink>
                </li>
                
            </ul>
        </nav>

        <CartWidget/>
    </header>

  )
}

export default Navegation