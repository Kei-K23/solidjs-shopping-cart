export default function Header() {
  return (
    <div class="navbar fixed top-0 w-full z-10 bg-base-100/90 px-10">
      <div class="flex-1">
        <a href="/" class="btn btn-ghost text-xl">
          SolidShop
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
