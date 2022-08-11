import { useCartContext } from "../../context/CartContext"

const CartContainer = () => {
    const { cartList, clearCart } = useCartContext()

    return (
      <div>
        { cartList.map(producto => <li>
          {producto.name} {producto.price} {producto.cantidad}
          </li> )}
        <button onClick={clearCart}>Vaciar carrito</button>
      </div>
    )
}

export default CartContainer