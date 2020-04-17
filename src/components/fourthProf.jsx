import React from 'react';
import { Route } from 'react-router-dom';
import Borzoi from '../assets/Borzoi.jpg';
import Borzoi2 from '../assets/Borzoi2.png';
import Card from 'react-bootstrap/Card'

import Header from '../assets/header.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default function FourthProf(props) {
    const User = {
        humanInfo: {
            id: 1,
            name: "Leonard",
            image: "",
            age: 36,
            location: "West Seattle, Seattle, WA"
                
        }, 
        dogInfo: {
            name: "Zeek",
            images: {
                profpic: Borzoi,
                img_1: Borzoi2
            },
            breed: "borzoi",
            size: "Medium",
            temperment: "Protective",
            age: "4"
        },
        preferences: {
            ages: "25-35",
            height: "5'9 to 6'4",
            location: '30 miles',
            gender: "Everything"
        },
        questions: {
            a: "",
            b: "",
            c: ""
        },
        answers: {
            a: "",
            b: "",
            c: ""
        }
    }
    return (
        <div className="everything">
            <div calssName="thetitle">
                <img src={Header}></img>
            </div>
            <Card className="profile-card">
                <Card.Img className="images prof-image"  variant="top" src={User.dogInfo.images.profpic} />
                <div>
                    <a href="/profile/emmy"><FontAwesomeIcon color="#d6d6d6" size="4x" className="icons" icon={faTimesCircle} /></a>
                    <a href="/profile/emmy"><FontAwesomeIcon color="#02D1A3" className="icons" size="4x" icon={faHeart} /></a>
                
                </div>
                <Card.Body>
                    <Card.Title className="prof-title">🦴{User.dogInfo.name}, {User.dogInfo.age} years old</Card.Title>
                    <Card.Subtitle className="prof-subtitle">
                    {User.dogInfo.breed}{"\n"}
                        <div>
                            {User.dogInfo.temperment}
                        </div>
                        <div>
                            📍{User.humanInfo.location}
                        </div>
                        <div className="space">
                            
                        </div>
                    </Card.Subtitle>
                </Card.Body>
            </Card>
            <Card className="Text-card">
                <div>
                    <Card.Title className="text-card-title">My Hooman: </Card.Title>
                    <Card.Body>
                        <div className="text-card-sub">
                            {User.humanInfo.name}, {User.humanInfo.age}
                        </div>
                        <div className="text-card-op">
                            <div>
                                💒relationship    👶Want
                            </div>
                            <div>
                                🍸Socially        📏5'6
                            </div>
                            <div>
                                📝Roller Derby
                            </div>
                            <div>
                                🚬No              🌿No     
                            </div>
                        </div>
                        <div className="text-card-text">
                        Roller derby enthusiest with a passion for finding passions in things! My dog keeps me safe at night so don’t try anything funny xD
                        Underground shoepop gaze remix events, trash art, vines, and YouTube poop.
                        Let’s make plans right now, fight for your right to party xD
                        </div>
                        <div className="space">
                        </div>
                    </Card.Body>
                </div>
            </Card>
            <Card>
                <Card.Img className="images image-card"  variant="top" src={User.dogInfo.images.img_2} />
            </Card>
            <Card className="q-and-a">
                <Card.Body>
                    <div className="q-and-a-text">
                        <h4>{User.questions.a}</h4>
                        {User.answers.a}
                        <div className="space">
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img className="images image-card"  variant="top" src={User.dogInfo.images.img_1} />
            </Card>
            <Card className="q-and-a">
                <Card.Body>
                    <div className="q-and-a-text">
                        <h4>{User.questions.b}</h4>
                        {User.answers.b}
                        <div className="space">
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img className="images image-card"  variant="top" src={User.dogInfo.images.img_3} />
            </Card>
            <Card className="q-and-a">
                <Card.Body>
                    <div className="q-and-a-text">
                        <h4>{User.questions.c}</h4>
                        {User.answers.c}
                        <div className="space">
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}