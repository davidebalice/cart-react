import Navbar from "../components/Navbar/Navbar";
import Cart from "../components/Cart/Cart";
import TotalBox from "../components/Cart/TotalBox";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context/context";
import Footer from "../components/Footer/Footer";
import Spacer from "../components/Spacer";

const CartPage = () => {
  const { isLoading, total, cart } = useGlobalContext();
  if (isLoading) {
    return (
      <div>
        <Navbar />
        <div className="center-item">
          <Loading />
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="pageWrapper">
        <Navbar />
        <Spacer height={90}/>
        {cart.length > 0 ? (
          <Cart />
        ) : (
          <div className="center-item text-center">
            <h3>The cart is empty</h3>
          </div>
        )}
        {total > 0 && <TotalBox />}
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
