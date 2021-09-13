//  SERVER/CLIENT/SRC/COMPONENTS/CreatePlaylist.js  //

import React, { useState} from 'react'
import { func } from "prop-types";



const CreatePlaylist= ({getPlaylistTitle}) => {
        const [playlistTitle, setPlaylistTitle] = useState({title:""});

    function handleSubmit (e) {
        const {title, value} = e.target;

        setPlaylistTitle(prevState => ({
            ...prevState,
            [title]: value,
        }));
       
    }

    return (
        <div className="create-play-ctr">
            <div className="add-playlist-btn-ctr">
                <button 
                    onClick={handleSubmit}
                    className="create-playlist-btn">
                        Create New Playlist</button>
            
            <div className="create-input-ctr">
                <input
                onChange={handleSubmit}
                // value={playlistTitle}
                type="text"
                // name="title"
                placeholder="New Playlist Title"
                className="create-playlist-input"
                />
                </div>
                
            </div>
        </div>
    )
};

CreatePlaylist.propTypes = {
    getPlaylistTitle: func,
};

export default CreatePlaylist
