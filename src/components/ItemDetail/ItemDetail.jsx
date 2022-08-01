import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ producto = {} }) {
  const [isCount, setIsCount] = useState(false);
  const { addProduct } = useCartContext(); // useContext(CartContext)
  // onAdd función
  const onAdd = (quantity) => {
    setIsCount(true);
    addProduct(producto, quantity);
  };


  return (
    <DetailContainer>
      <img src={producto.image} alt="" />
      <p className="card-text">{producto.name}</p>
      <p className="card-text">${producto.price}</p>
      {
      isCount ? 
        <Link to="/cart" className="send-cart" >
          Ir al carrito
        </Link>
       : 
       <ItemCount initial={1} stock={5} onAdd={onAdd} />
      }
    </DetailContainer>
  );
}

export default ItemDetail;

const DetailContainer = styled.div`
  width: 60%;
  margin: 200px;
  color: white;
  font-size: 28px;
  img {
    width: 300px;
  }

  .send-cart {
    color: white;
  }
`;
