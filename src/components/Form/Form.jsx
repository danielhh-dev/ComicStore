import React, { useState } from "react";
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  getFirestore,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";

function Form() {
  //Hooks
  const { cartList, totalPrice } = useCartContext();
  const [idCompra, setIdCompra] = useState();
  const [button, setButton] = useState(false);

  //inicializo funcion para generar orden de compra

  const orderForm = {};

  //Generando objeto
  const initialValue = {
    name: "",
    email: "",
    phone: "",
    address: "",
  };

  const [buyer, setBuyer] = useState(initialValue);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setBuyer({ ...buyer, [name]: value });
  };

  const storeData = async (e) => {
    e.preventDefault();
    setBuyer({ ...initialValue });
  };

  orderForm.buyer = buyer;

  orderForm.items = cartList.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: product.quantity,
  }));

  orderForm.date = new Date();

  orderForm.total = totalPrice();

  const generarOrden = async () => {
    //Registrando orden en firestore
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, orderForm).then(({ id }) => {
      setIdCompra(id);
    });

    //Actualizar el stock

    const queryCollectionStock = collection(db, "items");

    const queryActulizarStock = query(
      queryCollectionStock, //                   ['jlksjfdgl','asljdfks'] -> ejemplo del map ,
      where(
        documentId(),
        "in",
        cartList.map((prod) => prod.id)
      ) // in es que estén en ..
    );

    const batch = writeBatch(db);

    await getDocs(queryActulizarStock)
      .then((resp) =>
        resp.docs.forEach((res) =>
          batch.update(res.ref, {
            stock:
              res.data().stock -
              cartList.find((item) => item.id === res.id).quantity,
          })
        )
      )
      .catch((err) => console.log(err));

    batch.commit();

    setButton(true);
  };

  return (
    <>
      <form onSubmit={storeData}>
        <div className="card">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              onChange={handleInputs}
              value={buyer.name}
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={handleInputs}
              value={buyer.email}
            />
            <input
              type="tel"
              name="phone"
              placeholder="telefono"
              onChange={handleInputs}
              value={buyer.phone}
            />
            <input
              type="text"
              name="address"
              placeholder="direccion"
              onChange={handleInputs}
              value={buyer.address}
            />
          </div>
        </div>
      </form>
      {button ? (
        <p>El ID de su compra es: {idCompra}</p>
      ) : (
        <button onClick={generarOrden}>Generar orden de compra</button>
      )}
    </>
  );
}

export default Form;
