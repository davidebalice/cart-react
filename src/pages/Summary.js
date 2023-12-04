import Navbar from "../components/Navbar/Navbar";
import Step from "../components/Checkout/Step";
import Summary from "../components/Checkout/Summary";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context/context";
import Footer from "../components/Footer/Footer";
import Spacer from "../components/Spacer";

const SummaryPage = () => {
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
        <Step step={2} />
        <Summary />
      </div>
      <Footer />
    </>
  );
};

export default SummaryPage;
