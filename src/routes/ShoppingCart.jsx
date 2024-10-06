import { Match, Switch } from "solid-js";
import { useShoppingCart } from "../context/ShoppingCartContext";
import ShoppingCartTable from "../components/ShoppingCartTable";

export default function ShoppingCart() {
  const [cart, { addProduct, removeProduct, clearCart, isProductInCart }] =
    useShoppingCart();

  return (
    <div class="max-w-6xl mx-auto">
      <h2>Shopping Cart</h2>
      <div>
        <Switch>
          <Match when={cart().length === 0}>Empty shopping cart</Match>
          <Match when={cart().length > 0}>
            <ShoppingCartTable />
          </Match>
        </Switch>
      </div>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}
