import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CartList from "../pages/Cart";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Summary from "../pages/Summary";
import Shipping from "../pages/Shipping";
import Confirm from "../pages/Confirm";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<CartList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    </Router>
  );
}

export default App;
