import { Redirect, Route, RouteProps } from "react-router-dom"
import { useAuth } from "../contexts/auth";


interface IRouterWrapper extends RouteProps {
    // component?: React.ElementType;
    isPrivate?: boolean;

}


export const RouterWrapper: React.FC<IRouterWrapper> = ({ isPrivate, ...rest }) => {
    const { signed, loading } = useAuth();


    //carregando
    if (loading) {
        return (
            <div ></div>
        )
    }

    //nao ta logado e a rota e privada
    if (!signed && isPrivate) {
        return <Redirect to="/" />
    }

    //ta logado e a rota nao e privada
    if (signed && !isPrivate) {
        return <Redirect to="/dashboard" />
    }

    return (
        <Route
            {...rest}
        />
    )
}