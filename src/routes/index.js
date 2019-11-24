import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/Signin';

import Student from '../pages/Student';
import CreateStudent from '../pages/Student/create';
import EditStudent from '../pages/Student/edit';

import PlanList from '../pages/Plan';
import CreatePlan from '../pages/Plan/create';
import EditPlan from '../pages/Plan/edit';

import RegistrationList from '../pages/Registration';
import EditRegistration from '../pages/EditRegistration';
import HelpOrder from '../pages/HelpOrder';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />

            <Route
                path="/students/create"
                component={CreateStudent}
                isPrivate
            />
            <Route path="/students/edit" component={EditStudent} isPrivate />
            <Route path="/students" component={Student} isPrivate />

            <Route path="/plans/create" component={CreatePlan} isPrivate />
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
