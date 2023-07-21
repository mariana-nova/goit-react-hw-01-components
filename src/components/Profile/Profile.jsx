import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const Container = styled.div `
background-color: bisque;
width: 300px;
padding: 20px;
border-radius: 20px;
font-size: 23px;
justify-content: center;
`;
const Imagen= styled.img `
    margin-top: 10px;
    border-radius: 50%;
    background-color: azure;
    `;
const Description= styled.div`
    text-align: center;
    `;
const Statslist = styled.ul`
    display: flex;
    gap: 15px;
    padding: 0;
    justify-content: center;
    font-size: 20px;
    `;
const Statsitem = styled.li`
    list-style: none;
`; 



function Profile( 
    {
        src,
        username,
        tag,
        location,
        stats:{followers, views, likes}
        //stats
    } ) {
        return (
            <Container>
                <Description>
                    <Imagen src={src} alt="user avatar" width="250px" />
                    <p>{username}</p>
                    <p>@{tag}</p>
                    <p>{location}</p>
                </Description>

                <Statslist>
                    <Statsitem>
                        <span className="label">Followers: </span>
                        <br />
                        <span className="quantity"> {followers} </span>
                    </Statsitem>
                    <Statsitem>
                        <span className="label">Views: </span>
                        <br />
                        <span className="quantity">{views}</span>
                    </Statsitem>
                    <Statsitem>
                        <span className="label">Likes: </span>
                        <br />
                        <span className="quantity">{likes}</span>
                    </Statsitem>
                </Statslist>
            </Container>
            
        );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  };
  
  export default Profile;