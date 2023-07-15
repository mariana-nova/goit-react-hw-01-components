import React from "react";

{/* <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/> */}


function Profile( {src, username, tag, location} ) {
    return (
        <div className="profile">
            <div className="description">
                <img src={src} alt="user avatar" className="avatar" />
                <p>{}</p>
                <p>{}</p>
                <p>{}</p>
            </div>
        </div>
        
    );
}

export default Profile;