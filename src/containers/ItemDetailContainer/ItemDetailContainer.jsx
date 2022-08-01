import styled from "styled-components";
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from "../../helpers/getFetch";

function ItemDetailContainer() {
  const [ producto, setProducto ] =  useState({})
  const { detalleId } = useParams()

  useEffect( ()=> {
      getFetch(detalleId)
      .then( data => setProducto(data) )
  }, [detalleId])
  
  return ( 
      <div>            
          <ItemDetail producto={producto} />            
      </div>
  )
}


export default ItemDetailContainer

// const DetailContainer = styled.div`
//   display: grid;
// `;