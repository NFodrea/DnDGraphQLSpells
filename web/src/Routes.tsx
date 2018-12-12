import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  LoginView from './modules/user/LoginView';
import  RegisterView  from './modules/user/RegisterView';
import  TestView  from './modules/user/TestView';

export class Routes extends React.PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={LoginView} />
                    <Route path="/register" component={RegisterView} />
                    <Route path="/test" component={TestView} />
                </Switch>
            </BrowserRouter>
        );
    }
}
