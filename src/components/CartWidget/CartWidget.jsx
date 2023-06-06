import './CartWidget.css'

const CartWidget = () => {

    
    const imgCarrito = "https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-shopping-cart.png"

    return (
    <div>
        <img className='carrito' src={imgCarrito} alt="carrito" />
        <strong>3</strong>
    </div>
    )
}

export default CartWidget