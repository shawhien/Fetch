import React from 'react';
import { Container } from 'reactstrap';

const ProfilePic = props => {

    return (
        <Container>
            <img className="img-fluid profile-picture" src={props.imageLink} />
        </Container>
    )
}

export default ProfilePicture