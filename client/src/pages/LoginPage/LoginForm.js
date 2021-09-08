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

        </div>
    )
}

export default LoginForm
