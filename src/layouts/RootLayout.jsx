import Footer from "../components/Footer";
import Header from "../components/Header";

export default function RootLayout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
