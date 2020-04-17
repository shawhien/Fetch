import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, fapaw, faComment } from '@fortawesome/free-solid-svg-icons';

const NavBottom = props => {
    return (
        <Container>
                <Row>
                    <Col>
                        <div className="nav-button-bar">
                            <div className="nav-button">
                                <a href="/"><FontAwesomeIcon color="#d6d6d6" size="2x" icon={faUser} /></a>
                            </div>
                            <div className="nav-button">
                                <a href="/settings"><FontAwesomeIcon color="#d6d6d6" size="2x" icon={fapaw} /></a>
                            </div>
                            <div className="nav-button">
                                <a href="/chat"><FontAwesomeIcon color="#d6d6d6" size="2x" icon={faComment} /></a>
                            </div>
                        </div>
                    </Col>
                </Row>
        </Container>
    )
}

export default NavBottom