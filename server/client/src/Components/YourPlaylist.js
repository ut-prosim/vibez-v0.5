//  SERVER/CLIENT/SRC/COMPONENTS/YourPlaylist.js  //

import React from 'react'
import demo4 from '../images/demo4.png'

const YourPlaylist = () => {
    return (
        <div className="your-playlist">
            <div className="your-play-header">
                <h2>Your Playlist</h2>
                </div>
                
                <div className="your-playlist-row">
                <div className="your-playlist-ctr">
                <div className="your-album-art"><img className="your-album-img" src={demo4}/>
                </div>
                <div className="your-playlist-title">
                    <h3>Playlist Title</h3>
                    </div>
                </div>    

                <div className="your-playlist-ctr">
                <div className="your-album-art"><img className="your-album-img" src={demo4}/>
                </div>
                <div className="your-playlist-title">
                    <h3>Playlist Title</h3>
                    </div>
                </div>    

                <div className="your-playlist-ctr">
                <div className="your-album-art"><img className="your-album-img" src={demo4}/>
                </div>
                <div className="your-playlist-title">
                    <h3>Playlist Title</h3>
                    </div>
                    </div>
                </div>    
            </div>
    
    )
}

export default YourPlaylist
