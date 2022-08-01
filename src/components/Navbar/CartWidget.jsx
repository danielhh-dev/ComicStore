import styled from "styled-components";
import cart from "../../images/cart.png";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalProducts } = useCartContext();
    return (
        <Cart>
            <span>{totalProducts() || ''}</span>
            <img src={cart} alt='Carrito compras' />
        </Cart>
    )
}

export default CartWidget;

const Cart = styled.div`
    img {
        padding: 6px ;
        width: 30px;
    } 
`;