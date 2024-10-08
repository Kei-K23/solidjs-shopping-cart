import { createResource, For, Match, Show, Switch } from "solid-js";
import { fetcher } from "../../lib";
import Alert from "../components/Alert";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";

function Home() {
  const [data] = createResource("https://fakestoreapi.com/products", fetcher);

  return (
    <div>
      <Show when={data.loading}>
        <div class="flex items-center justify-center mt-10">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8 mx-4">
            <For each={[1, 2, 3, 4, 5, 6]}>
              {(item) => <ProductCardSkeleton />}
            </For>
          </div>
        </div>
      </Show>
      <Switch>
        <Match when={data.error}>
          <Alert title="Error! Products data cannot be fetch" class="my-4" />
        </Match>
        <Match when={data()}>
          <div class="flex items-center justify-center mt-10">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8 mx-4">
              <For each={data()}>{(item) => <ProductCard item={item} />}</For>
            </div>
          </div>
        </Match>
      </Switch>
    </div>
  );
}

export default Home;
