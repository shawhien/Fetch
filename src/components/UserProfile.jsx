import React from 'react';
import { Route } from 'react-router-dom';
import beachEmmy from '../assets/beachEmmy.png';
import emmyFace from '../assets/emmyFace.png';
import sessyEmmy from '../assets/sessyEmmy.png';
import hardWorkEmmy from '../assets/hardWorkEmmy.png';
import Card from 'react-bootstrap/Card'

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
        <div>
            <div calss="title"><h3>Fetch</h3></div>
            <Card className="profile-card">
                <Card.Img className="images prof-image"  variant="top" src={User.dogInfo.images.profpic} />
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
                                👨‍💻GA Student Wellness Rep
                            </div>
                            <div>
                                🚬No              🌿No     
                            </div>
                        </div>
                        <div className="text-card-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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