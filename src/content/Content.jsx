// Packages
import React from 'react';
import { Route } from 'react-router-dom';

import BensonProfile from '../components/BensonProfile';
import UserProfile from '../components/UserProfile';

export default function Content(props) {
    return (
        <div>
            <Route exact path="/" component={UserProfile} />
            <Route path="/profile" component={BensonProfile} />
        </div>
    )
}