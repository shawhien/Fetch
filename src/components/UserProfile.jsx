import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import ProfilePic from './ProfilePic';
// import MatchButton from './MatchButton';
// import AppHeader from './AppHeader';

const Profile = props => {

    return (
        <Container>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <ProfilePic imageLink="https://www.placecage.com/200/200"/>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <h1 className="user-name">Dragon</h1>
                </Col>
            </Row>
            <Row>
                <Col sm={{ size: 11, offset: 1 }} md={{ size: 6, offset: 3 }}>
                    <div className="about-me">
                        <p> Looking for love through doggos!</p>
                        <p>Click match to know more about me!</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={{ size: 8, offset: 2 }} md={{ size: 4, offset: 4 }}>
                    <MatchMsgButton text="Find Match!" link="/1" />
                </Col>
            </Row>
        </Container>
    )
}

export default Profile