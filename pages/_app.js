import { CartProvider } from "../components/cart-provider";
import "../styles/globals.css";
import "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
