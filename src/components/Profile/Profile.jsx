import React from "react";
import PropTypes from "prop-types";
import './Profile.css';

function Profile( 
    {
        src,
        username,
        tag,
        location,
        stats:{followers, views, likes}
        //stats
    },
    Children ) {
        return (
            <div className="profile">
                <div className="description">
                    <img src={src} alt="user avatar" className="avatar" width="250px" />
                    <p>{username}</p>
                    <p>@{tag}</p>
                    <p>{location}</p>
                </div>

                <ul className ="stats">
                    <li>
                        <span className="label">Followers: </span>
                        <br />
                        <span className="quantity"> {followers} </span>
                    </li>
                    <li>
                        <span className="label">Views: </span>
                        <br />
                        <span className="quantity">{views}</span>
                    </li>
                    <li>
                        <span className="label">Likes: </span>
                        <br />
                        <span className="quantity">{likes}</span>
                    </li>
                </ul>
            </div>
            
        );
}

Profile.propTypes = {
    src: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
}

export default Profile;