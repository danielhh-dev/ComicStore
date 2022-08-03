import styled from "styled-components";
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from "../../helpers/getFetch";
import { getFirestore, doc, getDoc } from 'firebase/firestore';

function ItemDetailContainer() {
  const [ producto, setProducto ] =  useState({})
  const { detalleId } = useParams()

  useEffect( ()=> {
    const db = getFirestore();
    const queryDoc = doc(db, 'items', detalleId);
    getDoc(queryDoc)
      .then(res => setProducto({id: res.id, ...res.data() }));
  }, [])
  
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