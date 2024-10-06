import Footer from "../components/Footer";
import Header from "../components/Header";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";

export default function RootLayout(props) {
  return (
    <>
      <ShoppingCartProvider>
        <Header />
        <main class="mt-32 mb-20">{props.children}</main>
        <Footer />
      </ShoppingCartProvider>
    </>
  );
}
