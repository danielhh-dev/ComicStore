import styled from "styled-components";
import ItemList from "../../components/ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../helpers/getFetch";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      getFetch()
        .then((resp) =>
          setProducts(resp.filter((product) => product.category === categoryId))
        )
        .catch((err) => console.log(err));
    } else {
      getFetch()
        .then((resp) => setProducts(resp))
        .catch((err) => console.log(err));
    }
  }, [categoryId]);

  return (
    <ListContainer>
      <ItemList props={products} />
    </ListContainer>
  );
};

export default ItemListContainer;

const ListContainer = styled.div`
  margin-top: 40px;
`;
