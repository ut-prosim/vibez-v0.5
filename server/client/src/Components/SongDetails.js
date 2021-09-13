//  SERVER/CLIENT/SRC/COMPONENTS/SongDetails.js  //

import React from 'react'
import trashicon from '../images/trashicon.png'
import demoalbum2 from '../images/demoalbum2.png'

const SongDetails = () => {
    return (
        <div>
            <div className="song-list">
                <div className="song-art"><img className="song-art" src={demoalbum2}/>
            </div>

                <div className="song-details"><p className="song-title">Song Title</p><p className="artist-text"> Artist</p></div>
                <div className="release-date">
                <p>1990</p></div>
                 <div className="trash-icon"><img className="trash-icon" src={trashicon} /></div>
            

        </div>
        </div>
    )
}

export default SongDetails
