import React from 'react';
import { Route } from 'react-router-dom';
import beachEmmy from '../assets/beachEmmy.png';
import emmyFace from '../assets/emmyFace.png';
import sessyEmmy from '../assets/sessyEmmy.png';
import hardWorkEmmy from '../assets/hardWorkEmmy.png';
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
            temperment: "Sweet as can be!"
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
            <h3>My Profile</h3>
            <div>
                <h1><img className="images" src={User.dogInfo.images.profpic}></img></h1>
                <h3>Doggo: {User.dogInfo.name}</h3>
                <p>Breed: {User.dogInfo.breed}</p>
                <p>Temperment: {User.dogInfo.temperment}</p>
                <p>Size: {User.dogInfo.size}</p>
            </div>
            <div>
                <h3>Hooman: {User.humanInfo.name}</h3>
                <p>{User.humanInfo.age}</p>
                <p>{User.humanInfo.location}</p>
            </div>
            <div>
                <h4>{User.questions.a}</h4>
                {User.answers.a}
                <h1><img className="images" src={User.dogInfo.images.img_2}></img></h1>
                <h4>{User.questions.b}</h4>
                {User.answers.b}
                <h1><img className="images" src={User.dogInfo.images.img_1}></img></h1>
                <h4>{User.questions.c}</h4>
                {User.answers.c}
                <h1><img className="images" src={User.dogInfo.images.img_3}></img></h1>
            </div>
            <div>
                <h4>Search Preferences</h4>
                <p>Age Range: {User.preferences.ages}</p>
                <p>Height Range: {User.preferences.height}</p>
                <p>Location Range: {User.preferences.location}</p>
                <p>Gender(s): {User.preferences.gender}</p>
            </div>
        </div>
    )
}



