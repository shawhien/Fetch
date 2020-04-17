import React from 'react';
import { Route } from 'react-router-dom';

export default function Profile(props) {
    const User = {
        humanInfo: {
            id: 1,
            name: "Maddy",
            image: "http://www.placecage.com/100/100",
            age: 30,
            location: "Portland, OR"
            
        }, 
        dogInfo : {
            name: "Benji",
            images: {
                img_1: "http://placekitten.com/100/100",
                img_2: "http://placekitten.com/100/100",
                img_3: "http://placekitten.com/100/100"
            },
            bread: "Schitzu Mix",
            size: "small"
        }
    }
    return (
        <div>
            <h1>User.humanInfo.name</h1>
        </div>
    )
}