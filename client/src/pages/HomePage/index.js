import React from "react";
import CreatePlaylist from "../../Components/CreatePlaylist";
import Search from "../../Components/Search";
import logo from '../../images/logo.png'
import "./styles.css"

const HomePage = () => {
return (
    <div className="home-ctr"> 
       <img className="logo" src={logo} alt="website logo"/>
       <CreatePlaylist />
       <Search />
    </div>
    )
}

export default HomePage;