import React from 'react'
import playbutton from '../images/playbutton.png'
import demoalbum from '../images/demoalbum.png'

const SearchResults = () => {
    return (
        <div className="search-results">
            <div className="cover-art"><img className="album-cover" src={demoalbum} alt="demo ablum" />
            </div>
            <div className="song-details">
                <p>Song Title Artist</p></div>
            <div className="play-button"><img className="play-btn" src={playbutton} /></div>
            <div className="addtoplaylist">
            <button className="add-to-playlist-btn">ADD TO PLAYLIST</button>
            </div>

        </div>
    )
}

export default SearchResults
