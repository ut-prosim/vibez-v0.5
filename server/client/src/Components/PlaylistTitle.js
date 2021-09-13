//  SERVER/CLIENT/SRC/COMPONENTS/PlaylistTitle.js  //

import React, { useState } from 'react'
import editicon from '../images/editicon.png'
import { func, string } from "prop-types"

const PlaylistTitle = ({getPlaylistTitle, title}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setTitle] =useState(title);

    const handleEdit = async () => {
        console.log("handleedit");
        setIsEditing(!isEditing);
        //meaning submit is showing
        if (isEditing) {
            let editedPost = {
                title: editedTitle,
            };
            // await PostService.update(id, editedPost);
            // getPostsAgain();
        }
    };

    return (
        <div className="playlist-header">
            <div className="playlist-title">
            {!isEditing && <h2>{title}</h2>}
            {isEditing && (
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={editedTitle}
                    type="text"
                    name="title"
                    placeholder="TITLE"
                />
            )}
            </div>
            <div className="playlist-edit-icon">
            <img className="edit-icon" src={editicon} alt="edit icon" />
            </div>
        </div>
    )
}

PlaylistTitle.propTypes = {
    title: string.isRequired,
    getPostsAgain: func,
};

export default PlaylistTitle
