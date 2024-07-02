import React from "react";
import PropTypes from "prop-types";
import "./contact.css";
import drop from "./dropC.png";
import dos from "./dropping-centers-dos-and-dont.png";
import Header from "./dropHeader";
import Footer from "../footer/Footer";
function DropCentre(props) {
  return (
    <div>
      <Header />
      <div className="top-img">
        <img src={drop} alg="Image of students oragninsing camp" />
      </div>
      <div className="drop">
        <div className="cities">
          <div className="ques a">Our Dropping Centres</div>
          <ul>
            <li>Jabalpur</li>
            <li>Bhopal</li>
            <li>Ujjain</li>
            <li>Gwalior</li>
            <li>Rewa</li>
            <li>Nagpur</li>
            <li>Pune</li>
            <li>Indore</li>
            <li>Raipur</li>
          </ul>
        </div>
        <div class="dos-img">
          <div className="ques a">Please have a look </div>

          <img src={dos} className="dos" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DropCentre;
