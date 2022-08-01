import styled from "styled-components";
import logo from "../../images/logoshop.png";
import CartWidget from "./CartWidget";
import { NavLink } from 'react-router-dom'; 

function Navbar() {
  return (
    <>
      <NavContainer>
        <div className="logo">
          <NavLink className="nav_link" to='/'>
            <img src={logo} alt="logo" />
          </NavLink>
          <p>ComicStore</p>
        </div>

        <div className="categories links">
          <NavLink className="nav_link" to='/category/comics'>COMICS</NavLink>
          <NavLink className="nav_link" to='/category/mangas'>MANGAS</NavLink>
          <NavLink className="nav_link" to='/category/coleccionables'>COLECCIONABLES</NavLink>
        </div>
        
        <div className="links">
          <NavLink className="nav_link" to='/cart'>
            <CartWidget/>
          </NavLink>

        </div>


      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 7 0%;
  margin: 0 auto;
  padding-top: 10px;
  background-color: transparent;

  .logo {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 60px;
      padding: 0;
    }

    p {
      font-weight: 500;
      color: #f4f6f3;
      font-size: 2.4rem;
    }
  }

  .links {
    display: flex;

    .nav_link {
      display: inline-block;
      font-weight: 400;
      font-size: 1.8rem;
      letter-spacing: 0.1rem;
      padding: 8px 24px;
      color: #f4f6f3;
    }
  }  
`;
