import { useState } from "react";
import styled from "styled-components";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  //Sumar productos
  const increase = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert("No hay más en existencia")
    }
  };

  //Eliminar productos
  const decrease = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    } else {
      alert("Agrega a partir de un producto");
    }
  };

  //Render
  return (
    <Counter>
      {stock === 0 ? (
        <p>Agotado</p>
      ) : (
        <>
          <div className="counter-ctrl">
            <button className="btn" onClick={decrease}>
              -
            </button>
            <p className="count">{counter}</p>
            <button className="btn" onClick={increase}>
              +
            </button>
          </div>
          <button className="btn btn_primary" onClick={() => onAdd(counter)}>
            Agregar productos al carrito
          </button>
        </>
      )}
    </Counter>
  );
};

export default ItemCount;

//Estilos del contador
const Counter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 200px;
  color: white;

  .counter-ctrl {
    display: flex;
    justify-content: space-between;
    width: 100px;
    padding-bottom: 20px;
  }
`;
