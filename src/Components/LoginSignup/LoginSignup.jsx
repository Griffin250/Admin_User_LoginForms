import React, {useState} from "react";
import "./LoginSignup.css";

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
const LoginSignup = () => {
    const[ action,setAction] = useState("LOGIN AS ADMIN")
  return (
    <div className="container">
      <div className="header">
        <div className="submit-container">
        <div className= {action==="LOGIN AS USER"? "submit gray":"submit"} onClick={()=>{setAction("LOGIN AS ADMIN")}}>ADMIN</div>
        <div className={action ==="LOGIN AS ADMIN"?"submit gray":"submit"} onClick={()=>{setAction("LOGIN AS USER")}}>USER</div>
      </div>
        <div className="text">{action}</div>
        <div className="underline"> </div>
      </div>

      <div className="inputs">
        {action==="LOGIN AS USER"? <div></div>: <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Admin user email / Identifier" />
        </div>}
       

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" autoComplete="off" />
        </div>
        </div>
        {action==="LOGIN AS ADMIN"? <div></div>: <div className="forgot-password help-links">
        Forgot Password? <span>Click here!</span> - Don't have an Account? <span>Register here!</span>
      </div>}
     

      <div className="submit-container">
        <div className="login-btn submit">Login</div>
      </div>
    </div>
  );
};

export default LoginSignup;
