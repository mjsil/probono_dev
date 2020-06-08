import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import NewRule from './pages/NewRule';
import NewProcess from './pages/NewProcess';
import NewProgress from './pages/NewProgress';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/new/rule" component={NewRule} />
            <Route path="/new/process" component={NewProcess} />
            <Route path="/new/progress" component={NewProgress} />
        </Switch>
    );
}
