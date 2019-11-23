import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

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

            <Route path="/students/edit" component={EditStudent} isPrivate />
            <Route path="/students" component={Student} isPrivate />

            <Route path="/plans/edit" component={EditPlan} isPrivate />
            <Route path="/plans" component={Plan} isPrivate />

            <Route path="/registrations" component={Registration} isPrivate />
            <Route
                path="/registrations/edit"
                component={EditRegistration}
                isPrivate
            />
            <Route path="/help-order" component={HelpOrder} isPrivate />
        </Switch>
    );
}
