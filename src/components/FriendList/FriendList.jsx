import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import FriendListItem from './FriendListItem';

const FriendOnline = styled.ul `
  margin: 0 auto;
  list-style: none;
  margin-top: 30px;
  `;

const FriendList = ({ friends }) => {
    return (
      <FriendOnline>
        {friends.map((friend) => (
          <FriendListItem friend={friend} />
        ))}
      </FriendOnline>
    );
  };
  
  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ).isRequired,
  };
  
  export default FriendList;