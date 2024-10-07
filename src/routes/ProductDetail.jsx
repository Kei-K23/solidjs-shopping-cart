import { useParams } from "@solidjs/router";
import { createResource } from "solid-js";
import { fetcher } from "../../lib";

export default function ProductDetail() {
  const params = useParams();

  const [data] = createResource(
    `https://fakestoreapi.com/products/${params.id}`,
    fetcher
  );

  return (
    <div class="max-w-6xl mx-auto px-8">
      <Show when={data.loading}>
        <div class="flex items-center justify-center mt-10">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8 mx-4">
            Loading...
          </div>
        </div>
      </Show>
      <Switch>
        <Match when={data.error}>
          <Alert title="Error! Products data cannot be fetch" class="my-4" />
        </Match>
        <Match when={data()}>
          <div class="flex gap-x-20 gap-y-16 w-full flex-col md:flex-row items-start justify-center mt-10">
            <div class="h-[600px] w-full md:w-1/2">
              <img
                class="w-full h-full rounded-xl"
                src={data().image}
                alt={data().title}
              />
            </div>
            <div class="w-full md:w-1/2">
              <h2 class="text-3xl">{data().title}</h2>
              <div class="mt-4 flex items-center justify-between">
                <div class="badge badge-lg badge-success">$ {data().price}</div>
                <div class="badge badge-lg badge-outline">
                  {data().category}
                </div>
              </div>
              <p class="mt-8 text-lg">{data().description}</p>
            </div>
          </div>
        </Match>
      </Switch>
    </div>
  );
}
