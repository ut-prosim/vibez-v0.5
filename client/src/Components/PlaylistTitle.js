import React from 'react'
import editicon from '../images/editicon.png'
const PlaylistTitle = () => {
    return (
        <div className="playlist-header">
            <div className="playlist-title">
            <h2>Playlist Title</h2>
            </div>
            <div className="playlist-edit-icon">
            <img className="edit-icon" src={editicon} alt="edit icon" />
            </div>
        </div>
    )
}

export default PlaylistTitle
