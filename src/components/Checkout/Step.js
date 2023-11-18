import React from "react";
import classes from "./Checkout.module.css";

const Step = ({ step }) => {
  let progressVal;

  switch (step) {
    case 1:
      progressVal = 0;
      break;
    case 2:
      progressVal = 33;
      break;
    case 3:
      progressVal = 67;
      break;
    case 4:
      progressVal = 100;
      break;
    default:
      progressVal = 0;
  }

  return (
    <section className={`${classes.checkoutContainer} section-center`}>
      <div className="container">
        <div className="accordion">
          <div className={`${classes.steps}`}>
            <progress
              id="progress"
              value={progressVal}
              max={100}
              className={classes.progress}
            ></progress>
            <div className="step-item">
              <button
                className={`${classes.stepButton} text-center `}
                type="button"
                aria-expanded="true"
              >
                1
              </button>
              <div className={classes.stepTitle}>Login</div>
            </div>
            <div className="step-item">
              <button
                className={`${classes.stepButton} text-center collapsed`}
                type="button"
                aria-expanded={step >= 2 ? true : false}
              >
                2
              </button>
              <div className={classes.stepTitle}>Summary</div>
            </div>
            <div className="step-item">
              <button
                className={`${classes.stepButton} text-center collapsed`}
                type="button"
                aria-expanded={step >= 3 ? true : false}
              >
                3
              </button>
              <div className={classes.stepTitle}>Shipping data</div>
            </div>
            <div className="step-item">
              <button
                className={`${classes.stepButton} text-center collapsed`}
                type="button"
                aria-expanded={step >= 4 ? true : false}
              >
                4
              </button>
              <div className={classes.stepTitle}>Confirm</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step;
