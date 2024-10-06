import { useShoppingCart } from "../context/ShoppingCartContext";

export default function ProductCard(props) {
  const [cart, { addProduct, isProductInCart }] = useShoppingCart();

  return (
    <div class="card bg-slate-700 w-[310px] shadow-xl">
      <figure>
        <img
          src={props.item.image}
          alt={props.item.title}
          class="h-[280px] w-full object-fill"
        />
      </figure>
      <div class="card-body px-3">
        <h2 class="card-title line-clamp-2">{props.item.title}</h2>
        <div class="badge badge-lg badge-success">$ {props.item.price}</div>
        <p class="line-clamp-3">{props.item.description}</p>
        <div class="card-actions justify-between">
          <div class="badge badge-lg badge-outline">{props.item.category}</div>
        </div>
        <button
          disabled={isProductInCart(props.item)}
          class="btn btn-primary mt-3"
          onClick={() => {
            addProduct(props.item);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
