//  SERVER/CLIENT/SRC/COMPONENTS/PopularPlaylist.js  //

import React from 'react'
import demo3 from '../images/demo3.png'
import demoprofile from '../images/demoprofile.png'

const PopularPlaylist = () => {
    return (
        <div className="section-2">
            <div className="popular-heading">
                 <h2>Popular Playlist</h2>
            </div>
            <div className="popular-playlist">
                <div className="pop-playlist-ctr">
                <div className="pop-album-art"><img className="pop-album-img" src={demo3}/>
                </div>
                <div className="pop-playlist-title">
                    <h3>Playlist Title</h3>
                    </div>
                <div className="user-ctr">    
                    <div className="profile-img">
                        <img className="profile-image" src={demoprofile}/>
                    </div>
                    <div className="username"><p>
                        Bob Marley</p>
                    </div>
                </div>    
            </div>


            <div className="pop-playlist-ctr">
                <div className="pop-album-art"><img className="pop-album-img" src={demo3}/>
                </div>
                <div className="pop-playlist-title">
                    <h3>Playlist Title</h3>
                    </div>
                <div className="user-ctr">    
                    <div className="profile-img">
                        <img className="profile-image" src={demoprofile}/>
                    </div>
                    <div className="username"><p>
                        Bob Marley</p>
                    </div>
                </div>    
            </div>

            <div className="pop-playlist-ctr">
                <div className="pop-album-art"><img className="pop-album-img" src={demo3}/>
                </div>
                <div className="pop-playlist-title">
                    <h3>Playlist Title</h3>
                    </div>
                <div className="user-ctr">    
                    <div className="profile-img">
                        <img className="profile-image" src={demoprofile}/>
                    </div>
                    <div className="username"><p>
                        Bob Marley</p>
                    </div>
                </div>    
            </div>
            </div>
            </div>
        
    )
}

export default PopularPlaylist
