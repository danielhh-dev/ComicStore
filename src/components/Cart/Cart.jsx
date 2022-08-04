import styled from "styled-components";
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { collection, getFirestore, addDoc } from 'firebase/firestore'
import ItemCart from "../ItemCart/ItemCart";

function Cart() {
  const { cartList, totalPrice } = useCartContext();
  const [idCompra, setIdCompra] = useState();

  const order = {
    buyer: {
      name: 'Daniel',
      email: 'danielhh.dev@gmail.com',
      phone: '5583461595',
      address: 'asd assdd asd'
    },
    items: cartList.map(product => ({ id: product.id, name: product.name ,price: product.price, quantity: product.quantity})),
    total: totalPrice()
  }

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then(( {id} ) => { setIdCompra(id)});
    
    
    
  }
  
  if(cartList.length === 0) {
    return (
      <CartStore>
        <p>No hay elementos en el carrito</p>
        <p><Link to='/' className="link">Hacer compras</Link></p>
      </CartStore>
    )
  }
  
  return (
    <CartStore>
      {
        cartList.map(product => <ItemCart key={product.id} product={product} />)
      }
      <p>
        total: {totalPrice()}
      </p>
      <button onClick={ handleClick }>Finalizar compra</button>
      <p>El ID de su compra es: {idCompra}</p>
    </CartStore>
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