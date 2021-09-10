import React, { useState } from 'react'
import "./styles.css"
import { useHistory } from "react-router-dom";
import { setToken } from "../../utils/tokenService";
import * as SpotifyUserService from "../../api/SpotifyUserService";


const SpotifyLoginForm = () => {
      const history = useHistory();
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      const user = {
        email,
        password,
      };

      const handleSubmit = async () => {
        const res = await SpotifyUserService.login(user);
        console.log(res);
        if (res.data) {
          const token = res.data.token;
          console.log("FROM LOGIN FORM: ", token);
          setToken(token);
          setEmail("");
          setPassword("");
          history.push("/auth/spotify/callback");
        } else {
          alert("Server Error");
        }
      };
    

    return (
      <div className="Login-form-ctr">
        <input
          placeholder="email"
          className="input-fields"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          className="input-fields"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>Forgot Password?</p>
        <button onClick={handleSubmit}>LOGIN</button>
        <p>Dont have an account? Join Now</p>
      </div>
    );
}

export default SpotifyLoginForm