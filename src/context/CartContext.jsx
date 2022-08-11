import { createContext, useState, useContext } from 'react';
const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContexProvider = ({ children }) => {
    // estados y funciones acá
    const [cartList, setCartList] = useState([])
    /* Sobreescribe la cantidad del producto añadido
    const addProduct = (item, newQuantity) => {
      const newCart =cartList.filter(product => product.id !== item.id);
      newCart.push({ ...item, quantity: newQuantity});
      setCartList(newCart);
    }
    */

    //Suma la cantidad ya añadida del producto
    const addProduct = (item, quantity) => {
      if (isInCart(item.id)) {
        setCartList(cartList.map( product => {
          return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
        }));
      } else {
        setCartList([ ...cartList, { ...item, quantity}]);
      }
    }

    console.log('carrito: ', cartList)
    
    const totalPrice = () => {
      return cartList.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProducts = () => cartList.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    const clearCart = () => setCartList([]);
    const isInCart = (id) => cartList.find(product => product.id === id) ? true : false;
    const removeProduct = (id) => setCartList(cartList.filter(product => product.id !== id));

    return (
        <CartContext.Provider value={{
          clearCart,
          isInCart,
          removeProduct,
          addProduct,
          totalPrice,
          totalProducts,
          cartList
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContexProvider

