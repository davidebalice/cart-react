import Navbar from "../components/Navbar/Navbar";
import Step from "../components/Checkout/Step";
import Login from "../components/Checkout/Login";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context/context";

const LoginPage = () => {
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
      <Step step={1} />
      <Login />
    </div>
  );
};

export default LoginPage;
