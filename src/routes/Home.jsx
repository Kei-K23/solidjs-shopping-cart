import { createResource, Match, Show, Switch } from "solid-js";
import { fetcher } from "../../lib";
import Alert from "../components/Alert";

function Home() {
  const [data] = createResource("https://fakestoreapi.com/products", fetcher);

  return (
    <div>
      <Show when={data.loading}>
        <p>Loading...</p>
      </Show>
      <Switch>
        <Match when={data.error}>
          <Alert title="Error! Products data cannot be" class="my-4" />
        </Match>
        <Match when={data()}>
          <div>{JSON.stringify(data())}</div>
        </Match>
      </Switch>
    </div>
  );
}

export default Home;
