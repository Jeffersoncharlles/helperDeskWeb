import { Redirect, Route, RouteProps } from "react-router-dom"


interface IRouterWrapper {
    component: React.ElementType;
    isPrivate: boolean
}


export const RouterWrapper = ({ component: Component, isPrivate, ...rest }: IRouterWrapper) => {

    const loading = false;
    const signed = false;

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
            render={props => (<Component {...props} />)}

        />
    )
}