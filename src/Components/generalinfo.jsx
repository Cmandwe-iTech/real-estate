import React, { useEffect, useState } from "react";
import home from "./images/home.png";
import bell from "./images/bell.png";
import download from "./images/download.png";
import upload from "./images/upload.png";
import eye from "./images/open-eye.png";
import tag from "./images/tag.png";
import user from "./images/avatar.png";
import camera from "./images/camera.png";
import { Link, useLocation } from "react-router-dom";
import "./g.css";
function Genralinfo() {
  const [gn, setgn] = useState("");
  const [op, setop] = useState({
    namei: "",
    mobile: null,
    postedby: "",
    saletype: "",
    featuredpackage: "",
    ppdpackage: "",
    image: null,
  });
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    setop({ ...op, ...location.state });
    setgn(location.state.name);
  }, []);
  return (
    <div className="homepagek">
      <div className="div1k">
        <div className="logok">Logo</div>
        <div className="left-navbark">
          <p className="bluek">
            <img className="homek" src={home} alt="1" /> Property
          </p>
          <p className="greyk">
            <img className="homek" src={bell} alt="2" /> Assistance
          </p>
          <p className="greyk">
            <img className="homek" src={download} alt="3" /> Recieved Intrest
          </p>
          <p className="greyk">
            <img className="homek" src={upload} alt="4" /> Sent Intrest
          </p>
          <p className="greyk">
            <img className="homek" src={eye} alt="5" /> Property Views
          </p>
          <p className="greyk">
            <img className="homek" src={tag} alt="6" /> Tarrif Plan
          </p>
        </div>
      </div>
      <div className="div2k">
        <div className="headerk">
          <div className="useridk">
            <p>USER ID : 06PPD2357</p>
          </div>
          <div className="userk">
            <img src={user} alt="7" />
            <select>
              <option selected>{gn}</option>
              <option>Log out</option>
            </select>
          </div>
        </div>
        <div className="linek"></div>
        <div className="aak">Add new Property</div>
        <div className="bbk">
          <div className="t1k">
            <div className="t11k">
              <p id="w">1</p>
            </div>
            <div className="t12k">Basic Info</div>
          </div>
          <div className="t2k">
            <div className="t21k">
              <p id="w2k">2</p>
            </div>
            <div className="t22">Property Detail</div>
          </div>
          <div className="t3k">
            <div className="t31k">
              <p id="w3k">3</p>
            </div>
            <div className="t32k">General Info</div>
          </div>
          <div className="t4k">
            <div className="t41k">
              <p id="w4k">4</p>
            </div>
            <div className="t42k">Location Info</div>
          </div>
        </div>
        <div className="kkk">
          <div className="tablek">
            <label className="p1k">Name</label>
            <select
              className="g1k"
              onChange={(e) => {
                setop({ ...op, namei: e.target.value });
              }}
            >
              <option selected>Owner</option>
              <option>broker</option>
              <option>agent</option>
            </select>
            <label className="p2k">Mobile</label>
            <input
              className="g2k"
              placeholder="Enter mobile number"
              onChange={(e) => {
                setop({ ...op, mobile: e.target.value });
              }}
            ></input>
            <label className="p3k">Posted by</label>
            <select
              className="g3k"
              onChange={(e) => {
                setop({ ...op, postedby: e.target.value });
              }}
            >
              <option>Posted By</option>
              <option>owner</option>
              <option>agent</option>
            </select>
            <label className="p4k">Sale Type</label>
            <select
              className="g4k"
              placeholder="Please select"
              onChange={(e) => {
                setop({ ...op, saletype: e.target.value });
              }}
            >
              <option>please select</option>
              <option>Standard sale</option>
              <option>Bank Owned sales</option>
            </select>
            <label className="p5k">Featured Package</label>
            <select
              className="g5k"
              onChange={(e) => {
                setop({ ...op, featuredpackage: e.target.value });
              }}
            >
              <option>please select</option>
              <option>yes</option>
              <option>no</option>
            </select>
            <label className="p6k">PPD package</label>
            <select
              className="g6k"
              onChange={(e) => {
                setop({ ...op, ppdpackage: e.target.value });
              }}
            >
              <option selected>Select property type</option>
              <option>yes</option>
              <option>no</option>
            </select>
            <div className="md">
              <div className="image">
                <label htmlFor="file">
                  <img src={camera} alt="cam" />
                </label>
                <input
                  id="file"
                  type="file"
                  onChange={(e) => {
                    setop({ ...op, image: e.target.files[0] });
                  }}
                />
              </div>
            </div>
            <div className="add">Add Photo</div>
            <Link to="/property" state={op}>
              {" "}
              <button className="prev">
                <span id="previous">Previous</span>
              </button>
            </Link>
            <Link to="/locationinfo" state={op}>
              <button className="save">
                <span id="cont">Save & Continue</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Genralinfo;
