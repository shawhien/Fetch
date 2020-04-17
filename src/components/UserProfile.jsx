import React from 'react';
import { Route } from 'react-router-dom';
import beachEmmy from '../assets/beachEmmy.png';
import emmyFace from '../assets/emmyFace.png';
import sessyEmmy from '../assets/sessyEmmy.png';
import hardWorkEmmy from '../assets/hardWorkEmmy.png';
import Header from '../assets/header.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTimesCircle } from '@fortawesome/free-solid-svg-icons';


import Card from 'react-bootstrap/Card'
// import { Container, Col, Row } from 'reactstrap';
// import ProfilePic from './ProfilePic';
// // import MatchButton from './MatchButton';
// // import AppHeader from './AppHeader';
import { Container, Col, Row } from 'reactstrap';
// import MatchButton from './MatchButton';
// import AppHeader from './AppHeader';


export default function Profile(props) {
    const User = {
        humanInfo: {
            id: 4,
            name: "Mads",
            image: "../../assets/Mads.png",
            age: 26,
            location: "Seattle, WA"
                
        }, 
        dogInfo: {
            name: "Emmy",
            images: {
                profpic: beachEmmy,
                img_1: emmyFace,
                img_2: sessyEmmy,
                img_3: hardWorkEmmy
            },
            breed: "English Springer Spaniel",
            size: "Medium",
            temperment: "Sweet as can be, but with a little spice!",
            age: "5"
        },
        preferences: {
            ages: "25-35",
            height: "5'9 to 6'4",
            location: '30 miles',
            gender: "Everything"
        },
        questions: {
            a: "Where is your favorite place to walk with your Hooman?",
            b: "What's you most favorite food?",
            c: "When I meet a stranger I..."
        },
        answers: {
            a: "My Hooman and I love exploring the beach!",
            b: "GREENIES",
            c: "I'm a little shy, so I like to hide first and sniff later."
        }
    }
    return (
        <div className="everything">
          <div className="thetitle">
            <p>Fetch</p>
            </div>
            <Card className="profile-card">
                <Card.Img className="images prof-image"  variant="top" src={User.dogInfo.images.profpic} />
                <div>
                    <a href="/chat"><FontAwesomeIcon color="#d6d6d6" size="4x" className="icons" icon={faTimesCircle} /></a>
                    <a href="/chat"><FontAwesomeIcon color="#02D1A3" className="icons" size="4x" icon={faHeart} /></a>
                
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
                                💒Relationship    👶Want someday
                            </div>
                            <div>
                                🍸Socially        📏5'5
                            </div>
                            <div>
                                👨‍💻GA Student Experience
                            </div>
                            <div>
                                🚬No              🌿No     
                            </div>
                        </div>
                        <div className="text-card-text">
                        Funny, sweet, can spark joy in even the grumpiest of furballs.
                        Spends her time making everyone at GA feel safe and happy! Or snuggling with me 🐕‍!
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


