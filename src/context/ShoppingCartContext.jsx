import { createSignal, createContext, useContext } from "solid-js";

// Define context
const ShoppingCartContext = createContext();

// Provider component
export function ShoppingCartProvider(props) {
  const [cart, setCart] = createSignal([]);

  // Helper function to check if a product is in the cart
  const isProductInCart = (product) => {
    return cart().some((item) => item.id === product.id);
  };

  // Add unique product to the cart
  const addProduct = (product) => {
    setCart((prevCart) => {
      if (!isProductInCart(product)) {
        return [...prevCart, product]; // Add product if not already in cart
      }
      return prevCart; // Otherwise, return the previous cart
    });
  };

  // Remove product from the cart
  const removeProduct = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Clear the cart
  const clearCart = () => setCart([]);

  // Actions to be provided by the context
  const shoppingCart = [
    cart,
    {
      addProduct,
      removeProduct,
      clearCart,
      isProductInCart,
    },
  ];

  return (
    <ShoppingCartContext.Provider value={shoppingCart}>
      {props.children}
    </ShoppingCartContext.Provider>
  );
}

// Custom hook to use shopping cart context
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
