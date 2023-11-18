import Navbar from "../components/Navbar/Navbar";
import Step from "../components/Checkout/Step";
import Shipping from "../components/Checkout/Shipping";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context/context";
import Footer from "../components/Footer/Footer";

const ShippingPage = () => {
  const { isLoading } = useGlobalContext();
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
      <div>
        <Navbar />
        <Step step={3} />
        <Shipping />
      </div>
      <Footer />
    </>
  );
};

export default ShippingPage;
