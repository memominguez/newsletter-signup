import iconList from "../assets/images/icon-list.svg";
import iconSuccess from "../assets/images/icon-success.svg";
import signupDesktop from "../assets/images/illustration-sign-up-desktop.svg"
import signupMobile from "../assets/images/illustration-sign-up-mobile.svg"

export default function Testing() {
  return (
    <>
    <h1>Images on page</h1>
    <p>iconList</p>
    <img src={iconList} alt="" />
    <p>iconSuccess</p>
    <img src={iconSuccess} alt="" />
    <p>signup Desktop</p>
    <img src={signupDesktop} alt="" />
    <p>signup Mobile</p>
    <img src={signupMobile} alt="" />
    </>
  )
}
