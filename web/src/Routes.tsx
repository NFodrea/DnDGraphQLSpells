import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginView from './modules/user/LoginView';
import RegisterView from './modules/user/RegisterView';
import Account from './modules/account/Account';
import Home from './modules/home/Home';
import Header from './shared/Header';

export class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Header />
                    <div>
                        <Switch>
                            <Route path="/login" component={LoginView} />
                            <Route path="/register" component={RegisterView} />
                            <Route path="/account" component={Account} />
                            <Route path="/" component={Home} />
                        </Switch>
                    </div>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}
