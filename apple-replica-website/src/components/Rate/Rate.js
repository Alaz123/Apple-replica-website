import React, { useState } from "react";
import "./rate.css";

const Rate = () => {
  const [value, setValue] = useState(5);

  const handleRateDown = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const handleRateUp = () => {
    if (value < 10) {
      setValue(value + 1);
    }
  };

  return (
    <div className="rating-wrapper">
      <h3>Please rate this MacBook Air out of 10</h3>
      <div>
        <button className="negative" onClick={handleRateDown}>
          Rate down
        </button>
        <button className="positive" onClick={handleRateUp} >
          Rate up
        </button>
        <div className="rating-result">
          {value === 5 ? "Average rating: " : "You rated this product: "}
          {value}
        </div>
        <button
          className="submit"
          onClick={() => {
            alert("Thanks for rating our product!");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Rate;