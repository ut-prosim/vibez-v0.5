//  SERVER/CLIENT/SRC/PAGES/LOGINPAGE/LoginForm.js  //

import React, { useState } from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";
import { setToken } from "../../utils/tokenService";
import * as UserService  from "../../api/UserService"

const LoginForm = () => {
  const history =  useHistory();
  const [email, setEmail] =  useState("");
  const [password, setPassword] =  useState("");

  const user = {
    email,
    password,
  };
  
  const handleSubmit = async () => {
    const res = await UserService.login(user);
    if (res.data) {
      const token = res.data.token;
      console.log("FROM LOGIN FORM: ", token);
      setToken(token);
      setEmail("");
      setPassword("");
      let url = "http://localhost:5000/auth/auth/spotify";
      window.location = url;
    } else {
      alert("Server Error");
    }
  };
  

  return (
    <>
      <div className="Login-form-ctr">
        <input
          placeholder="email"
          className="input-fields"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
        />
        <input
          placeholder="password"
          className="input-fields"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>THINK HARDER link to if you forgot pass</p>
        <button onClick={handleSubmit}>LOGIN</button>
        <p>Dont have an account? Join Now</p>
      </div>
    </>
  );
};

export default LoginForm;
