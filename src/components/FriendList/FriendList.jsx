import React from 'react';
import './FriendList.css';
//import PropTypes from "prop-types";
import FriendListItem from './FriendListItem';

export default function FriendList({friends, children}) {
    console.log(friends);
    return (
        <ul className='friendlist'>
            {
                friends.map( friend => (
                    <FriendListItem avatar={friend.avatar} name={friend.name} />
                ))
            }
            {children}
        </ul>
        
    );
}