import styled from "styled-components";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from "firebase/firestore";
import ItemCart from "../ItemCart/ItemCart";

function Cart() {
  const { cartList, totalPrice, vaciarCarrito } = useCartContext();
  const [idCompra, setIdCompra] = useState();

  const generarOrden = async () => {
    //Generando objeto
    const order = {
      buyer: {
        name: "Daniel",
        email: "danielhh.dev@gmail.com",
        phone: "5583461595",
        address: "asd assdd asd",
      },
      items: cartList.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
      })),
      total: totalPrice(),
    };

    //Registrando orden en firestore
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => {
      setIdCompra(id);
    });

    //Actualizar el stock
    // actualizar el stock
    const queryCollectionStock = collection(db, "items");

    const queryActulizarStock = query(
      queryCollectionStock, //                   ['jlksjfdgl','asljdfks'] -> ejemplo del map ,  
      where( documentId() , 'in', cartList.map(prod => prod.id) ) // in es que estén en ..         
  )


  const batch = writeBatch(db)

  await getDocs(queryActulizarStock)
  .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
      stock: res.data().stock - cartList.find(item => item.id === res.id).quantity
  }) ))
  .catch(err => console.log(err))

    batch.commit();
  };

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
      <button onClick={generarOrden}>Generar orden de compra</button>
      <p>El ID de su compra es: {idCompra}</p>
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
