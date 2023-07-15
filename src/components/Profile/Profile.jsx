import React from "react";
import PropTypes from "prop-types";

function Profile( {src, username, tag, location} ) {
    return (
        <div className="profile">
            <div className="description">
                <img src={src} alt="user avatar" className="avatar" />
                <p>{username}</p>
                <p>{tag}</p>
                <p>{location}</p>
            </div>

            <ul className ="stats">
                <li>
                    <span className="label">Followers</span>
                    <span className="quantity">1000</span>
                </li>
                <li>
                    <span className="label">Views</span>
                    <span className="quantity">2000</span>
                </li>
                <li>
                    <span className="label">Likes</span>
                    <span className="quantity">3000</span>
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