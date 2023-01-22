import React from "react";
import { useState } from "react";
import axios from "axios";
import eyeicon from "./images/eyeicon1.png";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

let Register = () => {
  const navigate = useNavigate();
  let [user, setusers] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  let [isRevealed, setIsReaveled] = useState(false);
  let [pwd, setpwd] = useState(false);

  function submithandler(e) {
    console.log("1");

    console.log(user);
    if (validate(user)) {
      axios
        .post("https://backendreal.onrender.com/register/register", user)
        .then((response) => {
          console.log(response.data.status);
          if (response.data.status === "ok") {
            alert("registered succesfully");
            navigate("/");
            // window.location.href="/"
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  let validate = (values) => {
    if (!values.email) {
      alert("email is required");
      return 0;
    } else if (!values.password) {
      alert("password is required");
      return 0;
    } else if (values.password.length < 4) {
      alert("Password must be more than 4 characters");
      return 0;
    } else if (values.password.length > 10) {
      alert("Password cannot exceed more than 10 characters");
      return 0;
    }
    if (!values.confirmpassword) {
      alert("confirmpassword is required");
      return 0;
    } else if (values.password !== values.confirmpassword) {
      alert("password are not matching");
      return 0;
    }
    return 1;
  };
  return (
    <div className="card-containers">
      <div className="registers">
        <div>
          <h1 className="logos">Logo</h1>
        </div>
        <div className="creates">Create New Account </div>
        <div>
          <input
            type="email"
            placeholder="MaildID"
            onChange={(e) => {
              setusers({ ...user, email: e.target.value });
            }}
          />
        </div>
        <div>
          <input
            type={isRevealed ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => {
              setusers({ ...user, password: e.target.value });
            }}
          />
          <img
            id="hides"
            src={eyeicon}
            alt="eyecon"
            onClick={() => setIsReaveled((prevState) => !prevState)}
          />
        </div>
        <div>
          <input
            type={pwd ? "text" : "password"}
            placeholder="ConfirmPassword"
            onChange={(e) => {
              setusers({ ...user, confirmpassword: e.target.value });
            }}
          />
          <img
            id="hidez"
            src={eyeicon}
            alt="eyecon"
            onClick={() => setpwd((prevState) => !prevState)}
          />
        </div>
        <button className="buttons" onClick={submithandler}>
          Signup
        </button>
      </div>
      <div className="child-div">
        <Link to="/">
          <p>signIn</p>
        </Link>
      </div>
    </div>
  );
};
export default Register;
