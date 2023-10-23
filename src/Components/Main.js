import React from "react";
import Hero from "./Hero";
import employees from "../assets/employee.png";
import products from "../assets/pills.png";
import clients from "../assets/service.png";
import About from "./About";

function Main() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-20">
      <Hero />

      <section>
        <div className="flex flex-row justify-between flex-wrap items-center text-lg  mt-28 border-t border-b  border-farm-color py-10">
          <div className="flex flex-col justify-center items-center w-60">
            <img src={employees} alt="pharmacy" width={120} />
            <p className="text-center mt-3">
              În prezent am ajuns la peste 100 angajați
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-60">
            <img src={products} alt="pharmacy" width={120} />
            <p className="text-center mt-3">
              peste 4500 de produse în portofoliu
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-60">
            <img src={clients} alt="pharmacy" width={120} />
            <p className="text-center mt-3">
              și peste 1000 clienți din aproape toată România.
            </p>
          </div>
        </div>

        <About />
      </section>
    </main>
  );
}

export default Main;
