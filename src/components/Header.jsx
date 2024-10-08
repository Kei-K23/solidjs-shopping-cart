import { useShoppingCart } from "../context/ShoppingCartContext";

export default function Header() {
  const [cart, { getTotalQuantity }] = useShoppingCart();
  return (
    <header class="navbar fixed top-0 w-full z-10 bg-base-100/90 px-10 flex items-center justify-center">
      <div class="flex-1 max-w-6xl">
        <div class="flex-1">
          <a href="/" class="btn btn-ghost text-xl">
            SolidShop
          </a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">
            <li>
              <a href="/shopping-cart">
                Shopping cart{" "}
                {cart()?.length && (
                  <div class="badge badge-primary badge-outline">
                    {getTotalQuantity()}
                  </div>
                )}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
