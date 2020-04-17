import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

const NavBottom = props => {
    return (
        <Container>
                <Row>
                    <Col>
                        <div className="nav-button-bar">
                            <div className="nav-button">
                                <a href="/"><FontAwesomeIcon color="#1F850E" size="2x" icon={faUser} /></a>
                            </div>
                            <div className="nav-button">
                                <a href="/matches"><FontAwesomeIcon color="#1F850E" size="2x" icon={faHeart} /></a>
                            </div>
                            <div className="nav-button">
                                <a href="/chat"><FontAwesomeIcon color="#1F850E" size="2x" icon={faComment} /></a>
                            </div>
                            <div className="nav-button">
                                <a href="/settings"><FontAwesomeIcon color="#1F850E" size="2x" icon={faCog} /></a>
                            </div>
                        </div>
                    </Col>
                </Row>
        </Container>
    )
}

export default NavBottom