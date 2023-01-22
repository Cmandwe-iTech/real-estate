import React from "react";
import { useState } from "react";
import axios from "axios";
import eyeicon from "./images/eyeicon1.png";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

let Login = () => {
  const navigate = useNavigate();
  let [details, setdetails] = useState({ email: "", password: "" });
  let [isRevealed, setIsReaveled] = useState(false);
  let Changehandler = (e) => {
    setdetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };
  function submitHandler() {
    console.log(details);
    axios
      .post("https://backendreal.onrender.com/login/login", details)
      .then((response) => {
        console.log(response.data.status);

        if (response.data.Status === "ok") {
          alert("login successfull");
          window.localStorage.setItem("token", response.data.token);
          navigate("/homepage");
          // window.location.href="/homepage"
        }
      })
      .catch((error) => {
        alert("password and email are not matching");
      });
  }
  return (
    <div className="Login-containerz">
      <div className="Loginz">
        <div>
          <h1 className="orangez">Logo</h1>
        </div>
        <div className="createz">Enter your credentials to your account</div>
        <div>
          <input
            type="text"
            placeholder="MaildID"
            name="email"
            onChange={Changehandler}
          />
        </div>
        <div>
          <input
            type={isRevealed ? "text" : "password"}
            placeholder="Password"
            name="password"
            onChange={Changehandler}
          />
          <img
            id="hide"
            src={eyeicon}
            alt="eyecon"
            onClick={() => setIsReaveled((prevState) => !prevState)}
          />
        </div>
        <button className="buttonz" onClick={submitHandler}>
          SignIn
        </button>
        <div>
          <Link to="/register">
            {" "}
            <p>signUp</p>
          </Link>
        </div>
      </div>
      <div className="child-div">
        Dont have account?{" "}
        <Link to="/register">
          {" "}
          <p>Signup </p>
        </Link>
      </div>
    </div>
  );
};
export default Login;
