import { createSignal, Match, Switch } from "solid-js";
import { useShoppingCart } from "../context/ShoppingCartContext";
import ShoppingCartTable from "../components/ShoppingCartTable";

export default function ShoppingCart() {
  const [cart, { clearCart, getTotalQuantity, getTotalPrice }] =
    useShoppingCart();
  const [element, setElement] = createSignal();
  console.log(element());

  return (
    <>
      <div class="max-w-6xl mx-auto">
        <div class="flex items-center justify-between gap-4">
          <h2 class="text-xl mb-10">
            Shopping Cart Items - {getTotalQuantity()}
          </h2>
          <h2 class="text-xl mb-10">
            Total Price - ${Math.round(getTotalPrice())}
          </h2>
        </div>
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
            onClick={() => {
              document.getElementById("checkoutSuccessModal").showModal();
              clearCart();
            }}
          >
            Check Out
          </button>
        </div>
      </div>
      <dialog ref={setElement} id="checkoutSuccessModal" class="modal">
        <div class="modal-box">
          <h3 class="text-xl font-bold">Successfully checkout the order</h3>
          <p class="py-2 text-lg">Thank your very much for shopping with us.</p>
          <p class="py-4 text-sm">
            Press ESC key or click the button below to close
          </p>
          <div class="modal-action">
            <form method="dialog">
              <button class="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
