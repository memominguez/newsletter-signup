/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import signupDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import signupMobile from "../assets/images/illustration-sign-up-mobile.svg";
import iconList from "../assets/images/icon-list.svg";
import "./stayupdated.css";

export default function StayUpdated({email, setEmail, setIsActive}) { 
  const [inputValid, setInputValid] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setInputValid(true);
    } else {
      setInputValid(false);
      return;
    }

    setIsActive(true)
    navigate("/thanks")
  };

  return (
    <div className="layout">
      <div className="container">
        <div className="left">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>

          <div className="listGroup">
            <div className="listItem">
              <img src={iconList} alt="list icon" className="listIcon" />
              <p>Product discovery and building what matters</p>
            </div>

            <div className="listItem">
              <img src={iconList} alt="list icon" className="listIcon" />
              <p>Measuring to ensure updates are a success</p>
            </div>

            <div className="listItem">
              <img src={iconList} alt="list icon" className="listIcon" />
              <p>And much more!</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="labelBox">
              <label>Email address</label>
              {!inputValid && <label className="errorLabel">Valid email required</label>}
            </div>
            <input
              type="text"
              placeholder="address@yourcompany.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setInputValid(true)}
              className={!inputValid ? "invalid" : undefined}
            />
            <button type="submit">Subscribe to monthly newsletter</button>
          </form>
        </div>
        <div className="right">
          <img src={signupDesktop} alt="Desktop" className="desktopImg"/>
          <img src={signupMobile} alt="Mobile" className="mobileImg" />
        </div>
      </div>
    </div>
  );
}
