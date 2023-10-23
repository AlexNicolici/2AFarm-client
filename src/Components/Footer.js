import React from "react";
// import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex flex-row justify-start">
        <p>© 2023 2A Farm Distribution |</p>
        <a
          href="https://2afarm.ro/politica-de-confidentialitate/"
          className="cursor-pointer text-farm-color hover:underline ease-out duration-200"
        >
          Politica de confidentialitate<span className="text-gray-500"> |</span>
        </a>

        <a
          href="https://2afarm.ro/politica-de-confidentialitate/"
          className="cursor-pointer text-farm-color hover:underline ease-out duration-200"
        >
          Politica cookies
        </a>
      </div>
    </footer>
  );
}

export default Footer;
