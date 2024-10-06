import { createSignal, createContext, useContext, onCleanup } from "solid-js";

// Define context
const ShoppingCartContext = createContext();

// Utility function to load cart from localStorage
const loadCartFromLocalStorage = () => {
  const cartData = localStorage.getItem("solidShoppingCart");
  return cartData ? JSON.parse(cartData) : [];
};

// Utility function to save cart to localStorage
const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("solidShoppingCart", JSON.stringify(cart));
};

// Provider component
export function ShoppingCartProvider(props) {
  // Initialize cart from localStorage
  const [cart, setCart] = createSignal(loadCartFromLocalStorage());

  // Save cart to localStorage whenever it changes
  const updateCart = (newCart) => {
    setCart(newCart);
    saveCartToLocalStorage(newCart);
  };

  // Helper function to check if a product is in the cart
  const isProductInCart = (product) => {
    return cart().some((item) => item.id === product.id);
  };

  // Add unique product to the cart or increment quantity if already exists
  const addProduct = (product) => {
    let newValue;

    if (isProductInCart(product)) {
      newValue = cart().map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      newValue = [...cart(), { ...product, quantity: 1 }];
    }
    updateCart(newValue);
  };

  // Remove product from the cart
  const removeProduct = (productId) => {
    const newValue = cart().filter((item) => item.id !== productId);
    updateCart(newValue);
  };

  // Increment product quantity in the cart
  const incrementQuantity = (productId) => {
    const newValue = cart().map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(newValue);
  };

  // Decrement product quantity in the cart
  const decrementQuantity = (productId) => {
    const newValue = cart()
      .map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    updateCart(newValue);
  };

  // Get total quantity of products in the cart
  const getTotalQuantity = () => {
    return cart().reduce((acc, curr) => acc + curr.quantity, 0);
  };

  // Clear the cart
  const clearCart = () => updateCart([]);

  // Actions to be provided by the context
  const shoppingCart = [
    cart,
    {
      addProduct,
      removeProduct,
      incrementQuantity,
      decrementQuantity,
      clearCart,
      isProductInCart,
      getTotalQuantity,
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
