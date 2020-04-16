import React, { useState } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Redirect } from 'react-router-dom';

const MatchButton = props => {
    
    let [redirection, setRedirection] = useState(false)

    const handleMatchMsg = () => {
        setRedirection(true)
    }

    if (redirection) {
        return (
            <Redirect to={props.link} />
        )
    }
    return (
        <Container>
            <Row>
                <Col>
                    <button onClick={handleMatchMsg} className="button-style">
                        {props.text}
                    </button>
                </Col>
            </Row>
        </Container>
    )
}

export default MatchButton