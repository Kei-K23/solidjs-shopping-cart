export default function Header() {
  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a href="/" class="btn btn-ghost text-xl">
          SuperShop
        </a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <a href="/shopping-cart">Shopping cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
