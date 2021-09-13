//  SERVER/CLIENT/SRC/PAGES/SIGNUPPAGE/SignupForm.js  //

import React, { useState } from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";
import { setToken } from "../../utils/tokenService";
import * as UserService from "../../api/UserService";

const SignupForm = () => {
     const history = useHistory();
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [name, setName] = useState("");

     const handleSubmit = async () => {
       const newUser = {
         name,
         email, 
         password,
       };

       const res = await UserService.create(newUser);
       if (res.data) {
         if (res.data.token) {
           const token = res.data.token;
           setToken(token);
           setName('')
           setEmail("");
           setPassword("");
          let url = "http://localhost:5000/auth/auth/spotify";
          window.location = url;
         }
       } else {
         alert("Server Error");
       }
     };

    return (
      <>
        <div className="signup-form-ctr">
             <input 
                placeholder='name'
                className="input-fields"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
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
                <button className="signup-button" onClick={handleSubmit}>SIGN UP</button>
            <p>Already have an account? Sign in</p>
        </div>
      </>
    )
}

export default SignupForm
