import React from 'react';
import { Route } from 'react-router-dom';
import Benson1 from '../assets/Benson1.jpg';
import Benson2 from '../assets/Benson2.jpg';
import Benson3 from '../assets/Benson3.jpg';
import Benson4 from '../assets/Benson4.jpg';
import Card from 'react-bootstrap/Card'

import Header from '../assets/header.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default function BensonProfile(props) {
    const User = {
        humanInfo: {
            id: 3,
            name: "Jenn",
            image: "",
            age: 27,
            location: "Seattle, WA"
                
        }, 
        dogInfo: {
            name: "Benson",
            images: {
                profpic: Benson1,
                img_1: Benson2,
                img_2: Benson3,
                img_3: Benson4
            },
            breed: "English Springer Spaniel",
            size: "Medium",
            temperment: "Sweet as can be!",
            age: "5"
        },
        preferences: {
            ages: "25-35",
            height: "5'9 to 6'4",
            location: '30 miles',
            gender: "Everything"
        },
        questions: {
            a: "My ideal first doggie date:",
            b: "My hooman's favorite treat:",
            c: "Ideal Sunday = snuggling hooman and:"
        },
        answers: {
            a: "Hit up a dog friendly winery!!",
            b: "Yellow cake with chocolate frosting and custard filling 😊",
            c: "Brunchin with Beson every sunday once this quarentine is over!"
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
                    <a href="/profile/yappy"><FontAwesomeIcon color="#d6d6d6" size="4x" className="icons" icon={faTimesCircle} /></a>
                    <a href="/profile/yappy"><FontAwesomeIcon color="#02D1A3" className="icons" size="4x" icon={faHeart} /></a>
                
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
                                📝UX Designer
                            </div>
                            <div>
                                🚬No              🌿No     
                            </div>
                        </div>
                        <div className="text-card-text">
                        Behavior therapist turned UX Designer.

                        Wine tasting, Netflix, dancing, lifting, piano, doggo and nephew snuggles.

                        Let's make a plan for a post-quarentine doggie date!
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