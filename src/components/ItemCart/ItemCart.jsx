import styled from "styled-components";
import React from 'react'
import { useCartContext } from '../../context/CartContext';

function ItemCart( {product} ) {
  const { removeProduct } = useCartContext();
  return (
    <Item>
      <img src={product.image} alt={product.name} />
      <div>
        <p>Titulo: {product.name}</p>
        <p>Cantidad: {product.quantity}</p>
        <p>Precio u.: {product.price}</p>
        <p>Subtotal: ${product.quantity * product.price}</p>
        <button onClick={() => removeProduct(product.id)}>Eliminar</button>
      </div>
    </Item>
  )
}

export default ItemCart

const Item= styled.div`
  width: 400px;
  margin-top: 100px;
  margin-left: 100px;
  color: white;
  font-size: 18px;
  img {
    width: 100px;
  }
`;