//  SERVER/CLIENT/SRC/API/BackEndCall.js  //

import axios from "axios";

console.log("NODE ENV WHAT DO YOU MEAN?", process.env.NODE_ENV);
let HOST;
if (process.env.NODE_ENV !== "production") {
  HOST = "http://localhost:5000/auth";
} else {
  HOST = "https://polar-bayou-95408.herokuapp.com/";
}

export default axios.create({
  baseURL: HOST,
  headers: {
    "Content-type": "application/json",
    Authorization: 'token'
  },
});