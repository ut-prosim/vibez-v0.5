import React from 'react'
import "./styles.css"


const LoginForm = () => {
    return (
        <div className="Login-form-ctr">
            <input 
                className="input-fields"
                type="email"
                value="EMAIL"
                />
            <input 
                className="input-fields"
                type="password"
                value="PASSWORD"
                />
            <p>Forgot Password?</p>
            <button>SIGN IN</button>
            <p>Dont have an account? Join Now</p>
        </div>
    )
}

export default LoginForm
