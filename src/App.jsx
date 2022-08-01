import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./containers/ItemListContainer/ItemListCointainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div>
          <Navbar />
          <Routes>
            <Route 
              index path="/" 
              element={<ItemListContainer />} 
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route
              path="/detalle/:detalleId"
              element={<ItemDetailContainer />}
            />
            <Route 
              path="/cart" 
              element={<Cart />} 
            />
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
