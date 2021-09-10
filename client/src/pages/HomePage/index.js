import React from "react";
import CreatePlaylist from "../../Components/CreatePlaylist";
import logo from '../../images/logo.png'
import "./styles.css"

const HomePage = () => {
return (
    <div className="home-ctr"> 
       <img className="logo" src={logo} alt="website logo"/>
       <CreatePlaylist />
    </div>
    )
}

export default HomePage;