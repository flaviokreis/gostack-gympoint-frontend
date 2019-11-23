import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/Signin';

import Student from '../pages/Student';
import EditStudent from '../pages/EditStudent';
import PlanList from '../pages/Plan';
import EditPlan from '../pages/EditPlan';
import RegistrationList from '../pages/Registration';
import EditRegistration from '../pages/EditRegistration';
import HelpOrder from '../pages/HelpOrder';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />

            <Route path="/students/edit" component={EditStudent} isPrivate />
            <Route path="/students" component={Student} isPrivate />

            <Route path="/plans/edit" component={EditPlan} isPrivate />
            <Route path="/plans" component={PlanList} isPrivate />

            <Route
                path="/registrations/edit"
                component={EditRegistration}
                isPrivate
            />
            <Route
                path="/registrations"
                component={RegistrationList}
                isPrivate
            />

            <Route path="/help-orders" component={HelpOrder} isPrivate />
        </Switch>
    );
}
