import React from "react";
import mainImage from "../images/formAvatar.png";
import "./RightPart.css";
export const RightPart = () => {
  return (
    <div>
      <div className="mainImg">
        <img src={mainImage} alt="" />
      </div>
      <div className="information">
        <h5 className="specialText">Contact Information</h5>

        <p>
          65, Kathmandu Street <br />
          Bagmati 6754
        </p>
        <h5 className="specialText">Follow US</h5>
        <div className="row">
          <div className="col">Facebook</div>
          <div className="col">Instagram</div>

          <div className="col">Twitter</div>
        </div>
        <div className="footerr">
          Created By :
          <span className="specialCover">
            <a href="https://github.com/me-ayush-niraula"> Ayush Niraula</a>
          </span>
        </div>
      </div>
    </div>
  );
};
