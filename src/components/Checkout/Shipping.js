import React, { useContext } from "react";
import NotLogged from "../Checkout/NotLogged";
import { useGlobalContext } from "../../context/context";
import { AuthContext } from "../../context/authContext";
import classes from "./Checkout.module.css";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const { cart, total } = useGlobalContext();
  const { shippingData, setShippingData } = useContext(AuthContext);
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
    navigate("/payment");
  };

  return (
    <div className={classes.page}>
      <div className={classes.pageContainer}>
        <h2 className={classes.titleSection}>Shipping details</h2>

        <form onSubmit={handleSubmit}>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="name" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
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
                  class="form-control"
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
                  class="form-control"
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
                  class="form-control"
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
                  class="form-control"
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
                  class="form-control"
                  id="tel"
                  name="tel"
                  required
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <div class="form-check form-check-inline col-12">
                <input
                  class="form-check-input"
                  type="radio"
                  id="checkbox1"
                  name="shipping"
                  required
                />
                <label class="form-check-label" for="checkbox1">
                  Opzione 1
                </label>
              </div>
              <div class="form-check form-check-inline col-12">
                <input
                  class="form-check-input"
                  type="radio"
                  id="checkbox2"
                  name="shipping"
                  required
                />
                <label class="form-check-label" for="checkbox2">
                  Opzione 2
                </label>
              </div>
            </div>
          </div>

          <button type="submit" class="btn btn-primary">
            Invia
          </button>
        </form>
      </div>
    </div>
  );
};

export default Shipping;
