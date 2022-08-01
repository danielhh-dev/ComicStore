import styled from "styled-components";
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from "../ItemCart/ItemCart";

function Cart() {
  const { cartList, totalPrice } = useCartContext();
  if(cartList.length === 0) {
    return (
      <CartStore>
        <p>No hay elementos en el carrito</p>
        <p><Link to='/' className="link">Hacer compras</Link></p>
      </CartStore>
    )
  }

  return (
    <>
      {
        cartList.map(product => <ItemCart key={product.id} product={product} />)
      }
      <p>
        total: {totalPrice()}
      </p>
    </>
  )
}

const CartStore = styled.div`

  p {
    font-size: 28px;
    color: white;
  }

  .link {
    color: white;
  }
`

export default Cart