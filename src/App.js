import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import TotalBox from "./components/TotalBox";
import Loading from "./components/Loading";
import { useGlobalContext } from "./context/context";

function App() {
  const { isLoading, total, products } = useGlobalContext();
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
    <div>
      <Navbar />
      {products.length > 0 ? (
        <Cart />
      ) : (
        <div className="center-item text-center">
          <h3>The cart is empty</h3>
          <br />
          <h4>Reload page to view cart</h4>
        </div>
      )}
      {total > 0 && <TotalBox />}
    </div>
  );
}

export default App;
