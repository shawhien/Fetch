// Packages
import React from 'react';
import { Route } from 'react-router-dom';

import BensonProfile from '../components/BensonProfile';
import UserProfile from '../components/UserProfile';
import ThirdProf from '../components/thirdProf';
import FourthProf from '../components/fourthProf';

export default function Content(props) {
    return (
        <div>
            <Route exact path="/" component={BensonProfile} />
            <Route path="/profile/emmy" component={UserProfile} />
            <Route path="/profile/yappy" component={ThirdProf} />
            <Route path="/profile/emmy/chat" component={ThirdProf} />
            <Route path="/profile/zeek" component={FourthProf} />
        </div>
    )
}