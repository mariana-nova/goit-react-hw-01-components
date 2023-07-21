import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const FriendLine = styled.li `
  margin-bottom: 20px;
  margin: 0 auto;
  `;

  const FriendStatus = styled.span `
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: inline-flex;
  margin-top: 35px;
  margin-top: 30px;
  margin-left: 10px;
  `;
  const FriendAvatar = styled.img `
  display: inline-flex;
  margin-right: 30px;
  margin-top: 10px;
  height: 70px;
  width: 70px;
  margin-top: 15px;
  `;
  const FriendName = styled.p `
  display: inline-block;
  `;

const FriendListItem = ({ friend }) => {
    const {  name, avatar, isOnline, id } = friend;
    return (

            <FriendLine key={id} >
                <FriendStatus style={{ backgroundColor: isOnline ? 'green' : 'green' }}>
                </FriendStatus>
                <FriendAvatar src={avatar} alt="User avatar" width="48" />
                <FriendName> {name} </FriendName>
            </FriendLine>
    );
}
FriendListItem.propTypes = {
    friend: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired,
  };
  
  export default FriendListItem;