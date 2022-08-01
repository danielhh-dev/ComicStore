import styled from "styled-components";
import Item from "../Item/Item";

const ItemList = ({ props }) => {
  return (
    <ItemListContainer className="card-container">
      {props.map((product) => (
        <div className="ItemCard" key={product.id}>
          <Item {...product} />
        </div>
      ))}
    </ItemListContainer>
  );
};

export default ItemList;

const ItemListContainer = styled.div`
  margin: 0 auto;
  width: 60%;
  .ItemCard {
    display: inline-block;
    width: 300px;
    margin: 30px
  }
`;
