import React from 'react'
import "./styles.css"


const SpotifyLoginForm = () => {
    return (
        <div className="Login-form-ctr">
            <input 
                className="input-fields"
                type="text"
                value="EMAIL"
                />
            <input 
                className="input-fields"
                type="text"
                value="PASSWORD"
                />
            <p>Forgot Password?</p>
            <button>SIGN IN</button>
            <p>Dont have an account? Join Now</p>
        </div>
    )
}

export default SpotifyLoginForm