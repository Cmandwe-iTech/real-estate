import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import home from "./images/home.png";
import bell from "./images/bell.png";
import download from "./images/download.png";
import upload from "./images/upload.png";
import eye from "./images/open-eye.png";
import tag from "./images/tag.png";
import pencil from "./images/pencil.png";
import gallery from "./images/images.png";
import "./homepage.css";
import { Link } from "react-router-dom";
import user from "./images/avatar.png";
import search from "./images/search.png";
import plus from "./images/plus.png";
import axios from "axios";
function HomePage() {
  const [dta, setdta] = useState([]);
  const [ta, setta] = useState([]);
  const [name, setname] = useState("");
  const [gl, setgl] = useState("");

  let navigate = useNavigate();
  useEffect(() => {
    axios
      .post("https://backendreal.onrender.com/data/data", {
        token: window.localStorage.getItem("token"),
      })
      .then((response) => {
        console.log(response.data.dat);
        setdta(response.data.dat);
        console.log("dta", dta);
        setname(response.data.user);
        setgl(response.data.userid);
        setta(response.data.dat);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const onchangehandler = (e) => {
    if (e.target.value === "") {
      setta(dta);

      return;
    }
    const search = dta.filter((item) =>
      item.PPDID.toLocaleLowerCase().includes(
        e.target.value.toLocaleLowerCase()
      )
    );
    setta(search);
  };
  let logoutHandler = () => {
    console.log(1);
    window.localStorage.removeItem("token");

    navigate("/");
  };
  return (
    <div className="homepage">
      <div className="div1">
        <div className="logo">Logo</div>
        <div className="left-navbar">
          <p className="blue">
            <img id="blue" className="home" src={home} alt="1" /> Property
          </p>
          <p className="grey">
            <img className="home" src={bell} alt="2" /> Assistance
          </p>
          <p className="grey">
            <img className="home" src={download} alt="3" /> Recieved Intrest
          </p>
          <p className="grey">
            <img className="home" src={upload} alt="4" /> Sent Intrest
          </p>
          <p className="grey">
            <img className="home" src={eye} alt="5" /> Property Views
          </p>
          <p className="grey">
            <img className="home" src={tag} alt="6" /> Tarrif Plan
          </p>
        </div>
      </div>
      <div className="div2">
        <div className="header">
          <div className="userid">
            <p>{gl}</p>
          </div>
          <div className="user">
            <img src={user} alt="7" />
            <select onChange={logoutHandler}>
              <option selected>{name}</option>
              <option>Logout</option>
            </select>
          </div>
        </div>
        <div className="line"></div>
        <div className="div3">
          <div className="searchbar">
            <input
              type="text"
              placeholder="search PPD ID"
              id="srch"
              onChange={onchangehandler}
            />
            <div className="vline"></div>
            <label htmlFor="srch">
              <img src={search} alt="8" />
            </label>
          </div>
          <div className="property">
            <img src={plus} alt="" />
            <Link to="/basicinfo" state={{ name: name }}>
              <span>Add Property</span>
            </Link>
          </div>
        </div>
        <div>
          <table>
            <thead>
              <th>
                <td>PPD ID</td>
                <td>Image</td>
                <td>Property</td>
                <td>Contact</td>
                <td>Area</td>
                <td>Views</td>
                <td>Status</td>
                <td>Days Left</td>
                <td>Action</td>
              </th>
            </thead>
            <div className="mml">
              {ta &&
                ta.map((obj, index) => {
                  return (
                    <div className="jml" key={index}>
                      <div className="fk">{obj.PPDID}</div>
                      <div className="fk">
                        <img id="gal" src={gallery} alt="gal" />
                      </div>
                      <div className="fk">{obj.propertytype}</div>
                      <div className="fk">{obj.mobile}</div>
                      <div className="fk">{obj.totalarea}</div>
                      <div className="fk">{obj.views}</div>
                      <div className="fk">sold</div>
                      <div className="fk">{obj.days}</div>
                      <div className="fk">
                        <img src={eye} alt="e" id="e" />
                        <img src={pencil} alt="p" id="p" />
                      </div>
                    </div>
                  );
                })}
            </div>
          </table>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
