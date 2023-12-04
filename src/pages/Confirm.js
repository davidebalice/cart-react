import Navbar from "../components/Navbar/Navbar";
import Step from "../components/Checkout/Step";
import Confirm from "../components/Checkout/Confirm";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context/context";
import Footer from "../components/Footer/Footer";
import Spacer from "../components/Spacer";

const ConfirmPage = () => {
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
        <Spacer height={90}/>
        <Step step={4} />
        <Confirm />
      </div>
      <Footer />
    </>
  );
};

export default ConfirmPage;
