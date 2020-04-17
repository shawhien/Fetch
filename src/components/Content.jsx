import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

import Chat from './Chat';
import UserProfile from './UserProfile';
//import UserProfile2 from './UserProfile2';
//import Userprofile3 from './UserProfile3';


const Content = props => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={UserProfile} />
                <Route path="/UserProfile" component={UserProfile} />
                <Route path="/chat" component={Chat} />
                {/* all show pages */}
                <Route path="/1" component={UserProfile} />
                {/* <Route path="/2" component={UserProfile2} />
                <Route path="/3" component={UserProfile3} /> */}
            </Switch>
        </Router>
    )
}

export default Content