import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/Signin';

import Student from '../pages/Student';
import EditStudent from '../pages/EditStudent';
import Plan from '../pages/Plan';
import EditPlan from '../pages/EditPlan';
import Registration from '../pages/Registration';
import EditRegistration from '../pages/EditRegistration';
import HelpOrder from '../pages/HelpOrder';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />

            <Route path="/student" component={Student} isPrivate />
            <Route path="/student/edit" component={EditStudent} isPrivate />
            <Route path="/plan" component={Plan} isPrivate />
            <Route path="/plan/edit" component={EditPlan} isPrivate />
            <Route path="/registration" component={Registration} isPrivate />
            <Route
                path="/registration/edit"
                component={EditRegistration}
                isPrivate
            />
            <Route path="/help-order" component={HelpOrder} isPrivate />
        </Switch>
    );
}
