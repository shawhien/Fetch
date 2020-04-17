import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

import Chat from './Chat';
import BensonProfile from './BensonProfile';
import UserProfile from './UserProfile';
import ThirdProf from './thirdProf';
import FourthProf from './fourthProf';



const Content = props => {
    return (
        <Router>
            <Switch>
                <Route path="/UserProfile" component={UserProfile} />
                <Route path="/chat" component={Chat} />
                {/* all show pages */}
                <Route path="/1" component={UserProfile} />
                {/* <Route path="/2" component={UserProfile2} />
                <Route path="/3" component={UserProfile3} /> */}
            <Route exact path="/" component={BensonProfile} />
            <Route path="/profile/emmy" component={UserProfile} />
            <Route path="/profile/yappy" component={ThirdProf} />
            <Route path="/chat" component={ThirdProf} />
            <Route path="/profile/zeek" component={FourthProf} />
            </Switch>
        </Router>
    )
}

export default Content