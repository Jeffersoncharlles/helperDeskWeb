import { Switch as Routers } from 'react-router-dom';
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