import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './Navegation.css'

const Navegation = () => {
  return (
    <header>
      <link to={"/"} >
        <h1>Coclé</h1>
      </link>

        <nav>
            <ul>
                <li>
                  <NavLink to={'/categoria/2'}>Cocina</NavLink>
                </li>
                <li>
                <NavLink to={'/categoria/3'}>Jardin</NavLink>
                </li>
                
            </ul>
        </nav>

        <CartWidget/>
    </header>

  )
}

export default Navegation