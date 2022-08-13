import styled from "styled-components";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import Form from "../Form/Form";

function Cart() {
  const { cartList, totalPrice, clearCart } = useCartContext();


  //Render
  if (cartList.length === 0) {
    return (
      <CartStore>
        <p>No hay elementos en el carrito</p>
        <p>
          <Link to="/" className="link">
            Hacer compras
          </Link>
        </p>
      </CartStore>
    );
  }

  return (
    <CartStore>
      {cartList.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>total: {totalPrice()}</p>
      <button onClick={clearCart}>Vaciar carrito</button>
      <Form/>
    </CartStore>
  );
}

export default Cart;

//Estilos
const CartStore = styled.div`
  p {
    font-size: 28px;
    color: white;
  }

  .link {
    color: white;
  }
`;
