import React from "react";
import { useGlobalContext } from "../context/context";
import formatNumber from "../utils/formatNumber";
const TotalBox = () => {
  const { total } = useGlobalContext();
  return (
    <section className="total-section section-center">
      <div className="card w-100">
        <header className="card-header">
          <h4> Cart </h4>
        </header>
        <div className="card-content">
          <h4>{formatNumber(total)}</h4>
        </div>
        <footer className="card-footer">
          <button className="btn btn-selector">CheckOut</button>
        </footer>
      </div>
    </section>
  );
};

export default TotalBox;
