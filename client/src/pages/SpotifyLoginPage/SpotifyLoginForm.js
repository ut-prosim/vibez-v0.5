import React from "react";
import "./styles.css";
import spotifyApi from "../../OAuth/SpotifyWebApi";

const SpotifyLoginForm = () => {


  return (
    <div className="Login-form-ctr">
      <input placeholder="email" className="input-fields" type="email" />
      <input placeholder="password" className="input-fields" type="password" />
      <p>Forgot Password?</p>
      <button>LOGIN</button>
      <p>Dont have an account? Join Now</p>
    </div>
  );
};

export default SpotifyLoginForm;
