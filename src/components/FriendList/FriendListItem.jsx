import React from 'react';
import {Fragment} from 'react';
import './FriendList.css';
//import PropTypes from "prop-types";


export default function FriendListItem({avatar, name, isOnline}) {
    return (
        <Fragment>
            <li key="{id}" class="FriendItem">
                <span class="FriendStatus" style={{ backgroundColor: isOnline ? 'green' : 'green' }}>
                </span>
                <img class="FriendAvatar" src={avatar} alt="User avatar" width="48" />
                <p class="FriendName"> {name} </p>
            </li>
        </Fragment>
    );
}