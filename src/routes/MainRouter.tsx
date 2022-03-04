// import { Navigate, Route, } from "react-router-dom"


// interface IRouterWrapper {
//     element: React.ElementType;
//     isPrivate: boolean
// }


// export const RouterWrapper = ({ element: Element, isPrivate, ...rest }: IRouterWrapper) => {

//     const loading = false;
//     const signed = false;

//     //carregando
//     if (loading) {
//         return (
//             <div ></div>
//         )
//     }

//     //nao ta logado e a rota e privada
//     if (!signed && isPrivate) {
//         return <Navigate to="/" />
//     }

//     //ta logado e a rota nao e privada
//     if (signed && !isPrivate) {
//         return <Navigate to="/dashboard" />
//     }

//     return (
//         <Route
//             {...rest}
//             element={<Element />}
//         />
//     )
// }