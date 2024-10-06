import Footer from "../components/Footer";
import Header from "../components/Header";

export default function RootLayout(props) {
  return (
    <>
      <Header />
      <main class="mt-32 mb-20">{props.children}</main>
      <Footer />
    </>
  );
}
