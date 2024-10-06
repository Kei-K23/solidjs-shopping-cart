import { Index } from "solid-js";
import { useShoppingCart } from "../context/ShoppingCartContext";

export default function ShoppingCartTable() {
  const [cart, { removeProduct, isProductInCart }] = useShoppingCart();

  return (
    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Product</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <Index each={cart()}>
            {(item, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div class="flex items-center gap-3">
                    <div class="avatar">
                      <div class="mask mask-squircle size-16">
                        <img
                          src={item().image}
                          alt={item().title}
                          class="object-fill"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold line-clamp-1">{item().title}</div>
                    </div>
                  </div>
                </td>
                <td class="line-clamp-2 leading-9 text-[16px]">
                  {item().description}
                </td>
                <td>${item().price}</td>
                <td>{item()?.quantity}</td>
                <th>
                  <button class="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            )}
          </Index>
        </tbody>

        <tfoot>
          <tr>
            <th>No.</th>
            <th>Product</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
