import React from "react";
import { NavLink } from "react-router-dom";
import "../../sass/footer.scss";

const Footer = () => {
  return (
    <div className="footer container-fluid d-flex justify-content-center">
      <h6>
        {" "}
        <NavLink className="brand" to="/">
          40x20 Handball-Store
        </NavLink>{" "}
        fue creada para el proyecto final de Reacts JS de Coderhouse. Pueden
        seguirme en <a href= "https://www.linkedin.com/in/luciano-cassani/"> <i class="fa fa-linkedin"></i></a>
      </h6>
    </div>
  );
};

export default Footer;
