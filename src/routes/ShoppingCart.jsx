import { Match, Switch } from "solid-js";
import { useShoppingCart } from "../context/ShoppingCartContext";
import ShoppingCartTable from "../components/ShoppingCartTable";

export default function ShoppingCart() {
  const [cart, { clearCart, getTotalQuantity }] = useShoppingCart();

  return (
    <div class="max-w-6xl mx-auto">
      <h2 class="text-xl mb-10">Shopping Cart Items - {getTotalQuantity()}</h2>
      <div>
        <Switch>
          <Match when={cart().length === 0}>
            <p class="text-lg text-center">Empty shopping cart</p>
          </Match>
          <Match when={cart().length > 0}>
            <ShoppingCartTable />
          </Match>
        </Switch>
      </div>
      <div class="flex items-center justify-end gap-x-4 mt-10">
        <button
          disabled={cart().length === 0}
          class="btn btn-error"
          onClick={clearCart}
        >
          Clear Cart
        </button>
        <button
          disabled={cart().length === 0}
          class="btn btn-info"
          onClick={clearCart}
        >
          Check Out
        </button>
      </div>
    </div>
  );
}
