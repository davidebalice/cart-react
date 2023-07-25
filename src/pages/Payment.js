import Navbar from "../components/Navbar/Navbar";
import Step from "../components/Checkout/Step";
import Payment from "../components/Checkout/Payment";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context/context";

const PaymentPage = () => {
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
    <div>
      <Navbar />
      <Step step={4} />
      <Payment />
    </div>
  );
};

export default PaymentPage;
