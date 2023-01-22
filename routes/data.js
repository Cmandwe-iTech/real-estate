const express = require("express");
const route = express.Router();
const cors = require("cors");
var jwt = require("jsonwebtoken");
route.use(
  cors({
    origin: "*",
  })
);
const data = require("../models/data.js");
route.use(express.json());
const cloudinary = require("cloudinary").v2;
const fileupload = require("express-fileupload");

const bodyParser = require("body-parser");
route.use(bodyParser.json());
route.use(bodyParser.urlencoded({ extended: false }));
route.use(
  fileupload({
    useTempFiles: true,
    limits: { fileSize: 50 * 2024 * 1024 },
  })
);
cloudinary.config({
  cloud_name: "dzzixdcs1",
  api_key: "961216453729524",
  api_secret: "uUbIi8ygFiiVwJJeuq8aXRqO2kk",
});
route.post("/post", async (req, res) => {
  try {
    console.log(req.body);
    console.log("rout comming");
    const file = req.files.image;
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      public_id: `${Date.now()}`,         //req.files.image.tempFilePath 
      resource_type: "auto",                //req.file.path  multer
      folder: "images",
    });
    const dat = await data.create({
      name: req.body.name,
      propertytype: req.body.propertytype,
      negotable: req.body.negotable,
      price: req.body.price,
      ownership: req.body.ownership,
      propertyage: req.body.propertyage,
      propertyapproved: req.body.propertyapproved,
      propertydescription: req.body.propertydescription,
      bankloan: req.body.bankloan,
      length: req.body.length,
      breadth: req.body.breadth,
      totalarea: req.body.totalarea,
      areaunit: req.body.areaunit,
      noofbhk: req.body.noofbhk,
      nooffloors: req.body.nooffloors,
      attached: req.body.attached,
      westerntoilet: req.body.westerntoilet,
      furnished: req.body.furnished,
      carparking: req.body.carparking,
      lift: req.body.lift,
      electricity: req.body.electricity,
      facing: req.body.facing,
      namei: req.body.name,
      mobile: req.body.mobile,
      postedby: req.body.postedby,
      saletype: req.body.saletype,
      featuredpackage: req.body.featuredpackage,
      ppdpackage: req.body.ppdpackage,
      image: result.url,
      email: req.body.email,
      city: req.body.city,
      area: req.body.area,
      pincode: req.body.pincode,
      address: req.body.address,
      landmark: req.body.landmark,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      PPDID: `PPD${Math.floor(Math.random() * 10000)}`,
      views: `${Math.floor(Math.random() * 10)}`,
      days: `${Math.floor(Math.random() * 100)}`,
    });
    res.json({
      ok: "ok",
      data: dat,
    });
  } catch (e) {
    res.json({
      err: e.message,
    });
  }
});

route.post("/data", (req, res) => {
  try {
    console.log("coming  to data");
    console.log(req.body.token);

    if (req.body.token) {
      // verify a token symmetric
      jwt.verify(
        req.body.token,
        process.env.SECRET,
        async function (err, decoded) {
          if (err) {
            return res.status(403).json({
              status: "failed",
              message: "Not a valid token",
            });
          }
          console.log(decoded.data, decoded, 1);
          const nam = decoded.data.split("@")[0];
          console.log(nam);
          const dat = await data.find({
            name: nam,
          });
          console.log("data", dat);

          res.json({
            ok: "data",
            dat: dat,
            user: nam,
            userid: decoded.data,
          });
        }
      );
    } else {
      return res.status(401).json({
        status: "Failed",
        message: "Toeken is missing",
      });
    }
  } catch (e) {
    res.json({
      err: e.message,
    });
  }
});

module.exports = route;
