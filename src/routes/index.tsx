import { useEffect } from 'react';
import { BrowserRouter, Switch as Routers, Link, Redirect } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';


// import { MainRouter } from './MainRouter';
import { RouterWrapper } from './MyRoute'

export const Routes = () => {


    return (
        <Routers>
            <RouterWrapper exact path="/" component={SignIn} />
            <RouterWrapper exact path="/register" component={SignUp} />
            <RouterWrapper exact={true} path="/dashboard" component={Dashboard} isPrivate />
        </Routers>
    )
}