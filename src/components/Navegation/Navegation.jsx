import CartWidget from '../CartWidget/CartWidget'
import './Navegation.css'

const Navegation = () => {
  return (
    <header>
        <h1>Tienda de Ceramica</h1>

        <nav>
            <ul>
                <li>Tazas</li>
                <li>Platos</li>
                <li>Macetas</li>
                <li>Jarrones</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>

  )
}

export default Navegation