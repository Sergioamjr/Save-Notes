import React from "react";
import { Cat } from "react-kawaii";

const Feedback = ({ text, mood = "blissful" }) => {
  return (
    <div className="p-center">
      {text && (
        <p className="p-center m-top-100 color-gray m-bottom-40">{text}</p>
      )}
      <Cat size={320} mood={mood} color="#ccc" />
    </div>
  );
};

export default Feedback;
