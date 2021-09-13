//  SERVER/CLIENT/SRC/PAGES/HOMEPAGE/index.js  //

import React from "react";
import CreatePlaylist from "../../Components/CreatePlaylist";
import Search from "../../Components/Search";
import Welcome from "../../Components/Welcome";
import PopularPlaylist from "../../Components/PopularPlaylist";
import logo from '../../images/logo.png'
import "./styles.css"
import SearchResults from "../../Components/SearchResults";
import PlaylistTitle from "../../Components/PlaylistTitle";
import SongDetails from "../../Components/SongDetails";
import YourPlaylist from "../../Components/YourPlaylist";

const HomePage = () => {

return (
    <div className="home-ctr"> 
        <div className="header">
           <img className="logo" src={logo} alt="website logo"/>  
        </div>
        <div className="body">
            <div className="sect-1">
                <Welcome />
                <CreatePlaylist />
                <Search />
                <SearchResults />
                <PlaylistTitle />
                <SongDetails />
                <SongDetails />
                <SongDetails />
                <SongDetails />
            </div>
            <div className="sect-2">
                <PopularPlaylist />
                <YourPlaylist />
            </div>
            </div>
        <div className="play-footer">
                Hello
            </div>
    </div>
    )
}

export default HomePage;