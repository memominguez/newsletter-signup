/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import iconSuccess from "../assets/images/icon-success.svg";
import "./thanksmessage.css";

export default function ThanksMessage({
  email,
  setEmail,
  isActive,
  setIsActive,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    setIsActive(false);
    setEmail("");
    navigate("/");
  };

  return (
    <div className="messageContainer">     
      <img src={iconSuccess} alt="Icon Success" />
      <h1 className="thanks">Thanks for subscribing!</h1>
      <p className="paragraph">
        A confirmation email has been sent to &nbsp;
        <strong>{isActive ? email : "address@yourcompany.com"}</strong>. Please open
        it and click the button inside to confirm your subscription.
      </p>
      <button
        className="messagebtn"
        // className={isActive ? "messagebtn active" : "messagebtn"}
        onClick={handleClick}
      >
        Dismiss message
      </button>
    </div>
  );
}
