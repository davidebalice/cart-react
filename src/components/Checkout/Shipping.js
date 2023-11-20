import React, { useContext } from "react";
import NotLogged from "../Checkout/NotLogged";
import { useGlobalContext } from "../../context/context";
import { AuthContext } from "../../context/authContext";
import classes from "./Checkout.module.css";
import classes2 from "../Cart/Cart.module.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Shipping = () => {
  const { isLoggedIn, shippingData, setShippingData } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      surname: formData.get("surname"),
      address: formData.get("address"),
      city: formData.get("city"),
      email: formData.get("email"),
      telephone: formData.get("telephone"),
    };

    setShippingData(data);
    navigate("/confirm");
  };

  return (
    <div className={classes.page}>
      <div className={classes.pageContainer}>
        {isLoggedIn ? (
          <>
            <h2 className={classes.titleSection}>Shipping details</h2>

            <div className={`${classes.dataContainer} mb-5`}>

            <form onSubmit={handleSubmit}>
              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="name" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      class="form-control form-input"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="surname" class="form-label">
                      Surname
                    </label>
                    <input
                      type="text"
                      class="form-control form-input"
                      id="surname"
                      name="surname"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="indirizzo" class="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      class="form-control form-input"
                      id="address"
                      name="address"
                      required
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="citta" class="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      class="form-control form-input"
                      id="city"
                      name="city"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control form-input"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="tel" class="form-label">
                      Tel
                    </label>
                    <input
                      type="tel"
                      class="form-control form-input"
                      id="tel"
                      name="tel"
                      required
                    />
                  </div>
                </div>
              </div>
              <div style={{textAlign:'center',padding:'40px'}}>
                <Button type="submit" variant="primary" className={classes2.checkoutButton}>
                  Continue
                </Button> 
             </div>
            </form>
            </div>
          </>
        ) : (
          <NotLogged />
        )}
      </div>
    </div>
  );
};

export default Shipping;
