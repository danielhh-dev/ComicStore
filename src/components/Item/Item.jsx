import styled from "styled-components";
import { Link } from "react-router-dom";

const Item = ({ image, name, price, id }) => {
  return (
    <ItemCard >
      <Link to={`/detalle/${id}`}>
        <img src={image} alt="" />
        <p className="card-text">{name}</p>
        <p className="card-text">${price}</p>
      </Link>
    </ItemCard>
  );
};

export default Item;

const ItemCard = styled.div`
  
  p {
    font-size: 2rem;
    color: white;
  }
  img {
    width: 260px;
  }
`;
