import React from "react";
import pharmacy from "../assets/pharmacy.png";

function Hero() {
  return (
    <div>
      <div
        className="
      flex flex-row justify-between items-center flex-wrap"
      >
        <div className="flex flex-col justify-start w-6/12">
          <h1 className="text-farm-color font-semibold text-5xl ">
            2A Farm S.R.L.
          </h1>
          <p className="mt-5 text-xl ">
            O companie tânără, cu capital 100% românesc, înființată și
            autorizată ANM-DM în anul 2011 și având activitate principală
            distribuția de medicamente către farmaciile independente din
            întreaga țară.
          </p>
        </div>
        <img src={pharmacy} alt="pharmacy" width={400} />
      </div>
    </div>
  );
}

export default Hero;
