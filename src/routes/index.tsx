<<<<<<< HEAD
import { BrowserRouter, Switch as Routers, Link, Redirect } from 'react-router-dom';
=======
import { Switch as Routers } from 'react-router-dom';
>>>>>>> b1003ac239345a539454dafabe3c3efad0a4ee04
import { Called } from '../pages/Called';
import { Customers } from '../pages/Customers';
import { Dashboard } from '../pages/Dashboard';
import { Profile } from '../pages/Profile';

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
            <RouterWrapper exact={true} path="/profile" component={Profile} isPrivate />
            <RouterWrapper exact={true} path="/customers" component={Customers} isPrivate />
            <RouterWrapper exact={true} path="/new" component={Called} isPrivate />
            <RouterWrapper exact={true} path="/new/:postId" component={Called} isPrivate />
        </Routers>
    )
}